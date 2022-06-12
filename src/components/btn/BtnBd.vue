<template>
  <button
    type="button"
    class="btn-bd"
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
