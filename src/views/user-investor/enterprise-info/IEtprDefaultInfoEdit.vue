<template>
  <!-- [D] 마이페이지 - 기업정보-기본정보 수정 -->
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
          기업정보
        </li>
        <li class="txt">
          기본정보 수정
        </li>
      </breadcrumb>

      <h2 class="ttl">
        기업정보
      </h2>
    </div>
    <!-- // 마이페이지 페이지 제목 -->

    <!-- 마이페이지 컨텐츠 영역 -->
    <div class="mypage-cont-wrap">
      <!-- 1. 기업 투자자 기본정보 수정 -->
      <div class="mypage-common-card">
        <div class="cont-hgrp">
          <p class="ttl">
            기본정보 수정
          </p>
          <p class="ttl-sub">
            기업 프로필의 기본정보를 수정합니다.
          </p>
        </div>
      </div>
      <!-- // 1. 기업 투자자 기본정보 수정 -->

      <!-- 2. 개인 투자자 기본정보 수정 -->
      <div class="mypage-common-card">
        <div class="cont-hgrp">
          <p class="ttl">
            기본정보 수정
          </p>
        </div>
      </div>
      <!-- // 2. 개인 투자자 기본정보 수정 -->
    </div>
  </div>
  <!-- // 마이페이지 컨텐츠 영역 -->
</template>

<script>
export default {
  name: 'IEtprDefaultInfoEdit',
};
</script>

<style lang="scss" scoped>
</style>