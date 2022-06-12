<template>
  <!-- [D] 마이페이지 - 팩트체크-전체 팩트체크 상세 -->
  <div
    mypage="ftck-total-detail-page"
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
              <badge-state txt="대기중" />
              <badge-state txt="배정완료" />

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
          
          <!-- [D] 배정완료일 시 안보임 -->
          <article class="colored-ment-box">
            <img
              src="@/assets/images/img/img-checker-man.svg"
              alt="img-checker-man"
              class="img-checker-man"
            >

            <div class="left-cont">
              <div class="ment-box">
                <h4 class="ttl">
                  투자자의 요청을 팩트체크 해주세요!
                </h4>
                <p class="desc">
                  투자자들이 당신의 팩트체크를 기다리고 있습니다.
                </p>
              </div>
            </div>

            <div class="right-cont">
              <button
                type="button"
                class="btn-txt"
                @click="openModal('applyFtck')"
              >
                <span class="txt">팩트체크 신청하기</span>
                <i class="icon icon-gt-white" />
              </button>
            </div>
          </article>
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
          @click="$router.push('ftck-total-list')"
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
    
    <modal-dialog>
      <modal-light-box @click="closeModal" />

      <!-- [modal] 팩트체크 신청하기 -->
      <modal
        :class="{'is-show': $store.state.modal.visible && $store.state.modal.type === 'applyFtck'}"
        wide
        ttl="팩트체크 신청하기"
      >
        <div class="modal-cont">
          <p class="modal-cont-txt">
            신청이 완료되면 취소가 불가하며, <br>
            15일 이내 팩트체크를 진행해야 합니다.
          </p>
        </div>

        <div class="modal-btn-wrap">
          <btn-bd-light
            class="btn-fb btn-md btn-cancel"
            @click="closeModal"
          >
            아니오
          </btn-bd-light>
          <btn-solid-dark class="btn-md">
            신청하기
          </btn-solid-dark>
        </div>
      </modal>
      <!-- // [modal] 팩트체크 신청하기 -->
    </modal-dialog>
  </div>
</template>

<script>
export default {
  name: 'FcFtckMyDetail',
};
</script>

<style lang="scss" scoped>
</style>