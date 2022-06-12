<template>
  <div class="empty-wrap">
    <img
      src="@/assets/images/icon/icon-empty-data.svg"
      alt="내역없음 일러스트"
      class="empty-icon"
    >

    <!-- eslint-disable vue/no-v-html -->
    <p
      class="empty-txt"
      v-html="txt"
    >
      <!-- {{ txt }} -->
      <!-- <br>적용을 위해 v-html로 수정 -->
    </p>
  </div>
</template>

<script>
export default {
  name: 'EmptyContents',
  props: {
    txt: {
      type: String,
      default: '내역이 없습니다.',
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
