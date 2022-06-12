<template>
  <!-- [D] 마이페이지 - 팩트체크-요청한 팩트체크 검토중 & 진행완료 -->
  <div
    mypage="ftck-checking-detail-page"
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

            <span class="fc-gray fz-13">{{ '요청 스타트업명' }}</span>
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

            <div class="img-box-grp">
              <div class="img-box">
                <figure class="img-box-figure">
                  <!-- [D] 이미지 있을 때 아래 img 태그 보임 -->
                  <img
                    src="@/assets/images/dft/exvertical.png"
                    alt=""
                    class="img-input"
                  >

                  <!-- [D] 이미지 없을 때 아래 span 태그 보임 -->
                  <!-- <span class="img-box-txt">img</span> -->
                </figure>

                <!-- [D] 확대할 수 있는 이미지일 경우 아래 아이콘 보임 -->
                <i
                  class="icon icon-zoom" 
                  @click="openModal('detailImg')"
                />
              </div>
              <div class="img-box">
                <figure class="img-box-figure">
                  <!-- [D] 이미지 있을 때 아래 img 태그 보임 -->
                  <!-- <img
                    src="@/assets/images/dft/ex.jpg"
                    alt=""
                    class="img-input"
                  > -->

                  <!-- [D] 이미지 없을 때 아래 span 태그 보임 -->
                  <span class="img-box-txt">img</span>
                </figure>

                <!-- [D] 확대할 수 있는 이미지일 경우 아래 아이콘 보임 -->
                <!-- <i
                  class="icon icon-zoom" 
                  @click="openModal('detailImg')"
                /> -->
              </div>
            </div>

            <p class="p-preline">
              좌우 패딩 40px / 상하 패딩 30px <br>
              팩트체크 요청 내용 자리입니다. <br>
              팩트체크 요청 내용 자리입니다. <br>
            </p>
          </div>
            
          <!-- [D] 팩트체크의 진행상태가 검토중일 때만 보이는 영역 -->
          <article class="guide-box guide-verti-box">
            <div class="guide-box-cont">
              <h6 class="lbel">
                검토여부 선택
              </h6>
              <p class="txt">
                팩트체커가 답변을 등록한 후 24시간 이내에 검토여부를 결정하지 않을경우, 자동으로 완료처리가 됩니다. <br>
                내용이 마음에 들지 않거나, 정확하지 않은 정보로 판단될 경우 '보완요청' 버튼을 눌러주세요.
              </p>
            </div>

            <div class="btn-grp">
              <btn-solid-grayblue
                class="btn-sm"
                @click="$router.push('ftck-checking-edit')"
              >
                보완요청
              </btn-solid-grayblue>
              <btn-solid-dark
                class="btn-sm"
                @click="confirm('검토완료 처리를 하시겠습니까?')"
              >
                검토완료
              </btn-solid-dark>
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
    
    <modal-dialog>
      <modal-light-box @click="closeModal" />

      <!-- [modal] 이미지 자세히보기 모달 -->
      <div
        class="modal modal-detail-img"
        :class="{'is-show': $store.state.modal.visible && $store.state.modal.type === 'detailImg'}"
      >
        <button
          type="button"
          class="btn close-btn"
          @click="closeModal"
        >
          <i class="icon icon-close-shadow" />
          <span class="is-voice-only">닫기</span>
        </button>
        <div class="img-box">
          <figure class="img-box-figure">
            <!-- [D] 이미지 있을 때 아래 img 태그 보임 -->
            <img
              src="@/assets/images/dft/exvertical.png"
              alt=""
              class="img-input"
            >

            <!-- [D] 이미지 없을 때 아래 span 태그 보임 -->
            <!-- <span class="img-box-txt">img</span> -->
          </figure>
        </div>
      </div>
      <!-- // [modal] 이미지 자세히보기 모달 -->
    </modal-dialog>
  </div>
</template>

<script>
export default {
  name: 'IFtckCheckingDetail',
};
</script>

<style lang="scss" scoped>
</style>