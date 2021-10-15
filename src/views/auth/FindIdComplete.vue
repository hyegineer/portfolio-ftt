<template>
  <div class="page auth-page">
    <layout-header />
    <div class="page-container">
      <div
        class="narrow-panel auth-panel"
      >
        <div class="auth-hgrp">
          <h3 class="ttl">
            아이디 찾기
          </h3>
          <p class="ttl-sub">
            휴대폰 번호로 아이디를 찾습니다.
          </p>
        </div>
        <div class="print-grp">
          <p class="print-ment">
            입력하신 연락처와 일치하는 아이디입니다.
          </p>
          <p class="print-value">
            te**@test.com
          </p>
        </div>
        <div class="find-wrap">
          <p class="dec">
            비밀번호를 잊으셨나요?
          </p>
          <div class="btn-wrap">
            <router-link
              to="/find-pw"
              class="find-link"
            >
              비밀번호 찾기
            </router-link>
          </div>
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
