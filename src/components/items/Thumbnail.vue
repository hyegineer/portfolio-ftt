<template>
  <figure
    class="thumbnail"
  >
    <div class="thumbnail-ratio">
      <img
        v-if="src"
        :src="src"
        alt="default thumbnail"
        class="thumbnail-img"
      >

      <img
        v-if="!src"
        src="@/assets/images/dft/dft-thumb.svg"
        :alt="`${src}`"
        :onerror="`this.src='${onerrorSrc}'`"
        class="thumbnail-img"
      >
    </div>
  </figure>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    src: {
      type: String,
      default: null,
    },
  },
  data() {
    return{
      avatarImg: true,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
