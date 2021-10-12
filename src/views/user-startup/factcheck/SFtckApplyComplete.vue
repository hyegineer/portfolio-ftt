<template>
  <!-- [D] 마이페이지 - 팩트체크-팩트체커신청-신청서작성완료 -->
  <div class="mypage-container mypage-ftck-apply-complete-page">
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
          팩트체커 신청완료
        </li>
      </breadcrumb>

      <h2 class="ttl">
        팩트체크
      </h2>
    </div>
    <!-- // 마이페이지 페이지 제목 -->

    <!-- 마이페이지 컨텐츠 영역 -->
    <div class="mypage-cont-wrap">
      <div class="mypage-common-card">
        <div class="cont-hgrp">
          <p class="ttl">
            팩트체커 신청
          </p>
        </div>

        <div class="state-guide-box">
          <img
            src="@/assets/images/img/img-complete-lights.svg"
            alt=""
            class="state-img"
          >
          <h3 class="state-ttl">
            신청이 완료되었습니다.
          </h3>
          <p class="state-desc">
            승인 결과는, 검토 후 가입하신 이메일로 안내드리겠습니다
          </p>
        </div>

        <btn-solid
          position="single-centered"
          class="btn-lg"
        >
          확인
        </btn-solid>
      </div>
    </div>
    <!-- // 마이페이지 컨텐츠 영역 -->
  </div>
</template>

<script>
export default {
  name: 'SFtckApplyComplete',
};
</script>

<style lang="scss" scoped>
</style>