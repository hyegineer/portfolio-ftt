<template>
  <!-- [D] 마이페이지 - 대시보드 -->
  <div
    mypage="dashboard"
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
      <div class="section-dashboard section-dashboard-report pt-remove">
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
          <!-- 가로 스크롤 선택 구간 -->
          <div class="horizontal-scr-wrap">
            <div class="select-ttl-grp">
              <p class="select-ttl">
                재원 선택
              </p>
            </div>
            <div class="select-cont-wrap">
              <ul class="select-cont-grp">
                <!-- 전체 출력 -->
                <!-- 클릭 시 is-active -->
                <li class="select-cont-list is-active">
                  <span class="select-txt">전체(10)</span>
                </li>
                <!-- END 전체 출력 -->

                <!-- 리스트 출력(반복문 시작점) -->
                <!-- 클릭 시 is-active -->
                <li
                  v-for="(item, idx) in 10"
                  :key="idx"
                  class="select-cont-list"
                >
                  <span class="select-txt">등록된 재원명1</span>
                </li>
              </ul>
            </div>
          </div>
          <!-- END 가로 스크롤 선택 구간 -->

          <!-- 리포트 내용 구간 -->
          <div class="report-cont-wrap">
            <div class="report-list-wrap">
              <div class="report-top-info-grp">
                <div class="info-grp">
                  <span class="label">총 투자금액</span>
                  <span class="info info-lg">0,000,000,000 원</span>
                </div>
                <div class="info-grp">
                  <span class="label">현재금액</span>
                  <span class="info">0,000,000,000 원</span>
                </div>
              </div>
              <div class="report-grp">
                <div class="report-list-hgrp">
                  <p class="ttl">
                    투자기업
                  </p>
                  <p class="count">
                    총 <span class="bold-txt">10</span>개
                  </p>
                </div>
                <!-- 내용이 있을 때 -->
                <div
                  class="report-list-grp"
                >
                  <!-- report-list-box + is-up: 상승 / is-hold: 변동없음 / is-down: 하락 -->
                  <!-- report-list-box + is-active 활성화 -->
                  <div
                    class="report-list-box is-up"
                  >
                    <div class="left-box">
                      <p class="name">
                        투자기업명
                      </p>
                      <p class="date">
                        업데이트 2021.00.00
                      </p>
                    </div>
                    <div class="right-box">
                      <span class="sub-label">수익률</span>
                      <span class="sub-info">1,500%</span>
                      <!-- icon-up: 상승 / icon-hold: 변동없음 / icon-down: 하락 -->
                      <i class="icon icon-up" />
                    </div>
                  </div>
                  <!-- report-list-box + is-up: 상승 / is-hold: 변동없음 / is-down: 하락 -->
                  <!-- report-list-box + is-active 활성화 -->
                  <div
                    class="report-list-box is-down is-active"
                  >
                    <div class="left-box">
                      <p class="name">
                        투자기업명
                      </p>
                      <p class="date">
                        업데이트 2021.00.00
                      </p>
                    </div>
                    <div class="right-box">
                      <span class="sub-label">수익률</span>
                      <span class="sub-info">1,500%</span>
                      <!-- icon-up: 상승 / icon-hold: 변동없음 / icon-down: 하락 -->
                      <i class="icon icon-down" />
                    </div>
                  </div>
                  <!-- report-list-box + is-up: 상승 / is-hold: 변동없음 / is-down: 하락 -->
                  <!-- report-list-box + is-active 활성화 -->
                  <div
                    v-for="(item, idx) in 10"
                    :key="idx"
                    class="report-list-box is-hold"
                  >
                    <div class="left-box">
                      <p class="name">
                        투자기업명
                      </p>
                      <p class="date">
                        업데이트 2021.00.00
                      </p>
                    </div>
                    <div class="right-box">
                      <span class="sub-label">수익률</span>
                      <span class="sub-info">1,500%</span>
                      <!-- icon-up: 상승 / icon-hold: 변동없음 / icon-down: 하락 -->
                      <i class="icon icon-hold" />
                    </div>
                  </div>
                </div>
                <!-- END 내용이 있을 때 -->

                <!-- 내용이 없을 때 -->
                <div
                  class="report-list-grp"
                  style="display: none;"
                >
                  <p class="empty-txt">
                    투자기업이 없습니다.
                  </p>
                </div>
                <!-- END 내용이 없을 때 -->
              </div>
            </div>
            <div class="report-graph-wrap">
              <div
                class="report-graph-cont-grp"
                style="height: 630px;"
              >
                <div class="graph-box-grp">
                  <div class="panel-ttl">
                    <div class="flex-ttl">
                      <span>투자금</span>
                      <div class="hover-desc">
                        <span
                          class="hover-overlay mb-show"
                        />

                        <div
                          class="badge-qus"
                        >
                          <span class="is-voice-only">도움말</span>
                        </div>

                        <div
                          class="hover-desc-box"
                        >
                          <span class="ttl">토글 제목</span>

                          <p class="desc">
                            해당 토글 내용
                          </p>
                        </div>
                      </div>
                    </div>
                    <span class="flex-ttl-sub">단위 : 원</span>
                  </div>
                  <!-- 내용이 있을 때 -->
                  <div
                    class="graph-box"
                  >
                    <div class="custom-colchart-wrap">
                      <div class="custom-colchart">
                        <ul class="axis-grp yaxis">
                          <li class="axis-list">
                            <div
                              class="grph-column"
                              style="height: 50%; background-color: #DDDEE6;"
                            >
                              <div class="data-labels">
                                <!-- [D] 이전해에는 percent 말풍선이 안보이는 듯 -->
                                <!-- <span class="txt-percent">150%</span> -->
                                <span class="txt-data">0,000,000,000</span>
                              </div>
                            </div>
                          </li>
                          <li class="axis-list">
                            <div
                              class="grph-column"
                              style="height: 100%; background-color: #00EB79;"
                            >
                              <div class="data-labels">
                                <!-- [D] 올랐을 때 color-red 클래스 -->
                                <!-- <span class="txt-percent color-red">30%</span> -->
                                <!-- [D] 올랐을 때 color-blue 클래스 -->
                                <span class="txt-percent color-red">150%</span>
                                <span class="txt-data">0,000,000,000</span>
                              </div>
                            </div>
                          </li>
                        </ul>

                        <ul class="axis-grp xaxis">
                          <li class="axis-list">
                            2020.00.00
                          </li>
                          <li class="axis-list">
                            2020.00.00
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- END 내용이 있을 때 -->

                  <!-- 내용이 없을 때 -->
                  <div
                    class="graph-box"
                    style="display: none;"
                  >
                    <p class="empty-txt">
                      내용이 없습니다.
                    </p>
                  </div>
                  <!-- END 내용이 없을 때 -->
                </div>
                <div class="graph-box-grp">
                  <div class="panel-ttl">
                    <div class="flex-ttl">
                      <span>기업가치</span>
                      <div class="hover-desc">
                        <span
                          class="hover-overlay mb-show"
                        />

                        <div
                          class="badge-qus"
                        >
                          <span class="is-voice-only">도움말</span>
                        </div>

                        <div
                          class="hover-desc-box"
                        >
                          <span class="ttl">토글 제목</span>

                          <p class="desc">
                            해당 토글 내용
                          </p>
                        </div>
                      </div>
                    </div>
                    <span class="flex-ttl-sub">단위 : 원</span>
                  </div>
                  <!-- 내용이 있을 때 -->
                  <div
                    class="graph-box"
                  >
                    <div class="custom-colchart-wrap">
                      <div class="custom-colchart">
                        <ul class="axis-grp yaxis">
                          <li class="axis-list">
                            <div
                              class="grph-column"
                              style="height: 100%; background-color: #DDDEE6;"
                            >
                              <div class="data-labels">
                                <!-- [D] 이전해에는 percent 말풍선이 안보이는 듯 -->
                                <!-- <span class="txt-percent">100%</span> -->
                                <span class="txt-data">0,000,000,000</span>
                              </div>
                            </div>
                          </li>
                          <li class="axis-list">
                            <div
                              class="grph-column"
                              style="height: 30%; background-color: #00EB79;"
                            >
                              <div class="data-labels">
                                <!-- [D] 올랐을 때 color-red 클래스 -->
                                <!-- <span class="txt-percent color-red">30%</span> -->
                                <!-- [D] 올랐을 때 color-blue 클래스 -->
                                <span class="txt-percent color-blue">30%</span>
                                <span class="txt-data">0,000,000,000</span>
                              </div>
                            </div>
                          </li>
                        </ul>

                        <ul class="axis-grp xaxis">
                          <li class="axis-list">
                            2020.00.00
                          </li>
                          <li class="axis-list">
                            2020.00.00
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- END 내용이 있을 때 -->

                  <!-- 내용이 없을 때 -->
                  <div
                    class="graph-box"
                    style="display: none;"
                  >
                    <p class="empty-txt">
                      내용이 없습니다.
                    </p>
                  </div>
                  <!-- END 내용이 없을 때 -->
                </div>
                <div class="graph-box-grp">
                  <div class="panel-ttl">
                    <div class="flex-ttl">
                      <span>매출</span>
                      <div class="hover-desc">
                        <span
                          class="hover-overlay mb-show"
                        />

                        <div
                          class="badge-qus"
                        >
                          <span class="is-voice-only">도움말</span>
                        </div>

                        <div
                          class="hover-desc-box"
                        >
                          <span class="ttl">토글 제목</span>

                          <p class="desc">
                            해당 토글 내용
                          </p>
                        </div>
                      </div>
                    </div>
                    <span class="flex-ttl-sub">단위 : 원</span>
                  </div>
                  <!-- 내용이 있을 때 -->
                  <div
                    class="graph-box"
                  >
                    <div class="custom-colchart-wrap">
                      <div class="custom-colchart">
                        <ul class="axis-grp yaxis">
                          <li class="axis-list">
                            <div
                              class="grph-column"
                              style="height: 50%; background-color: #DDDEE6;"
                            >
                              <div class="data-labels">
                                <!-- [D] 이전해에는 percent 말풍선이 안보이는 듯 -->
                                <!-- <span class="txt-percent">150%</span> -->
                                <span class="txt-data">0,000,000,000</span>
                              </div>
                            </div>
                          </li>
                          <li class="axis-list">
                            <div
                              class="grph-column"
                              style="height: 100%; background-color: #00EB79;"
                            >
                              <div class="data-labels">
                                <!-- [D] 올랐을 때 color-red 클래스 -->
                                <!-- <span class="txt-percent color-red">30%</span> -->
                                <!-- [D] 올랐을 때 color-blue 클래스 -->
                                <span class="txt-percent color-red">150%</span>
                                <span class="txt-data">0,000,000,000</span>
                              </div>
                            </div>
                          </li>
                        </ul>

                        <ul class="axis-grp xaxis">
                          <li class="axis-list">
                            2020.00.00
                          </li>
                          <li class="axis-list">
                            2020.00.00
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- END 내용이 있을 때 -->

                  <!-- 내용이 없을 때 -->
                  <div
                    class="graph-box"
                    style="display: none;"
                  >
                    <p class="empty-txt">
                      내용이 없습니다.
                    </p>
                  </div>
                  <!-- END 내용이 없을 때 -->
                </div>
                <div class="graph-box-grp">
                  <div class="panel-ttl">
                    <div class="flex-ttl">
                      <span>영업이익</span>
                      <div class="hover-desc">
                        <span
                          class="hover-overlay mb-show"
                        />

                        <div
                          class="badge-qus"
                        >
                          <span class="is-voice-only">도움말</span>
                        </div>

                        <div
                          class="hover-desc-box"
                        >
                          <span class="ttl">토글 제목</span>

                          <p class="desc">
                            해당 토글 내용
                          </p>
                        </div>
                      </div>
                    </div>
                    <span class="flex-ttl-sub">단위 : 원</span>
                  </div>
                  <!-- 내용이 있을 때 -->
                  <div
                    class="graph-box"
                  >
                    <div class="custom-colchart-wrap">
                      <div class="custom-colchart">
                        <ul class="axis-grp yaxis">
                          <li class="axis-list">
                            <div
                              class="grph-column"
                              style="height: 50%; background-color: #DDDEE6;"
                            >
                              <div class="data-labels">
                                <!-- [D] 이전해에는 percent 말풍선이 안보이는 듯 -->
                                <!-- <span class="txt-percent">150%</span> -->
                                <span class="txt-data">0,000,000,000</span>
                              </div>
                            </div>
                          </li>
                          <li class="axis-list">
                            <div
                              class="grph-column"
                              style="height: 100%; background-color: #00EB79;"
                            >
                              <div class="data-labels">
                                <!-- [D] 올랐을 때 color-red 클래스 -->
                                <!-- <span class="txt-percent color-red">30%</span> -->
                                <!-- [D] 올랐을 때 color-blue 클래스 -->
                                <span class="txt-percent color-red">150%</span>
                                <span class="txt-data">0,000,000,000</span>
                              </div>
                            </div>
                          </li>
                        </ul>

                        <ul class="axis-grp xaxis">
                          <li class="axis-list">
                            2020.00.00
                          </li>
                          <li class="axis-list">
                            2020.00.00
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- END 내용이 있을 때 -->

                  <!-- 내용이 없을 때 -->
                  <div
                    class="graph-box"
                    style="display: none;"
                  >
                    <p class="empty-txt">
                      내용이 없습니다.
                    </p>
                  </div>
                  <!-- END 내용이 없을 때 -->
                </div>
              </div>
              <!-- 내용이 있을 때 -->
              <div class="btn-grp">
                <btn-bd-dark
                  class="btn-md"
                  @click="window.alert('기업 프로필로 이동')"
                >
                  기업 프로필로 이동
                </btn-bd-dark>
              </div>
              <!-- END 내용이 있을 때 -->

              <!-- 내용이 없을 때 -->
              <div class="empty-info-grp">
                <i class="icon icon-i" />
                <span class="ment">마이페이지 > 기업정보 > 포트폴리오 에 투자기업을 등록하세요.</span>
              </div>
              <!-- END 내용이 없을 때 -->
            </div>
          </div>
          <!-- END 리포트 내용 구간 -->
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
          <p class="ttl-txt">
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
                  @click="searchOptions = '이름 순'"
                >
                  이름 순
                </custom-slct-opt>

                <custom-slct-opt
                  @click="searchOptions = '업데이트일 순'"
                >
                  업데이트일 순
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
  data() {
    return {
      searchOptions: null, // custom-select 동작을 구현하기위한 더미데이터
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
