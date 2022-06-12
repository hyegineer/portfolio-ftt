<template>
  <div
    class="avatar"
    :class="{'is-lg' : lg}"
  >
    <img
      v-if="src"
      :src="src"
      alt="default profile avatar"
      class="avatar-img"
    >

    <img
      v-else-if="!src && lg"
      src="@/assets/images/dft/dft-profile.svg"
      :alt="`${src}`"
      class="avatar-img"
    >
    
    <img
      v-else-if="!src && !lg"
      src="@/assets/images/dft/dft-logo.png"
      :alt="`${src}`"
      class="avatar-img"
    >
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    lg: {
      type: Boolean,
      default: false,
    },
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
