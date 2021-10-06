<template>
  <div class="page auth-page">
    <layout-header />
    <div class="page-container">
      <div
        class="narrow-panel auth-panel"
      >
        <h3 class="ttl">
          아이디 찾기
        </h3>
        <p class="dec">
          휴대폰 번호로 아이디를 찾습니다.
        </p>
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
        <div>
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
        <btn-solid
          class="btn-lg btn-full"
          @click="window.alert('다음 버튼을 클릭하셨습니다.')"
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
  name: 'FindId',
  data() {
    return {

    };
  },
};
</script>

<style>
</style>
