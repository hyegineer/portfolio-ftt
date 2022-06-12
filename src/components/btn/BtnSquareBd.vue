<template>
  <button
    type="button"
    class="btn-square-bd"
    @click="click"
  >
    <slot />
  </button>
</template>

<script>
export default {
  methods: {
    click() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>