<template>
  <div class="page auth-page">
    <layout-header />
    <div class="page-container">
      <div
        class="narrow-panel auth-panel"
      >
        <div class="auth-hgrp">
          <h3 class="ttl">
            비밀번호 찾기
          </h3>
          <p class="ttl-sub">
            휴대폰 번호로 비밀번호를 찾습니다.
          </p>
        </div>
        <div class="print-grp print-pw-grp">
          <p class="print-ment">
            아래의 이메일로 비밀번호 변경링크를 발송하였습니다.<br>
            30분 이내에 비밀번호를 변경해주세요.
          </p>
          <div class="time-btn-wrap">
            <p class="time">
              30:00
            </p>
            <button
              type="button"
              class="btn-solid-dark btn-md btn-resend"
            >
              재발송
            </button>
          </div>
          <p class="print-value">
            te**@test.com
          </p>
        </div>
        <btn-solid
          class="btn-lg btn-full"
          @click="$router.push('/login')"
        >
          로그인하기
        </btn-solid>
      </div>
    </div>
    <layout-footer />
  </div>
</template>

<script>
export default {
  name: 'FindIdComplete',
  data() {
    return {

    };
  },
};
</script>

<style>
</style>
