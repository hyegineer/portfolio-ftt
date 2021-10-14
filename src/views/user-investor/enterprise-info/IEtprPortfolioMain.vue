<template>
  <!-- [D] 마이페이지 - 기업정보-포트폴리오 메인 -->
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
            >
              투자기업 추가
            </btn-solid-grayblue>
          </div>
        </article>

        <div class="board-list-grp-ttl">
          <p class="txt">
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
        <div class="pflio-grid-grp">
          <div
            v-for="(item, index) in 10"
            :key="index"
            class="pflio-grid"
          >
            <div class="pflio">
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
  </div>
</template>

<script>
export default {
  name: 'IEtprPortfolioMain',
  data() {
    return{ searchOptions: '이름 순' };
  },
};
</script>

<style lang="scss" scoped>
</style>