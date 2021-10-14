<template>
  <!-- [D] 대시보드-투자기업에관심을가진투자자 -->
  <div class="mypage-container mypage-dashboard-container">
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
          대시보드
        </li>
        <li class="txt">
          우리 기업에 관심을 가진 투자자
        </li>
      </breadcrumb>

      <h2 class="ttl">
        대시보드
      </h2>
    </div>
    <!-- // 마이페이지 페이지 제목 -->

    <!-- 마이페이지 컨텐츠 영역 -->
    <div class="mypage-cont-wrap">
      <div class="big-ttl-grp mb-add">
        <h3 class="cont-big-ttl">
          우리 기업에 관심을 가진 투자자
        </h3>
      </div>

      <!-- 리스트 -->
      <div class="card-grid-grp-ttl">
        <p class="txt">
          총 <span class="bold">15</span>개
        </p>
      </div>

      <!-- 기업이 있을 때 -->
      <div class="card-grid-grp">
        <div
          v-for="(item, index) in 10"
          :key="index"
          class="card-grid"
        >
          <!-- FIXME: 채팅아이콘, 최근조회일 추가해야함 -->
          <div class="card">
            <div class="card-thumb">
              <thumbnail />
              <avatar />
            </div>

            <span class="card-user-type">
              개인 투자자
            </span>

            <h6 class="card-name">
              투자자명
            </h6>
          </div>
        </div>
      </div>

      <!-- 기업이 없을 때 -->
      <empty-contents txt="목록이 없습니다." />
      <!-- // 리스트 -->

      <!-- 페이지네이션 -->
      <div class="pagination">
        <btn-square-bd @click="window.alert('이전 버튼 누르기')">
          <i class="icon icon-page-prev" />
          <span class="is-voice-only">이전</span>
        </btn-square-bd>

        <button
          type="button"
          class="num-btn is-active"
        >
          1
        </button>
        
        <button
          type="button" 
          class="num-btn"
        >
          2
        </button>
        
        <button
          type="button" 
          class="num-btn"
        >
          3
        </button>
        
        <button
          type="button" 
          class="num-btn"
        >
          4
        </button>

        <button
          type="button" 
          class="num-btn"
        >
          ···
        </button>
        
        <button
          type="button" 
          class="num-btn"
        >
          10
        </button>
        
        <btn-square-bd @click="window.alert('다음 버튼 누르기')">
          <i class="icon icon-page-next" />
          <span class="is-voice-only">다음</span>
        </btn-square-bd>
      </div>
      <!-- // 페이지네이션 -->
    </div>
    <!-- // 마이페이지 컨텐츠 영역 -->
  </div>
</template>

<script>
export default {
  name: 'SDashboardInvestorList',
};
</script>

<style lang="scss" scoped>
</style>