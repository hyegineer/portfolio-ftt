<template>
  <!-- [D] 마이페이지 - 팩트체크-받은팩트체크 목록 -->
  <div class="mypage-container">
    <!-- 마이페이지 페이지 제목 -->
    <div class="mypage-hgrp">
      <breadcrumb>
        <li class="txt">
          홈
        </li>
        <li class="txt">
          마이페이지
        </li>
        <li class="txt">
          팩트체크
        </li>
        <li class="txt">
          우리 회사가 받은 팩트체크
        </li>
      </breadcrumb>

      <h2 class="ttl">
        팩트체크
      </h2>
    </div>
    <!-- // 마이페이지 페이지 제목 -->

    <!-- 마이페이지 컨텐츠 영역 -->
    <div class="mypage-cont-wrap">
      <!-- 팩트체크 인트로박스 -->
      <div class="ftck-intro-box">
        <img
          src="@/assets/images/badge/badge-check.svg"
          alt="check!"
          class="check-badge"
        >
        <h3 class="ttl">
          <span class="ttl-lg point-color">{{ '주식회사 팩트컴퍼니' }}</span> 기업은 <br>
          총 <span class="point-color">10건</span>의 팩트체크 요청을 받았습니다.
        </h3>
        
        <div class="inp-grp inp-sch-grp">
          <input
            v-model="keyword"
            type="text"
            class="inp inp-strong"
            placeholder="제목/내용을 검색하세요."
          >
          <button
            v-if="keyword"
            type="button"
            class="inp-del-btn"
            @click="keyword = ''"
          >
            <span class="is-voice-only">검색어 지우기</span>
          </button>
          <button
            type="button"
            class="inp-sch-btn"
          >
            <span class="is-voice-only">검색하기</span>
          </button>
        </div>
      </div>
      <!-- // 팩트체크 인트로박스 -->

      <div class="ftck-list-grp">
        <div class="ftck-list" />
      </div>
    </div>
    <!-- // 마이페이지 컨텐츠 영역 -->
  </div>
</template>

<script>
export default {
  name: 'SFtckList',
  data() {
    return{
      keyword: null,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>