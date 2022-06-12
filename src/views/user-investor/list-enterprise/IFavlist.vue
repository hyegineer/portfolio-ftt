<template>
  <!-- [D] 마이페이지 - 관심기업 -->
  <div class="mypage-container mypage-white-container">
    <div class="mypage-white-panel">
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
            관심기업
          </li>
        </breadcrumb>
        <h2 class="ttl">
          관심기업
        </h2>
      </div>
      <!-- // 마이페이지 페이지 제목 -->

      <!-- 마이페이지 컨텐츠 영역 -->
      <div class="mypage-cont-wrap">
        <!-- 리스트 -->
        <div class="card-grid-grp-ttl">
          <p class="txt">
            총 <span class="bold">15</span>개
          </p>
        </div>

        <!-- 기업이 있을 때 -->
        <div class="card-grid-grp">
          <div
            v-for="(item, index) in 1"
            :key="index"
            class="card-grid"
          >
            <div
              class="card"
              @click="$router.push('/etpr-profile-info')"
            >
              <div class="card-thumb">
                <thumbnail />
                <span class="ribbon">정보 업데이트</span>
                <div 
                  class="card-thumb-avatar"
                  @click.stop="alert('해당 회사에게 쪽지 보내기 창이 열림 (확인 필요)')"
                >
                  <i class="icon icon-msg-white" />
                  <avatar />
                </div>
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

              <span class="fc-gray-light fz-12">최근 조회일: 2020.00.00</span>
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
  </div>
</template>

<script>
export default {
  name: 'IFavlist',
};
</script>

<style lang="scss" scoped>
</style>
