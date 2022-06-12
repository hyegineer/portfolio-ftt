<template>
  <!-- [D] 팩트체커 회원가입 -->
  <div class="page auth-page">
    <layout-header />

    <div class="page-container">
      <div class="narrow-panel auth-panel">
        <div class="auth-hgrp">
          <img
            src="@/assets/images/badge/badge-factchecker.svg"
            alt=""
            class="badge-flag"
          >
        
          <h3 class="ttl">
            <span class="ttl-txt">팩트체커 회원가입</span>
          </h3>
          <p class="ttl-sub">
            회원가입 정보를 입력하세요.
          </p>
        </div>
        
        
        <form class="form-area auth-form-area ftck-auth-form-area">
          <!-- 입력 영역 계정정보 -->
          <fieldset
            class="ffieldset"
          >
            <legend class="ffieldset-ttl is-voice-only">
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
                기업용 이메일이나 개인 이메일로 아이디를 생성합니다.
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
                <btn-bd-dark class="btn-md">
                  인증번호 발송
                </btn-bd-dark>
              </div>
              
              <!-- [D] 인증번호 보낸 후 보이는 DOM -->
              <!-- <div class="inp-grp inp-btn-grp">
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
                >
                  인증하기
                </btn-solid-dark>
              </div> -->
              
              
              <p class="fvalidate-msg is-fail">
                인증번호가 불일치합니다.
              </p>
              
              <p class="fvalidate-msg is-success">
                인증번호가 일치합니다.
              </p>
            </div>
          </fieldset>
          <!-- // 입력 영역 계정정보 -->
        
          <!-- 입력 영역 기타정보 -->
          <fieldset
            class="ffieldset"
          >
            <legend class="ffieldset-ttl is-voice-only">
              기타 정보
            </legend>

            <!-- 관심지역 -->
            <div class="lbel-inp-grp">
              <label class="lbel">관심 지역 <small class="required">*</small></label>
              <div class="inp-grp">
                <custom-slct 
                  class="custom-slct01 btn-full"
                  :selected="attention.region"
                >
                  <template #select>
                    <span class="word">
                      {{ attention.region || '지역 선택' }}
                    </span>
                  </template>

                  <template #options>
                    <custom-slct-opt 
                      v-for="(region, index) in regionOption"
                      :key="index"
                      @click="attention.region = region"
                    >
                      {{ region }}
                    </custom-slct-opt>
                  </template>
                </custom-slct>
              </div>
            </div>
          
            <!-- 관심키워드 -->
            <div class="lbel-inp-grp">
              <label class="lbel">관심 키워드 <small class="required">*</small></label>
              <div class="inp-grp inp-btn-grp">
                <input
                  type="text"
                  class="inp"
                  placeholder="최대 8글자"
                  maxlength="8"
                >
                <btn-bd-dark class="btn-md">
                  키워드 추가
                </btn-bd-dark>
              </div>

              <p class="ffieldset-guide">
                5개까지 등록가능합니다.
              </p>

              <div class="add-badge-grp">
                <badge-rounded
                  removable
                  @click="window.alert('지우기')"
                >
                  최대여덟글자입력
                </badge-rounded>
                
                <badge-rounded
                  removable
                  @click="window.alert('지우기')"
                >
                  최대여덟글자입력
                </badge-rounded>
                
                <badge-rounded
                  removable
                  @click="window.alert('지우기')"
                >
                  최대여덟글자입력
                </badge-rounded>
              </div>
            </div>

            <!-- 경력사항 -->
            <div class="lbel-inp-grp">
              <label class="lbel">경력사항 <small class="required">*</small></label>

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
                
                <div class="inp-grp inp-btn-grp">
                  <input
                    type="text"
                    class="inp"
                  >
                  <btn-square-bd class="del-btn">
                    <span class="is-voice-only">항목 삭제</span>
                  </btn-square-bd>
                </div>
                
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

            <!-- 팩트체커 신청사유 -->
            <div class="lbel-inp-grp">
              <label class="lbel">팩트체커 신청사유</label>
              <div class="inp-grp">
                <textarea
                  id="#"
                  name="#"
                  cols="30"
                  rows="10"
                  class="inp"
                  placeholder="팩트체커로 선정되기 위하여, 자기소개를 해주세요! :)"
                />
              </div>
            </div>
          </fieldset>
          <!-- // 입력 영역 기타정보 -->
        
          <div class="btn-grp">
            <btn-bd-light
              class="btn-lg btn-prev"
              @click="$router.push('/register-intro')"
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
    </div>

    <layout-footer />
  </div>
</template>

<script>
export default {
  name: 'RegisterInvestor',
  data() {
    return{
      attention: { // custom-select 동작을 구현하기위한 더미데이터
        region: null,
        keyword: null,
      },
      regionOption: ['서울특별시', '부산광역시', '대구광역시', '인천광역시', '광주광역시', '대전광역시', '울산광역시', '세종특별자치시', '경기도', '강원도', '충청북도', '충청남도', '전라북도', '전라남도', '경상북도', '경상남도', '제주특별자치도'],
    };
  },
  methods: {
    clickComplete() {
      this.$router.push({
        name: 'RegisterComplete',
        query: {
          userType: 'fact-checker',
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

