<template>
  <div class="mb-header-wrap">
    <div
      class="mb-header type-ttl"
      :class="{'type-ttl-left' : titleLeft}"
    >
      <slot name="mb-hd-left">
        <!-- 왼쪽 정렬이면 안보임, only right 설정돼어있으면 안보임 -->
        <mb-hd-btn
          v-if="!titleLeft && !onlyRight"
          back
        />
      </slot>

      <h2
        class="mb-hd-title"
        :class="{'type-lg': titleLg}"
      >
        {{ title }}
      </h2>

      <div class="mb-hd-right">
        <slot name="mb-hd-right" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: null,
        },
        titleLg: { // 타이틀 font-size가 클 때
            type: Boolean,
            default: false,
        },
        titleLeft: { // 타이틀이 왼쪽정렬일 때
            type: Boolean,
            default: false,
        },
        onlyRight: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style>
</style>
