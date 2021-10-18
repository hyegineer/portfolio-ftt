<template>
  <!-- [D] 마이페이지 - 내정보 -->
  <div
    mypage="myinfo-page"
    class="mypage-container"
  >
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
          내 정보
        </li>
      </breadcrumb>

      <h2 class="ttl">
        내 정보
      </h2>
    </div>
    <!-- // 마이페이지 페이지 제목 -->

    <!-- 마이페이지 컨텐츠 영역 -->
    <div class="mypage-cont-wrap">
      <div class="mypage-card">
        <div class="name-box">
          <p class="name">
            <b class="bold-txt">김철수</b>님의<br>계정 정보입니다.
          </p>
          <btn-bd-dark
            class="btn-sm btn-edit"
            @click="$router.push('myinfo-edit')"
          >
            수정하기
          </btn-bd-dark>
        </div>
        <div class="info-box">
          <div class="info-grp">
            <span class="info-label">회원형태</span>
            <span class="info">
              스타트업
              <span class="badge">대표</span>
            </span>
          </div>
          <div class="info-grp">
            <span class="info-label">기업명</span>
            <span class="info">
              주식회사 팩트컴퍼니
            </span>
          </div>
          <div class="info-grp">
            <span class="info-label">기업 고유 아이디</span>
            <span class="info">
              abcd1234
            </span>
          </div>
          <div class="info-grp">
            <span class="info-label">이름</span>
            <span class="info">
              김철수
            </span>
          </div>
          <div class="info-grp">
            <span class="info-label">이메일</span>
            <span class="info">
              test@test.com
            </span>
          </div>
          <div class="info-grp">
            <span class="info-label">휴대폰</span>
            <span class="info">
              010-1234-5678
            </span>
          </div>
          <button
            type="button"
            class="btn-txt btn-gray-txt"
          >
            <i class="icon icon-exit" />
            <span
              class="txt"
              @click="$router.push('myinfo-leave')"
            >회원탈퇴</span>
          </button>
        </div>
      </div>
    </div>
    <!-- // 마이페이지 컨텐츠 영역 -->
  </div>
</template>

<script>
export default {
  name: 'SMyinfoMain',
};
</script>

<style lang="scss" scoped>
</style>
