<template>
  <!-- [D] 투자자 회원가입 intro: 개인인지 기업인지 -->
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
            투자자 회원가입
          </h3>
          <p class="ttl-sub">
            투자하시는 형태를 선택해주세요.
          </p>
        </div>

        <div class="type-slct-grp">
          <div
            class="type-slct-list"
            :class="{'is-active' : registerType === 'individual'}"
            @click="registerType = 'individual'"
          >
            <div class="type-grp">
              <span class="type-name">개인투자자</span>
              <i class="icon icon-check" />
            </div>
          </div>
          
          <div
            class="type-slct-list"
            :class="{'is-active' : registerType === 'enterprise'}"
            @click="registerType = 'enterprise'"
          >
            <div class="type-grp">
              <span class="type-name">기업투자자</span>
              <i class="icon icon-check" />
            </div>
          </div>
        </div>

        <div class="btn-grp">
          <btn-bd-light
            class="btn-lg btn-prev"
            @click="$router.push('/register-intro')"
          >
            이전
          </btn-bd-light>

          <btn-solid
            class="btn-lg btn-full"
            @click="clickNext"
          >
            다음
          </btn-solid>
        </div>
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
        window.alert('투자하시는 형태를 선택해주세요.');
        break;
      case 'individual':
        window.alert('개인투자자입니다.');
        break;
      case 'enterprise':
        window.alert('기업투자자입니다.');
        break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>