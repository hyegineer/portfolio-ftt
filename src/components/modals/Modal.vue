<template>
  <div
    class="modal"
    :class="{'modal-wide': wide}"
  >
    <div class="modal-box">
      <div class="modal-hd">
        <span class="modal-ttl">{{ ttl }}</span>
      </div>

      <div class="modal-cont-wrap">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    wide: {
      type: Boolean,
      default: false,
    },
    ttl: {
      type: String,
      default: '',
    },
  },
};
</script>