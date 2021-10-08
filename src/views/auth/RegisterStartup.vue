<template>
  <div class="page auth-page">
    <layout-header />

    <div class="page-container">
      <!-- [D] 기업선택 [건너뛰기]했을 때 -->
      <!-- 새로운 기업 정보 입력 -->
      <div class="narrow-panel auth-panel">
        <div class="auth-hgrp">
          <img
            src="@/assets/images/badge/badge-startup.svg"
            alt=""
            class="badge-flag"
          >
        
          <h3 class="ttl">
            <span class="ttl-txt">스타트업 회원가입</span>
            <span class="badge-auth">{{ $constants.userTypeForm[$route.query.userTypeForm] }}</span>
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
              @click="$router.push('/register-intro-startup')"
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
      <!-- // 새로운 기업 정보 입력 -->

      <!-- [D] 기업선택 완료했을 때 -->
      <!-- 선택된 기업 & 계정정보 입력 -->
      <div class="narrow-panel auth-panel">
        <div class="auth-hgrp">
          <img
            src="@/assets/images/badge/badge-startup.svg"
            alt=""
            class="badge-flag"
          >
        
          <h3 class="ttl">
            <span class="ttl-txt">스타트업 회원가입</span>
            <span class="badge-auth">{{ $constants.userTypeForm[$route.query.userTypeForm] }}</span>
          </h3>
          <p class="ttl-sub">
            계정 정보를 입력하여 회원가입을 완료합니다.
          </p>
        </div>
        
        <form class="form-area auth-form-area">
          <!-- 선택된 기업 -->
          <fieldset class="ffieldset">
            <legend class="ffieldset-ttl">
              소속 기업
            </legend>
            
            <div class="lbel-inp-grp">
              <div class="dlist-grp dlist-col1-grp">
                <dl class="dlist">
                  <dt class="lbel">
                    기업명
                  </dt>
                  <dd class="txt">
                    <span>{{ '팩트컴퍼니' }}</span>
                  </dd>
                </dl>

                <dl class="dlist">
                  <dt class="lbel">
                    대표자
                  </dt>
                  <dd class="txt">
                    <span>{{ '김철수' }}</span>
                  </dd>
                </dl>
              
                <dl class="dlist">
                  <dt class="lbel">
                    사업자번호
                  </dt>
                  <dd class="txt">
                    <span>{{ '123-1234-5678' }}</span>
                  </dd>
                </dl>
              
                <dl class="dlist">
                  <dt class="lbel">
                    기업 고유 아이디
                  </dt>
                  <dd class="txt">
                    <span>{{ 'abcd0123' }}</span>
                  </dd>
                </dl>
              </div>
            </div>
          </fieldset>
          <!-- // 선택된 기업 -->

          <!-- 입력 영역 계정정보 -->
          <fieldset class="ffieldset">
            <legend class="ffieldset-ttl">
              계정 정보
            </legend>

            <div class="lbel-inp-grp">
              <label class="lbel">이름</label>
              <div class="inp-grp">
                <input
                  type="text"
                  class="inp"
                  placeholder="실명을 입력하세요."
                >
              </div>
            </div>
          
            <div class="lbel-inp-grp">
              <label class="lbel">이메일 아이디</label>
              <div class="inp-grp">
                <input
                  type="text"
                  class="inp"
                  placeholder="이메일 형식의 아이디"
                >
              </div>

              <p class="ffieldset-guide">
                기업 전용 도메인으로 생성된 이메일을 입력해주세요. <br>
                일반 포털사이트 도메인은 사용이 불가합니다. <br>
                예) google.com/daum.net/naver.com 등
              </p>
            </div>
          
            <div class="lbel-inp-grp">
              <label class="lbel">비밀번호</label>
              <div class="inp-grp">
                <input
                  type="password"
                  class="inp"
                  placeholder="8~16자 입력"
                >
              </div>
              
              <p class="fvalidate-msg is-fail">
                비밀번호 형식이 맞지 않습니다.
              </p>
            </div>
          
            <div class="lbel-inp-grp">
              <label class="lbel">비밀번호 확인</label>
              <div class="inp-grp">
                <input
                  type="password"
                  class="inp"
                  placeholder="8~16자 입력"
                >
              </div>
              
              <p class="fvalidate-msg is-fail">
                입력하신 비밀번호가 불일치합니다.
              </p>
              
              <p class="fvalidate-msg is-success">
                사용가능한 비밀번호입니다.
              </p>
            </div>
          
            <div class="lbel-inp-grp">
              <label class="lbel">휴대폰 번호</label>
              <div class="inp-grp inp-btn-grp">
                <input
                  type="text"
                  class="inp"
                  placeholder="휴대폰 번호 입력"
                >
                <btn-bd-dark
                  class="btn-md"
                  @click="alert('인증문자가 발송되었습니다.')"
                >
                  인증번호 발송
                </btn-bd-dark>
              </div>
              
              <!-- [D] 인증번호 보낸 후 보이는 DOM -->
              <div class="inp-grp inp-btn-grp">
                <div class="inp-grp inp-time-grp">
                  <input
                    type="text"
                    class="inp"
                    placeholder="인증번호 입력"
                  >
                  <span class="inp-time">3:00</span>
                </div>

                <btn-solid-dark
                  class="btn-md"
                  @click="alert('인증이 완료되었습니다.')"
                >
                  인증하기
                </btn-solid-dark>
              </div>
              
              
              <p class="fvalidate-msg is-fail">
                인증번호가 불일치합니다.
              </p>
              
              <p class="fvalidate-msg is-success">
                인증번호가 일치합니다.
              </p>
            </div>
          </fieldset>
          <!-- // 입력 영역 계정정보 -->
        
          <div class="btn-grp">
            <btn-bd-light
              class="btn-lg btn-prev"
              @click="window.alert('이전의 기업선택화면을 가던가 별도 메소드 만들어줘야함')"
            >
              이전
            </btn-bd-light>

            <!-- [D] 필수항목 다 기재되면 disabled 해제 -->
            <btn-solid
              class="btn-lg btn-full"
              @click="clickComplete"
            >
              다음
            </btn-solid>
          </div>
        </form>
      </div>
      <!-- // 선택된 기업 & 계정정보 입력 -->
    </div>

    <layout-footer />
  </div>
</template>

<script>
// FIXME: this.$route.query.userTypeForm 이 없을 때 예외처리 필요함. ex: 잘못된 접근입니다

export default {
  name: 'RegisterStartup',
  methods: {
    clickComplete() {
      this.$router.push({
        name: 'RegisterComplete',
        query: {
          userType: 'startup',
          userTypeForm: this.$route.query.userTypeForm,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

