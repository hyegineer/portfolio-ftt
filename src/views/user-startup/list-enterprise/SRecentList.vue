<template>
  <!-- [D] 마이페이지 - 최근조회한기업 -->
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
          최근 조회한 기업
        </li>
      </breadcrumb>
      <h2 class="ttl">
        최근 조회한 기업
      </h2>
    </div>
    <!-- // 마이페이지 페이지 제목 -->

    <div class="mypage-cont-wrap">
      <!-- 리스트 -->
      <div class="card-grid-grp-ttl">
        <p class="txt">
          총 <span class="bold">15</span>개
        </p>
      </div>

      <!-- 등록된 기업이 있을 때 -->
      <div class="card-grid-grp">
        <div
          v-for="(item, index) in 1"
          :key="index"
          class="card-grid"
        >
          <!-- FIXME: 채팅아이콘, 최근조회일 추가해야함 -->
          <div
            class="card"
            @click="window.alert('이동~')"
          >
            <div class="card-thumb">
              <thumbnail />
              <span class="ribbon">정보 업데이트</span>
              <avatar />
            </div>

            <ul class="card-subtxt-grp">
              <li class="card-subtxt-list">
                기업규모
              </li>
              <li class="card-subtxt-list">
                산업분류
              </li>
              <li class="card-subtxt-list">
                산업분야
              </li>
            </ul>

            <h6 class="card-name">
              주식회사 팩트컴퍼니
            </h6>

            <ul class="card-tag-grp">
              <li class="card-tag-list">
                #태그텍스트여덟자
              </li>
              <li class="card-tag-list">
                #태그텍스트여덟자
              </li>
              <li class="card-tag-list">
                #태그텍스트여덟자
              </li>
              <li class="card-tag-list">
                #태그텍스트여덟자
              </li>
              <li class="card-tag-list">
                #태그텍스트여덟자
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 등록된 기업이 없을 때 -->
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
  </div>
</template>

<script>
export default {
  name: 'SRecentList',
};
</script>

<style lang="scss" scoped>
</style>