<template>
  <div class="page auth-page">
    <layout-header />
    <div class="page-container">
      <div
        class="narrow-panel auth-panel"
      >
        <div class="auth-hgrp">
          <h3 class="ttl">
            비밀번호 변경
          </h3>
          <p class="ttl-sub">
            새 비밀번호를 설정합니다.
          </p>
        </div>
        <!-- FIXME: 전체 감싸는 필드셋 필요 -->
        <div class="lbel-inp-grp">
          <label class="lbel">변경할 비밀번호</label>
          <div class="inp-grp">
            <input
              type="text"
              class="inp"
              placeholder="8~16자 입력"
            >
          </div>
        </div>
        <div class="lbel-inp-grp">
          <label class="lbel">비밀번호 확인</label>
          <div class="inp-grp">
            <input
              type="text"
              class="inp"
              placeholder="8~16자 입력"
            >
          </div>
        </div>
        <btn-solid
          class="btn-lg btn-full"
          @click="window.alert('완료 버튼을 클릭하셨습니다.')"
        >
          완료
        </btn-solid>
      </div>
    </div>
    <layout-footer />
  </div>
</template>

<script>
export default {
  name: 'FindPw',
  data() {
    return {

    };
  },
};
</script>

<style>
</style>
