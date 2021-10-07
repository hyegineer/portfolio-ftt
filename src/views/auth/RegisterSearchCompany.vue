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
            <span class="ttl-txt">{{ `${$constants.userType[$route.query.userType]} 회원가입` }}</span>
            <span class="badge-auth">{{ $constants.userTypeForm[$route.query.userTypeForm] }}</span>
          </h3>
          <p class="ttl-sub">
            소속된 기업을 선택하세요. <br> 기업조회가 되지 않으면, 건너뛰기를 선택하세요.
          </p>
          <btn-bd-dark class="btn-sm ttl-sub-btn">
            기업 선택하기
          </btn-bd-dark>
        </div>

        <fieldset class="lbel-inp-grp">
          <label class="lbel lbel-lg">선택된 기업정보</label>
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

          <!-- 기업이 선택되지 않았을 때 넘길 수 없음 -->
          <btn-solid
            class="btn-lg btn-full"
            disabled
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
// FIXME: this.$route.query.userTypeForm 이 없을 때 예외처리 필요함. ex: 잘못된 접근입니다

export default {
  name: 'RegisterSearchCompany',
  methods: {
    clickNext() {
      switch(this.$route.query.userType) {
      case 'startup':
        this.$router.push({
          name: 'RegisterStartup',
          query: {
            selectedCompany: null,
            userTypeForm: this.$route.query.userTypeForm,
          },
        });
        break;
      case 'investor':
        this.$router.push({
          name: 'RegisterInvestor',
          query: {
            selectedCompany: null,
            userTypeForm: this.$route.query.userTypeForm,
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

