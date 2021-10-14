<template>
  <!-- [D] 마이페이지 - 제출서류관리 -->
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
          제출서류 관리
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
            제출서류 관리
          </p>
          <p class="ttl-sub">
            팩트체크에 필요한 서류를 관리합니다.
          </p>
        </div>

        <form class="mypage-etpr-document-manage-form">
          <fieldset class="ffieldset">
            <!-- 사업자등록증 -->
            <div class="lbel-inp-grp">
              <div class="lbel-toggle">
                <label class="lbel">사업자등록증</label>

                <!-- 토글 스위치 -->
                <div class="toggle-item">
                  <label
                    class="tg-lbel"
                    for="open01"
                  >공개여부</label>
                  <input
                    id="open01"
                    type="checkbox"
                    class="is-none toggle-switch"
                  >
                  <label
                    for="open01"
                    class="toggle-onoff"
                  />
                </div>
                <!-- // 토글 스위치 -->
              </div>
              
              <div class="inp-grp inp-btn-grp">
                <input
                  readonly
                  type="text"
                  class="inp"
                  placeholder="사업자등록증"
                >

                <btn-bd-dark
                  class="btn-md"
                >
                  파일첨부
                </btn-bd-dark>
              </div>
            </div>

            <!-- 등기부등본 -->
            <div class="lbel-inp-grp">
              <div class="lbel-toggle">
                <label class="lbel">등기부등본</label>

                <!-- 토글 스위치 -->
                <div class="toggle-item">
                  <label
                    class="tg-lbel"
                    for="open02"
                  >공개여부</label>
                  <input
                    id="open02"
                    type="checkbox"
                    class="is-none toggle-switch"
                  >
                  <label
                    for="open02"
                    class="toggle-onoff"
                  />
                </div>
                <!-- // 토글 스위치 -->
              </div>
              
              <div class="inp-grp inp-btn-grp">
                <input
                  readonly
                  type="text"
                  class="inp"
                  placeholder="등기부등본"
                >

                <btn-bd-dark
                  class="btn-md"
                >
                  파일첨부
                </btn-bd-dark>
              </div>
            </div>

            <!-- 사업계획서 -->
            <div class="lbel-inp-grp">
              <div class="lbel-toggle">
                <label class="lbel">사업계획서</label>

                <!-- 토글 스위치 -->
                <div class="toggle-item">
                  <label
                    class="tg-lbel"
                    for="open03"
                  >공개여부</label>
                  <input
                    id="open03"
                    type="checkbox"
                    class="is-none toggle-switch"
                  >
                  <label
                    for="open03"
                    class="toggle-onoff"
                  />
                </div>
                <!-- // 토글 스위치 -->
              </div>
              
              <div class="inp-grp inp-btn-grp">
                <input
                  readonly
                  type="text"
                  class="inp"
                  placeholder="사업계획서"
                >

                <btn-bd-dark
                  class="btn-md"
                >
                  파일첨부
                </btn-bd-dark>
              </div>
            </div>

            <!-- IR 자료 -->
            <div class="lbel-inp-grp">
              <div class="lbel-toggle">
                <label class="lbel">IR자료</label>

                <!-- 토글 스위치 -->
                <div class="toggle-item">
                  <label
                    class="tg-lbel"
                    for="open04"
                  >공개여부</label>
                  <input
                    id="open04"
                    type="checkbox"
                    class="is-none toggle-switch"
                  >
                  <label
                    for="open04"
                    class="toggle-onoff"
                  />
                </div>
                <!-- // 토글 스위치 -->
              </div>
              
              <div class="inp-grp inp-btn-grp">
                <input
                  readonly
                  type="text"
                  class="inp"
                  placeholder="IR 자료"
                >

                <btn-bd-dark
                  class="btn-md"
                >
                  파일첨부
                </btn-bd-dark>
              </div>
            </div>

            <!-- 지식재산 관련 등록증 -->
            <div class="lbel-inp-grp">
              <div class="lbel-toggle">
                <label class="lbel">지식재산 관련 등록증</label>

                <!-- 토글 스위치 -->
                <div class="toggle-item">
                  <label
                    class="tg-lbel"
                    for="open05"
                  >공개여부</label>
                  <input
                    id="open05"
                    type="checkbox"
                    class="is-none toggle-switch"
                  >
                  <label
                    for="open05"
                    class="toggle-onoff"
                  />
                </div>
                <!-- // 토글 스위치 -->
              </div>
              
              <div class="inp-grp inp-btn-grp">
                <input
                  readonly
                  type="text"
                  class="inp"
                  placeholder="IR 자료"
                >

                <btn-bd-dark
                  class="btn-md"
                >
                  파일첨부
                </btn-bd-dark>
              </div>
            </div>

            <!-- 지식재산 관련 등록증 -->
            <div class="lbel-inp-grp">
              <div class="lbel-toggle">
                <label class="lbel">특허정보</label>

                <!-- 토글 스위치 -->
                <div class="toggle-item">
                  <label
                    class="tg-lbel"
                    for="open06"
                  >공개여부</label>
                  <input
                    id="open06"
                    type="checkbox"
                    class="is-none toggle-switch"
                  >
                  <label
                    for="open06"
                    class="toggle-onoff"
                  />
                </div>
                <!-- // 토글 스위치 -->
              </div>
              
              <div class="inp-grp">
                <input
                  readonly
                  type="text"
                  class="inp"
                  placeholder="특허 정보"
                >
              </div>
            </div>
            
            <!-- [D] 항목 추가했을 때 (파일첨부해야하는 항목) -->
            <div class="lbel-inp-grp">
              <div class="lbel-toggle">
                <label class="lbel">추가된 항목</label>

                <!-- 토글 스위치 -->
                <div class="toggle-item">
                  <label
                    class="tg-lbel"
                    for="open07"
                  >공개여부</label>
                  <input
                    id="open07"
                    type="checkbox"
                    class="is-none toggle-switch"
                  >
                  <label
                    for="open07"
                    class="toggle-onoff"
                  />
                </div>
                <!-- // 토글 스위치 -->
              </div>
              
              <div class="add-inp-grp">
                <div class="inp-grp inp-btn-grp">
                  <div class="inp-grp inp-btn-grp mb-0">
                    <input
                      readonly
                      type="text"
                      class="inp"
                      placeholder="IR 자료"
                    >

                    <btn-bd-dark
                      class="btn-md"
                    >
                      파일첨부
                    </btn-bd-dark>
                  </div>
              
                  <btn-square-bd class="del-btn">
                    <span class="is-voice-only">항목 삭제</span>
                  </btn-square-bd>
                </div>
              </div>
            </div>
            
            <!-- [D] 항목 추가했을 때 (작성해야하는 항목) -->
            <div class="lbel-inp-grp">
              <div class="lbel-toggle">
                <label class="lbel">추가된 항목</label>

                <!-- 토글 스위치 -->
                <div class="toggle-item">
                  <label
                    class="tg-lbel"
                    for="open08"
                  >공개여부</label>
                  <input
                    id="open08"
                    type="checkbox"
                    class="is-none toggle-switch"
                  >
                  <label
                    for="open08"
                    class="toggle-onoff"
                  />
                </div>
                <!-- // 토글 스위치 -->
              </div>
              
              <div class="add-inp-grp">
                <div class="inp-grp inp-btn-grp">
                  <input
                    type="text"
                    class="inp"
                    placeholder="추가된 항목이 특허 정보일 때"
                  >
              
                  <btn-square-bd class="del-btn">
                    <span class="is-voice-only">항목 삭제</span>
                  </btn-square-bd>
                </div>
              </div>
            </div>
            
            <button
              type="button"
              class="add-btn btn-txt"
              @click="openModal('addFormItem')"
            >
              <span class="txt">+ 항목 추가하기</span>
            </button>
          </fieldset>
        </form>
      </div>
    </div>
    <!-- // 마이페이지 컨텐츠 영역 -->
    

    <modal-dialog>
      <modal-light-box @click="closeModal" />

      <!-- [modal] 항목 추가 -->
      <modal
        :class="{'is-show': $store.state.modal.visible && $store.state.modal.type === 'addFormItem'}"
        ttl="항목 추가"
      >
        <div class="modal-cont md-choice-cont">
          <custom-slct 
            class="custom-slct01"
            :selected="addFormOptions.selected"
          >
            <template #select>
              <span class="word">
                {{ addFormOptions.selected || '추가할 항목을 선택해주세요.' }}
              </span>
            </template>

            <template #options>
              <custom-slct-opt 
                @click="addFormOptions.selected = '사업자등록증'"
              >
                사업자등록증
              </custom-slct-opt>
              
              <custom-slct-opt 
                @click="addFormOptions.selected = '등기부등본'"
              >
                등기부등본
              </custom-slct-opt>
              
              <custom-slct-opt 
                @click="addFormOptions.selected = '사업계획서'"
              >
                사업계획서
              </custom-slct-opt>
              
              <custom-slct-opt 
                @click="addFormOptions.selected = 'IR 자료'"
              >
                IR 자료
              </custom-slct-opt>
              
              <custom-slct-opt 
                @click="addFormOptions.selected = '지식재산 관련 등록증'"
              >
                지식재산 관련 등록증
              </custom-slct-opt>
              
              <custom-slct-opt 
                @click="addFormOptions.selected = '특허 정보'"
              >
                특허 정보
              </custom-slct-opt>
            </template>
          </custom-slct>
        </div>

        <div class="modal-btn-wrap">
          <btn-bd-light
            class="btn-fb btn-md btn-cancel"
            @click="closeModal"
          >
            닫기
          </btn-bd-light>
          <btn-solid-dark class="btn-md">
            추가하기
          </btn-solid-dark>
        </div>
      </modal>
      <!-- // [modal] 항목 추가 -->
    </modal-dialog>
  </div>
</template>

<script>
export default {
  name: 'SEtprDocumentManage',
  data() {
    return{
      addFormOptions: { // custom-select 동작을 구현하기위한 더미데이터
        list: ['사업자등록증', '등기부등본', '사업계획서', 'IR 자료', '지식재산 관련 등록증', '특허 정보'],
        selected: '', 
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>