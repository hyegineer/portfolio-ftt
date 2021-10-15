<template>
  <div class="page"> 
    <layout-header />
    
    <div class="page-container">
      <div class="search-layout">
        <div class="search-layout-nav">
          <!-- 왼쪽 사이드 네비게이션 -->
          <nav class="side-nav">
            <div class="side-nav-ttl-grp">
              <h1 class="ttl">
                스타트업 찾기
              </h1>
            </div>

            <div class="side-nav-grp side-nav-top-grp">
              <button
                type="button"
                class="side-nav-btn"
              >
                <span class="txt">팩트시트가 주목하는 기업</span>
                <i class="arrow" />
              </button>
              
              <button
                type="button"
                class="side-nav-btn"
              >
                <span class="txt">최근 팩트시트가 완료된 기업</span>
                <i class="arrow" />
              </button>
              
              <button
                type="button"
                class="side-nav-btn"
              >
                <span class="txt">투자가 많이 진행되고 있는 기업</span>
                <i class="arrow" />
              </button>
            </div>

            <ul class="side-nav-grp">
              <li
                v-for="(nav, index) in testNav"
                :key="index"
                class="side-nav-list"
                :class="{'is-active' : nav.visible}"
              >
                <button
                  type="button"
                  class="side-nav-btn"
                  @click="clickSideNavBtn(nav, index)"
                >
                  <span class="txt">{{ nav.gnb }}</span>
                  <i class="arrow" />
                </button>

                <div
                  class="side-nav-lnb-grp"
                >
                  <router-link
                    v-for="(lnb, idx) in nav.lnb"
                    :key="idx"
                    class="lnb-btn"
                    :to="`/search-result/${idx}`"
                  >
                    {{ lnb }}
                  </router-link>
                </div>
              </li>
            </ul>
          </nav>
          <!-- // 왼쪽 사이드 네비게이션 -->
        </div>

        <!-- 오른쪽 기업리스트 내용 -->
        <div class="search-layout-cont">
          <!-- 제목 -->
          <div class="search-cont-hgrp">
            <breadcrumb>
              <li class="txt">
                홈
              </li>
              <li class="txt">
                스타트업 찾기
              </li>
              <li class="txt">
                최근 팩트체크가 완료된 기업
              </li>
            </breadcrumb>

            <h2 class="ttl">
              최근 팩트체크가 완료된 기업
            </h2>
          </div>
          <!-- // 제목 -->

          <!-- 리스트 -->
          <div class="card-grid-grp-ttl">
            <!-- 스타트업 찾기일 때 보임 -->
            <p class="txt">
              총 <span class="bold">15</span>개
            </p>
            <!-- // 스타트업 찾기일 때 보임 -->

            <!-- 검색어만 입력한 검색결과일 때만 보임 -->
            <div class="txt">
              <span class="highlight">
                <u>'검색어'</u>
              </span>
              에 대한 기업검색 결과 <span class="bold">15</span>개


              <img
                src="@/assets/images/img/img-bb-sch.svg"
                alt="검색 어드바이스 이미지"
                class="img-advice"
              >
            </div>
            <!-- // 검색어만 입력한 검색결과일 때만 보임 -->

            <div class="txt-right">
              <custom-slct
                class="custom-slct02"
                :selected="searchOptions"
              >
                <template #select>
                  {{ searchOptions || '팩트체크 요청순' }}
                </template>

                <template #options>
                  <custom-slct-opt 
                    @click="searchOptions = '팩트체크 요청순'"
                  >
                    팩트체크 요청순
                  </custom-slct-opt>
            
                  <custom-slct-opt 
                    @click="searchOptions = '업데이트순'"
                  >
                    업데이트순
                  </custom-slct-opt>
            
                  <custom-slct-opt 
                    @click="searchOptions = '업데이트순'"
                  >
                    투자자관심순
                  </custom-slct-opt>
            
                  <custom-slct-opt 
                    @click="searchOptions = '업데이트순'"
                  >
                    투자금액순
                  </custom-slct-opt>
            
                  <custom-slct-opt 
                    @click="searchOptions = '업데이트순'"
                  >
                    투자가치순
                  </custom-slct-opt>
                </template>
              </custom-slct>
            </div>
          </div>

          <!-- 등록된 기업이 있을 때 -->
          <div class="card-grid-grp">
            <div
              v-for="(item, index) in 5"
              :key="index"
              class="card-grid"
            >
              <div
                class="card"
                @click="$router.push('/etpr-profile-info')"
              >
                <div class="card-thumb">
                  <thumbnail />
                  <span class="ribbon">정보 업데이트</span>
                  <avatar />
                </div>

                <ul class="card-subtxt-grp">
                  <li class="card-subtxt-list">
                    기업규모
                  </li>
                  <li class="card-subtxt-list">
                    산업분류
                  </li>
                  <li class="card-subtxt-list">
                    산업분야
                  </li>
                </ul>

                <h6 class="card-name">
                  주식회사 팩트컴퍼니z
                </h6>

                <ul class="card-tag-grp">
                  <li class="card-tag-list">
                    #태그텍스트여덟자
                  </li>
                  <li class="card-tag-list">
                    #태그텍스트여덟자
                  </li>
                  <li class="card-tag-list">
                    #태그텍스트여덟자
                  </li>
                  <li class="card-tag-list">
                    #태그텍스트여덟자
                  </li>
                  <li class="card-tag-list">
                    #태그텍스트여덟자
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 등록된 기업이 없을 때 -->
          <div class="nothing-result-box">
            <empty-contents txt="등록된 기업이 없습니다." />
            <p class="desc">
              회원가입 하고, 기업 정보와 투자관리를 <br>
              팩트시트에서 해보세요!
            </p>
            <btn-bd class="btn-md">
              회원가입하기
            </btn-bd>
          </div>
          <!-- // 리스트 -->

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
        <!-- // 오른쪽 기업리스트 내용 -->
      </div>
    </div>

    <layout-footer />
  </div>
</template>

<script>
export default {
  name: 'SearchResult',
  data() {
    return{
      searchOptions: '팩트체크 요청순', // custom-select 동작을 구현하기위한 더미데이터
      testNav: [
        {
          gnb: 'ICT 서비스',
          lnb: ['자율주행차', '로봇', '인공지능', '빅데이터'],
          visible: false,
        },
        {
          gnb: 'ICT 제조',
          lnb: ['ICT 차', 'ICT 로봇', 'ICT 인공지능', 'ICT빅데이터'],
          visible: false,
        },
        {
          gnb: '유통/서비스',
          lnb: ['유통/서비스  1', '유통/서비스  2', '유통/서비스 3', '유통/서비스 4'],
          visible: false,
        },
      ],
    };
  },
  methods: {
    // 왼쪽 사이드네비게이션 클릭시 아코디언 효과
    clickSideNavBtn(data, index) {
      this.testNav.forEach(x => {
        if(!this.testNav[index].visible) {
          x.visible = false;
        }
      });

      data.visible = !data.visible;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>