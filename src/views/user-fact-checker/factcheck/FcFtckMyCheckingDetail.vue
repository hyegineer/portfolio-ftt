<template>
  <!-- [D] 마이페이지 - 팩트체크-나의 팩트체크 상세 (검토중&완료) -->
  <div class="mypage-container mypage-ftck-checking-detail-page">
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
          나의 팩트체크 상세
        </li>
      </breadcrumb>

      <h2 class="ttl">
        팩트체크
      </h2>
    </div>
    <!-- // 마이페이지 페이지 제목 -->

    <!-- 마이페이지 컨텐츠 영역 -->
    <div class="mypage-cont-wrap">
      <div class="ftck-detail-wrap">
        <!-- 제목 -->
        <div class="mypboard-detail-hd">
          <!-- 팩트체크 진행상태 & 제목 -->
          <div class="ftck-state-subject">
            <div class="ftck-state">
              <badge-state txt="내용 검토중" />
              <badge-state txt="완료" />

              <!-- [D] 비공개일 때만 보임 -->
              <div class="badge-secret">
                <i class="icon icon-secret" />
                <span class="txt">비공개</span>
              </div>
            </div>

            <div class="ftck-subject">
              <span class="lbel">{{ '항목명' }}</span>
              <p class="subject">
                {{ '비공개 팩트체크입니다.' }}
              </p>
            </div>
          </div>
          <!-- // 팩트체크 진행상태 & 제목 -->

          <div class="mypboard-etc-grp">
            <span class="amount-item">
              <div class="badge-p badge-p-sm" />
              <span class="fz-13">150</span>
            </span>

            <span class="fc-gray fz-13">
              {{ '투자기업명' }}
              <i class="icon icon-gt" />
              {{ '요청 스타트업명' }}
            </span>
            <span class="fc-gray-light fz-13">{{ '2021.00.00' }}</span>
          </div>
        </div>
        <!-- // 제목 -->

        <!-- 내용 -->
        <div class="mypboard-detail-cont">
          <div class="mypboard-cont">
            <div class="mypboard-cont-ttl">
              <span class="fc-gray-light fz-13">※ 팩트체크 요청 내용입니다.</span>
            </div>
              
            <p class="p-preline">
              좌우 패딩 40px / 상하 패딩 30px <br>
              팩트체크 요청 내용 자리입니다. <br>
              팩트체크 요청 내용 자리입니다. <br>
            </p>
          </div>
          
          <div class="mypboard-cont">
            <div class="mypboard-cont-ttl">
              <span class="fc-gray-light fz-13">※ 팩트체크 요청 내용입니다.</span>

              <div class="right-grp">
                <span class="fc-gray fz-13">팩트체커명</span>
                <span class="fc-gray-light fz-13">2021.00.00</span>
              </div>
            </div>

            <div>
              <!-- FIXME img 박스영역들 -->
            </div>

            <p class="p-preline">
              좌우 패딩 40px / 상하 패딩 30px <br>
              팩트체크 요청 내용 자리입니다. <br>
              팩트체크 요청 내용 자리입니다. <br>
            </p>
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
          @click="$router.push('ftck-my-list')"
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
</template>

<script>
export default {
  name: 'FcFtckMyCheckingDetail',
};
</script>

<style lang="scss" scoped>
</style>