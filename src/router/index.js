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
  // 메인
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
  {
    path: '/util-postcode', // 우편번호 찾기
    name: 'UtilPostcode',
    component: () => import('~@/views/util/Postcode'),
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
    meta: { requiresResetScrollHeight: true }, // 최상단 가게
    // meta: { requiresAuth: true }, // 로그인안할 때 팅기게
  },
  // 회원가입 중 기업선택
  {
    path: '/register-search-company',
    name: 'RegisterSearchCompany',
    component: () => import('~@/views/auth/RegisterSearchCompany'),
    meta: { requiresResetScrollHeight: true }, // 최상단 가게
    // meta: { requiresAuth: true }, // 로그인안할 때 팅기게
  },
  // 스타트업 회원가입 인트로
  {
    path: '/register-intro-startup',
    name: 'RegisterIntroStartup',
    component: () => import('~@/views/auth/RegisterIntroStartup'),
    meta: { requiresResetScrollHeight: true }, // 최상단 가게
    // meta: { requiresAuth: true }, // 로그인안할 때 팅기게
  },
  // 스타트업 회원가입
  {
    path: '/register-startup',
    name: 'RegisterStartup',
    component: () => import('~@/views/auth/RegisterStartup'),
    meta: { requiresResetScrollHeight: true }, // 최상단 가게
    // meta: { requiresAuth: true }, // 로그인안할 때 팅기게
  },
  // 투자자 회원가입 인트로
  {
    path: '/register-intro-investor',
    name: 'RegisterIntroInvestor',
    component: () => import('~@/views/auth/RegisterIntroInvestor'),
    meta: { requiresResetScrollHeight: true }, // 최상단 가게
    // meta: { requiresAuth: true }, // 로그인안할 때 팅기게
  },
  // 투자자 회원가입
  {
    path: '/register-investor',
    name: 'RegisterInvestor',
    component: () => import('~@/views/auth/RegisterInvestor'),
    meta: { requiresResetScrollHeight: true }, // 최상단 가게
    // meta: { requiresAuth: true }, // 로그인안할 때 팅기게
  },
  // 팩트체커 회원가입
  {
    path: '/register-fact-checker',
    name: 'RegisterFactChecker',
    component: () => import('~@/views/auth/RegisterFactChecker'),
    meta: { requiresResetScrollHeight: true }, // 최상단 가게
    // meta: { requiresAuth: true }, // 로그인안할 때 팅기게
  },
  // 아이디찾기
  {
    path: '/find-id',
    name: 'FindId',
    component: () => import('~@/views/auth/FindId'),
    meta: { requiresResetScrollHeight: true }, // 최상단 가게
    // meta: { requiresAuth: true }, // 로그인안할 때 팅기게
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
  /* ====================== 회원형태 1 ====================== */
  // 아래 페이지들은 모두 로그인 후 이용가능
  // {
  //     path: '/users',
  //     name: 'UsersIndex',
  //     component: () => import('~@/views/users/Index'),
  //     meta: { requiresAuth: true, requiresResetScrollHeight: true },
  //     children: [
  //         // 마이페이지
  //         {
  //             path: 'mypage-main',
  //             name: 'UsersMypageMain',
  //             component: () => import('~@/views/users/MypageMain'),
  //         },
  //         // 마이페이지-내정보수정
  //         {
  //             path: 'mypage-edit',
  //             name: 'UsersMypageEdit',
  //             component: () => import('~@/views/users/MypageEdit'),
  //         },
  //         // 마이페이지-찜목록
  //         {
  //             path: 'mypage-fav-list',
  //             name: 'MypageFavList',
  //             component: () => import('~@/views/users/MypageFavList'),
  //         },
  //         // 마이페이지-예약내역
  //         {
  //             path: 'mypage-rsv-list',
  //             name: 'UsersMypageRsvList',
  //             component: () => import('~@/views/users/MypageRsvList'),
  //         },
  //         // 마이페이지-리뷰관리
  //         {
  //             path: 'mypage-review-list',
  //             name: 'MypageReviewList',
  //             component: () => import('~@/views/users/MypageReviewList'),
  //         },
  //         // 마이페이지-리뷰 전체보기
  //         {
  //             path: 'mypage-total-review/:id',
  //             name: 'MypageTotalReview',
  //             component: () => import('~@/views/users/MypageTotalReview'),
  //         },
  //         // 결제하기
  //         {
  //             path: 'payment',
  //             name: 'UsersPayment',
  //             component: () => import('~@/views/users/Payment'),
  //         },
  //         // 결제하기-결제완료/결제실패
  //         {
  //             path: 'payment-complete',
  //             name: 'UsersPaymentComplete',
  //             component: () => import('~@/views/users/PaymentComplete'),
  //         },
  //         // 결제하기-결제내역
  //         {
  //             path: 'payment-history',
  //             name: 'PaymentHistory',
  //             component: () => import('~@/views/users/PaymentHistory'),
  //         },
  //         // 모바일용 검색옵션
  //         {
  //             path: 'mobile-search-option',
  //             name: 'MobileSearchOption',
  //             component: () => import('~@/views/users/MobileSearchOption'),
  //         },
  //         // best 쇼호스트 & 대행사
  //         {
  //             path: 'show-hosts',
  //             name: 'ShowHosts',
  //             component: () => import('~@/views/users/ShowHosts'),
  //         },
  //     ],
  // },
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
    component: () => import('~@/views/company/DeveloperInfo.vue'),
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
