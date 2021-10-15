<template>
  <div class="footer-wrap">
    <footer class="footer">
      <div class="footer-inner">
        <div class="ft-top">
          <div class="ft-logo-wrap">
            <h2 class="ft-logo">
              <a
                href="#"
                class="ft-logo-link"
              >
                <img
                  src="@/assets/images/logo/logo-gr.svg"
                  alt="logo"
                  class="ft-logo-img"
                >
              </a>
            </h2>
          </div>
          <div class="ft-info-wrap">
            <p class="company-info">
              <span class="company-type">주식회사 </span>
              <span class="company-name">포켓컴퍼니</span>
            </p>
            <span class="ft-info-grp">
              <span class="ft-info-type">주소: </span>
              <span class="ft-info-cont">서울특별시 강남구 테헤란로 312 13층</span>
            </span>
            <span class="ft-info-grp">
              <span class="ft-info-type">대표번호: </span>
              <span class="ft-info-cont">1234-5678</span>
            </span>
            <span class="ft-info-grp">
              <span class="ft-info-type">이메일: </span>
              <span class="ft-info-cont">factsheet@fact.com</span>
            </span>
            <br>
            <span class="ft-info-grp">
              <span class="ft-info-type">엑셀러레이터 등록번호: </span>
              <span class="ft-info-cont">제 2021-00호</span>
            </span>
            <span class="ft-info-grp">
              <span class="ft-info-type">사업자등록번호: </span>
              <span class="ft-info-cont">제 2021-00호</span>
            </span>
          </div>
        </div>
        <div class="ft-bottom">
          <div class="ft-gnb">
            <router-link
              to="/policy-privacy"
              class="ft-gnb-link"
            >
              개인정보 처리방침
            </router-link>
            <router-link
              to="/policy-guide"
              class="ft-gnb-link"
            >
              서비스 이용약관
            </router-link>
          </div>
          <p class="copyright">
            Copyright Factsheet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LayoutFooter',
};
</script>
