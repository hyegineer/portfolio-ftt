<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    class="modal-wrapper"
    :class="{'is-show': $store.state.alertPopup.isPopupVisible}"
  >
    <span
      class="modal-light-box"
      @click="$store.state.alertPopup.onClose"
    />

    <div
      class="modal"
      :class="{'is-show': $store.state.alertPopup.isPopupVisible}"
    >
      <div class="modal-box">
        <span
          class="modal-ttl-dec"
          v-html="$store.state.alertPopup.title"
        />

        <span
          v-if="$store.state.alertPopup.desc"
          class="modal-dec"
          v-html="$store.state.alertPopup.desc"
        />

        <div
          class="modal-btn-wrap"
        >
          <button
            ref="onClose"
            type="button"
            class="btn-solid-dark btn-md btn-full"
            @click="$store.state.alertPopup.onClose"
          >
            <span>확인</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlertDialog',
  props: {
    title: {
      type: String,
      default: '', // 기본 알러트창 입니다.
    },
    desc: {
      type: String,
      default: '', // 부가 설명 텍스트가 들어가는 자리입니다.
    },
  },
  watch: {
    '$store.state.alertPopup.isPopupVisible': function() {
      if (this.$store.state.alertPopup.isPopupVisible) {
        setTimeout(() => this.$refs.onClose.focus(), 0);
      }
    },
  },
};
</script>

<style scoped>
</style>
