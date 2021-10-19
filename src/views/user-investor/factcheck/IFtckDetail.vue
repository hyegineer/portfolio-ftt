<template>
  <!-- [D] 마이페이지 - 팩트체크-요청한 팩트체크 대기중 & 진행중 -->
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
          요청한 팩트체크
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
              <badge-state txt="대기중" />
              <badge-state txt="진행중" />

              <!-- [D] 비공개일 때만 보임 -->
              <div class="badge-secret">
                <i class="icon icon-secret" />
                <span class="txt">비공개</span>
              </div>
            </div>

            <div class="ftck-subject">
              <span class="lbel">{{ '항목명' }}</span>
              <p class="subject">
                {{ '마이페이지에서는 비공개 팩트체크 제목이' }}
              </p>
            </div>
          </div>
          <!-- // 팩트체크 진행상태 & 제목 -->

          <div class="mypboard-etc-grp">
            <span class="amount-item">
              <div class="badge-p badge-p-sm" />
              <span class="fz-13">150</span>
            </span>

            <span class="fc-gray fz-13">{{ '요청 스타트업명' }}</span>
            <span class="fc-gray-light fz-13">2021.00.00</span>
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
            
            <div class="mypboard-btns">
              <!-- 삭제 버튼 -->
              <button
                type="button"
                class="btn-txt"
                @click="$router.push('ftck-edit')"
              >
                <i class="icon icon-reply" />
                <span class="txt">수정하기</span>
              </button>
              <!-- // 삭제 버튼 -->

              <!-- 삭제 버튼 -->
              <button
                type="button"
                class="btn-txt btn-warning-txt"
                @click="confirm('해당 팩트체크건을 삭제하시겠습니까?')"
              >
                <i class="icon icon-trash" />
                <span class="txt">삭제하기</span>
              </button>
            <!-- // 삭제 버튼 -->
            </div>
          </div>
        </div>
        <!-- // 내용 -->
      </div>

      <!-- [D] 진행중일 때 보이는 영역 -->
      <article class="ftck-ing-wrap">
        <div class="article-hgrp">
          <h3 class="ttl">
            진행중인 팩트체커
          </h3>
        </div>

        <div class="ftck-ing-box">
          <div class="loader">
            Loading...
          </div>
          <span class="ttl">현재 팩트체크를 진행 중입니다.</span>
          <span class="fc-gray">팩트체커 배정 후 15일 이내(영얼일 기준)에 답변이 등록됩니다.</span>
        </div>

        <div
          class="accordion-list"
          :class="{'is-show': accordion}"
        >
          <div
            class="accordion-top" 
            @click="accordion = !accordion"
          >
            <div class="space-between">
              <div class="ftck-name-grp">
                <span class="name">팩트체커명</span>
                <div class="amount-item">
                  <div class="badge-p" />
                  <span class="amount">150</span>
                </div>
              </div>

              <div>
                <badge-rounded>최대여덟글자입력</badge-rounded>
                <badge-rounded>최대여덟글자입력</badge-rounded>
                <badge-rounded>최대여덟글자입력</badge-rounded>
                <badge-rounded>최대여덟글자입력</badge-rounded>
                <badge-rounded>최대여덟글자입력</badge-rounded>
              </div>
            </div>

            <i class="icon icon-ttl-box acdn-top-icon" />
          </div>

          <div class="accordion-down">
            <div class="caution-box">
              <span class="cb-ttl">경력사항</span>

              <ul class="ul-dash">
                <li class="list">
                  경력사항 텍스트입니다.
                </li>
                <li class="list">
                  경력사항 텍스트입니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>

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
          @click="$router.push('ftck-list')"
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
  name: 'IFtckDetail',
  data() {
    return{
      accordion: false, // 아코디언 동작 구현시 필요한 데이터
    };
  },
};
</script>

<style lang="scss" scoped>
</style>