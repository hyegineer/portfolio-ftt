<template>
  <!-- [D] 마이페이지 - 내정보-내정보수정 -->
  <div
    mypage="myinfo-edit-page"
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
          내 정보
        </li>
        <li class="txt">
          내 정보 수정
        </li>
      </breadcrumb>

      <h2 class="ttl">
        내 정보
      </h2>
    </div>
    <!-- // 마이페이지 페이지 제목 -->

    <!-- 마이페이지 컨텐츠 영역 -->
    <div class="mypage-cont-wrap">
      <div class="mypage-card">
        <div class="narrow-panel">
          <div class="cont-hgrp">
            <p class="ttl">
              내 정보 수정
            </p>
            <p class="ttl-sub">
              내 계정 정보를 수정합니다.
            </p>
          </div>
          <form class="form-area auth-form-area ftck-auth-form-area">
            <fieldset class="ffieldset">
              <legend class="ffieldset-ttl is-voice-only">
                내 정보 수정
              </legend>
              <div class="lbel-inp-grp">
                <label class="lbel">이름</label>
                <div class="inp-grp">
                  <input
                    type="text"
                    class="inp"
                    disabled
                    value="김철수"
                  >
                </div>
              </div>
              <div class="lbel-inp-grp">
                <label class="lbel">이메일 아이디</label>
                <div class="inp-grp">
                  <input
                    type="text"
                    class="inp"
                    disabled
                    value="test@test.com"
                  >
                </div>
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
              </div>
              <div class="lbel-inp-grp">
                <label class="lbel">휴대폰 번호</label>
                <div class="inp-grp inp-btn-grp">
                  <input
                    type="text"
                    class="inp"
                    placeholder="인증번호를 입력하세요"
                  >

                  <btn-bd class="btn-md">
                    인증번호 발송
                  </btn-bd>
                </div>
              </div>
            </fieldset>

            
        
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
            </fieldset>
          <!-- // 입력 영역 기타정보 -->
          </form>
          <div class="btn-grp">
            <btn-bd-light
              class="btn-lg btn-full color-gray btn-prev"
              @click="$router.push('myinfo-main')"
            >
              이전
            </btn-bd-light>
            <btn-solid
              class="btn-lg btn-full"
              @click="window.alert('완료 버튼을 클릭하셨습니다.')"
            >
              완료
            </btn-solid>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FcMyinfoEdit',
  data() {
    return{
      attention: { // custom-select 동작을 구현하기위한 더미데이터
        region: null,
        keyword: null,
      },
      regionOption: ['서울특별시', '부산광역시', '대구광역시', '인천광역시', '광주광역시', '대전광역시', '울산광역시', '세종특별자치시', '경기도', '강원도', '충청북도', '충청남도', '전라북도', '전라남도', '경상북도', '경상남도', '제주특별자치도'],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
