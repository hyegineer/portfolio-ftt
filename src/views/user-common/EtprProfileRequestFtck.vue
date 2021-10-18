<template>
  <div class="mypage-etpr-profile-request-ftck-page">
    <div class="mypage-container">
      <!-- 마이페이지 페이지 제목 -->
      <div class="mypage-hgrp">
        <breadcrumb>
          <li class="txt">
            홈
          </li>
          <li class="txt">
            스타트업 찾기
          </li>
          <li class="txt">
            4차 산업기술
          </li>
          <li class="txt">
            가상ㆍ증강현실
          </li>
        </breadcrumb>

        <h2 class="ttl">
          팩트체크 요청하기
        </h2>
      </div>
      <!-- // 마이페이지 페이지 제목 -->

      <!-- 마이페이지 컨텐츠 영역 -->
      <div class="mypage-cont-wrap">
        <!-- 나의 팩트체크 수정 - 주의사항 설명박스 -->
        <div class="ftck-caution-box">
          <div class="ftck-cb-ttl">
            <i class="icon icon-i-green" />
            <span class="cb-ttl">주의사항</span>
          </div>

          <ul class="ul-dash">
            <li class="list">
              작성 중인 페이지를 나가면 내용이 저장되지 않습니다.
            </li>
            <li class="list">
              삭제된 요청 항목은 다시 추가할 수 없습니다.
            </li>
            <li class="list">
              요청 항목별로 소모되는 포인트가 상이합니다.
            </li>
            <li class="list">
              팩트체커 선택 완료 시, 포인트가 차감되며 요청 내용 수정이 불가합니다.
            </li>
          </ul>
        </div>
        <!-- // 나의 팩트체크 수정 - 주의사항 설명박스 -->
        <div class="ftck-edit-wrap">
          <!-- 나의 팩트체크 수정 - 내용  -->
          <div class="ftck-request-wrap">
            <div class="big-ttl-grp">
              <h3 class="cont-big-ttl">
                선택한 기업에 <span class="underline">팩트체크를 요청</span>합니다.<br>
                팩트체크를 원하는 항목과 내용을 작성하세요.
              </h3>
            </div>
            <div class="avatar-wrap">
              <!-- 아바타 -->
              <div class="avatar-grp">
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
            </div>
            <!-- END 아바타 -->
            <div class="req-info-cont-wrap">
              <!-- 왼쪽 탭 메뉴 -->
              <div class="left-floating-menu-wrap">
                <div class="floating-hgrp">
                  <span class="selected-cats-ttl">
                    선택된 요청 항목
                    <span class="selected-cats-connt">4</span>
                  </span>
                </div>
                <div class="point-grp">
                  <span class="label">총 사용 예정 포인트</span>
                  <div class="inner-flex">
                    <span class="point">100,000</span>
                    <i class="icon icon-point" />
                  </div>
                </div>
                <div class="tab-list-grp">
                  <!-- btn-tab에 is-active -->
                  <btn-bd-dark
                    class="btn-sm btn-tab"
                    :class="{'is-active': tabActive === 1}"
                    @click="tabActive = 1"
                  >
                    기본정보
                  </btn-bd-dark>
                  <btn-bd-dark
                    class="btn-sm btn-tab"
                    :class="{'is-active': tabActive === 2}"
                    @click="tabActive = 2"
                  >
                    손익계산서
                  </btn-bd-dark>
                  <btn-bd-dark
                    class="btn-sm btn-tab"
                    :class="{'is-active': tabActive === 3}"
                    @click="tabActive = 3"
                  >
                    그룹원
                  </btn-bd-dark>
                  <btn-bd-dark
                    class="btn-sm btn-tab"
                    :class="{'is-active': tabActive === 4}"
                    @click="tabActive = 4"
                  >
                    추가 요청
                  </btn-bd-dark>
                </div>
              </div>
              <!-- END 왼쪽 탭 메뉴 -->

              <!-- 항목 정보 -->
              <div
                class="req-info-grp"
                style="height: 790px;"
              >
                항목정보 들어갈 부분
              </div>
              <!-- END 항목 정보 -->

              <!-- 작성내용 -->
              <div class="req-cont-grp">
                <div class="req-hgrp">
                  <p class="ttl">
                    요청 내용
                  </p>
                </div>
                <div class="req-cats-point-grp">
                  <div class="req-cats-grp">
                    <span class="label">작성중인 항목</span>
                    <span class="info">기업가치</span>
                    <btn-bd-light
                      class="btn-rounded btn-xsm"
                    >
                      <i class="icon icon-trash" />항목 삭제하기
                    </btn-bd-light>
                  </div>
                  <div class="point-grp">
                    <span class="label">사용 포인트</span>
                    <span class="point">5,000</span>
                    <i class="icon icon-point" />
                  </div>
                </div>
                <div class="inp-grp editor-inp-grp">
                  <input
                    type="text"
                    class="inp editor-inp"
                    placeholder="팩트체크 요청 제목을 입력하세요, (n자 입력)"
                  >
                </div>
                <div
                  class="editor-cont-grp"
                  style="border: 1px solid #DDDEE6"
                >
                  EDITOR 들어가는 부분
                </div>
                <div class="btn-all-grp">
                  <div class="ment-grp">
                    <i class="icon icon-i" />
                    <span class="ment">요청한 팩트체크는 마이페이지 > 팩트체크 > 요청한 팩트체크에서 확인 가능합니다.</span>
                  </div>
                  <div class="btn-grp">
                    <btn-solid-dark
                      class="btn-md"
                      @click="window.alert('검정버튼을 클릭하셨습니다.')"
                    >
                      <img
                        src="@/assets/images/icon/icon-check-gn.svg"
                        alt="체크"
                        class="check-icon"
                      > 팩트체크 요청완료
                    </btn-solid-dark>
                  </div>
                </div>
              </div>
              <!-- END 작성내용 -->
            </div>
          </div>
          <!-- // 나의 팩트체크 수정 - 내용  -->
        </div>
      </div>
      <!-- // 마이페이지 컨텐츠 영역 -->
    </div>

    <layout-footer />
  </div>
</template>

<script>
export default {
  name: 'EtprProfileRequestFtck',
  data() {
    return {
      tabActive: 1, // 1~4
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
