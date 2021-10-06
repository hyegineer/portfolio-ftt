<template>
  <!-- [D] 기업 검색 후 선택할건지, 건너뛰기할건지 -->
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
            <span class="ttl-txt">
              {{ `${registerType()} 회원가입` }}
            </span>
            <span class="badge-auth">
              {{ `${registerFormType()}` }}
            </span>
          </h3>
          <p class="ttl-sub">
            소속된 기업을 선택하세요. <br> 기업조회가 되지 않으면, 건너뛰기를 선택하세요.
          </p>
          <btn-bd-dark class="btn-sm ttl-sub-btn">
            기업 선택하기
          </btn-bd-dark>
        </div>

        <fieldset class="lbel-inp-grp">
          <label class="lbel">선택된 기업정보</label>
          <div class="inp-grp">
            <input
              type="text"
              placeholder="기업명이 입력됩니다."
              class="inp"
              readonly
            >
          </div>
          <div class="inp-grp">
            <input
              type="text"
              placeholder="대표자명이 입력됩니다."
              class="inp"
              readonly
            >
          </div>
          <div class="inp-grp">
            <input
              type="text"
              placeholder="전화번호가 입력됩니다."
              class="inp"
              readonly
            >
          </div>
        </fieldset>
        
        <div class="btn-grp">
          <btn-bd-light
            class="btn-lg btn-prev"
            @click="$router.back()"
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

        <div class="auth-skip-ment">
          <span class="skip-ment">등록된 기업이 없으신가요?</span>
          <button
            type="button"
            class="btn btn-txt"
            @click="window.alert('건너뛰기를 선택하셨습니다.')"
          >
            <span class="txt">건너뛰기</span>
          </button>
        </div>
      </div>
    </div>

    <layout-footer />
  </div>
</template>

<script>
export default {
  name: 'RegisterSearchCompany',
  methods: {
    registerType() {
      switch(this.$route.query.type01) {
      case 'startup':
        return '스타트업';
      case 'investor':
        return '투자자';
      }
    },
    registerFormType() {
      switch(this.$route.query.type02) {
      case 'ceo':
        return '대표';
      case 'staff':
        return '직원';
      case 'indivisual':
        return '개인';
      case 'enterprise':
        return '기업';
      }
    },
    clickNext() {
      switch(this.$route.query.type01) {
      case 'startup':
        this.$router.push({
          name: 'RegisterStartup',
          query: {
            selectedInfo: true, 
            formType: this.$route.query.type02,
          },
        });
        break;
      case 'investor':
        this.$router.push({
          name: 'RegisterInvestor',
          query: {
            selectedInfo: true, 
            formType: this.$route.query.type02,
          },
        });
        break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

