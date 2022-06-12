<template>
  <!-- [D] 마이페이지 - 기업정보-포트폴리오 메인 -->
  <div class="mypage-container mypage-rfixed-container">
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
          포트폴리오
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
            포트폴리오
          </p>
        </div>

        <layout-right-fixed />

        <article class="guide-box">
          <div class="guide-box-cont">
            <h6 class="lbel">
              안내사항
            </h6>
            <p class="txt">
              기업 프로필에 '포트폴리오'로 노출됩니다.
            </p>
          </div>

          <div class="btn-grp">
            <btn-solid-grayblue
              class="btn-sm"
              @click="openModal('addEnterprise')"
            >
              투자기업 추가
            </btn-solid-grayblue>
          </div>
        </article>
        
        <!-- 업데이트 내역 -->
        <!-- // 업데이트 내역 -->

        <div class="board-list-grp-ttl">
          <p class="ttl-txt">
            총 <span class="bold">15</span>개
          </p>

          <div class="txt-right">
            <custom-slct
              class="page-custom-slct custom-slct02"
              :selected="searchOptions"
            >
              <template #select>
                {{ searchOptions || '이름 순' }}
              </template>

              <template #options>
                <custom-slct-opt 
                  @click="searchOptions = '이름 순'"
                >
                  이름 순
                </custom-slct-opt>
            
                <custom-slct-opt 
                  @click="searchOptions = '최신 순'"
                >
                  최신 순
                </custom-slct-opt>
              </template>
            </custom-slct>
          </div>
        </div>

        <!-- 포트폴리오가 있을 때 -->
        <div
          class="pflio-grid-grp"
        >
          <div
            v-for="(item, index) in 5"
            :key="index"
            class="pflio-grid"
          >
            <div class="pflio-wrap">
              <div class="pflio">
                <i
                  class="icon icon-i-white pflio-desc-icon"
                  @click="clickIicon(index)"
                />
                <div class="avatar-with-name col-avatar-with-name">
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
                <div class="pflio-toggle-item">
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
                <div class="pflio-ctrl-btns">
                  <btn-bd-light
                    class="btn-rounded btn-xsm btn-edit-ctrl"
                  >
                    <i class="icon icon-pen" />
                    <span class="txt">수정</span>
                  </btn-bd-light>
              

                  <btn-bd-light
                    class="btn-rounded btn-xsm btn-edit-ctrl"
                  >
                    <i class="icon icon-trash" />
                    <span class="txt">삭제</span>
                  </btn-bd-light>
                </div>
              </div>

              <!-- i 아이콘 누르면 나오는 박스 -->
              <div
                v-if="selectedIndex === index"
                v-on-clickaway="awayPflioDescBox"
                class="pflio-desc-box"
              >
                <span class="ttl">투자정보 (3)</span>
                <div class="desc">
                  <dl class="pflio-dlist">
                    <dt class="dttl">
                      재원명
                    </dt>
                    <dd class="ddt">
                      <strong class="amount">0,000,000,000,000</strong>
                      <span class="unit">원</span>
                    </dd>
                  </dl>
                  
                  <dl class="pflio-dlist">
                    <dt class="dttl">
                      재원명이 길어질 때 2줄 이상 넘어갑니다. 재원명이 길어질 때 2줄 이상 넘어갑니다.
                    </dt>
                    <dd class="ddt">
                      <strong class="amount">0,000,000,000,000</strong>
                      <span class="unit">원</span>
                    </dd>
                  </dl>
                  
                  <dl class="pflio-dlist">
                    <dt class="dttl">
                      재원명이 길어질 때 2줄 이상 넘어갑니다. 재원명이 길어질 때 2줄 이상 넘어갑니다.
                    </dt>
                    <dd class="ddt">
                      <strong class="amount">0,000,000,000,000</strong>
                      <span class="unit">원</span>
                    </dd>
                  </dl>
                </div>
              </div>
              <!-- // i 아이콘 누르면 나오는 박스 -->
            </div>
          </div>
        </div>
        <!-- // 포트폴리오가 있을 때 -->

        <!-- 포트폴리오가 없을 때 -->
        <div class="pflio-list-grp">
          <empty-contents txt="투자한 기업이 없습니다. <br>포트폴리오에서 기업을 추가하세요." />
        </div>
        <!-- // 포트폴리오가 없을 때 -->

        <!-- 페이지네이션 -->
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
      <!-- // 페이지네이션 -->
      </div>
    </div>
    <!-- // 마이페이지 컨텐츠 영역 -->

    <modal-dialog>
      <modal-light-box @click="closeModal" />

      <!-- [modal] 기업 선택하기 -->
      <modal
        :class="{'is-show': $store.state.modal.visible && $store.state.modal.type === 'addEnterprise'}"
        wide
        ttl="투자기업 추가하기"
      >
        <div class="modal-cont md-choice-cont">
          <!-- 검색어 입력영역 -->
          <div class="inp-grp inp-sch-grp">
            <input
              type="text"
              class="inp"
              placeholder="기업명 / 기업 고유 아이디를 검색하세요."
            >
            <button
              type="button"
              class="inp-del-btn"
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
          <!-- // 검색어 입력영역 -->

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
              에 대한 전체 검색 결과 <span class="bold">15</span>건
            </div>
          </div>

          <!-- 검색결과 있을 때 -->
          <div class="box-list-grp">
            <div
              v-for="(item, index) in 10"
              :key="index"
              class="box-choice-list box-list"
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

          <!-- 검색결과 없을 때 -->
          <empty-contents txt="추가할 기업이 없습니다." />
          <!-- // 리스트 -->
        </div>

        <div class="modal-btn-wrap">
          <btn-bd-light
            class="btn-fb btn-md btn-cancel"
            @click="closeModal"
          >
            닫기
          </btn-bd-light>
          <btn-solid-dark
            class="btn-md"
            @click="$router.push('etpr-portfolio-add')"
          >
            선택완료
          </btn-solid-dark>
        </div>
      </modal>
      <!-- // [modal] 기업 선택하기 -->
    </modal-dialog>
  </div>
</template>

<script>
export default {
  name: 'IEtprPortfolioMain',
  data() {
    return{ 
      searchOptions: '이름 순', // custom-select 동작을 구현하기위한 더미데이터
      selectedIndex: null, // i 아이콘을 눌렀을 시 재원 정보 보이게 처리하는 데이터
    };
  },
  methods: {
    clickIicon(data) {
      this.selectedIndex = data;
    },
    awayPflioDescBox() {
      this.selectedIndex = null;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>