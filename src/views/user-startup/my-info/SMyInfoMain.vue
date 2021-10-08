<template>
  <!-- [D] 마이페이지 - 내정보 -->
  <div class="page myinfo-page">
    <div class="wide-panel">
      <div class="name-box">
        <p class="name">
          김철수님의<br>계정 정보입니다.
        </p>
        <btn-bd-dark
          class="btn-sm btn-edit"
          @click="window.alert('수정하기 버튼을 클릭하셨습니다.')"
        >
          수정하기
        </btn-bd-dark>
      </div>
      <div class="info-box" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SMyInfoMain',
};
</script>

<style lang="scss" scoped>
</style>
