<template>
  <div class="badge-rounded">
    <span class="txt">
      <slot />
    </span>
    <button
      v-if="removable"
      type="button"
      class="btn"
      @click="click"
    >
      <i class="icon" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    removable: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    click() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>