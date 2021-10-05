<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    class="modal-wrapper"
    :class="{'is-show': confirmPopup.isPopupVisible}"
  >
    <span
      class="modal-light-box"
      @click="confirmPopup.onCancel"
    />

    <div
      class="modal"
      :class="{'is-show': confirmPopup.isPopupVisible}"
    >
      <div class="modal-box">
        <span
          class="modal-ttl"
          v-html="confirmPopup.title"
        />

        <span
          v-if="confirmPopup.desc"
          class="modal-dec"
          v-html="confirmPopup.desc"
        />

        <!-- 컨펌 타입일 때 버튼 영역 -->
        <div
          class="modal-btn-wrap"
        >
          <button
            type="button"
            class="btn btn-cancel"
            @click="confirmPopup.onCancel"
          >
            {{ confirmPopup.no }}
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="confirmPopup.onConfirm"
          >
            {{ confirmPopup.yes }}
          </button>
        </div>
      </div>

      <!-- 2021-02-10 수정 시작 -->
      <div
        v-if="confirmPopup.etc"
        class="alert-dialog__url-wrap"
      >
        <a
          v-for="(item, index) in confirmPopup.etc"
          :key="index"
          :href="(item.url) ? item.url: 'javascript:;'"
          class="link_url"
          v-on="item.onClick ? { click: item.onClick } : {click: confirmPopup.onCancel}"
        >{{ item.text }}</a>
      </div>
      <!-- // 2021-02-10 수정 끝 -->
    </div>
  </div>
</template>

<script>
export default {
    name: 'ConfirmDialog',
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
    data() {
        return {
            confirmPopup: this.$store.state.confirmPopup,
        };
    },
    watch: {
        '$store.state.confirmPopup': function() {
            if (this.$store.state.confirmPopup.isPopupVisible) {
                this.confirmPopup = this.$store.state.confirmPopup;
            } else {
                this.confirmPopup.isPopupVisible = false;
                setTimeout(() => { this.confirmPopup = this.$store.state.confirmPopup; }, 200);
            }
        },
    },
};
</script>

<style scoped>
</style>
