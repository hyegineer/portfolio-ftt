<template>
  <!-- [D] 마이페이지 - 대시보드 -->
  <div class="mypage-container mypage-dashboard-container">
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
      <!-- 투자기업 리포트 -->
      <div class="ection-dashboard">
        <div class="dashboard-cont-hgrp">
          <div class="txt-grp">
            <p class="ttl">
              투자기업 리포트
            </p>
          </div>
          <btn-solid-dark
            class="btn-sm"
            @click="window.alert('리포트 다운로드를 클릭하셨습니다.')"
          >
            리포트 다운로드
          </btn-solid-dark>
        </div>
        <div class="cont-wrap">
          <div class="horizontal-scr-wrap">
            가로 스크롤
          </div>
        </div>
      </div>
      <!-- END 투자기업 리포트 -->
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
              @click="$router.push('ftck-list')"
            >
              + 전체보기
            </button>
          </div>
        </div>
        <div class="cont-wrap">
          <!-- 팩트체크가 있을 때 -->
          <table class="ftck-list-grp board-list-grp">
            <!-- [D] 비공개면 is-secret 클래스 추가 -->
            <tr
              class="board-list is-secret"
              @click="$router.push('ftck-detail')"
            >
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
            <tr
              class="board-list"
              @click="$router.push('ftck-detail')"
            >
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
            <empty-contents txt="요청한 내역이 없습니다." />
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
  name: 'IDashboardMain',
};
</script>

<style lang="scss" scoped>
</style>