<template>
  <!-- [D] 마이페이지 - 대시보드 -->
  <div class="mypage-container mypage-dashboard-container etpr-prifile-page">
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
          대시보드
        </li>
      </breadcrumb>

      <h2 class="ttl">
        대시보드
      </h2>
    </div>
    <!-- // 마이페이지 페이지 제목 -->

    <!-- 마이페이지 컨텐츠 영역 -->
    <div class="mypage-cont-wrap">
      <div class="big-ttl-grp">
        <p class="cont-big-ttl">
          <span class="underline">[주식회사 팩트컴퍼니]</span>의 기본정보
        </p>
      </div>
      <!-- 기업정보 -->
      <div class="etpr-main-conts">
        <div class="flexable-container">
          <div class="etpr-panel-wrap flexable-inner">
            <div class="panel-ttl">
              <span>기업 기본정보</span>
              <div class="hover-desc">
                <span
                  class="hover-overlay mb-show"
                />
              </div>
            </div>
            <div class="white-panel">
              <div class="common-info-container">
                <ul class="common-info-list-wrap">
                  <!-- TODO: 정보가 없는 곳은 전부 - 로 표시 -->
                  <li class="common-info-list">
                    <h4 class="ttl">
                      대표자
                    </h4>
                    <div class="dec">
                      {{ '홍길동' }}
                    </div>
                  </li>
                  <li class="common-info-list">
                    <h4 class="ttl">
                      사업자번호
                    </h4>
                    <div class="dec">
                      {{ '000-00-00***' }}
                    </div>
                  </li>
                  <li class="common-info-list">
                    <h4 class="ttl">
                      본사주소
                    </h4>
                    <div class="dec">
                      {{ '서울특별시 강남구 테헤란로 312 13층 주소길어지면 최대 2줄 (우편번호)' }}
                    </div>
                  </li>
                  <li class="common-info-list">
                    <h4 class="ttl">
                      전화번호
                    </h4>
                    <div class="dec">
                      {{ '02-1234-5678' }}
                    </div>
                  </li>
                  <li class="common-info-list">
                    <h4 class="ttl">
                      기업규모
                    </h4>
                    <div class="dec">
                      {{ '소기업' }}
                    </div>
                  </li>
                  <li class="common-info-list">
                    <h4 class="ttl">
                      산업분류
                    </h4>
                    <div class="dec">
                      {{ 'ICT 서비스' }}
                    </div>
                  </li>
                  <li class="common-info-list">
                    <h4 class="ttl">
                      산업분야
                    </h4>
                    <div class="dec">
                      {{ '-' }}
                    </div>
                  </li>
                  <li class="common-info-list">
                    <h4 class="ttl">
                      설립일
                    </h4>
                    <div class="dec">
                      {{ '2021년 03월 10일' }}
                    </div>
                  </li>
                  <li class="common-info-list tag-list">
                    <h4 class="ttl">
                      태그
                    </h4>
                    <div class="dec">
                      <div class="tag-badge">
                        태그최대여덟글자
                      </div>
                      <div class="tag-badge">
                        태그최대
                      </div>
                      <div class="tag-badge">
                        여덟글자
                      </div>
                      <div class="tag-badge">
                        두줄까지표시가능
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="etpr-panel-wrap flexable-inner">
            <div class="panel-ttl">
              <span>기업가치</span>
              <p class="panel-ttl-sub">
                투자자가 작성한 리뷰 기반의 평균 지수입니다.
              </p>
            </div>
            <div class="white-panel pd-0">
              <div class="common-info-container">
                <p class="common-info-graph">
                  그래프 들어옵니다.
                </p>
              </div>
            </div>
            <!-- <div class="bot-txt">
              투자자가 작성한 리뷰 기반의 평균 지수입니다.
            </div> -->
          </div>
        </div>
      </div>
      <!-- END 기업정보 -->

      <!-- 유사기업 정보 -->
      <div class="section-dashboard section-similar">
        <div class="dashboard-cont-hgrp">
          <div class="txt-grp">
            <p class="ttl">
              유사기업 정보
            </p>
            <p class="ttl-sub">
              최대 20대까지 표시됩니다.
            </p>
          </div>
        </div>
        <div class="cont-wrap">
          <!-- 내용이 있을 때 -->
          <div class="slide-grp">
            <div
              v-swiper:similarSlide="similarOptions"
              class="swiper-container"
            >
              <div class="swiper-wrapper similar-wrapper">
                <div
                  v-for="(item, idx) in 10"
                  :key="idx"
                  class="swiper-slide"
                >
                  <div class="card">
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
              <div class="custom-btn-grp">
                <div class="swiper-button-prev custom-btn custom-btn-prev similar-btn-prev" />
                <div class="swiper-button-next custom-btn custom-btn-next similar-btn-next" />
              </div>
            </div>
          </div>
          <!-- END 내용이 있을 때 -->

          <!-- 내용이 없을 때 -->
          <div class="section-cont ">
            <empty-contents txt="정보가 없습니다." />
          </div>
          <!-- END 내용이 없을 때 -->
        </div>
      </div>
      <!-- END 유사기업 정보 -->

      <!-- 관심기업 소식 -->
      <div class="section-dashboard section-fc-request">
        <div class="dashboard-cont-hgrp">
          <div class="txt-grp">
            <p class="ttl">
              관심기업 소식
            </p>
          </div>
        </div>
        <div class="board-list-grp-ttl">
          <p class="txt">
            총 <span class="bold">15</span>개
          </p>

          <div class="txt-right">
            <custom-slct
              class="custom-slct02 page-custom-slct"
              :selected="searchOptions"
            >
              <!-- 클래스명 부가설명: page-custom-slct <- 페이지별로 넓이조정 필요할 때 요거 활용하면 좋을 듯.. -->
              <template #select>
                {{ searchOptions || '전체' }}
              </template>

              <template #options>
                <custom-slct-opt 
                  @click="searchOptions = '대기중'"
                >
                  대기중
                </custom-slct-opt>
            
                <custom-slct-opt 
                  @click="searchOptions = '진행중'"
                >
                  진행중
                </custom-slct-opt>
            
                <custom-slct-opt 
                  @click="searchOptions = '내용 검토중'"
                >
                  내용 검토중
                </custom-slct-opt>
            
                <custom-slct-opt 
                  @click="searchOptions = '완료'"
                >
                  완료
                </custom-slct-opt>
            
                <custom-slct-opt 
                  @click="searchOptions = '이의신청'"
                >
                  이의신청
                </custom-slct-opt>
              </template>
            </custom-slct>
          </div>
        </div>
        <div class="cont-wrap">
          <div class="table-all-wrap">
            <div class="table-grp">
              <!-- 테이블 내용 그룹 -->

              <!-- 내용이 있을 때 -->
              <div
                class="table-cont-wrap custom-scroll-wrap"
              >
                <ul
                  v-for="(item, idx) in 20" 
                  :key="idx"
                  class="table-cont-grp"
                >
                  <li class="table-cont-list flex-basis-13 txt-center">
                    <span class="table-txt">스타트업명</span>
                  </li>
                  <li class="table-cont-list flex-basis-76 txt-left f-14">
                    <span class="table-txt">투자개요 / 주주현황 / 종합의견</span>
                  </li>
                  <li class="table-cont-list flex-basis-13 txt-center color-gray">
                    <span class="table-txt">2021.00.00</span>
                  </li>
                </ul>
              </div>
              <!-- END 내용이 있을 때 -->

              <!-- 내용이 없을 때 -->
              <div class="section-cont ">
                <empty-contents txt="소식이 없습니다." />
              </div>
              <!-- END 내용이 없을 때 -->

            <!-- END 테이블 내용 그룹 -->
            </div>
          </div>
        </div>
      </div>
      <!-- END 관심기업 소식 -->

      <!-- 우리 기업에 관심을 가진 투자자 -->
      <div class="section-dashboard section-fc-request">
        <div class="dashboard-cont-hgrp">
          <div class="txt-grp">
            <p class="ttl">
              우리 기업에 관심을 가진 투자자
            </p>
          </div>
          <div class="btn-grp">
            <button
              type="button"
              class="btn-all-view"
            >
              + 전체보기
            </button>
          </div>
        </div>
        <div class="cont-wrap">
          <!-- 내용이 있을 때 -->
          <div class="slide-grp">
            <div
              v-swiper:interestSlide="interestOptions"
              class="swiper-container"
            >
              <div class="swiper-wrapper interest-wrapper">
                <div
                  v-for="(item, idx) in 10"
                  :key="idx"
                  class="swiper-slide"
                >
                  <div class="card">
                    <div class="card-thumb">
                      <thumbnail />
                      <avatar />
                    </div>

                    <span class="card-user-type">
                      개인 투자자
                    </span>

                    <h6 class="card-name">
                      투자자명
                    </h6>
                  </div>
                </div>
              </div>
              <div class="custom-btn-grp">
                <div class="swiper-button-prev custom-btn custom-btn-prev interest-btn-prev" />
                <div class="swiper-button-next custom-btn custom-btn-next interest-btn-next" />
              </div>
            </div>
          </div>
          <!-- END 내용이 있을 때 -->

          <!-- 내용이 없을 때 -->
          <div class="section-cont ">
            <empty-contents txt="정보가 없습니다." />
          </div>
          <!-- END 내용이 없을 때 -->
        </div>
      </div>
      <!-- END 우리 기업에 관심을 가진 투자자 -->

      <!-- 팩트체크 요청 -->
      <div class="section-dashboard section-fc-request">
        <div class="dashboard-cont-hgrp">
          <div class="txt-grp">
            <p class="ttl">
              팩트체크 요청
            </p>
            <p class="ttl-sub">
              최근 5건까지 표시됩니다.
            </p>
          </div>
          <div class="btn-grp">
            <button
              type="button"
              class="btn-all-view"
            >
              + 전체보기
            </button>
          </div>
        </div>
        <div class="cont-wrap">
          <!-- 팩트체크가 있을 때 -->
          <table class="ftck-list-grp board-list-grp">
            <!-- [D] 비공개면 is-secret 클래스 추가 -->
            <tr class="board-list is-secret">
              <td class="td-subject">
                <div class="ftck-state-subject">
                  <div class="ftck-state">
                    <badge-state txt="진행중" />

                    <!-- [D] 비공개일 때만 보임 -->
                    <div class="badge-secret">
                      <i class="icon icon-secret" />
                      <span class="txt">비공개</span>
                    </div>
                  </div>

                  <div class="ftck-subject">
                    <span class="lbel">{{ '항목명' }}</span>
                    <p class="subject">
                      {{ '비공개 팩트체크입니다.' }}
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <span class="td-word-writer">{{ '작성자명' }}</span>
              </td>
              <td>
                <span class="td-word-date">{{ '2021.00.00' }}</span>
              </td>
            </tr>
        
            <!-- [D] 완료 -->
            <tr class="board-list">
              <td class="td-subject">
                <div class="ftck-state-subject">
                  <div class="ftck-state">
                    <badge-state txt="완료" />

                    <!-- [D] 비공개일 때만 보임 -->
                    <!-- <div class="badge-secret">
                  <i class="icon icon-secret" />
                  <span class="txt">비공개</span>
                </div> -->
                  </div>

                  <div class="ftck-subject">
                    <span class="lbel">{{ '항목명' }}</span>
                    <p class="subject">
                      {{ '팩트체크 요청사항 제목입니다. 두 줄일리 없겠지만 두 줄일 때는 말줄임표시가 나옵니다. 팩트체크 요청사항 제목입니다. 두 줄일리 없겠지만 두 줄일 때는 말줄임표시가 나옵니다.' }}
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <span class="td-word-writer">{{ '작성자명' }}</span>
              </td>
              <td>
                <span class="td-word-date">{{ '2021.00.00' }}</span>
              </td>
            </tr>
          </table>
          <!-- // 받은 팩트체크가 있을 때 -->

          <!-- 요청이 없을 때 -->
          <div class="section-cont ">
            <empty-contents txt="요청이 없습니다." />
          </div>
          <!-- END 요청이 없을 때 -->
        </div>
      </div>
      <!-- END 팩트체크 요청 -->
    </div>
    <!-- // 마이페이지 컨텐츠 영역 -->
  </div>
</template>

<script>
export default {
  name: 'SDashboardMain',
  data() {
    return {
      similarOptions: { // 유사기업 정보 슬라이드 옵션
        slidesPerView: 4,
        spaceBetween: 17,
        navigation: {
          nextEl: '.similar-btn-next',
          prevEl: '.similar-btn-prev',
        },
      },
      interestOptions: { // 관심을 가진 투자자 슬라이드 옵션
        slidesPerView: 4,
        spaceBetween: 17,
        navigation: {
          nextEl: '.interest-btn-next',
          prevEl: '.interest-btn-prev',
        },
      },
      searchOptions: null, // 관심기업 소식 정렬 값
    };
  },
};
</script>

<style lang="scss" scoped>
</style>