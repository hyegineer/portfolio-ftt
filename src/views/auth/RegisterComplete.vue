<template>
  <!-- 회원가입 완료시 -->
  <div class="page auth-page">
    <layout-header />

    <div class="page-container">
      <div class="narrow-panel auth-panel">
        <div class="auth-hgrp">
          <img
            v-if="$route.query.userType === 'startup'"
            src="@/assets/images/badge/badge-startup.svg"
            alt=""
            class="badge-flag"
          >

          <img
            v-if="$route.query.userType === 'investor'"
            src="@/assets/images/badge/badge-investror.svg"
            alt=""
            class="badge-flag"
          >

          <img
            v-if="$route.query.userType === 'fact-checker'"
            src="@/assets/images/badge/badge-factchecker.svg"
            alt=""
            class="badge-flag"
          >

          <h3 class="ttl">
            <span class="ttl-txt">{{ `${$constants.userType[$route.query.userType]} 회원가입` }}</span>
            <span
              v-if="$route.query.userTypeForm"
              class="badge-auth"
            >{{ $constants.userTypeForm[$route.query.userTypeForm] }}</span>
          </h3>
        </div>

        <div class="auth-complete-cont">
          <div class="ttl-grp">
            <h2 class="ttl">
              회원가입이 완료되었습니다.
            </h2>
            <p class="ttl-sub">
              가입하신 이메일로 <span class="bold">인증코드를 발송</span>하였습니다. <br>이메일 인증 후 서비스 이용이 가능합니다.
            </p>
          </div>

          <div class="inp-grp inp-btn-grp">
            <div class="inp-grp inp-time-grp">
              <input
                type="text"
                class="inp"
                placeholder="인증번호 입력"
              >
              <span class="inp-time">3:00</span>
            </div>

            <btn-solid-dark
              class="btn-md"
            >
              재발송
            </btn-solid-dark>
          </div>

          <btn-solid
            class="btn-lg btn-full"
            @click="$router.push('/')"
          >
            이메일 인증 완료
          </btn-solid>
        </div>
      </div>
    </div>

    <layout-footer />
  </div>
</template>

<script>
// FIXME: this.$route.query.userType 이 없을 때 예외처리 필요함. ex: 잘못된 접근입니다
// FIXME: this.$route.query.userTypeForm 이 없을 때 예외처리 필요함. ex: 잘못된 접근입니다

export default {
  name: 'RegisterComplete',
};
</script>

<style lang="scss" scoped>
</style>
