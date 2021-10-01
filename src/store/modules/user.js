/* eslint-disable no-unused-vars */
import Vue from 'vue';
import formDatas from '~@/lib/formDatas';

const tokenName = process.env.VUE_APP_TOKEN_NAME;

export default {
    state: {
        user: {},
    },
    getters: {
        isUser: (state) => Boolean(state.user.user_no),
        isUserVerified: (state, getters) => {
            return getters.isUser && // 로그인되어 있는지
            Boolean(state.user.user_contact_verified) && // 휴대폰 번호 인증이 되었는지
             (!(!state.user.hs_no && getters.isHostOrg)); // 대행사일 경우 구독을 해야 사용가능
        },
        isUserSocial: (state, getters) => getters.isUser && Boolean(state.user.user_social_provider !== 'local'),
        isDef: (state, getters) => getters.isUser && Boolean(state.user.user_type === 'def'),
        isHost: (state, getters) => getters.isUser && Boolean(state.user.user_type === 'host'),
        isHostOrg: (state, getters) => getters.isUser && Boolean(state.user.user_type === 'host-org'),
        user: (state) => state.user,
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        },
    },
    actions: {
        async userLogin({ state, commit, dispatch }, payload) {
            try {
                const { data: { token } } = await Vue.axios
                    .post('/v1/user/auth/login', payload);
                // 해당 부분에 catch 처리로 error 핸들링 금지

                if (token) {
                    sessionStorage.setItem(tokenName, token);

                    await dispatch('userDetail');

                    const params = { token };

                    /*
          const mainPage = { cstm: '/#/customer/main', stl: '/#/designer/main' }[state.user?.user_type] || null
          if (mainPage) {
            params.mainPage = mainPage
          }
          */

                    if (sessionStorage.remember) {
                        localStorage.setItem(tokenName, token);

                        window.ReactNativeWebView.postMessage(
                            JSON.stringify({
                                name: 'request-webview-app-login',
                                params,
                            }),
                        );
                    }

                    window.ReactNativeWebView.postMessage(
                        JSON.stringify({
                            name: 'request-fcm-token',
                            params: {},
                        }),
                    );
                }
            } catch (e) {
                sessionStorage.removeItem(tokenName);
                localStorage.removeItem(tokenName);

                throw e;
            }
        },
        async userDetail({ state, commit, dispatch }) {
            const data = await Vue.axios
                .get('/v1/user/auth/profile')
                .then((response) => response.data.query);

            commit('setUser', data);
        },
        async userDetailUpdate({ state, commit, dispatch }, payload) {
            const { formData, headers } = formDatas(payload);

            await Vue.axios
                .post('/v1/user/auth/profile', formData, { headers })
                .then((response) => response.data.query);

            const { data: { token } } = await Vue.axios
                .get('/v1/user/auth/refresh');

            if (token) {
                if (localStorage.getItem(tokenName)) {
                    window.ReactNativeWebView.postMessage(
                        JSON.stringify({
                            name: 'request-webview-app-login',
                            params: { token },
                        }),
                    );
                    localStorage.setItem(tokenName, token);
                }

                sessionStorage.setItem(tokenName, token);
            }

            await dispatch('userDetail');
        },
        async userLogout({ state, commit, dispatch }) {
            if (!window.ReactNativeWebView.empty) {
                // 앱에 저장된 로그인 정보 삭제
                window.ReactNativeWebView.postMessage(
                    JSON.stringify({ name: 'request-webview-app-logout' }),
                );
            
                try {
                    const { formData, headers } = formDatas({
                        user_token: '', // 값이 '' 일 때 모든 저장된 토큰 제거
                    });

                    // FCM 토큰 제거
                    await Vue.axios
                        .post('/v1/user/auth/profile', formData, { headers })
                        .then((response) => response.data.query);
                } catch (e) {
                    // 회원 탈퇴 후 해당 API 호출 시 예외처리
                    console.error(e);
                }
            }

            const provider = state.user.user_social_provider;

            // 카카오 로그아웃
            if (provider === 'kakao') {
                const data = await Vue.axios
                    .get('/v1/user/auth/logout/kakao')
                    .then((response) => response.data);

                // 웹뷰가 아니면 로그아웃 페이지로 이동
                if (window.ReactNativeWebView.empty) {
                    setTimeout(() => { window.location.href = data.redirect; });
                }
            }
                
            // 앱 로그인 정보 삭제
            sessionStorage.clear();
            localStorage.clear();
                    
            // 앱 로그아웃
            dispatch('clearKeep');
            commit('setUser', {});
        },
    },
};
