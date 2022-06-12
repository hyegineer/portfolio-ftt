<template>
  <div
    v-on-clickaway="away"
    class="custom-slct"
  >
    <div
      v-on-clickaway="away"
      class="slct" 
      :class="{'is-focus': visible, 'is-selected': selected}"
      @click="showOpt"
    >
      <slot name="select" />
    </div>
    <!-- // 셀렉트 -->

    <ul
      class="slct-opts-grp"
      :class="{'is-show': visible }"
    >
      <slot name="options" />
    </ul>
    <!-- // 셀렉트 옵션 -->
  </div>
</template>

<script>
export default {
  props: {
    selected: {
      type: String,
      default: '',
    },
  },
  data() {
    return{
      visible: false, 
      value: '', // 선택된 값
    };
  },
  methods: {
    showOpt() {
      this.visible = true;
    },
    away() {
      this.visible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>