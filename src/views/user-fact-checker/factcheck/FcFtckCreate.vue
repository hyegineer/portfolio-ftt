<template>
  <!-- [D] 마이페이지 - 팩트체크-팩트체크 작성 -->
  <div
    mypage="ftck-create-page"
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
          팩트체크 작성
        </li>
      </breadcrumb>

      <h2 class="ttl">
        팩트체크
      </h2>
    </div>
    <!-- // 마이페이지 페이지 제목 -->

    <!-- 마이페이지 컨텐츠 영역 -->
    <div class="mypage-cont-wrap">
      <!-- 팩트체크 작성 - 주의사항 설명박스 -->
      <div class="mypage-ftck-container ftck-caution-box">
        <div class="ftck-cb-ttl">
          <i class="icon icon-i-green" />
          <span class="cb-ttl">주의사항</span>
        </div>

        <ul class="ul-dash">
          <li class="list">
            요청 항목별로 소모되는 포인트가 상이합니다.
          </li>
          <li class="list">
            팩트체커 선택 완료 시, 포인트가 차감됩니다.
          </li>
          <li class="list">
            팩트체커 선택이 완료되면 요청 내용 수정이 불가합니다.
          </li>
        </ul>
      </div>
      <!-- // 팩트체크 작성 - 주의사항 설명박스 -->
      
      <!-- 팩트체크 작성 - 팩트체크 내용 -->
      <div class="mypage-ftck-container ftck-detail-wrap">
        <!-- 제목 -->
        <div class="mypboard-detail-hd">
          <!-- 팩트체크 진행상태 & 제목 -->
          <div class="ftck-state-subject">
            <div class="ftck-state">
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
        </div>
        <!-- // 내용 -->
      </div>
      <!-- // 팩트체크 작성 - 팩트체크 내용 -->

      <!-- 팩트체크 작성 - 작성 폼 -->
      <div class="mypage-ftck-container mypage-common-card">
        <div class="big-ttl-avatar-hd">
          <div class="big-ttl-grp">
            <h3 class="cont-big-ttl">
              선택한 기업의 <span class="underline">팩트체크를 작성</span>합니다 <br>
              정확한 내용을 작성해주세요.
            </h3>
          </div>

          <div class="avatar-with-name">
            <avatar />
            <div class="name-grp">
              <span class="name">
                주식회사 팩트컴퍼니
              </span>
    
              <ul class="name-subtxt-grp">
                <li class="name-subtxt-list">
                  기업규모
                </li>
                <li class="name-subtxt-list">
                  산업분류
                </li>
                <li class="name-subtxt-list">
                  산업분야
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <form>
          <fieldset>
            <h3 class="form-ttl">
              작성 내용
            </h3>

            <div class="form-item">
              <textarea
                class="inp"
                cols="30"
                rows="20"
                placeholder="내용 입력"
              />
            </div>

            <div
              class="lbel-inp-grp"
            >
              <label class="lbel">영상 링크 (선택)</label>

              <div class="add-inp-grp">
                <div class="inp-grp inp-icon-grp">
                  <i class="icon icon-link" />
                  <input
                    type="text"
                    class="inp"
                    placeholder="영상 링크 삽입"
                  >
                </div>

                <div class="inp-grp inp-btn-grp">
                  <div class="inp-grp inp-icon-grp">
                    <i class="icon icon-link" />
                    <input
                      type="text"
                      class="inp"
                      placeholder="영상 링크 삽입"
                    >
                  </div>
              
                  <btn-square-bd class="del-btn">
                    <span class="is-voice-only">항목 삭제</span>
                  </btn-square-bd>
                </div>

                <!-- 여기에 추가되어야함 -->
              </div>

              <button
                type="button"
                class="add-btn btn-txt"
              >
                <span class="txt">+ 영상 추가하기</span>
              </button>
            </div>
          </fieldset>
        </form>
        
        <!-- [D] 작성내용 다 기재되면 disabled 해제 -->
        <btn-solid
          class="btn-lg"
          position="single-centered"
          disabled
          @click="openModal('completeFtck')"
        >
          <span class="txt">작성완료</span>
        </btn-solid>
      </div>
      <!-- // 팩트체크 작성 - 작성 폼 -->
    </div>
    <!-- // 마이페이지 컨텐츠 영역 -->
    
    <modal-dialog>
      <modal-light-box @click="closeModal" />

      <!-- [modal] 팩트체크 작성완료 -->
      <modal
        :class="{'is-show': $store.state.modal.visible && $store.state.modal.type === 'completeFtck'}"
        wide
        ttl="팩트체크 작성완료"
      >
        <div class="modal-cont">
          <p class="modal-cont-txt">
            작성완료시, 작성된 팩트체크 내용은 수정이 불가합니다. <br>
            계속 진행하시겠습니까?
          </p>

          <div class="check-lbel-ment">
            <input
              id="agreeCompleteFtck"
              type="checkbox"
              class="is-none check-switch"
            >
            <label
              for="agreeCompleteFtck"
              class="check-onoff"
            />

            <label
              for="agreeCompleteFtck"
              class="ment dark-ment"
            >위 내용을 확인하였으며, 작성을 완료합니다.</label>
          </div>
        </div>

        <div class="modal-btn-wrap">
          <btn-bd-light
            class="btn-fb btn-md btn-cancel"
            @click="closeModal"
          >
            아니오
          </btn-bd-light>
          <btn-solid-dark class="btn-md">
            예
          </btn-solid-dark>
        </div>
      </modal>
      <!-- // [modal] 팩트체크 신청하기 -->
    </modal-dialog>
  </div>
</template>

<script>
export default {
  name: 'FcFtckCreate',
};
</script>

<style lang="scss" scoped>
</style>