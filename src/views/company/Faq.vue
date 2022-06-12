<template>
  <div class="page company-page">
    <layout-header />
    <div class="page-container">
      <div class="company-hgrp">
        <div class="wide-panel">
          <h5 class="ttl">
            <span class="txt">자주 묻는 질문</span>
          </h5>
          <p class="ttl-sub">
            <span class="txt1">팩트시트에 대해</span><br>
            <span class="txt2">궁금한 내용을 확인하세요.</span>
          </p>
        </div>
      </div>
      <div class="company-cont-wrap">
        <div class="wide-panel">
          <div class="board-tab-all-wrap">
            <div
              v-for="(item, idx) in 5"
              :key="idx"
              class="board-cont-list-wrap"
            >
              <div
                class="board-cont-list"
                :class="{'is-active': isOpen}"
              >
                <div
                  class="board-cont-ttl-box"
                  @click="isOpen = !isOpen"
                >
                  <div class="ttl-box-left">
                    <span class="icon-box">
                      <i class="icon icon-q" />
                    </span>
                    <span class="ttl">자주 묻는 질문 제목</span>
                  </div>
                  <div class="ttl-box-right">
                    <span class="ttl-box-date">2021.00.00</span>
                    <i class="icon icon-ttl-box" />
                  </div>
                </div>
                <div class="board-cont-box">
                  <div class="q-cont-box">
                    <i class="icon icon-a" />
                    <span class="q-cont">
                      자주 묻는 질문 내용 텍스트입니다.
                      자주 묻는 질문 내용 텍스트입니다.
                      자주 묻는 질문 내용 텍스트입니다.
                      자주 묻는 질문 내용 텍스트입니다.
                      자주 묻는 질문 내용 텍스트입니다.
                    </span>
                  </div>
                </div>
              </div>
              <div class="board-cont-list-space" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <layout-footer />
  </div>
</template>

<script>
export default {
  name: 'Faq',
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style>
</style>
