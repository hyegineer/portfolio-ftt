<template>
  <!-- [D] 마이페이지 - 신규업체등록 -->
  <div class="mypage-container">
    <div class="waiting-create-cont-wrap">
      <div class="narrow-panel auth-panel">
        <div class="auth-hgrp">
          <img
            src="@/assets/images/badge/badge-investror.svg"
            alt=""
            class="badge-flag"
          >
        
          <h3 class="ttl">
            <span class="ttl-txt">투자자 신규등록</span>
            <span class="badge-auth">직원</span>
            <!-- <span class="badge-auth">{{ $constants.userTypeForm[$route.query.userTypeForm] }}</span> -->
          </h3>
          <p class="ttl-sub">
            새로운 기업정보를 등록합니다.
          </p>
        </div>

        <form class="form-area auth-form-area">
          <!-- 입력 영역 01 프로필 이미지 -->
          <fieldset class="ffieldset">
            <legend class="ffieldset-ttl">
              프로필 이미지
            </legend>
            
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
          </fieldset>
          <!-- // 입력 영역 01 프로필 이미지 -->

          <!-- 입력 영역 02 기업정보 -->
          <!--
            1. 기업명 (필수입력)
            2. 대표자명 (필수입력)
            3. 사업자번호 (필수입력)
            4. 법인번호
            5. 전화번호
            6. 홈페이지 주소
            7. 기업고유아이디
          -->
          <fieldset class="ffieldset">
            <legend class="ffieldset-ttl">
              기업 정보
            </legend>

            <p class="ffieldset-guide">
              <span class="required">*</span> 표시된 정보는 필수입력사항입니다.
            </p>

            <div class="lbel-inp-grp">
              <label class="lbel">기업명 <span class="required">*</span></label>
              <div class="inp-grp">
                <input
                  type="text"
                  class="inp"
                  placeholder="기업명"
                >
              </div>
            </div>
          
            <div class="lbel-inp-grp">
              <label class="lbel">대표자명 <span class="required">*</span></label>
              <div class="inp-grp">
                <input
                  type="text"
                  class="inp"
                  placeholder="대표자명"
                >
              </div>
            </div>
          
            <div class="lbel-inp-grp">
              <label class="lbel">사업자번호 <span class="required">*</span></label>
              <div class="inp-grp">
                <input
                  type="text"
                  class="inp"
                  placeholder="-포함 숫자입력"
                >
              </div>
            </div>
          
            <div class="lbel-inp-grp">
              <label class="lbel">법인번호</label>
              <div class="inp-grp">
                <input
                  type="text"
                  class="inp"
                  placeholder="법인번호"
                >
              </div>
            </div>
          
            <div class="lbel-inp-grp">
              <label class="lbel">전화번호</label>
              <div class="inp-grp">
                <input
                  type="text"
                  class="inp"
                  placeholder="전화번호"
                >
              </div>
            </div>
          
            <div class="lbel-inp-grp">
              <label class="lbel">홈페이지 주소</label>
              <div class="inp-grp">
                <input
                  type="text"
                  class="inp"
                  placeholder="홈페이지 주소"
                >
              </div>
            </div>
          
            <div class="lbel-inp-grp">
              <label class="lbel">기업 고유 아이디</label>
              <div class="inp-grp inp-btn-grp">
                <input
                  type="text"
                  class="inp"
                  placeholder="기업 고유 아이디"
                >
                <btn-bd-dark class="btn-md">
                  중복확인
                </btn-bd-dark>
              </div>
              
              <p class="fvalidate-msg is-fail">
                중복되는 고유 아이디가 있습니다.
              </p>
              
              <p class="fvalidate-msg is-success">
                사용가능한 고유아이디입니다.
              </p>
            </div>
          </fieldset>
          <!-- // 입력 영역 02 기업정보 -->
        
          <div class="btn-grp">
            <btn-bd-light
              class="btn-lg btn-prev"
            >
              이전
            </btn-bd-light>

            <!-- [D] 필수항목 다 기재되면 disabled 해제 -->
            <btn-solid
              class="btn-lg btn-full"
              disabled
            >
              다음
            </btn-solid>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IWaitingCreate',
};
</script>

<style lang="scss" scoped>
</style>