<template>
  <!-- [D] 문의하기 상세 (회원만 열람가능) -->
  <div class="page inquiry-detail-page">
    <layout-header />

    <div class="page-container">
      <div class="company-hgrp">
        <div class="wide-panel">
          <h5 class="ttl">
            <span class="txt">1:1문의</span>
          </h5>
        </div>
      </div>

      <div class="inquiry-history-detail-wrap">
        <div class="wide-panel">
          <!-- 제목 -->
          <div class="board-detail-hd">
            <span class="bhd-cat">카테고리명</span>
            <div class="bhd-subject-grp">
              <h3 class="bhd-subject">
                1:1문의 제목 텍스트입니다.
              </h3>

              <div class="bhd-etc-grp">
                <!-- [D] 답변완료시 is-active 클래스 추가 -->
                <span class="badge-qa-state">답변대기</span>

                <span class="board-etc-txt">글번호 000</span>
                <span class="board-etc-txt">2021.00.00</span>
              </div>
            </div>
          </div>
          <!-- // 제목 -->

          <!-- 내용 -->
          <div class="board-detail-cont">
            <div class="bcont">
              <p class="p-preline">
                문의내용 텍스트입니다.
              </p>
            </div>

            <div class="bcont">
              <p class="bcont-ttl">
                <span class="bold">팩트시트 답변</span>

                <span class="board-etc-txt">2021.00.00</span>
              </p>

              <p class="p-preline">
                답변 대기중입니다.
                dfsdfsdfsdf

                ggdgsd
                dfsdfsdfsdf
                sdfsdfsdfsdfsd
              </p>
            </div>
          </div>
          <!-- // 내용 -->

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
              @click="$router.push('/inquiry-history')"
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
      </div>
    </div>

    <layout-footer />
  </div>
</template>

<script>
export default {
  name: 'InquiryHistoryDetail',
};
</script>

<style lang="scss" scoped>
</style>