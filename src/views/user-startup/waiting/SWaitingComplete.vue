<template>
  <!-- [D] 마이페이지 - 신규/기존업체 등록완료 -->
  <div
    mypage="waiting-complete-page"
    class="mypage-container"
  >
    <div
      class="narrow-panel auth-panel"
    >
      <!-- TODO: 기존 스타트업 신청 -->
      <div
        v-if="testApplyType === 'old'"
        class="waiting-complete-cont-wrap"
      >
        <div
          class="auth-hgrp"
        >
          <img
            src="@/assets/images/badge/badge-startup.svg"
            alt=""
            class="badge-flag"
          >
        
          <h3 class="ttl">
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
      <!-- TODO: END 기존 스타트업 신청 -->

      <!-- TODO: 스타트업 신규등록 -->
      <div
        v-if="testApplyType === 'new'"
        class="waiting-complete-cont-wrap"
      >
        <div
          class="auth-hgrp"
        >
          <img
            src="@/assets/images/badge/badge-startup.svg"
            alt=""
            class="badge-flag"
          >
        
          <h3 class="ttl">
            <span class="ttl-txt">스타트업 신규등록</span>
            <span class="badge-auth">직원</span>
          <!-- <span class="badge-auth">{{ $constants.userTypeForm[$route.query.userTypeForm] }}</span> -->
          </h3>
        </div>
        <div class="ment-wrap">
          <p class="ment">
            등록이 완료되었습니다.
          </p>
          <p class="ment-sub">
            스타트업 신규등록이 완료되었습니다.<br>
            '확인'버튼을 누르면 팩트시트 서비스를 이용하실 수 있습니다.
          </p>
        </div>
        <div class="btn-wrap">
          <btn-solid
            class="btn btn-lg btn-full"
            @click="$router.push('/')"
          >
            확인
          </btn-solid>
        </div>
      </div>
      <!-- TODO: END 스타트업 신규등록 -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'SWaitingComplete',
  data() {
    return {
      testApplyType: 'old', // new: 스타트업 신규등록, old: 기존 스타트업 신청 
    };
  },
};
</script>

<style lang="scss" scoped>
</style>