<template>
  <div class="header-wrap">
    <header class="header">
      <div class="header-inner">
        <div class="hd-left">
          <button
            type="button"
            class="btn-hamburger"
            @click="viewSidebar = true"
          >
            <i class="icon icon-hamburger" />
          </button>

          <div class="hd-logo-wrap">
            <h1 class="hd-logo">
              <a
                href="#"
                class="hd-logo-link"
              >
                <img
                  src="@/assets/images/logo/logo-bk.svg"
                  alt="logo"
                  class="hd-logo-img"
                >
              </a>
            </h1>
          </div>

          <div class="gnb-group">
            <a
              href="#"
              class="gnb-link"
            >공지사항</a>
            <a
              href="#"
              class="gnb-link"
            >자주 묻는 질문</a>
            <a
              href="#"
              class="gnb-link"
            >1:1문의</a>
            <!-- TODO: update-point 있으면 업데이트 표시 -->
            <a
              v-if="testIsUser && testUserType !== 'fact-checker'"
              href="#"
              class="gnb-link update-point"
            >쪽지함</a>
          </div>

          <button
            type="button"
            class="btn-hd-search"
            @click="viewSearchbar = !viewSearchbar"
          >
            스타트업 검색
          </button>
        </div>

        <div class="hd-right">
          <!-- INFO: 로그인 전 -->
          <div
            v-if="!testIsUser"
            class="auth-wrap"
          >
            <a
              href="#"
              class="auth-link"
            >로그인</a>

            <a
              href="#"
              class="auth-link"
            >회원가입</a>
          </div>
          <!-- INFO: END 로그인 전 -->

          <!-- INFO: 로그인 후 -->
          <div
            v-if="testIsUser"
            class="greeting-wrap"
          >
            <div class="greeting-name-wrap underline-color">
              <span class="greeting-name">{{ '이투자' }}</span>
              <span class="greeting-title">{{ testUserType === 'investor' || testUserType === 'startup' ? '님' : '팩트체커' }}</span>
            </div>

            <div
              v-if="testUserType === 'investor'"
              class="greeting-ment-wrap"
            >
              <span
                v-if="testUserType === 'investor' && testMembership"
                class="greeting-date"
              >
                멤버십 2021.12.31 까지
              </span>
              
              <span
                v-if="testUserType === 'investor' && !testMembership"
                class="greeting-ment"
              >
                <b class="bold-txt underline-bk">멤버십에 가입</b>해보세요!
              </span>
            </div>
          </div>
          <!-- INFO: END 로그인 후 -->
        </div>
      </div>

      <!-- search-bar -->
      <!-- TODO: is-active에 서치바 출력 -->
      <div
        class="hd-search-wrap"
        :class="{'is-active': viewSearchbar}"
      />
      <!-- END search-bar -->

      <!-- side-bar -->
      <div
        class="side-overlay"
        :class="{'is-active': viewSidebar}"
        @click="viewSidebar = false"
      />
      <!-- TODO: is-active에 사이드바 출력 -->
      <div
        class="hd-side-wrap"
        :class="{'is-active': viewSidebar}"
      >
        <div class="hd-side-inner">
          <div class="hd-side-top">
            <div class="btn-close-wrap">
              <button
                type="button"
                class="btn-close"
                @click="viewSidebar = false"
              >
                닫기
              </button>
            </div>
            <p class="dec">
              팩트시트에 <b class="bold-txt">회원가입</b> 하고<br>다양한 서비스를 이용해보세요!
            </p>
            <div class="auth-wrap">
              <a
                href="#"
                class="auth-link"
              >로그인</a>
              <a
                href="#"
                class="auth-link"
              >회원가입</a>
            </div>
          </div>
          <div class="hd-side-bottom">
            <div class="sidemenu-wrap">
              <a
                href="#"
                class="sidemenu-link"
              >
                <span class="sidemenu-txt">스타트업 찾기</span>
              </a>
              <a
                href="#"
                class="sidemenu-link"
              >
                <span class="sidemenu-txt">공지사항</span>
              </a>
              <a
                href="#"
                class="sidemenu-link"
              >
                <span class="sidemenu-txt">자주 묻는 질문</span>
              </a>
              <div class="sidemenu-grp">
                <a
                  href="#"
                  class="sidemenu-link"
                >
                  <span class="sidemenu-txt">1:1문의</span>
                </a>
                <div class="sidemenu-depth2">
                  <a href="sidemenu-depth2-link">문의하기</a>
                </div>
              </div>
              <a
                href="#"
                class="sidemenu-link"
              >
                <span class="sidemenu-txt">약관</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- END sidemenu-bar -->
    </header>
  </div>
</template>

<script>
export default {
  name: 'LayoutHeader',
  data() {
    return {
      testIsUser: true,
      testUserType: 'investor', // startup, investor, fact-checker
      testMembership: false,
      viewSearchbar: false,
      viewSidebar: false,
    };
  },
};
</script>
