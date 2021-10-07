<template>
  <div class="page company-page">
    <layout-header />
    <div class="page-container">
      <div class="company-hgrp">
        <div class="wide-panel">
          <h5 class="ttl">
            공지사항
          </h5>
          <p class="ttl-sub">
            팩트시트의 새로운 소식과 <br>정보를 알려드립니다.
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
                    <span class="no">10</span>
                    <span class="ttl">공지사항 제목</span>
                  </div>
                  <div class="ttl-box-right">
                    <span class="ttl-box-date">2021.00.00</span>
                    <i class="icon ttl-box-icon" />
                  </div>
                </div>
                <div class="board-cont-box">
                  <div class="q-cont-box">
                    <p class="q-cont">
                      공지사항 내용 텍스트입니다.
                      공지사항 내용 텍스트입니다.
                    </p>
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
  name: 'Notice',
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style>
</style>
