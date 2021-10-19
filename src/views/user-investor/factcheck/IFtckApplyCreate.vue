<template>
  <!-- [D] 마이페이지 - 팩트체크-팩트체커신청-신청서작성 -->
  <div
    mypage="ftck-apply-create-page"
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
          팩트체커 신청
        </li>
      </breadcrumb>

      <h2 class="ttl">
        팩트체크
      </h2>
    </div>
    <!-- // 마이페이지 페이지 제목 -->

    <!-- 마이페이지 컨텐츠 영역 -->
    <div class="mypage-cont-wrap">
      <div class="mypage-common-card">
        <div class="cont-hgrp">
          <p class="ttl">
            팩트체커 신청
          </p>
        </div>

        <article class="guide-box">
          <div class="guide-box-cont">
            <h6 class="lbel">
              안내사항
            </h6>
            <p class="txt">
              투자자회원 > 팩트체커 신청시에 안내할 주의/안내사항 있으면 추가합니다. <br>내용이 길어지면 맨아래에 배치하며, 추가할 내용이 없으면 영역 삭제합니다. (운영이슈)
            </p>
          </div>
        </article>

        <form class="form-area auth-form-area ftck-auth-form-area">
          <!-- 
            10-14 스타트업 / 투자자 팩트체커 신청화면에서 
            입력 영역 계정정보 제외처리
          -->

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
        
          <div
            class="btn-grp"
          >
            <btn-bd-light
              class="btn-lg btn-prev"
              @click="$router.back()"
            >
              이전
            </btn-bd-light>

            <!-- [D] 필수항목 다 기재되면 disabled 해제 -->
            <btn-solid
              class="btn-lg btn-full"
              @click="$router.push('ftck-apply-complete')"
            >
              다음
            </btn-solid>
          </div>
        </form>
      </div>
    </div>
    <!-- // 마이페이지 컨텐츠 영역 -->
  </div>
</template>

<script>
export default {
  name: 'IFtckApplyCreate',
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
  },
};
</script>

<style lang="scss" scoped>
</style>