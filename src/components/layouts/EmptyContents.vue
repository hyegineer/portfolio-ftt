<template>
  <div class="empty-wrap">
    <!-- <img
      src="@/assets/images/icon/icon-empty.svg"
      alt="돋보기 아이콘"
      class="empty-icon"
    > -->
    <p class="empty-txt">
      {{ txt }}
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
