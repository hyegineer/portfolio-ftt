<template>
  <!-- [D] 마이페이지 - 기업정보-기본정보 수정 -->
  <div class="mypage-container mypage-rfixed-container">
    <!-- 업데이트 내역 -->
    <layout-right-fixed />
    <!-- // 업데이트 내역 -->
      
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
          기본정보 수정
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
            기본정보 수정
          </p>
          <p class="ttl-sub">
            기업 프로필의 기본정보를 수정합니다.
          </p>
        </div>
        <div class="form-area">
          <div class="article-wrap profile-image-wrap">
            <div class="cont-wrap">
              <fieldset class="ffieldset">
                <legend class="ffieldset-ttl">
                  프로필 이미지
                </legend>
                <div class="flex-row-grp">
                  <div class="file-inp-grp">
                    <label class="lbel">기업 로고</label>
                    <div class="inp-grp">
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
                    </div>
                    <p class="ffieldset-guide">
                      해상도 100*100px 이상의 JPG, PNG 파일을 첨부해주세요. <br>
                      이미지 미첨부시, 기본이미지로 설정됩니다.
                    </p>
                  </div>

                  <div class="file-inp-grp">
                    <label class="lbel">대표 이미지</label>
                    <div class="inp-grp">
                      <!-- [D] 해당 DOM 클릭시 사진 업로드 & 수정 가능 -->
                      <div class="input-img-frame input-square-img-frame">
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
                    </div>
                    <p class="ffieldset-guide">
                      해상도 535*370px 이상의 JPG, PNG 파일을 첨부해주세요. <br>
                      이미지 미첨부시, 기본이미지로 설정됩니다.
                    </p>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
          <div class="article-wrap">
            <fieldset class="ffieldset">
              <legend class="ffieldset-ttl">
                기본정보
              </legend>
              <p class="ffieldset-guide">
                비활성화된 정보 수정은 1:1문의에 요청하세요.
              </p>
              <!-- 개인투자자인 경우 -->
              <div
                v-if="testInvestorType === 'idv'"
                class="cont-wrap"
              >
                <div class="flex-row-grp">
                  <div class="lbel-inp-grp">
                    <label class="lbel">기업명</label>
                    <div class="inp-grp">
                      <input
                        type="text"
                        class="inp"
                        value="주식회사 팩트컴퍼니"
                        disabled
                      >
                    </div>
                  </div>
                  <div class="lbel-inp-grp">
                    <div class="lbel-toggle">
                      <label class="lbel">대표자명</label>
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
                    </div>
                    <div class="inp-grp">
                      <input
                        type="text"
                        class="inp"
                        disabled
                        value="김철수"
                      >
                    </div>
                  </div>
                </div>
                <div class="flex-row-grp">
                  <div class="lbel-inp-grp">
                    <label class="lbel">기업 고유 아이디</label>
                    <div class="inp-grp">
                      <input
                        type="text"
                        class="inp"
                        value="abcd123"
                        disabled
                      >
                    </div>
                  </div>
                  <div class="lbel-inp-grp">
                    <div class="lbel-toggle">
                      <label class="lbel">운영규모</label>
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
                    </div>
                    <div class="inp-grp inp-unit-grp">
                      <input
                        type="text"
                        class="inp"
                        value="0"
                      >
                      <span class="inp-unit">원</span>
                    </div>
                  </div>
                </div>
                <div class="lbel-inp-grp">
                  <div class="lbel-wrap">
                    <label class="lbel">기업 상세소개</label>
                    <small class="length-txt">(0/1000)</small>
                  </div>
                  <div class="inp-grp">
                    <textarea
                      id=""
                      class="inp"
                      name=""
                      cols="30"
                      rows="10"
                      placeholder="기업 상세소개를 입력해주세요. 기업 프로필에 노출됩니다."
                    />
                  </div>
                </div>
              </div>
              <!-- END 개인투자자인 경우 -->

              <!-- 기업투자자인 경우 -->
              <div
                v-if="testInvestorType === 'company'"
                class="cont-wrap"
              >
                <div class="flex-row-grp">
                  <div class="lbel-inp-grp">
                    <label class="lbel">기업명</label>
                    <div class="inp-grp">
                      <input
                        type="text"
                        class="inp"
                        value="주식회사 팩트컴퍼니"
                        disabled
                      >
                    </div>
                  </div>
                  <div class="lbel-inp-grp">
                    <div class="lbel-toggle">
                      <label class="lbel">대표자명</label>
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
                    </div>
                    <div class="inp-grp">
                      <input
                        type="text"
                        class="inp"
                        disabled
                        value="김철수"
                      >
                    </div>
                  </div>
                </div>
                <div class="flex-row-grp">
                  <div
                    class="lbel-inp-grp"
                  >
                    <label class="lbel">사업자번호</label>
                    <div class="inp-grp">
                      <input
                        type="text"
                        class="inp"
                        value="000-0000-0000"
                        disabled
                      >
                    </div>
                  </div>
                  <div
                    class="lbel-inp-grp"
                  >
                    <label class="lbel">법인번호</label>
                    <div class="inp-grp">
                      <input
                        type="text"
                        class="inp"
                        value="000-0000-00000"
                      >
                    </div>
                  </div>
                </div>
                <div class="flex-row-grp">
                  <div
                    class="lbel-inp-grp"
                  >
                    <label class="lbel">홈페이지 주소</label>
                    <div class="inp-grp inp-icon-grp">
                      <i class="icon icon-link" />
                      <input
                        type="text"
                        class="inp"
                        value="https://www.팩트컴퍼니.com"
                      >
                    </div>
                  </div>
                  <div class="lbel-inp-grp">
                    <label class="lbel">기업 고유 아이디</label>
                    <div class="inp-grp">
                      <input
                        type="text"
                        class="inp"
                        value="abcd123"
                        disabled
                      >
                    </div>
                  </div>
                </div>
                <div class="flex-row-grp">
                  <div
                    class="lbel-inp-grp"
                  >
                    <label class="lbel">전화번호</label>
                    <div class="inp-grp inp-icon-grp">
                      <i class="icon icon-link" />
                      <input
                        type="text"
                        class="inp"
                        value="000-123-5676"
                      >
                    </div>
                  </div>
                  <div class="lbel-inp-grp">
                    <div class="lbel-toggle">
                      <label class="lbel">운영규모</label>
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
                    </div>
                    <div class="inp-grp inp-unit-grp">
                      <input
                        type="text"
                        class="inp"
                        value="0"
                      >
                      <span class="inp-unit">원</span>
                    </div>
                  </div>
                </div>
                <div class="flex-row-grp">
                  <div
                    class="lbel-inp-grp"
                  >
                    <div class="lbel-toggle">
                      <label class="lbel">설립일</label>
                    </div>
                    <div class="inp-grp">
                      <button
                        type="button"
                        class="inp inp-icon"
                      >
                        <i class="icon icon-cal" />
                        <span>2021.10.05</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="flex-row-grp">
                  <div class="inp-grp inp-btn-grp lbel-inp-grp">
                    <label class="lbel">본사 주소</label>
                    <div class="inp-grp">
                      <input
                        type="text"
                        class="inp"
                        placeholder="기본주소"
                      >

                      <btn-bd class="btn-md">
                        주소찾기
                      </btn-bd>
                    </div>
                  </div>
                </div>
                <div class="inp-grp">
                  <input
                    type="text"
                    class="inp"
                    placeholder="상세주소"
                  >
                </div>
                <div class="lbel-inp-grp">
                  <div class="lbel-wrap">
                    <label class="lbel">기업 상세소개</label>
                    <small class="length-txt">(0/1000)</small>
                  </div>
                  <div class="inp-grp">
                    <textarea
                      id=""
                      class="inp"
                      name=""
                      cols="30"
                      rows="10"
                      placeholder="기업 상세소개를 입력해주세요. 기업 프로필에 노출됩니다."
                    />
                  </div>
                </div>
              </div>
              <!-- END 기업투자자인 경우 -->
            </fieldset>
          </div>
          <div class="article-wrap">
            <p class="ttl">
              재원 관리
            </p>
            <div class="finance-add-wrap">
              <div class="lbel-inp-grp">
                <label class="lbel">재원</label>
                <div class="inp-grp">
                  <input
                    type="text"
                    class="inp"
                    placeholder="재원을 입력해주세요"
                  >
                </div>
              </div>
              <div class="lbel-inp-grp">
                <label class="lbel">금액</label>
                <div class="inp-grp inp-unit-grp">
                  <input
                    type="text"
                    class="inp"
                    placeholder="금액을 입력해주세요"
                  >
                  <span class="inp-unit">원</span>
                </div>
              </div>
              <btn-bd class="btn-md">
                추가
              </btn-bd>
            </div>
            <div class="finance-list-wrap">
              <div
                v-for="(item, idx) in 20"
                :key="idx"
                class="finance-list"
              >
                <span class="resource-ttl">재원출처명</span>
                <span class="resource-price">000,000,000</span>
                <button
                  type="button"
                  class="btn-resource-del"
                >
                  <i class="icon icon-del" />
                </button>
              </div>
            </div>
          </div>
          <div class="article-wrap border-remove">
            <p class="ttl-lg">
              인증서
            </p>
            <p class="ttl-sub">
              팩트시트 관리자 확인용이며, 회원들에게는 공개되지 않습니다.<br>
              인증서는 최초 1회만 등록되며, 등록된 파일 변경은 1:1문의를 통해 가능합니다.
            </p>
            <!-- 투자자 자격 인증서가 없는 경우 -->
            <div class="lbel-inp-grp">
              <label class="lbel">투자자 자격 인증서</label>

              <div class="inp-grp inp-btn-grp">
                <input
                  type="text"
                  class="inp"
                  placeholder="최초 1회 등록"
                >

                <btn-bd class="btn-md">
                  파일첨부
                </btn-bd>
              </div>
            </div>
            <!-- END 투자자 자격 인증서가 없는 경우 -->

            <!-- 투자자 자격 인증서가 첨부되어 있는 경우(파일명 노출) -->
            <div class="info-grp auth-info-grp">
              <p class="label">
                투자자 자격 인증서
              </p>
              <p class="info">
                <span>첨부파일명.jpg</span>
                <span class="empty-txt">등록된 인증서가 없습니다.</span>
              </p>
            </div>
            <!-- END 투자자 자격 인증서가 첨부되어 있는 경우(파일명 노출) -->
          </div>
          <div
            position="double-centered"
            margin-top
            class="btn-grp"
          >
            <btn-bd-light
              class="btn-lg btn-full color-gray btn-prev"
              @click="window.alert('이전 버튼을 클릭하셨습니다.')"
            >
              이전
            </btn-bd-light>

            <btn-solid
              class="btn-lg btn-full"
              @click="window.alert('수정완료 버튼을 클릭하셨습니다.')"
            >
              수정완료
            </btn-solid>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- // 마이페이지 컨텐츠 영역 -->
</template>

<script>
export default {
  name: 'IEtprDefaultInfoEdit',
  data() {
    return {
      testInvestorType: 'company', // idv(개인투자자), company(기업투자자)
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
