<template>
  <div class="header-wrap">
    <header class="header">
      <div class="header-inner">
        <div class="hd-left">
          <button
            type="button"
            class="btn-hamburger"
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
            <a
              href="#"
              class="gnb-link"
            >쪽지함</a>
          </div>
          <button
            type="button"
            class="btn-hd-search"
          >
            스타트업 검색
          </button>
        </div>
        <div class="hd-right">
          <!-- TODO: 로그인 전 -->
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
          <!-- TODO: END 로그인 전 -->
          <!-- TODO: 로그인 후 -->
          <!-- <div class="greeting-wrap">
            <div class="greeting-name-wrap">
              <span class="greeting-name">{{ '이투자' }}</span>
              <span class="greeting-title">{{ '님' }}</span>
            </div>
            <div class="greeting-ment-wrap">
              <span class="greeting-ment">
                <b class="bold-txt">멤버십에 가입</b>해보세요!
              </span>
              <span class="greeting-date">
                멤버십 2021.12.31 까지
              </span>
            </div>
          </div> -->
          <!-- TODO: END 로그인 후 -->
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'LayoutHeader',
};
</script>
