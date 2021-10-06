<template>
  <div class="page auth-page">
    <layout-header />

    <div class="page-container">
      <div class="narrow-panel auth-panel">
        <div class="auth-hgrp">
          <img
            src="@/assets/images/logo/mark-factsheet.svg"
            alt=""
            class="symbol-fs"
          >
        
          <h3 class="ttl">
            회원가입
          </h3>
          <p class="ttl-sub">
            회원가입을 환영합니다! <br>원하시는 회원 유형을 선택하세요.
          </p>
        </div>

        <btn-solid class="btn-lg btn-full">
          다음
        </btn-solid>
      </div>
    </div>

    <layout-footer />
  </div>
</template>

<script>
export default {
  name: 'RegisterIntro',
};
</script>

<style lang="scss" scoped>
</style>