<template>
  <!-- [D] 마이페이지 - 신규/기존업체 등록완료 -->
  <div
    mypage="waiting-complete-page"
    class="mypage-container"
  >
    <div class="narrow-panel auth-panel">
      <div class="waiting-complete-cont-wrap">
        <div class="auth-hgrp">
          <img
            src="@/assets/images/badge/badge-startup.svg"
            alt=""
            class="badge-flag"
          >
        
          <h3 class="ttl">
            <!-- 스타트업 신규등록일 때 -->
            <span class="ttl-txt">스타트업 신규등록</span>

            <!-- 기존 스타트업 신청일 때 -->
            <span class="ttl-txt">기존 스타트업 신청</span>
            <span class="badge-auth">직원</span>
          <!-- <span class="badge-auth">{{ $constants.userTypeForm[$route.query.userTypeForm] }}</span> -->
          </h3>
        </div>
        <div class="ment-wrap">
          <p class="ment">
            신청이 완료되었습니다.
          </p>
          <p class="ment-sub">
            스타트업 가입신청이 완료되었습니다.<br>
            신청 허가 완료시, 팩트시트 서비스를 이용하실 수 있습니다.
          </p>
        </div>
        <div class="btn-wrap">
          <btn-solid
            class="btn btn-lg btn-full"
            disabled
          >
            심사중입니다.
          </btn-solid>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SWatingComplete',
};
</script>

<style lang="scss" scoped>
</style>