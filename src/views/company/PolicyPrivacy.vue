<template>
  <div class="page terms-page">
    <layout-header />

    <div class="page-container">
      <div class="company-hgrp">
        <div class="wide-panel">
          <h5 class="ttl">
            <span class="txt">약관</span>
          </h5>
          <p class="ttl-sub">
            <span class="txt1">팩트시트 개인정보 처리방침</span> <br>
            <span class="txt2">약관을 확인하세요.</span>
          </p>
        </div>
      </div>

      <div class="tab">
        <div class="wide-panel">
          <button
            class="tab-btn"
            @click="$router.push('/policy-guide')"
          >
            이용약관
          </button>
          <button
            class="tab-btn is-active" 
            @click="$router.push('/policy-privacy')"
          >
            개인정보처리방침
          </button>
        </div>
      </div>

      <div class="wide-panel">
        <content-privacy />
      </div>
    </div>

    <layout-footer />
  </div>
</template>

<script>
export default {
  name: 'PolicyPrivacy',
};
</script>

<style lang="scss" scoped>
</style>