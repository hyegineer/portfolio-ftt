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
  // 스타트업 찾기
  {
    path: '/search-startup',
    name: 'SearchStartup',
    component: () => import('~@/views/SearchStartup'),
  },
  // 검색 결과
  {
    path: '/search-result/:id',
    name: 'SearchResult',
    component: () => import('~@/views/SearchResult'),
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
  // 회원가입 완료
  {
    path: '/register-complete',
    name: 'RegisterComplete',
    component: () => import('~@/views/auth/RegisterComplete'),
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
  // 아이디찾기완료
  {
    path: '/find-id-complete',
    name: 'FindIdComplete',
    component: () => import('~@/views/auth/FindIdComplete'),
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
  // 비밀번호찾기-이메일전송
  {
    path: '/find-pw-send',
    name: 'FindPwSend',
    component: () => import('~@/views/auth/FindPwSend'),
    meta: { requiresResetScrollHeight: true },
  },
  // 비밀번호찾기-비밀번호변경
  {
    path: '/find-pw-reset',
    name: 'FindPwReset',
    component: () => import('~@/views/auth/FindPwReset'),
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
  {
    path: '/inquiry',
    name: 'Inquiry',
    component: () => import('~@/views/company/Inquiry'),
    meta: { requiresResetScrollHeight: true },
  },
  // 1:1문의하기 내역
  {
    path: '/inquiry-history',
    name: 'InquiryHistory',
    component: () => import('~@/views/company/InquiryHistory'),
    meta: { requiresResetScrollHeight: true },
  }, 
  // 1:1문의하기 내역 상세
  {
    path: '/inquiry-history-detail',
    name: 'InquiryHistoryDetail',
    component: () => import('~@/views/company/InquiryHistoryDetail'),
    meta: { requiresResetScrollHeight: true },
  },
  // 자주묻는질문
  {
    path: '/faq',
    name: 'Faq',
    component: () => import('~@/views/company/Faq'),
    meta: { requiresResetScrollHeight: true },
  },
  /* ====================== 스타트업 & 투자자 & 팩트체커 기업프로필 ====================== */
  // 기업정보
  {
    path: '/etpr-profile-info',
    name: 'EtprProfileInfo',
    component: () => import('~@/views/user-common/EtprProfileInfo'),
    meta: { requiresResetScrollHeight: true },
  },
  // 팩트체크(보고서)
  {
    path: '/etpr-profile-report',
    name: 'EtprProfileReport',
    component: () => import('~@/views/user-common/EtprProfileReport'),
    meta: { requiresResetScrollHeight: true },
  },
  // 팩트체크 상세(보고서 상세)
  {
    path: '/etpr-profile-report-detail',
    name: 'EtprProfileReportDetail',
    component: () => import('~@/views/user-common/EtprProfileReportDetail'),
    meta: { requiresResetScrollHeight: true },
  },
  // 게시판
  {
    path: '/etpr-profile-board',
    name: 'EtprProfileBoard',
    component: () => import('~@/views/user-common/EtprProfileBoard'),
    meta: { requiresResetScrollHeight: true },
  },
  // 게시판 상세
  {
    path: '/etpr-profile-board-detail',
    name: 'EtprProfileBoardDetail',
    component: () => import('~@/views/user-common/EtprProfileBoardDetail'),
    meta: { requiresResetScrollHeight: true },
  },
  // 게시판 작성
  {
    path: '/etpr-profile-board-create',
    name: 'EtprProfileBoardCreate',
    component: () => import('~@/views/user-common/EtprProfileBoardCreate'),
    meta: { requiresResetScrollHeight: true },
  },
  // 팩트체크 요청
  {
    path: '/etpr-profile-request-ftck',
    name: 'EtprProfileRequestFtck',
    component: () => import('~@/views/user-common/EtprProfileRequestFtck'),
    meta: { requiresResetScrollHeight: true },
  },
  /* ====================== 회원형태 - 스타트업 ====================== */
  // 아래 페이지들은 모두 로그인 후 이용가능// 
  {
    path: '/startup',
    name: 'StartupIndex',
    component: () => import('~@/views/user-startup/Index'),
    // meta: { requiresAuth: true, requiresResetScrollHeight: true },
    children: [
      // 스타트업 마이페이지
      {
        path: 'mypage',
        name: 'SMypage',
        component: () => import('~@/views/user-startup/SMypage'),
        children: [
          // ===================== 기업정보 미확정 =====================
          // 신청대기중, 마이페이지 - 신청거절/그룹강퇴
          {
            path: 'wating-main',
            name: 'SWatingMain',
            component: () => import('~@/views/user-startup/wating/SWatingMain'),
            // meta: { requiresAuth: true },
          },
          // 신규업체등록
          {
            path: 'wating-create',
            name: 'SWatingCreate',
            component: () => import('~@/views/user-startup/wating/SWatingCreate'),
            // meta: { requiresAuth: true },
          },
          // 기존업체등록
          {
            path: 'wating-search-company',
            name: 'SWatingSearchCompany',
            component: () => import('~@/views/user-startup/wating/SWatingSearchCompany'),
            // meta: { requiresAuth: true },
          },
          // 신규/기존업체 등록완료
          {
            path: 'wating-complete',
            name: 'SWatingComplete',
            component: () => import('~@/views/user-startup/wating/SWatingComplete'),
            // meta: { requiresAuth: true },
          },
          // ===================== 대시보드 =====================
          // 대시보드
          {
            path: 'dashboard-main',
            name: 'SDashboardMain',
            component: () => import('~@/views/user-startup/dashboard/SDashboardMain'),
            // meta: { requiresAuth: true },
          },
          // ===================== 내 정보 =====================
          // 내정보
          {
            path: 'myinfo-main',
            name: 'SMyinfoMain',
            component: () => import('~@/views/user-startup/my-info/SMyinfoMain'),
            // meta: { requiresAuth: true },
          },
          // 내정보-내정보수정
          {
            path: 'myinfo-edit',
            name: 'SMyinfoEdit',
            component: () => import('~@/views/user-startup/my-info/SMyinfoEdit'),
            // meta: { requiresAuth: true },
          },
          // 내정보-회원탈퇴
          {
            path: 'myinfo-leave',
            name: 'SMyinfoLeave',
            component: () => import('~@/views/user-startup/my-info/SMyinfoLeave'),
            // meta: { requiresAuth: true },
          },
          // ===================== 기업정보 =====================
          // 기업정보-기본정보
          {
            path: 'etpr-default-info',
            name: 'SEtprDefaultInfo',
            component: () => import('~@/views/user-startup/enterprise-info/SEtprDefaultInfo'),
            // meta: { requiresAuth: true },
          },
          // 기업정보-기본정보 수정
          {
            path: 'etpr-default-info-edit',
            name: 'SEtprDefaultInfoEdit',
            component: () => import('~@/views/user-startup/enterprise-info/SEtprDefaultInfoEdit'),
            // meta: { requiresAuth: true },
          },
          // 기업정보-상세정보
          {
            path: 'etpr-detail-info',
            name: 'SEtprDetailInfo',
            component: () => import('~@/views/user-startup/enterprise-info/SEtprDetailInfo'),
            // meta: { requiresAuth: true },
          },
          // 기업정보-상세정보 수정
          {
            path: 'etpr-detail-info-edit',
            name: 'SEtprDetailInfoEdit',
            component: () => import('~@/views/user-startup/enterprise-info/SEtprDetailInfoEdit'),
            // meta: { requiresAuth: true },
          },
          // 기업정보-제출서류관리
          {
            path: 'etpr-document-manage',
            name: 'SEtprDocumentManage',
            component: () => import('~@/views/user-startup/enterprise-info/SEtprDocumentManage'),
            // meta: { requiresAuth: true },
          },
          // 기업정보-구성원관리
          {
            path: 'etpr-member-manage',
            name: 'SEtprMemberManage',
            component: () => import('~@/views/user-startup/enterprise-info/SEtprMemberManage'),
            // meta: { requiresAuth: true },
          },
          // 기업정보-그룹관리
          {
            path: 'etpr-group-manage',
            name: 'SEtprGroupManage',
            component: () => import('~@/views/user-startup/enterprise-info/SEtprGroupManage'),
            // meta: { requiresAuth: true },
          },
          // ===================== 관심기업 =====================
          {
            path: 'fav-list',
            name: 'SFavlist',
            component: () => import('~@/views/user-startup/list-enterprise/SFavlist'),
            // meta: { requiresAuth: true },
          },
          // ===================== 최근 조회한 기업 =====================
          {
            path: 'recent-list',
            name: 'SRecentList',
            component: () => import('~@/views/user-startup/list-enterprise/SRecentList'),
            // meta: { requiresAuth: true },
          },
          // ===================== 팩트체크 =====================
          // 팩트체크-팩트체커신청
          {
            path: 'ftck-apply-main',
            name: 'SFtckApplyMain',
            component: () => import('~@/views/user-startup/factcheck/SFtckApplyMain'),
            // meta: { requiresAuth: true },
          },
          // 팩트체크-팩트체커신청-신청서작성
          {
            path: 'ftck-apply-create',
            name: 'SFtckApplyCreate',
            component: () => import('~@/views/user-startup/factcheck/SFtckApplyCreate'),
            // meta: { requiresAuth: true },
          },
          // 팩트체크-팩트체커신청-신청서작성완료
          {
            path: 'ftck-apply-complete',
            name: 'SFtckApplyComplete',
            component: () => import('~@/views/user-startup/factcheck/SFtckApplyComplete'),
            // meta: { requiresAuth: true },
          },
          // 팩트체크-받은팩트체크 목록
          {
            path: 'ftck-list',
            name: 'SFtckList',
            component: () => import('~@/views/user-startup/factcheck/SFtckList'),
            // meta: { requiresAuth: true },
          },
          // 팩트체크-받은팩트체크 상세
          {
            path: 'ftck-detail',
            name: 'SFtckDetail',
            component: () => import('~@/views/user-startup/factcheck/SFtckDetail'),
            // meta: { requiresAuth: true },
          },
          // ===================== 쪽지함 =====================
          // 마이페이지 - 쪽지함 목록
          {
            path: 'note-list',
            name: 'SNoteList',
            component: () => import('~@/views/user-startup/note/SNoteList'),
            // meta: { requiresAuth: true },
          },
          // 마이페이지 - 쪽지함 상세
          {
            path: 'note-detail',
            name: 'SNoteDetail',
            component: () => import('~@/views/user-startup/note/SNoteDetail'),
            // meta: { requiresAuth: true },
          },
          // 마이페이지 - 쪽지 보내기
          {
            path: 'note-create',
            name: 'SNoteCreate',
            component: () => import('~@/views/user-startup/note/SNoteCreate'),
            // meta: { requiresAuth: true },
          },
        ],
      },
    ],
  },
  /* ====================== 회원형태 - 투자자 ====================== */
  // 아래 페이지들은 모두 로그인 후 이용가능// 
  {
    path: '/investor',
    name: 'InvestorIndex',
    component: () => import('~@/views/user-investor/Index'),
    // meta: { requiresAuth: true, requiresResetScrollHeight: true },
    children: [
      // 투자자 마이페이지
      {
        path: 'mypage',
        name: 'IMypage',
        component: () => import('~@/views/user-investor/IMypage'),
        children: [
          // ===================== 기업정보 미확정 =====================
          // 신청대기중, 마이페이지 - 신청거절/그룹강퇴
          {
            path: 'wating-main',
            name: 'IWatingMain',
            component: () => import('~@/views/user-investor/wating/IWatingMain'),
            // meta: { requiresAuth: true },
          },
          // 신규업체등록
          {
            path: 'wating-create',
            name: 'IWatingCreate',
            component: () => import('~@/views/user-investor/wating/IWatingCreate'),
            // meta: { requiresAuth: true },
          },
          // 기존업체등록
          {
            path: 'wating-search-company',
            name: 'IWatingSearchCompany',
            component: () => import('~@/views/user-investor/wating/IWatingSearchCompany'),
            // meta: { requiresAuth: true },
          },
          // 신규/기존업체 등록완료
          {
            path: 'wating-complete',
            name: 'IWatingComplete',
            component: () => import('~@/views/user-investor/wating/IWatingComplete'),
            // meta: { requiresAuth: true },
          },
          // ===================== 대시보드 =====================
          // 대시보드
          {
            path: 'dashboard-main',
            name: 'IDashboardMain',
            component: () => import('~@/views/user-investor/dashboard/IDashboardMain'),
            // meta: { requiresAuth: true },
          },
          // ===================== 내 정보 =====================
          // 내정보
          {
            path: 'myinfo-main',
            name: 'IMyinfoMain',
            component: () => import('~@/views/user-investor/my-info/IMyinfoMain'),
            // meta: { requiresAuth: true },
          },
          // 내정보-내정보수정
          {
            path: 'myinfo-edit',
            name: 'IMyinfoEdit',
            component: () => import('~@/views/user-investor/my-info/IMyinfoEdit'),
            // meta: { requiresAuth: true },
          },
          // 내정보-회원탈퇴
          {
            path: 'myinfo-leave',
            name: 'IMyinfoLeave',
            component: () => import('~@/views/user-investor/my-info/IMyinfoLeave'),
            // meta: { requiresAuth: true },
          },
          // ===================== 기업정보 =====================
          // 기업정보-기본정보 (기업/개인)
          {
            path: 'etpr-default-info',
            name: 'IEtprDefaultInfo',
            component: () => import('~@/views/user-investor/enterprise-info/IEtprDefaultInfo'),
            // meta: { requiresAuth: true },
          },
          // 기업정보-기본정보 수정 (기업/개인)
          {
            path: 'etpr-default-info-edit',
            name: 'IEtprDefaultInfoEdit',
            component: () => import('~@/views/user-investor/enterprise-info/IEtprDefaultInfoEdit'),
            // meta: { requiresAuth: true },
          },
          // 기업정보-포트폴리오
          {
            path: 'etpr-portfolio-main',
            name: 'IEtprPortfolioMain',
            component: () => import('~@/views/user-investor/enterprise-info/IEtprPortfolioMain'),
            // meta: { requiresAuth: true },
          },
          // 기업정보-포트폴리오 추가
          {
            path: 'etpr-portfolio-add',
            name: 'IEtprPortfolioAdd',
            component: () => import('~@/views/user-investor/enterprise-info/IEtprPortfolioAdd'),
            // meta: { requiresAuth: true },
          },
          // 기업정보-구성원관리
          {
            path: 'etpr-member-manage',
            name: 'IEtprMemberManage',
            component: () => import('~@/views/user-investor/enterprise-info/IEtprMemberManage'),
            // meta: { requiresAuth: true },
          },
          // 기업정보-그룹관리
          {
            path: 'etpr-group-manage',
            name: 'IEtprGroupManage',
            component: () => import('~@/views/user-investor/enterprise-info/IEtprGroupManage'),
            // meta: { requiresAuth: true },
          },
          // ===================== 관심기업 =====================
          {
            path: 'fav-list',
            name: 'IFavlist',
            component: () => import('~@/views/user-investor/list-enterprise/IFavlist'),
            // meta: { requiresAuth: true },
          },
          // ===================== 최근 조회한 기업 =====================
          {
            path: 'recent-list',
            name: 'IRecentList',
            component: () => import('~@/views/user-investor/list-enterprise/IRecentList'),
            // meta: { requiresAuth: true },
          },
          // ===================== 팩트체크 =====================
          // 팩트체크-팩트체커신청
          {
            path: 'ftck-apply-main',
            name: 'IFtckApplyMain',
            component: () => import('~@/views/user-investor/factcheck/IFtckApplyMain'),
            // meta: { requiresAuth: true },
          },
          // 팩트체크-팩트체커신청-신청서작성
          {
            path: 'ftck-apply-create',
            name: 'IFtckApplyCreate',
            component: () => import('~@/views/user-investor/factcheck/IFtckApplyCreate'),
            // meta: { requiresAuth: true },
          },
          // 팩트체크-팩트체커신청-신청서작성완료
          {
            path: 'ftck-apply-complete',
            name: 'IFtckApplyComplete',
            component: () => import('~@/views/user-investor/factcheck/IFtckApplyComplete'),
            // meta: { requiresAuth: true },
          },
          // 팩트체크-요청한 팩트체크
          {
            path: 'ftck-list',
            name: 'IFtckList',
            component: () => import('~@/views/user-investor/factcheck/IFtckList'),
            // meta: { requiresAuth: true },
          },
          // FIXME 팩트체크-받은팩트체크 상세
          // {
          //   path: 'ftck-detail',
          //   name: 'IFtckDetail',
          //   component: () => import('~@/views/user-investor/factcheck/IFtckDetail'),
          //   // meta: { requiresAuth: true },
          // },
          // ===================== 포인트 =====================
          // 포인트 - 포인트 메인
          {
            path: 'point-main',
            name: 'IPointMain',
            component: () => import('~@/views/user-investor/point/IPointMain'),
            // meta: { requiresAuth: true },
          },
          // 포인트 - 포인트 충전
          {
            path: 'point-charge',
            name: 'IPointCharge',
            component: () => import('~@/views/user-investor/point/IPointCharge'),
            // meta: { requiresAuth: true },
          },
          // 포인트 - 포인트 충전 완료
          {
            path: 'point-charge-complete',
            name: 'IPointChargeComplete',
            component: () => import('~@/views/user-investor/point/IPointChargeComplete'),
            // meta: { requiresAuth: true },
          },
          // 포인트 - 멤버십 구매안내
          {
            path: 'membership-main',
            name: 'IMembershipMain',
            component: () => import('~@/views/user-investor/point/IMembershipMain'),
            // meta: { requiresAuth: true },
          },
          // 포인트 - 멤버십 구매 완료
          {
            path: 'membership-complete',
            name: 'IMembershipComplete',
            component: () => import('~@/views/user-investor/point/IMembershipComplete'),
            // meta: { requiresAuth: true },
          },
          // ===================== 쪽지함 =====================
          // 마이페이지 - 쪽지함 목록
          {
            path: 'note-list',
            name: 'INoteList',
            component: () => import('~@/views/user-investor/note/INoteList'),
            // meta: { requiresAuth: true },
          },
          // 마이페이지 - 쪽지함 상세
          {
            path: 'note-detail',
            name: 'INoteDetail',
            component: () => import('~@/views/user-investor/note/INoteDetail'),
            // meta: { requiresAuth: true },
          },
          // 마이페이지 - 쪽지 보내기
          {
            path: 'note-create',
            name: 'INoteCreate',
            component: () => import('~@/views/user-investor/note/INoteCreate'),
            // meta: { requiresAuth: true },
          },
        ],
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
