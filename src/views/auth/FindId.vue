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
        <form class="form-area auth-form-area ftck-auth-form-area">
          <fieldset class="ffieldset">
            <legend class="ffieldset-ttl is-voice-only">
              아이디 찾기
            </legend>
            <div class="lbel-inp-grp">
              <label class="lbel">이름</label>
              <div class="inp-grp">
                <input
                  type="text"
                  class="inp"
                  placeholder="실명을 입력하세요"
                >
              </div>
            </div>
            <div class="lbel-inp-grp">
              <label class="lbel">휴대폰 번호</label>
              <div class="inp-grp inp-btn-grp">
                <input
                  type="text"
                  class="inp"
                  placeholder="검색어를 입력하세요"
                >

                <btn-bd class="btn-md">
                  인증번호 발송
                </btn-bd>
              </div>

              <div class="inp-grp inp-btn-grp">
                <div class="inp-grp inp-time-grp">
                  <input
                    type="text"
                    class="inp"
                    placeholder="검색어를 입력하세요"
                  >
                  <span class="inp-time">3:00</span>
                </div>

                <button
                  type="button"
                  class="btn-solid-dark btn-md"
                >
                  인증하기
                </button>
              </div>
              <p class="confirm-ment">
                인증이 완료되었습니다.
              </p>
            </div>
          </fieldset>
        </form>
        <div class="btn-grp">
          <btn-bd-light
            class="btn-lg btn-full color-gray btn-prev"
            @click="window.alert('이전 버튼을 클릭하셨습니다.')"
          >
            이전
          </btn-bd-light>
          <btn-solid
            class="btn-lg btn-full"
            @click="window.alert('완료 버튼을 클릭하셨습니다.')"
          >
            완료
          </btn-solid>
        </div>
      </div>
    </div>
    <layout-footer />
  </div>
</template>

<script>
export default {
  name: 'FindId',
  data() {
    return {

    };
  },
};
</script>

<style>
</style>
