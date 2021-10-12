<template>
  <!-- [D] 마이페이지 - 기업정보-기본정보 수정 -->
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
                <span class="required">*</span> 표시된 정보는 필수입력사항입니다.
              </p>
              <div class="cont-wrap">
                <div class="flex-row-grp">
                  <div class="lbel-inp-grp">
                    <label class="lbel">기업명 <span class="required">*</span></label>
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
                    <label class="lbel">사업자번호 <span class="required">*</span></label>
                    <div class="inp-grp">
                      <input
                        type="text"
                        class="inp"
                        disabled
                        value="000-0000-0000"
                      >
                    </div>
                  </div>
                </div>
                <div class="flex-row-grp">
                  <div class="lbel-inp-grp">
                    <label class="lbel">대표자명 <span class="required">*</span></label>
                    <div class="inp-grp">
                      <input
                        type="text"
                        class="inp"
                        value="김철수"
                        disabled
                      >
                    </div>
                  </div>
                  <div class="lbel-inp-grp">
                    <label class="lbel">법인번호</label>
                    <div class="inp-grp">
                      <input
                        type="text"
                        class="inp"
                        placeholder="법인번호를 입력해주세요"
                      >
                    </div>
                  </div>
                </div>
                <div class="flex-row-grp">
                  <div class="lbel-inp-grp">
                    <label class="lbel">전화번호</label>
                    <div class="inp-grp">
                      <input
                        type="text"
                        class="inp"
                        placeholder="전화번호를 입력해주세요"
                      >
                    </div>
                  </div>
                  <div class="lbel-inp-grp">
                    <label class="lbel">홈페이지 주소</label>
                    <div class="inp-grp">
                      <input
                        type="text"
                        class="inp link-inp"
                        placeholder="홈페이지 주소를 입력해주세요"
                      >
                    </div>
                  </div>
                </div>
                <div class="flex-row-grp">
                  <div class="lbel-inp-grp">
                    <label class="lbel">기업 고유 아이디 <span class="required">*</span></label>
                    <div class="inp-grp">
                      <input
                        type="text"
                        class="inp"
                        value="abcd123"
                        disabled
                      >
                    </div>
                  </div>
                  <div class="lbel-inp-grp" />
                </div>
              </div>
            </fieldset>
          </div>
          </fieldset class="ffieldset">
          <fieldset>
            <div class="article-wrap">
              <div class="cont-wrap">
                <div class="lbel-inp-grp">
                  <div class="lbel-wrap">
                    <label class="lbel">기업 한 줄 소개 <span class="required">*</span></label>
                    <small class="length-txt">(0/50)</small>
                  </div>
                  <div class="inp-grp">
                    <textarea
                      id=""
                      class="inp"
                      name=""
                      cols="30"
                      rows="1"
                      placeholder="기업 한 줄 소개를 입력해주세요. 기업 프로필에 노출됩니다."
                    />
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
            </div>
          </fieldset class="ffieldset">
          <div class="btn-wrap">
            버튼모음
          </div>
        </div>
      </div>
    </div>
    <!-- // 마이페이지 컨텐츠 영역 -->
  </div>
</template>

<script>
export default {
  name: 'SEtprDefaultInfoEdit',
};
</script>

<style lang="scss" scoped>
</style>