<template>
  <li
    class="slct-opts-list"
    @click="click"
  >
    <slot />
  </li>
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