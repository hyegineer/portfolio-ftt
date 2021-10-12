<template>
  <!-- [D] 마이페이지 - 팩트체크-팩트체커신청 -->
  <div class="mypage-container">
    <!-- 마이페이지 페이지 제목 -->
    <div class="mypage-hgrp">
      <breadcrumb>
        <li class="txt">
          홈
        </li>
        <li class="txt">
          마이페이지
        </li>
        <li class="txt">
          팩트체크
        </li>
        <li class="txt">
          팩트체커 신청
        </li>
      </breadcrumb>

      <h2 class="ttl">
        팩트체크
      </h2>
    </div>
    <!-- // 마이페이지 페이지 제목 -->

    <!-- 마이페이지 컨텐츠 영역 -->
    <div class="mypage-cont-wrap">
      <div class="ftck-card">
        <div class="ftck-card-cont">
          <img
            src="@/assets/images/img/img-checker.svg"
            alt=""
            class="img-checker"
          >

          <section class="ftck-section">
            <div class="hgrp">
              <span class="sub-ttl">
                <img
                  src="@/assets/images/img/img-txt-check.svg"
                  alt="fact check"
                >
              </span>
              <h3 class="ttl">
                팩트체크란?
              </h3>
            </div>

            <p class="ftck-section-txt">
              투자할 기업에 대하여 믿을 수 있는 정보인지, 가치 있는 정보인지 등을 증빙하는 과정을 뜻하며 <br>
              팩트체크를 진행 한 정보는 3개월간 독점권이 주어집니다. <br>
              경쟁 투자 업체보다 빠른 정보 선점을 통하여 성공적인 투자를 해 보세요 
            </p>
          </section>
        
          <section class="ftck-section">
            <div class="hgrp">
              <span class="sub-ttl">
                <img
                  src="@/assets/images/img/img-txt-checker.svg"
                  alt="fact check"
                ></span>
              <h3 class="ttl">
                팩트체크란?
              </h3>
            </div>

            <p class="ftck-section-txt">
              요청받은 팩트체크의 항목을 직접 조사하여 투자자들에게 정보를 제공합니다. <br>
              투자자를 도와, 투자 기업들의 정보를 직접 확인하고 관리합니다. <br>
              투자 전후 기업들의 정보를 엄밀하게 점검하고 수익을 창출할 수 있습니다. <br>
              보다 정확하고 믿을 수 있는 정보제공을 위하여 팩트시트는 팩트체커 선발에 엄격한 심사를 진행합니다.
            </p>
          </section>
        </div>

        <!-- [D] 심사중일시 disabled -->
        <btn-solid
          position="single-centered"
          class="btn-lg btn-full"
          @click="$router.push('ftck-apply-create')"
        >
          신청하기
          <!-- 심사중입니다 -->
        </btn-solid>
      </div>
    </div>
    <!-- // 마이페이지 컨텐츠 영역 -->
  </div>
</template>

<script>
export default {
  name: 'SFtckApplyMain',
};
</script>

<style lang="scss" scoped>
</style>