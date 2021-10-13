<template>
  <!-- [D] 마이페이지 - 쪽지함 상세 -->
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
            쪽지 상세보기
          </li>
        </breadcrumb>

        <h2 class="ttl">
          쪽지함
        </h2>
      </div>
      <!-- // 마이페이지 페이지 제목 -->

      <!-- 마이페이지 컨텐츠 영역 -->
      <div class="mypage-cont-wrap">
        <div class="nboard-detail-wrap">
          <!-- 제목 -->
          <div class="mypboard-detail-hd">
            <!-- 회사이름 -->
            <div class="avatar-with-name">
              <avatar />
              <div class="name-grp">
                <span class="name-user-type">개인 투자자</span>
                <span class="name">
                  {{ '투자자명' }}
                </span>
              </div>
            </div>
            <!-- // 회사이름 -->

            <div class="mypboard-etc-grp">
              <span class="fc-gray fz-13">받은 쪽지</span>
              <span class="fc-gray-light fz-13">2021.00.00</span>
            </div>
          </div>
          <!-- // 제목 -->

          <!-- 내용 -->
          <div class="mypboard-detail-cont">
            <div class="mypboard-cont">
              <p class="p-preline">
                문의내용 텍스트입니다.
              </p>
            </div>
            
            <div class="mypboard-btns">
              <!-- 삭제 버튼 -->
              <button
                type="button"
                class="btn-txt"
                @click="$router.push('note-create')"
              >
                <i class="icon icon-reply" />
                <span class="txt">답장하기</span>
              </button>
              <!-- // 삭제 버튼 -->

              <!-- 삭제 버튼 -->
              <button
                type="button"
                class="btn-txt btn-warning-txt"
              >
                <i class="icon icon-trash" />
                <span class="txt">삭제하기</span>
              </button>
            <!-- // 삭제 버튼 -->
            </div>
          </div>
        <!-- // 내용 -->
        </div>

        <!-- 이전 / 목록 / 다음 -->
        <div class="board-detail-nav">
          <div class="bnav-ctrl bnav-ctrl-prev">
            <btn-square-bd @click="window.alert('이전글로 이동')">
              <i class="icon icon-page-prev" />
            </btn-square-bd>

            <span class="txt">이전글</span>
          </div>

          <btn-bd
            class="btn-sm bnav-ctrl-list"
            @click="$router.push('note-list')"
          >
            목록으로
          </btn-bd>
            
          <div class="bnav-ctrl bnav-ctrl-next">
            <span class="txt">다음글</span>

            <btn-square-bd @click="window.alert('다음글로 이동')">
              <i class="icon icon-page-next" />
            </btn-square-bd>
          </div>
        </div>
        <!-- // 이전 / 목록 / 다음 -->
      </div>
    <!-- // 마이페이지 컨텐츠 영역 -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'SNoteDetail',
};
</script>

<style lang="scss" scoped>
</style>