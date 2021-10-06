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

        <div class="type-slct-grp">
          <div
            class="type-slct-list"
            :class="{'is-active' : registerType === 'startup'}"
            @click="registerType = 'startup'"
          >
            <div class="type-grp">
              <span class="type-name">스타트업 회원가입</span>
              <i class="icon icon-check" />
            </div>
          </div>
          
          <div
            class="type-slct-list"
            :class="{'is-active' : registerType === 'investor'}"
            @click="registerType = 'investor'"
          >
            <div class="type-grp">
              <span class="type-name">투자자 회원가입</span>
              <i class="icon icon-check" />
            </div>
          </div>
          
          <div
            class="type-slct-list"
            :class="{'is-active' : registerType === 'fact-checker'}"
            @click="registerType = 'fact-checker'"
          >
            <div class="type-grp">
              <span class="type-name">팩트체커 회원가입</span>
              <i class="icon icon-check" />
            </div>
          </div>
        </div>

        <btn-solid
          class="btn-lg btn-full"
          @click="clickNext"
        >
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
  data() {
    return{
      registerType: null,
    };
  },
  methods: {
    clickNext() {
      switch(this.registerType) {
      case null: 
        window.alert('회원 유형을 선택해주세요.');
        break;
      case 'startup':
        this.$router.push('/register-intro-startup');
        break;
      case 'investor':
        this.$router.push('/register-intro-investor');
        break;
      case 'fact-checker':
        this.$router.push('/register-fact-checker');
        break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>