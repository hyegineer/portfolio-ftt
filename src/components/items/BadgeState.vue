<template>
  <div>
    <div
      v-if="['대기중', '보완요청'].includes(txt)"
      class="badge-state color-bd-gray"
    >
      <span class="txt">
        {{ txt }}
      </span>
    </div>
    
    <div
      v-if="txt === '신청거절'"
      class="badge-state color-solid-gray"
    >
      <span class="txt">
        {{ txt }}
      </span>
    </div>
    
    <div
      v-if="txt === '진행중'"
      class="badge-state color-gradi"
    >
      <i
        class="icon icon-check-white"
      />

      <span class="txt">
        {{ txt }}
      </span>
    </div>
    
    <div
      v-if="txt === '내용 검토중'"
      class="badge-state color-warning"
    >
      <i
        class="icon icon-check-white"
      />

      <span class="txt">
        {{ txt }}
      </span>
    </div>
    
    <div
      v-if="txt === '완료'"
      class="badge-state"
    >
      <i
        class="icon icon-check"
      />

      <span class="txt">
        {{ txt }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    txt: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
</style>