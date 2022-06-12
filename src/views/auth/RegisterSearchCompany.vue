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
          <btn-bd-dark
            class="btn-sm ttl-sub-btn"
            @click="openModal('choiceEnterprise')"
          >
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
            @click="clickNext"
          >
            다음
          </btn-solid>
        </div>

        <div class="auth-skip-ment">
          <span class="skip-ment">등록된 기업이 없으신가요?</span>
          <!-- <button
            type="button"
            class="btn btn-txt"
            @click="window.alert('건너뛰기를 선택하셨습니다.')"
          >
            <span class="txt">건너뛰기</span>
          </button> -->
          
          <router-link
            to="/register-startup?selectedCompany&userTypeForm=enterprise"
            class="btn btn-txt"
          >
            <span class="sidemenu-txt">건너뛰기(스타트업일 때 연결되는 링크)</span>
          </router-link>
          
          <router-link
            to="/register-investor?selectedCompany&userTypeForm=enterprise"
            class="btn btn-txt"
          >
            <span class="sidemenu-txt">건너뛰기(투자자일 때 연결되는 링크)</span>
          </router-link>
        </div>
      </div>
    </div>

    <modal-dialog>
      <modal-light-box @click="closeModal" />

      <!-- [modal] 기업 선택하기 -->
      <modal
        :class="{'is-show': $store.state.modal.visible && $store.state.modal.type === 'choiceEnterprise'}"
        wide
        ttl="기업 선택하기"
      >
        <div class="modal-cont md-choice-cont">
          <!-- 검색어 입력영역 -->
          <div class="inp-grp inp-sch-grp">
            <input
              v-model="exInput"
              type="text"
              class="inp"
              placeholder="기업명 / 기업 고유 아이디를 검색하세요."
            >
            <button
              v-if="exInput"
              type="button"
              class="inp-del-btn"
              @click="exInput = ''"
            >
              <span class="is-voice-only">검색어 지우기</span>
            </button>
            <button
              type="button"
              class="inp-sch-btn"
            >
              <span class="is-voice-only">검색하기</span>
            </button>
          </div>
          <!-- // 검색어 입력영역 -->

          <!-- 리스트 -->
          <div class="cnt-txt-grp">
            <!-- 검색 전 -->
            <!-- <div class="txt">
                  <span class="bold">전체</span>
                </div> -->

            <!-- 검색 후 갯수 표시 -->
            <div class="txt">
              <span class="highlight">
                <u>'검색어'</u>
              </span>
              에 대한 전체 검색 결과 <span class="bold">15</span>건
            </div>
          </div>

          <!-- 검색결과 있을 때 -->
          <div class="box-list-grp">
            <div
              v-for="(item, index) in 10"
              :key="index"
              class="box-choice-list box-list"
            >
              <div class="txt-dark-gray">
                <p class="txt-dark">
                  주식회사 팩트컴퍼니
                </p>
                <span class="txt-gray">김철수 02-000-0000</span>
              </div>

              <!-- 체크박스 -->
              <input
                :id="`enter${index}`"
                type="radio"
                class="is-none check-switch"
                name="enter"
              >
              <label
                :for="`enter${index}`"
                class="check-onoff"
              />
              <!-- // 체크박스 -->
            </div>
          </div>

          <!-- 검색결과 없을 때 -->
          <empty-contents txt="선택할 기업이 없습니다." />
          <!-- // 리스트 -->
        </div>

        <div class="modal-btn-wrap">
          <btn-bd-light
            class="btn-fb btn-md btn-cancel"
            @click="closeModal"
          >
            닫기
          </btn-bd-light>
          <btn-solid-dark class="btn-md">
            선택완료
          </btn-solid-dark>
        </div>
      </modal>
      <!-- // [modal] 기업 선택하기 -->
    </modal-dialog>

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

