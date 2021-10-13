<template>
  <!-- [D] 마이페이지 - 기업정보-기본정보 -->
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
          기본정보
        </li>
      </breadcrumb>

      <h2 class="ttl">
        기업정보
      </h2>
    </div>
    <!-- // 마이페이지 페이지 제목 -->

    <!-- 마이페이지 컨텐츠 영역 -->
    <div class="mypage-cont-wrap">
      <!-- 1. 기업 투자자 기본정보 -->
      <div class="mypage-common-card">
        <div class="cont-hgrp">
          <p class="ttl">
            기본정보
          </p>
          <p class="ttl-sub">
            기업 프로필의 기본정보입니다.
          </p>
        </div>

        <article class="guide-box">
          <div class="guide-box-cont">
            <h6 class="lbel">
              안내사항
            </h6>
            <p class="txt">
              원활한 투자를 위해 모든 기업정보를 작성해주세요.
            </p>
          </div>

          <div class="btn-grp">
            <btn-bd-light
              class="btn-sm"
              @click="$router.push('etpr-default-info-edit')"
            >
              수정하기
            </btn-bd-light>
          </div>
        </article>
      </div>
      <!-- // 1. 기업 투자자 기본정보 -->
      
      <!-- 2. 개인 투자자 기본정보 -->
      <div class="mypage-common-card">
        <div class="cont-hgrp">
          <p class="ttl">
            기본정보
          </p>
          <p class="ttl-sub">
            기업 프로필의 기본정보입니다.
          </p>
        </div>

        <article class="guide-box">
          <div class="guide-box-cont">
            <h6 class="lbel">
              안내사항
            </h6>
            <p class="txt">
              원활한 투자를 위해 모든 기업정보를 작성해주세요.
            </p>
          </div>

          <div class="btn-grp">
            <btn-bd-light
              class="btn-sm"
              @click="$router.push('etpr-default-info-edit')"
            >
              수정하기
            </btn-bd-light>
          </div>
        </article>
      </div>
      <!-- // 2. 개인 투자자 기본정보 -->
    </div>
    <!-- // 마이페이지 컨텐츠 영역 -->
  </div>
</template>

<script>
export default {
  name: 'IEtprDefaultInfo',
};
</script>

<style lang="scss" scoped>
</style>