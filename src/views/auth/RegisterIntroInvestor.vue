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
            :class="{'is-active' : userTypeForm === 'indivisual'}"
            @click="userTypeForm = 'indivisual'"
          >
            <div class="type-grp">
              <span class="type-name">개인투자자</span>
              <i class="icon icon-check" />
            </div>
          </div>
          
          <div
            class="type-slct-list"
            :class="{'is-active' : userTypeForm === 'enterprise'}"
            @click="userTypeForm = 'enterprise'"
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
  name: 'RegisterIntroInvestor',
  data() {
    return{
      userTypeForm: null,
    };
  },
  methods: {
    clickNext() {
      if(!this.userTypeForm) {
        window.alert('투자하시는 형태를 선택해주세요.');
        return;
      }
      
      this.$router.push({
        name: 'RegisterSearchCompany',
        query: {
          userType: 'investor',
          userTypeForm: this.userTypeForm,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>