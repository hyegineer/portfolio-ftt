import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '~@/store';
import index from '~@/views';
import isEmpty from 'lodash/isEmpty';
// import CustomerMain from '~@/views/customer/CustomerMain'

const _ = {
    isEmpty,
};

Vue.use(VueRouter);

const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => {
        if (error.name === 'NavigationDuplicated') {
            return {
                event: 'NavigationDuplicated',
            };
        }
    });
};

const routerReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
    return routerReplace.call(this, location).catch(error => {
        if (error.name === 'NavigationDuplicated') {
            return {
                event: 'NavigationDuplicated',
            };
        }
    });
};

const routes = [
    // 메인(광고주) - 광고주가 기본임
    {
        path: '/',
        name: 'Index',
        component: index,
        meta: { requiresResetScrollHeight: true },
        beforeEnter: (to, from, next) => {
            if (store.getters.isUser && store.getters.user.user_type.startsWith('host')) {
                return next({
                    replace: true,
                    name: 'SellersMain',
                });
            }
            next();
        },
    },
    // 검색결과
    {
        path: '/search-index',
        name: 'SearchIndex',
        component: () => import('~@/views/SearchIndex'),
        meta: { requiresResetScrollHeight: true },
    },
    {
        path: '/util-postcode', // 우편번호 찾기
        name: 'UtilPostcode',
        component: () => import('~@/views/util/Postcode'),
    },
    {
        path: '/purchase-redirect', // 결제 후 처리
        name: 'PurchaseRedirect',
        component: () => import('~@/views/util/PurchaseRedirect'),
    },
    /* ====================== auth ====================== */
    // 로그인
    {
        path: '/login',
        name: 'Login',
        component: () => import('~@/views/auth/Login'),
        meta: { requiresResetScrollHeight: true },
        beforeEnter: (to, from, next) => {
            if (store.getters.isUser) {
                return next({
                    replace: true,
                    name: 'Index',
                });
            }
            next();
        },
    },
    // 회원가입 인트로
    {
        path: '/register-intro',
        name: 'RegisterIntro',
        component: () => import('~@/views/auth/RegisterIntro'),
        beforeEnter: (to, from, next) => {
            if (store.getters.isUser && store.getters.isUserVerified) {
                return next({
                    replace: true,
                    name: 'Index',
                });
            }
            next();
        },
    },
    // 회원가입-광고주
    {
        path: '/register',
        name: 'Register',
        component: () => import('~@/views/auth/Register'),
        meta: { requiresResetScrollHeight: true },
        beforeEnter: (to, from, next) => {
            if (store.getters.isUser && store.getters.isUserVerified) {
                return next({
                    replace: true,
                    name: 'Index',
                });
            }
            next();
        },
    },
    // 회원가입-쇼호스트
    {
        path: '/register-seller01',
        name: 'RegisterSeller01',
        component: () => import('~@/views/auth/RegisterSeller01'),
        meta: { requiresResetScrollHeight: true },
        beforeEnter: (to, from, next) => {
            if (store.getters.isUser && store.getters.isUserVerified) {
                return next({
                    replace: true,
                    name: 'Index',
                });
            }
            next();
        },
    },
    // 회원가입-커머스대행사
    {
        path: '/register-seller02',
        name: 'RegisterSeller02',
        component: () => import('~@/views/auth/RegisterSeller02'),
        meta: { requiresResetScrollHeight: true },
        beforeEnter: (to, from, next) => {
            if (store.getters.isUser && store.getters.isUserVerified) {
                return next({
                    replace: true,
                    name: 'Index',
                });
            }
            next();
        },
    },
    // 아이디찾기
    {
        path: '/find-id',
        name: 'FindId',
        component: () => import('~@/views/auth/FindId'),
        meta: { requiresResetScrollHeight: true },
    },
    // 비밀번호찾기
    {
        path: '/find-pw',
        name: 'FindPw',
        component: () => import('~@/views/auth/FindPw'),
        meta: { requiresResetScrollHeight: true },
    },
    // 비밀번호재설정
    {
        path: '/reset-pw',
        name: 'ResetPw',
        component: () => import('~@/views/auth/ResetPw'),
        meta: { requiresResetScrollHeight: true },
    },
    // 소셜로그인
    {
        path: '/social-redirect/:provider',
        name: 'SocialRedirect',
        component: () => import('~@/views/auth/SocialRedirect'),
    },
    /* ====================== company ====================== */
    // 공지사항
    {
        path: '/notice',
        name: 'Notice',
        component: () => import('~@/views/company/Notice'),
        meta: { requiresResetScrollHeight: true },
    },
    // 1:1문의하기
    // 로그인 후 이용가능
    {
        path: '/inquiry',
        name: 'Inquiry',
        component: () => import('~@/views/company/Inquiry'),
        meta: { requiresResetScrollHeight: true },
    },
    // 자주묻는질문
    {
        path: '/faq',
        name: 'Faq',
        component: () => import('~@/views/company/Faq'),
        meta: { requiresResetScrollHeight: true },
    },
    // 이벤트
    {
        path: '/event',
        name: 'Event',
        component: () => import('~@/views/company/Event'),
        meta: { requiresResetScrollHeight: true },
    },
    /* ====================== 광고주와 쇼호스트 공통화면  ====================== */
    // 쇼호스트&대행사 상세
    {
        path: '/sellers-detail/:id',
        name: 'SellersDetail',
        component: () => import('~@/views/common/SellersDetail'),
        meta: { requiresAuth: true, requiresResetScrollHeight: true },
    },
    // 메세지
    {
        path: '/message',
        name: 'Message',
        component: () => import('~@/views/common/Message'),
        meta: { requiresAuth: true, requiresResetScrollHeight: true },
    },
    /* ====================== users (광고주) ====================== */
    // 아래 페이지들은 모두 로그인 후 이용가능
    {
        path: '/users',
        name: 'UsersIndex',
        component: () => import('~@/views/users/Index'),
        meta: { requiresAuth: true, requiresResetScrollHeight: true },
        children: [
            // 마이페이지
            {
                path: 'mypage-main',
                name: 'UsersMypageMain',
                component: () => import('~@/views/users/MypageMain'),
            },
            // 마이페이지-내정보수정
            {
                path: 'mypage-edit',
                name: 'UsersMypageEdit',
                component: () => import('~@/views/users/MypageEdit'),
            },
            // 마이페이지-찜목록
            {
                path: 'mypage-fav-list',
                name: 'MypageFavList',
                component: () => import('~@/views/users/MypageFavList'),
            },
            // 마이페이지-예약내역
            {
                path: 'mypage-rsv-list',
                name: 'UsersMypageRsvList',
                component: () => import('~@/views/users/MypageRsvList'),
            },
            // 마이페이지-리뷰관리
            {
                path: 'mypage-review-list',
                name: 'MypageReviewList',
                component: () => import('~@/views/users/MypageReviewList'),
            },
            // 마이페이지-리뷰 전체보기
            {
                path: 'mypage-total-review/:id',
                name: 'MypageTotalReview',
                component: () => import('~@/views/users/MypageTotalReview'),
            },
            // 결제하기
            {
                path: 'payment',
                name: 'UsersPayment',
                component: () => import('~@/views/users/Payment'),
            },
            // 결제하기-결제완료/결제실패
            {
                path: 'payment-complete',
                name: 'UsersPaymentComplete',
                component: () => import('~@/views/users/PaymentComplete'),
            },
            // 결제하기-결제내역
            {
                path: 'payment-history',
                name: 'PaymentHistory',
                component: () => import('~@/views/users/PaymentHistory'),
            },
            // 모바일용 검색옵션
            {
                path: 'mobile-search-option',
                name: 'MobileSearchOption',
                component: () => import('~@/views/users/MobileSearchOption'),
            },
            // best 쇼호스트 & 대행사
            {
                path: 'show-hosts',
                name: 'ShowHosts',
                component: () => import('~@/views/users/ShowHosts'),
            },
        ],
    },
    /* ====================== seller (쇼호스트/대행사) ====================== */
    // 아래 페이지들은 모두 로그인 후 이용가능
    {
        path: '/sellers',
        name: 'SellersIndex',
        component: () => import('~@/views/sellers/Index'),
        // meta: { requiresAuth: true },
        children: [
            // 메인(쇼호스트/대행사)
            {
                path: 'main',
                name: 'SellersMain',
                component: () => import('~@/views/sellers/SellersMain'),
                meta: { requiresAuth: true, requiresResetScrollHeight: true },
            },
            // 마이페이지
            {
                path: 'mypage-main',
                name: 'SellersMypageMain',
                component: () => import('~@/views/sellers/MypageMain'),
                meta: { requiresAuth: true, requiresResetScrollHeight: true },
            },
            // 모바일용 마이페이지-내 정보
            {
                path: 'mobile-mypage-info-main',
                name: 'MobileMypageInfoMain',
                component: () => import('~@/views/sellers/MobileMypageInfoMain'),
                meta: { requiresAuth: true, requiresResetScrollHeight: true },
            },
            // 마이페이지-내정보수정
            {
                path: 'mypage-edit',
                name: 'MypageEdit',
                component: () => import('~@/views/sellers/MypageEdit'),
                meta: { requiresAuth: true },
            },
            // 마이페이지-프로필설정
            {
                path: 'mypage-profile-main',
                name: 'MypageProfileMain',
                component: () => import('~@/views/sellers/MypageProfileMain'),
                meta: { requiresAuth: true },
            },
            // 마이페이지-프로필설정-프로필수정
            {
                path: 'mypage-profile-edit',
                name: 'MypageProfileEdit',
                component: () => import('~@/views/sellers/MypageProfileEdit'),
                meta: { requiresAuth: true },
            },
            // 마이페이지-리뷰전체보기
            {
                path: 'mypage-review-list',
                name: 'UsersMypageReviewList',
                component: () => import('~@/views/sellers/MypageReviewList'),
                meta: { requiresAuth: true, requiresResetScrollHeight: true },
            },
            // 마이페이지-친구초대
            {
                path: 'mypage-friend-main',
                name: 'MypageFriendMain',
                component: () => import('~@/views/sellers/MypageFriendMain'),
                meta: { requiresAuth: true, requiresResetScrollHeight: true },
            },
            // 마이페이지-구독모델
            {
                path: 'mypage-subs-main',
                name: 'MypageSubsMain',
                component: () => import('~@/views/sellers/MypageSubsMain'),
                meta: { requiresAuth: true, requiresResetScrollHeight: true },
            },
            // 마이페이지-구독모델-결제내역
            {
                path: 'mypage-subs-history',
                name: 'MypageSubsHistory',
                component: () => import('~@/views/sellers/MypageSubsHistory'),
                meta: { requiresAuth: true, requiresResetScrollHeight: true },
            },
            // 마이페이지-구독모델-결제하기
            {
                path: 'payment',
                name: 'Payment',
                component: () => import('~@/views/sellers/Payment'),
                meta: { requiresAuth: true, requiresResetScrollHeight: true },
            },
            // 결제하기-결제완료/결제실패
            {
                path: 'payment-complete',
                name: 'SellersPaymentComplete',
                component: () => import('~@/views/sellers/PaymentComplete'),
                meta: { requiresAuth: true, requiresResetScrollHeight: true },
            },
            // 마이페이지-정산관리
            {
                path: 'mypage-calc-main',
                name: 'MypageCalcMain',
                component: () => import('~@/views/sellers/MypageCalcMain'),
                meta: { requiresAuth: true, requiresResetScrollHeight: true },
            },
            // 마이페이지-예약내역
            {
                path: 'mypage-rsv-list',
                name: 'MypageRsvList',
                component: () => import('~@/views/sellers/MypageRsvList'),
                meta: { requiresAuth: true, requiresResetScrollHeight: true },
            },
            // 모바일용 현황관리
            {
                path: 'mobile-sellers-main',
                name: 'MobileSellersMain',
                component: () => import('~@/views/sellers/MobileSellersMain'),
                meta: { requiresAuth: true, requiresResetScrollHeight: true },
            },
        ],
    },
    /* ====================== etc ====================== */
    // 이용약관
    {
        path: '/policy-guide',
        name: 'PolicyGuide',
        component: () => import('~@/views/company/PolicyGuide.vue'),
        meta: { requiresResetScrollHeight: true },
    },
    // 개인정보처리방침
    {
        path: '/policy-privacy',
        name: 'PolicyPrivacy',
        component: () => import('~@/views/company/PolicyPrivacy.vue'),
        meta: { requiresResetScrollHeight: true },
    },
    // 고객지원
    {
        path: '/developer-info',
        name: 'DeveloperInfo',
        component: () => import('~@/components/DeveloperInfo.vue'),
        meta: { requiresResetScrollHeight: true },
    },
    {
        path: '*',
        name: 'Page404',
        component: () => import('~@/views/Page404.vue'),
    },
    {
        path: '/components',
        name: 'Components',
        component: () => import('~@/views/util/Components.vue'),
    },
];

const router = new VueRouter({
    mode: 'hash', // history, hash
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            // 페이지 히스토리에 이전 페이지의 스크롤 위치가 저장되어 있으면
            return new Promise((resolve /* reject */) => {
                setTimeout(() => {
                    resolve(savedPosition);
                }, 0);
            });
        }
    },
});

router.beforeEach(async (to, from, next) => {
    // 회원가입에 필요한 정보가 미입력된 유저는 회원가입 화면으로 이동
    if (
        store.getters.isUser &&
    !store.getters.isUserVerified
    ) {
        if (!['RegisterIntro', 'Register', 'RegisterSeller01', 'RegisterSeller02'].includes(to.name)) {
            if (router?.app?.alert) {
                router.app.alert('정보입력 후 이용가능합니다.');
            }
            return next({
                replace: true,
                name: 'RegisterIntro',
            });
        }
        next();
    }

    if (to.matched.some(record => record.meta.requiresAuth)) {
    // 로그인된 유저가 아니면 로그인 화면으로 이동
        if (!store.getters.isUser) {
            // 로그인 전
            return next({
                replace: true,
                name: 'Login',
                // query: { redirect: to.fullPath } // 로그인 후 원래 가려던 페이지로 이동
            });
        } else {
            // 페이지 이동 시 정보 갱신
            if (from.name && from.name !== to.name) {
                try {
                    await store.dispatch('userDetail');
                } finally {
                    //
                }
            }
        }
    }

    // requiresRefreshQuerystring 값이 있으면 해당 화면 새로고침 시 해당화면에 지정되어 있던 쿼리스트링 초기화
    if (to.matched.some(record => record.meta.requiresRefreshQuerystring)) {
        if (!from.name && !_.isEmpty(to.query)) {
            return next({
                name: to.name,
                params: to.params,
            });
        }
    }

    // requiresResetScrollHeight 값이 있으면 해당 화면 이동 시 스크롤 맨 위로 이동
    if (to.matched.some(record => record.meta.requiresResetScrollHeight)) {
        setTimeout(() => {
            document.querySelectorAll('html, .page, .l-center').forEach(x => {
                if (x.scrollTop !== 0) {
                    x.scroll({
                        top: 0,
                    });
                }
            });
        }, 0);
    }

    return next();
});

export default router;
