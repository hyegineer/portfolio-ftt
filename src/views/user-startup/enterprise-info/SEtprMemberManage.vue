<template>
  <!-- [D] 마이페이지 - 기업정보-구성원관리 -->
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
          기업정보
        </li>
        <li class="txt">
          구성원 관리
        </li>
      </breadcrumb>

      <h2 class="ttl">
        기업정보
      </h2>
    </div>
    <!-- // 마이페이지 페이지 제목 -->

    <!-- 마이페이지 컨텐츠 영역 -->
    <div class="mypage-cont-wrap">
      <div class="mypage-common-card">
        <div class="cont-hgrp">
          <p class="ttl">
            구성원 관리
          </p>
          <p class="ttl-sub">
            기업의 구성원을 관리합니다.
          </p>
        </div>

        <article class="guide-box">
          <div class="guide-box-cont">
            <h6 class="lbel">
              안내사항
            </h6>
            <p class="txt">
              기업 프로필에 '구성원'으로 노출됩니다. 
            </p>
          </div>

          <div class="btn-grp">
            <btn-solid-grayblue
              class="btn-sm"
              @click="openModal('addMember')"
            >
              구성원 추가
            </btn-solid-grayblue>
            <btn-bd-light
              class="btn-sm"
              @click="openModal('openSetting')"
            >
              항목 공개 설정
            </btn-bd-light>
          </div>
        </article>

        <div class="member-list-grp-ttl">
          <p class="txt">
            총 <span class="bold">0</span>명
          </p>
        </div>

        <!-- 구성원이 있을 때 -->
        <div class="member-list-grp">
          <div
            v-for="(item, index) in 5"
            :key="index"
            class="member-list"
          >
            <avatar />
            <article class="member-info">
              <div class="account-info">
                <h5 class="name">
                  {{ '김철수' }}
                </h5>
                <span class="mail">{{ 'email@email.com' }}</span>
                <dl class="dlist">
                  <dt class="lbel">
                    키포인트
                  </dt>
                  <dd class="txt">
                    {{ '키포인트 텍스트' }}
                  </dd>
                </dl>
              </div>

              <ul class="ul-bullet">
                <li class="list">
                  {{ '이력사항 텍스트' }}
                </li>
                <li class="list">
                  {{ '이력사항 텍스트' }}
                </li>
                <li class="list">
                  {{ '이력사항 텍스트' }}
                </li>
              </ul>
            </article>

            <div class="member-btn-grp btn-grp">
              <btn-bd-light
                class="btn-rounded btn-xsm btn-edit-ctrl"
                @click="openModal('editMember')"
              >
                <i class="icon icon-pen" />
                <span class="txt">수정</span>
              </btn-bd-light>
              

              <btn-bd-light
                class="btn-rounded btn-xsm btn-edit-ctrl"
                @click="confirm('구성원을 삭제하시겠습니까?')"
              >
                <i class="icon icon-trash" />
                <span class="txt">삭제</span>
              </btn-bd-light>
            </div>
          </div>
        </div>
        <!-- // 구성원이 있을 때 -->
        
        <!-- 구성원이 없을 때 -->
        <div class="member-list-grp">
          <empty-contents txt="구성원이 없습니다." />
        </div>
        <!-- // 구성원이 없을 때 -->
      </div>
    </div>
    <!-- // 마이페이지 컨텐츠 영역 -->

    <modal-dialog>
      <modal-light-box @click="closeModal" />

      <!-- [modal] 항목 공개 설정 -->
      <modal
        :class="{'is-show': $store.state.modal.visible && $store.state.modal.type === 'openSetting'}"
        ttl="항목 공개 설정"
      >
        <div class="modal-cont">
          <ul class="toggle-list-grp">
            <li class="toggle-list">
              <span class="name">이메일</span>

              <!-- 토글 스위치 -->
              <input
                id="openEmail"
                type="checkbox"
                class="is-none toggle-switch"
              >
              <label
                for="openEmail"
                class="toggle-onoff"
              />
              <!-- // 토글 스위치 -->
            </li>

            <li class="toggle-list">
              <span class="name">이름</span>

              <!-- 토글 스위치 -->
              <input
                id="openName"
                type="checkbox"
                class="is-none toggle-switch"
              >
              <label
                for="openName"
                class="toggle-onoff"
              />
              <!-- // 토글 스위치 -->
            </li>

            <li class="toggle-list">
              <span class="name">키포인트</span>

              <!-- 토글 스위치 -->
              <input
                id="openKeypoint"
                type="checkbox"
                class="is-none toggle-switch"
              >
              <label
                for="openKeypoint"
                class="toggle-onoff"
              />
              <!-- // 토글 스위치 -->
            </li>

            <li class="toggle-list">
              <span class="name">이력사항</span>

              <!-- 토글 스위치 -->
              <input
                id="openHistory"
                type="checkbox"
                class="is-none toggle-switch"
              >
              <label
                for="openHistory"
                class="toggle-onoff"
              />
              <!-- // 토글 스위치 -->
            </li>
          </ul>
        </div>

        <div class="modal-btn-wrap">
          <btn-bd-light
            class="btn-fb btn-md btn-cancel"
            @click="closeModal"
          >
            닫기
          </btn-bd-light>
          <btn-solid-dark class="btn-md">
            저장
          </btn-solid-dark>
        </div>
      </modal>

      <!-- [modal] 구성원 추가 -->
      <modal
        :class="{'is-show': $store.state.modal.visible && $store.state.modal.type === 'addMember'}"        
        wide
        ttl="구성원 추가"
      >
        <div class="modal-cont modal-scrl-cont">
          <form>
            <fieldset class="ffieldset">
              <legend class="ffieldset-ttl">
                프로필 이미지
              </legend>

              <div class="file-inp-grp">
                <!-- [D] 해당 DOM 클릭시 사진 업로드 & 수정 가능 -->
                <div class="input-img-frame input-circle-img-frame">
                  <!-- [D] 이미지 업로드 시 아래 img 태그 보임 -->
                  <!-- <img
                    src="@/assets/images/dft/ex.jpg"
                    alt="input img"
                    class="input-img"
                  > -->

                  <span
                    class="btn btn-upload"
                  >
                    <i class="icon icon-cam" />
                    <span class="is-voice-only">기업 로고 이미지 업로드</span>
                  </span>
                </div>
                <p class="ffieldset-guide">
                  해상도 100*100px 이상의 JPG, PNG 파일을 첨부해주세요. <br>
                  이미지 미첨부시, 기본이미지로 설정됩니다.
                </p>
              </div>
            </fieldset>

            <fieldset class="ffieldset">
              <legend class="ffieldset-ttl">
                기본 정보
              </legend>

              <!-- 이름 -->
              <div class="lbel-inp-grp">
                <label class="lbel">이름</label>
                <div class="inp-grp">
                  <input
                    type="text"
                    class="inp"
                    placeholder="이름 입력"
                  >
                </div>
              </div>

              <!-- 이메일 -->
              <div class="lbel-inp-grp">
                <label class="lbel">이메일</label>
                <div class="inp-grp">
                  <input
                    type="email"
                    class="inp"
                    placeholder="이메일 입력"
                  >
                </div>
              </div>

              <!-- 키포인트 -->
              <div class="lbel-inp-grp">
                <label class="lbel">키포인트</label>
                <div class="inp-grp">
                  <input
                    type="text"
                    class="inp"
                    placeholder="ex) 10개 기업 창업"
                  >
                </div>
              </div>

              <!-- 경력사항 -->
              <div class="lbel-inp-grp">
                <label class="lbel">경력사항</label>

                <div class="inp-grp">
                  <input
                    type="text"
                    class="inp"
                  >
                </div>

                <div class="add-inp-grp">
                  <div class="inp-grp inp-btn-grp">
                    <input
                      type="text"
                      class="inp"
                    >
                    <btn-square-bd class="del-btn">
                      <span class="is-voice-only">항목 삭제</span>
                    </btn-square-bd>
                  </div>
                  <!-- 요기에 추가가 되어야합니다 -->
                </div>

                <btn-bd-dark class="btn-md btn-full add-inp-btn">
                  경력사항 추가
                </btn-bd-dark>
              </div>
            </fieldset>
          </form>
        </div>

        <div class="modal-btn-wrap">
          <btn-bd-light
            class="btn-fb btn-md btn-cancel"
            @click="closeModal"
          >
            닫기
          </btn-bd-light>
          <btn-solid-dark class="btn-md">
            추가완료
          </btn-solid-dark>
        </div>
      </modal>
      
      <!-- [modal] 구성원 수정 -->
      <modal
        :class="{'is-show': $store.state.modal.visible && $store.state.modal.type === 'editMember'}"        
        wide
        ttl="구성원 수정"
      >
        <div class="modal-cont modal-scrl-cont">
          <form>
            <fieldset class="ffieldset">
              <legend class="ffieldset-ttl">
                프로필 이미지
              </legend>

              <div class="file-inp-grp">
                <!-- [D] 해당 DOM 클릭시 사진 업로드 & 수정 가능 -->
                <div class="input-img-frame input-circle-img-frame">
                  <!-- [D] 이미지 업로드 시 아래 img 태그 보임 -->
                  <!-- <img
                    src="@/assets/images/dft/ex.jpg"
                    alt="input img"
                    class="input-img"
                  > -->

                  <span
                    class="btn btn-upload"
                  >
                    <i class="icon icon-cam" />
                    <span class="is-voice-only">기업 로고 이미지 업로드</span>
                  </span>
                </div>
                <p class="ffieldset-guide">
                  해상도 100*100px 이상의 JPG, PNG 파일을 첨부해주세요. <br>
                  이미지 미첨부시, 기본이미지로 설정됩니다.
                </p>
              </div>
            </fieldset>

            <fieldset class="ffieldset">
              <legend class="ffieldset-ttl">
                기본 정보
              </legend>

              <!-- 이름 -->
              <div class="lbel-inp-grp">
                <label class="lbel">이름</label>
                <div class="inp-grp">
                  <input
                    type="text"
                    class="inp"
                    placeholder="이름 입력"
                    value="김철수"
                  >
                </div>
              </div>

              <!-- 이메일 -->
              <div class="lbel-inp-grp">
                <label class="lbel">이메일</label>
                <div class="inp-grp">
                  <input
                    type="email"
                    class="inp"
                    placeholder="이메일 입력"
                    value="gooseongwon@naver.com"
                  >
                </div>
              </div>

              <!-- 키포인트 -->
              <div class="lbel-inp-grp">
                <label class="lbel">키포인트</label>
                <div class="inp-grp">
                  <input
                    type="text"
                    class="inp"
                    placeholder="ex) 10개 기업 창업"
                    value="좋은 개발자"
                  >
                </div>
              </div>

              <!-- 경력사항 -->
              <div class="lbel-inp-grp">
                <label class="lbel">경력사항</label>

                <div class="inp-grp">
                  <input
                    type="text"
                    class="inp"
                    value="네이버 근무"
                  >
                </div>

                <div class="add-inp-grp">
                  <div class="inp-grp inp-btn-grp">
                    <input
                      type="text"
                      class="inp"
                    >
                    <btn-square-bd class="del-btn">
                      <span class="is-voice-only">항목 삭제</span>
                    </btn-square-bd>
                  </div>
                  <!-- 요기에 추가가 되어야합니다 -->
                </div>

                <btn-bd-dark class="btn-md btn-full add-inp-btn">
                  경력사항 추가
                </btn-bd-dark>
              </div>
            </fieldset>
          </form>
        </div>

        <div class="modal-btn-wrap">
          <btn-bd-light
            class="btn-fb btn-md btn-cancel"
            @click="closeModal"
          >
            닫기
          </btn-bd-light>
          <btn-solid-dark class="btn-md">
            수정완료
          </btn-solid-dark>
        </div>
      </modal>
    </modal-dialog>
  </div>
</template>

<script>
export default {
  name: 'SEtprMemberManage',
};
</script>

<style lang="scss" scoped>
</style>