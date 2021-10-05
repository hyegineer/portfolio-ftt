<template>
  <div class="avatar">
    <img
      v-if="src"
      :src="src"
      alt="default profile avatar"
      class="avatar-img"
    >

    <!-- <img
      v-if="!src"
      src="@/assets/images/img/profile-dft.svg"
      :alt="`${src}`"
      class="avatar-img"
    > -->
  </div>
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
