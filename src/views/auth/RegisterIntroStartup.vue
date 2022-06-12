<template>
  <!-- [D] 스타트업 회원가입 intro: 대표인지 직원인지 -->
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
            스타트업 회원가입
          </h3>
          <p class="ttl-sub">
            기업에 소속된 형태를 선택해주세요.
          </p>
        </div>

        <div class="type-slct-grp">
          <div
            class="type-slct-list"
            :class="{'is-active' : userTypeForm === 'ceo'}"
            @click="userTypeForm = 'ceo'"
          >
            <div class="type-grp">
              <span class="type-name">기업의 대표입니다.</span>
              <i class="icon icon-check" />
            </div>
          </div>
          
          <div
            class="type-slct-list"
            :class="{'is-active' : userTypeForm === 'staff'}"
            @click="userTypeForm = 'staff'"
          >
            <div class="type-grp">
              <span class="type-name">기업의 직원입니다.</span>
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
  name: 'RegisterIntroStartup',
  data() {
    return{
      userTypeForm: null,
    };
  },
  methods: {
    clickNext() {
      if(!this.userTypeForm) {
        window.alert('기업에 소속된 형태를 선택해주세요.');
        return;
      }
      
      this.$router.push({
        name: 'RegisterSearchCompany',
        query: {
          userType: 'startup',
          userTypeForm: this.userTypeForm,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>