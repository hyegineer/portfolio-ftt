<template>
  <!-- [D] 마이페이지 - 기업회원 등록 -->
  <div
    mypage="enroll-page"
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
          기업회원 등록
        </li>
      </breadcrumb>

      <h2 class="ttl">
        기업회원 등록
      </h2>
    </div>
    <!-- // 마이페이지 페이지 제목 -->


    <!-- 마이페이지 컨텐츠 영역 -->
    <div class="mypage-cont-wrap">
      <article class="select-guide-box">
        <div class="txt-grp">
          <h6 class="txt-ttl">
            소속된 기업이 있으신가요?
          </h6>
          <p class="txt-dec">
            기업등록시 스타트업/투자자 회원으로 전환이 가능합니다.
          </p>
        </div>
        <div class="btn-grp">
          <btn-solid-dark
            class="btn-md"
            @click="window.alert('검정버튼을 클릭하셨습니다.')"
          >
            선택완료
          </btn-solid-dark>
        </div>
      </article>

      <div class="enroll-cont-wrap">
        <div class="tab-grp">
          <!-- tab-list 누르면 is-active 활성화 -->
          <p
            class="tab-list"
            :class="{'is-active': testTabType === 'startup'}"
            @click="testTabType = 'startup'"
          >
            <span class="tab-txt">스타트업</span>
          </p>
          <p
            class="tab-list"
            :class="{'is-active': testTabType === 'investor'}"
            @click="testTabType = 'investor'"
          >
            <span class="tab-txt">투자자</span>
          </p>
        </div>

        <div class="search-grp">
          <div class="search-hgrp">
            <p class="ttl">
              기업 선택
            </p>
          </div>
          <!-- 스타트업 리스트 -->
          <div
            v-show="testTabType === 'startup'"
            class="search-inp-list-wrap"
          >
            <div class="search-inp-grp">
              <div class="inp-grp inp-sch-grp">
                <input
                  type="text"
                  class="inp"
                  placeholder="검색어를 입력하세요"
                >
                <button
                  v-if="exInput"
                  type="button"
                  class="inp-del-btn"
                  @click="exInput = ''"
                >
                  <span class="is-voice-only">검색어 지우기</span>
                </button>
                <button
                  type="button"
                  class="inp-sch-btn"
                >
                  <span class="is-voice-only">검색하기</span>
                </button>
              </div>
            </div>
            <div
              class="search-list-grp"
            >
              <!-- 리스트 -->
              <div class="cnt-txt-grp">
                <!-- 검색 전 -->
                <!-- <div class="txt">
                    <span class="bold">전체</span>
                  </div> -->

                <!-- 검색 후 갯수 표시 -->
                <div class="txt">
                  <span class="highlight">
                    <u>'검색어'</u>
                  </span>
                  에 대한 검색 결과 <span class="bold">15</span>건
                </div>
              </div>

              <!-- 검색결과 있을 때 -->
              <div class="box-list-grp">
                <div
                  v-for="(item, index) in 10"
                  :key="index"
                  class="box-choice-list box-list"
                  @click="$router.push('enroll-detail')"
                >
                  <div class="txt-dark-gray">
                    <p class="txt-dark">
                      주식회사 팩트컴퍼니
                    </p>
                    <span class="txt-gray">김철수 02-000-0000</span>
                  </div>

                  <!-- 체크박스 -->
                  <input
                    :id="`enter${index}`"
                    type="radio"
                    class="is-none check-switch"
                    name="enter"
                  >
                  <label
                    :for="`enter${index}`"
                    class="check-onoff"
                  />
                  <!-- // 체크박스 -->
                </div>
              </div>

              <div class="pagination">
                <btn-square-bd @click="window.alert('이전 버튼 누르기')">
                  <i class="icon icon-page-prev" />
                  <span class="is-voice-only">이전</span>
                </btn-square-bd>

                <button
                  type="button"
                  class="num-btn is-active"
                >
                  1
                </button>

                <button
                  type="button"
                  class="num-btn"
                >
                  2
                </button>

                <button
                  type="button"
                  class="num-btn"
                >
                  3
                </button>

                <button
                  type="button"
                  class="num-btn"
                >
                  4
                </button>

                <button
                  type="button"
                  class="num-btn"
                >
                  ···
                </button>

                <button
                  type="button"
                  class="num-btn"
                >
                  10
                </button>

                <btn-square-bd @click="window.alert('다음 버튼 누르기')">
                  <i class="icon icon-page-next" />
                  <span class="is-voice-only">다음</span>
                </btn-square-bd>
              </div>
              <!-- // 리스트 -->
            </div>
          </div>
          <!-- END 스타트업 리스트 -->

          <!-- 투자자 리스트 -->
          <div
            v-show="testTabType === 'investor'"
            class="search-inp-list-wrap"
          >
            <div class="search-inp-grp">
              <div class="inp-grp inp-sch-grp">
                <input
                  type="text"
                  class="inp"
                  placeholder="검색어를 입력하세요"
                >
                <button
                  v-if="exInput"
                  type="button"
                  class="inp-del-btn"
                  @click="exInput = ''"
                >
                  <span class="is-voice-only">검색어 지우기</span>
                </button>
                <button
                  type="button"
                  class="inp-sch-btn"
                >
                  <span class="is-voice-only">검색하기</span>
                </button>
              </div>
            </div>
            <div
              class="search-list-grp"
            >
              <!-- 리스트 -->
              <div class="cnt-txt-grp">
                <!-- 검색 전 -->
                <!-- <div class="txt">
                    <span class="bold">전체</span>
                  </div> -->

                <!-- 검색 후 갯수 표시 -->
                <div class="txt">
                  <span class="highlight">
                    <u>'검색어'</u>
                  </span>
                  에 대한 검색 결과 <span class="bold">15</span>건
                </div>
              </div>

              <!-- 검색결과 있을 때 -->
              <div class="box-list-grp">
                <div
                  v-for="(item, index) in 10"
                  :key="index"
                  class="box-choice-list box-list"
                  @click="$router.push('enroll-detail')"
                >
                  <div class="txt-dark-gray">
                    <p class="txt-dark">
                      주식회사 투자자
                    </p>
                    <span class="txt-gray">김철수 02-000-0000</span>
                  </div>

                  <!-- 체크박스 -->
                  <input
                    :id="`enter${index}`"
                    type="radio"
                    class="is-none check-switch"
                    name="enter"
                  >
                  <label
                    :for="`enter${index}`"
                    class="check-onoff"
                  />
                  <!-- // 체크박스 -->
                </div>
              </div>

              <div class="pagination">
                <btn-square-bd @click="window.alert('이전 버튼 누르기')">
                  <i class="icon icon-page-prev" />
                  <span class="is-voice-only">이전</span>
                </btn-square-bd>

                <button
                  type="button"
                  class="num-btn is-active"
                >
                  1
                </button>

                <button
                  type="button"
                  class="num-btn"
                >
                  2
                </button>

                <button
                  type="button"
                  class="num-btn"
                >
                  3
                </button>

                <button
                  type="button"
                  class="num-btn"
                >
                  4
                </button>

                <button
                  type="button"
                  class="num-btn"
                >
                  ···
                </button>

                <button
                  type="button"
                  class="num-btn"
                >
                  10
                </button>

                <btn-square-bd @click="window.alert('다음 버튼 누르기')">
                  <i class="icon icon-page-next" />
                  <span class="is-voice-only">다음</span>
                </btn-square-bd>
              </div>
              <!-- // 리스트 -->
            </div>
          </div>
          <!-- END 투자자 리스트 -->
        </div>
      </div>
    </div>
    <!-- // 마이페이지 컨텐츠 영역 -->
  </div>
</template>

<script>
export default {
  name: 'FcEnrollList',
  data() {
    return {
      testTabType: 'startup', // startup, investor
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
