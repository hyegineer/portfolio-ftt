<template>
  <div class="page auth-page">
    <layout-header />
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
