<template>
  <div class="mypage-etpr-profile-request-ftck-page">
    <div class="mypage-container">
      <!-- 마이페이지 페이지 제목 -->
      <div class="mypage-hgrp">
        <breadcrumb>
          <li class="txt">
            홈
          </li>
          <li class="txt">
            스타트업 찾기
          </li>
          <li class="txt">
            4차 산업기술
          </li>
          <li class="txt">
            가상ㆍ증강현실
          </li>
        </breadcrumb>

        <h2 class="ttl">
          팩트체크 요청하기
        </h2>
      </div>
      <!-- // 마이페이지 페이지 제목 -->

      <!-- 마이페이지 컨텐츠 영역 -->
      <div class="mypage-cont-wrap">
        <!-- 나의 팩트체크 수정 - 주의사항 설명박스 -->
        <div class="ftck-caution-box">
          <div class="ftck-cb-ttl">
            <i class="icon icon-i-green" />
            <span class="cb-ttl">주의사항</span>
          </div>

          <ul class="ul-dash">
            <li class="list">
              작성 중인 페이지를 나가면 내용이 저장되지 않습니다.
            </li>
            <li class="list">
              삭제된 요청 항목은 다시 추가할 수 없습니다.
            </li>
            <li class="list">
              요청 항목별로 소모되는 포인트가 상이합니다.
            </li>
            <li class="list">
              팩트체커 선택 완료 시, 포인트가 차감되며 요청 내용 수정이 불가합니다.
            </li>
          </ul>
        </div>
        <!-- // 나의 팩트체크 수정 - 주의사항 설명박스 -->
        <div class="ftck-edit-wrap">
          <!-- 나의 팩트체크 수정 - 내용  -->
          <div class="ftck-request-wrap">
            <div class="big-ttl-grp">
              <h3 class="cont-big-ttl">
                선택한 기업에 <span class="underline">팩트체크를 요청</span>합니다.<br>
                팩트체크를 원하는 항목과 내용을 작성하세요.
              </h3>
            </div>
            <div class="avatar-wrap">
              <!-- 아바타 -->
              <div class="avatar-grp">
                <div class="avatar-with-name">
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
            <!-- END 아바타 -->
            <div class="req-info-cont-wrap">
              <!-- 왼쪽 탭 메뉴 -->
              <div class="left-floating-menu-wrap">
                <div class="floating-hgrp">
                  <span class="selected-cats-ttl">
                    선택된 요청 항목
                    <span class="selected-cats-connt">4</span>
                  </span>
                </div>
                <div class="point-grp">
                  <span class="label">총 사용 예정 포인트</span>
                  <div class="inner-flex">
                    <span class="point">100,000</span>
                    <i class="icon icon-point" />
                  </div>
                </div>
                <div class="tab-list-grp">
                  <!-- btn-tab에 is-active -->
                  <btn-bd-dark
                    class="btn-sm btn-tab"
                    :class="{'is-active': tabActive === 1}"
                    @click="tabActive = 1"
                  >
                    기본정보
                  </btn-bd-dark>
                  <btn-bd-dark
                    class="btn-sm btn-tab"
                    :class="{'is-active': tabActive === 2}"
                    @click="tabActive = 2"
                  >
                    규모
                  </btn-bd-dark>
                  <btn-bd-dark
                    class="btn-sm btn-tab"
                    :class="{'is-active': tabActive === 3}"
                    @click="tabActive = 3"
                  >
                    주주 정보
                  </btn-bd-dark>
                  <btn-bd-dark
                    class="btn-sm btn-tab"
                    :class="{'is-active': tabActive === 4}"
                    @click="tabActive = 4"
                  >
                    재무상태
                  </btn-bd-dark>
                  <btn-bd-dark
                    class="btn-sm btn-tab"
                    :class="{'is-active': tabActive === 5}"
                    @click="tabActive = 5"
                  >
                    손익계산서
                  </btn-bd-dark>
                  <btn-bd-dark
                    class="btn-sm btn-tab"
                    :class="{'is-active': tabActive === 6}"
                    @click="tabActive = 6"
                  >
                    매출 추이
                  </btn-bd-dark>
                  <btn-bd-dark
                    class="btn-sm btn-tab"
                    :class="{'is-active': tabActive === 7}"
                    @click="tabActive = 7"
                  >
                    영업이익 추이
                  </btn-bd-dark>
                  <btn-bd-dark
                    class="btn-sm btn-tab"
                    :class="{'is-active': tabActive === 8}"
                    @click="tabActive = 8"
                  >
                    당기순이익 추이
                  </btn-bd-dark>
                  <btn-bd-dark
                    class="btn-sm btn-tab"
                    :class="{'is-active': tabActive === 9}"
                    @click="tabActive = 9"
                  >
                    투자유치
                  </btn-bd-dark>
                  <btn-bd-dark
                    class="btn-sm btn-tab"
                    :class="{'is-active': tabActive === 10}"
                    @click="tabActive = 10"
                  >
                    보유특허
                  </btn-bd-dark>
                  <btn-bd-dark
                    class="btn-sm btn-tab"
                    :class="{'is-active': tabActive === 11}"
                    @click="tabActive = 11"
                  >
                    구성원
                  </btn-bd-dark>
                  <btn-bd-dark
                    class="btn-sm btn-tab"
                    :class="{'is-active': tabActive === 12}"
                    @click="tabActive = 12"
                  >
                    추가 요청
                  </btn-bd-dark>
                </div>
              </div>
              <!-- END 왼쪽 탭 메뉴 -->
              
              <!-- TODO: tab: 기본정보 -->
              <div
                v-show="tabActive === 1"
                class="etpr-profile-request-ftck-cont-wrap"
              >
                <!-- 항목 정보 -->
                <div
                  class="req-info-grp"
                >
                  <div class="req-hgrp">
                    <p class="ttl">
                      항목 정보
                    </p>
                  </div>
                  <div class="etpr-panel-wrap flexable-inner">
                    <!-- TODO: 최상위 요소에 is-blur 주면 blur 처리되고 해당 데이터 더미 처리(-) -->
                    <div
                      class="white-panel"
                      :class="{'is-blur': noUpdate}"
                    >
                      <!-- 필터처리된 데이터 가운데 뜨는 영역 -->
                      <div class="cover-blur-container">
                        <div class="cover-blur-inner">
                          <img
                            class="img"
                            src="@/assets/images/icon/icon-noti.svg"
                            alt="!"
                          >
                          <p class="text">
                            최신 정보를 등록하지 않아<br>블라인드 처리 되었습니다.
                          </p>
                        </div>
                      </div>
                      <!-- END 필터처리된 데이터 가운데 뜨는 영역 -->
                      <div class="common-info-container blur-filter-container">
                        <ul class="common-info-list-wrap">
                          <!-- TODO: 정보가 없는 곳은 전부 - 로 표시 -->
                          <li class="common-info-list">
                            <h4 class="ttl">
                              대표자
                            </h4>
                            <div class="dec">
                              {{ noUpdate ? '-' : '홍길동' }}
                            </div>
                          </li>
                          <li class="common-info-list">
                            <h4 class="ttl">
                              사업자번호
                            </h4>
                            <div class="dec">
                              {{ noUpdate ? '-' : '000-00-00***' }}
                            </div>
                          </li>
                          <li class="common-info-list">
                            <h4 class="ttl">
                              본사주소
                            </h4>
                            <div class="dec">
                              {{ noUpdate ? '-' : '서울특별시 강남구 테헤란로 312 13층 주소길어지면 최대 2줄 (우편번호)' }}
                            </div>
                          </li>
                          <li class="common-info-list">
                            <h4 class="ttl">
                              전화번호
                            </h4>
                            <div class="dec">
                              {{ noUpdate ? '-' : '02-1234-5678' }}
                            </div>
                          </li>
                          <li class="common-info-list">
                            <h4 class="ttl">
                              기업규모
                            </h4>
                            <div class="dec">
                              {{ noUpdate ? '-' : '소기업' }}
                            </div>
                          </li>
                          <li class="common-info-list">
                            <h4 class="ttl">
                              산업분류
                            </h4>
                            <div class="dec">
                              {{ noUpdate ? '-' : 'ICT 서비스' }}
                            </div>
                          </li>
                          <li class="common-info-list">
                            <h4 class="ttl">
                              산업분야
                            </h4>
                            <div class="dec">
                              {{ noUpdate ? '-' : '물류업' }}
                            </div>
                          </li>
                          <li class="common-info-list">
                            <h4 class="ttl">
                              설립일
                            </h4>
                            <div class="dec">
                              {{ noUpdate ? '-' : '2021년 03월 10일' }}
                            </div>
                          </li>
                          <li class="common-info-list tag-list">
                            <h4 class="ttl">
                              태그
                            </h4>
                            <div
                              v-if="noUpdate === false"
                              class="dec"
                            >
                              <badge-rounded>태그최대여덟글자</badge-rounded>
                              <badge-rounded>태그최대여덟글자</badge-rounded>
                              <badge-rounded>태그최대여덟글자</badge-rounded>
                              <badge-rounded>태그최대여덟글자</badge-rounded>
                              <badge-rounded>태그최대여덟글자</badge-rounded>
                            </div>
                            <div
                              v-else
                              class="dec"
                            >
                              <badge-rounded>-</badge-rounded>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- END 항목 정보 -->

                <!-- 작성내용 -->
                <div class="req-cont-grp">
                  <div class="req-hgrp">
                    <p class="ttl">
                      요청 내용
                    </p>
                  </div>
                  <div class="req-cats-point-grp">
                    <div class="req-cats-grp">
                      <span class="label">작성중인 항목</span>
                      <span class="info">기본정보</span>
                      <btn-bd-light
                        class="btn-rounded btn-xsm"
                      >
                        <i class="icon icon-trash" />항목 삭제하기
                      </btn-bd-light>
                    </div>
                    <div class="point-grp">
                      <span class="label">사용 포인트</span>
                      <span class="point">5,000</span>
                      <i class="icon icon-point" />
                    </div>
                  </div>
                  <div class="inp-grp editor-inp-grp">
                    <input
                      type="text"
                      class="inp editor-inp"
                      placeholder="팩트체크 요청 제목을 입력하세요, (n자 입력)"
                    >
                  </div>
                  <div
                    class="editor-cont-grp"
                    style="border: 1px solid #DDDEE6"
                  >
                    EDITOR 들어가는 부분
                  </div>
                  <div class="btn-all-grp">
                    <div class="ment-grp">
                      <i class="icon icon-i" />
                      <span class="ment">요청한 팩트체크는 마이페이지 > 팩트체크 > 요청한 팩트체크에서 확인 가능합니다.</span>
                    </div>
                    <div class="btn-grp">
                      <btn-solid-dark
                        class="btn-md"
                        @click="window.alert('검정버튼을 클릭하셨습니다.')"
                      >
                        <img
                          src="@/assets/images/icon/icon-check-gn.svg"
                          alt="체크"
                          class="check-icon"
                        > 팩트체크 요청완료
                      </btn-solid-dark>
                    </div>
                  </div>
                </div>
                <!-- END 작성내용 -->
              </div>
              <!-- TODO: tab: END 기본정보 -->
              
              <!-- TODO: tab: 규모 -->
              <div
                v-show="tabActive === 2"
                class="etpr-profile-request-ftck-cont-wrap"
              >
                <!-- 항목 정보 -->
                <div
                  class="req-info-grp"
                >
                  <div class="req-hgrp">
                    <p class="ttl">
                      항목 정보
                    </p>
                  </div>
                  <div class="etpr-panel-wrap flexable-inner">
                    <!-- TODO: 최상위 요소에 is-blur 주면 blur 처리되고 해당 데이터 더미 처리(-) -->
                    <div
                      class="white-panel"
                      :class="{'is-blur': noUpdate}"
                    >
                      <!-- 필터처리된 데이터 가운데 뜨는 영역 -->
                      <div class="cover-blur-container">
                        <div class="cover-blur-inner">
                          <img
                            class="img"
                            src="@/assets/images/icon/icon-noti.svg"
                            alt="!"
                          >
                          <p class="text">
                            최신 정보를 등록하지 않아<br>블라인드 처리 되었습니다.
                          </p>
                        </div>
                      </div>
                      <!-- END 필터처리된 데이터 가운데 뜨는 영역 -->
                      <div class="common-info-container blur-filter-container">
                        <ul class="common-info-list-wrap">
                          <!-- TODO: 정보가 없는 곳은 전부 - 로 표시 -->
                          <li class="common-info-list scale-list">
                            <h4 class="ttl">
                              발행주식 수
                            </h4>
                            <div class="dec">
                              {{ noUpdate ? '-' : '12' }} 주
                            </div>
                          </li>
                          <li class="common-info-list scale-list">
                            <h4 class="ttl">
                              액면가
                            </h4>
                            <div class="dec">
                              {{ noUpdate ? '-' : '500,000' }} 원
                            </div>
                          </li>
                          <li class="common-info-list scale-list">
                            <h4 class="ttl">
                              자본금
                            </h4>
                            <div class="dec">
                              {{ noUpdate ? '-' : '500,000' }} 원
                            </div>
                          </li>
                          <li class="common-info-list scale-list">
                            <h4 class="ttl">
                              주주수
                            </h4>
                            <div class="dec">
                              {{ noUpdate ? '-' : '12' }} 명
                            </div>
                          </li>
                          <li class="common-info-list scale-list">
                            <h4 class="ttl">
                              대표보통주식주 비율
                            </h4>
                            <div class="dec">
                              {{ noUpdate ? '-' : '12' }} %
                            </div>
                          </li>
                          <li class="common-info-list scale-list">
                            <h4 class="ttl">
                              대표주주구분
                            </h4>
                            <div class="dec">
                              {{ noUpdate ? '-' : '임원' }}
                            </div>
                          </li>
                          <li class="common-info-list scale-list">
                            <h4 class="ttl">
                              대표주주명
                            </h4>
                            <div class="dec">
                              {{ noUpdate ? '-' : '김철수' }}
                            </div>
                          </li>
                          <li class="common-info-list scale-list">
                            <h4 class="ttl">
                              대표지분율
                            </h4>
                            <div class="dec">
                              {{ noUpdate ? '-' : '000' }} %
                            </div>
                          </li>
                          <li class="common-info-list scale-list">
                            <h4 class="ttl">
                              종업원 수
                            </h4>
                            <div class="dec">
                              <span class="comment">(기준일 : {{ '2000.00.00' }})</span>
                              {{ noUpdate ? '-' : '00' }} 명
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- END 항목 정보 -->

                <!-- 작성내용 -->
                <div class="req-cont-grp">
                  <div class="req-hgrp">
                    <p class="ttl">
                      요청 내용
                    </p>
                  </div>
                  <div class="req-cats-point-grp">
                    <div class="req-cats-grp">
                      <span class="label">작성중인 항목</span>
                      <span class="info">규모</span>
                      <btn-bd-light
                        class="btn-rounded btn-xsm"
                      >
                        <i class="icon icon-trash" />항목 삭제하기
                      </btn-bd-light>
                    </div>
                    <div class="point-grp">
                      <span class="label">사용 포인트</span>
                      <span class="point">5,000</span>
                      <i class="icon icon-point" />
                    </div>
                  </div>
                  <div class="inp-grp editor-inp-grp">
                    <input
                      type="text"
                      class="inp editor-inp"
                      placeholder="팩트체크 요청 제목을 입력하세요, (n자 입력)"
                    >
                  </div>
                  <div
                    class="editor-cont-grp"
                    style="border: 1px solid #DDDEE6"
                  >
                    EDITOR 들어가는 부분
                  </div>
                  <div class="btn-all-grp">
                    <div class="ment-grp">
                      <i class="icon icon-i" />
                      <span class="ment">요청한 팩트체크는 마이페이지 > 팩트체크 > 요청한 팩트체크에서 확인 가능합니다.</span>
                    </div>
                    <div class="btn-grp">
                      <btn-solid-dark
                        class="btn-md"
                        @click="window.alert('검정버튼을 클릭하셨습니다.')"
                      >
                        <img
                          src="@/assets/images/icon/icon-check-gn.svg"
                          alt="체크"
                          class="check-icon"
                        > 팩트체크 요청완료
                      </btn-solid-dark>
                    </div>
                  </div>
                </div>
                <!-- END 작성내용 -->
              </div>
              <!-- TODO: tab: END 규모 -->
              
              <!-- TODO: tab: 주주 정보 -->
              <div
                v-show="tabActive === 3"
                class="etpr-profile-request-ftck-cont-wrap"
              >
                <!-- 항목 정보 -->
                <div
                  class="req-info-grp"
                >
                  <div class="req-hgrp">
                    <p class="ttl">
                      항목 정보
                    </p>
                  </div>
                  <div class="etpr-panel-wrap flexable-inner">
                    <!-- TODO: 최상위 요소에 is-blur 주면 blur 처리되고 해당 데이터 더미 처리(-) -->
                    <div
                      class="white-panel pd-0"
                      :class="{'is-blur': noUpdate}"
                    >
                      <!-- 필터처리된 데이터 가운데 뜨는 영역 -->
                      <div class="cover-blur-container">
                        <div class="cover-blur-inner">
                          <img
                            class="img"
                            src="@/assets/images/icon/icon-noti.svg"
                            alt="!"
                          >
                          <p class="text">
                            최신 정보를 등록하지 않아<br>블라인드 처리 되었습니다.
                          </p>
                        </div>
                      </div>
                      <!-- END 필터처리된 데이터 가운데 뜨는 영역 -->
                      <div class="common-info-container blur-filter-container">
                        <div class="common-info-graph">
                          <div class="table-all-wrap">
                            <div class="table-grp">
                              <!-- 테이블 헤더 그룹 -->
                              <ul class="table-hgrp">
                                <li class="table-hlist flex-basis-16 txt-left">
                                  <span class="table-txt">주주구분</span>
                                </li>
                                <li class="table-hlist flex-basis-17 txt-left">
                                  <span class="table-txt">주주명</span>
                                </li>
                                <li class="table-hlist flex-basis-10 txt-center">
                                  <span class="table-txt">주종</span>
                                </li>
                                <li class="table-hlist flex-basis-13 txt-right">
                                  <span class="table-txt">지분율(%)</span>
                                </li>
                                <li class="table-hlist flex-basis-20 txt-right">
                                  <span class="table-txt">보유주식수(주)</span>
                                </li>
                                <li class="table-hlist flex-basis-26 txt-right">
                                  <span class="table-txt">보유주식 금액(원)</span>
                                </li>
                              </ul>
                              <!-- END 테이블 헤더 그룹 -->

                              <!-- 테이블 내용 그룹 -->
                              <!-- 내용이 없을 때 -->
                              <div
                                class="table-cont-wrap empty-cont-wrap"
                              >
                                <p class="empty-ment">
                                  내용이 없습니다.
                                </p>
                              </div>
                              <!-- END 내용이 없을 때 -->

                              <!-- 내용이 있을 때 -->
                              <div
                                class="table-cont-wrap custom-scroll-wrap"
                              >
                                <ul
                                  v-for="(item, idx) in 20"
                                  :key="idx"
                                  class="table-cont-grp"
                                >
                                  <li class="table-cont-list flex-basis-16 txt-left">
                                    <span class="table-txt">{{ noUpdate ? '-' : '주요주주' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-17 txt-left">
                                    <span class="table-txt">{{ noUpdate ? '-' : '이름여섯글자' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-10 txt-center">
                                    <span class="table-txt">{{ noUpdate ? '-' : '보통주' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-13 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '100' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-20 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '000,000,000,000' }}</span>
                                  </li>
                                </ul>
                              </div>
                              <!-- END 내용이 있을 때 -->

                              <!-- END 테이블 내용 그룹 -->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- END 항목 정보 -->

                <!-- 작성내용 -->
                <div class="req-cont-grp">
                  <div class="req-hgrp">
                    <p class="ttl">
                      요청 내용
                    </p>
                  </div>
                  <div class="req-cats-point-grp">
                    <div class="req-cats-grp">
                      <span class="label">작성중인 항목</span>
                      <span class="info">주주 정보</span>
                      <btn-bd-light
                        class="btn-rounded btn-xsm"
                      >
                        <i class="icon icon-trash" />항목 삭제하기
                      </btn-bd-light>
                    </div>
                    <div class="point-grp">
                      <span class="label">사용 포인트</span>
                      <span class="point">5,000</span>
                      <i class="icon icon-point" />
                    </div>
                  </div>
                  <div class="inp-grp editor-inp-grp">
                    <input
                      type="text"
                      class="inp editor-inp"
                      placeholder="팩트체크 요청 제목을 입력하세요, (n자 입력)"
                    >
                  </div>
                  <div
                    class="editor-cont-grp"
                    style="border: 1px solid #DDDEE6"
                  >
                    EDITOR 들어가는 부분
                  </div>
                  <div class="btn-all-grp">
                    <div class="ment-grp">
                      <i class="icon icon-i" />
                      <span class="ment">요청한 팩트체크는 마이페이지 > 팩트체크 > 요청한 팩트체크에서 확인 가능합니다.</span>
                    </div>
                    <div class="btn-grp">
                      <btn-solid-dark
                        class="btn-md"
                        @click="window.alert('검정버튼을 클릭하셨습니다.')"
                      >
                        <img
                          src="@/assets/images/icon/icon-check-gn.svg"
                          alt="체크"
                          class="check-icon"
                        > 팩트체크 요청완료
                      </btn-solid-dark>
                    </div>
                  </div>
                </div>
                <!-- END 작성내용 -->
              </div>
              <!-- TODO: tab: END 주주 정보 -->
              
              <!-- TODO: tab: 재무상태 -->
              <div
                v-show="tabActive === 4"
                class="etpr-profile-request-ftck-cont-wrap"
              >
                <!-- 항목 정보 -->
                <div
                  class="req-info-grp"
                >
                  <div class="req-hgrp">
                    <p class="ttl">
                      항목 정보
                    </p>
                  </div>
                  <div class="etpr-panel-wrap flexable-inner">
                    <!-- TODO: 최상위 요소에 is-blur 주면 blur 처리되고 해당 데이터 더미 처리(-) -->
                    <div
                      class="white-panel pd-0"
                      :class="{'is-blur': noUpdate}"
                    >
                      <!-- 필터처리된 데이터 가운데 뜨는 영역 -->
                      <div class="cover-blur-container">
                        <div class="cover-blur-inner">
                          <img
                            class="img"
                            src="@/assets/images/icon/icon-noti.svg"
                            alt="!"
                          >
                          <p class="text">
                            최신 정보를 등록하지 않아<br>블라인드 처리 되었습니다.
                          </p>
                        </div>
                      </div>
                      <!-- END 필터처리된 데이터 가운데 뜨는 영역 -->
                      <div class="common-info-container blur-filter-container">
                        <div class="common-info-graph">
                          <div class="table-all-wrap">
                            <div class="table-grp">
                              <!-- 테이블 헤더 그룹 -->
                              <ul class="table-hgrp">
                                <li class="table-hlist flex-basis-20 txt-left">
                                  <span class="table-txt">항목</span>
                                </li>
                                <li class="table-hlist flex-basis-26 txt-right">
                                  <span class="table-txt">2019</span>
                                </li>
                                <li class="table-hlist flex-basis-26 txt-right">
                                  <span class="table-txt">2020</span>
                                </li>
                                <li class="table-hlist flex-basis-26 txt-right">
                                  <span class="table-txt">2021</span>
                                </li>
                              </ul>
                              <!-- END 테이블 헤더 그룹 -->

                              <!-- 테이블 내용 그룹 -->
                              <!-- 내용이 없을 때 -->
                              <div
                                class="table-cont-wrap empty-cont-wrap"
                              >
                                <p class="empty-ment">
                                  내용이 없습니다.
                                </p>
                              </div>
                              <!-- END 내용이 없을 때 -->

                              <!-- 내용이 있을 때 -->
                              <div
                                class="table-cont-wrap"
                              >
                                <ul
                                  class="table-cont-grp"
                                >
                                  <li class="table-cont-list flex-basis-20 txt-left">
                                    <span class="table-txt f-bold">현금성자산</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                </ul>
                                <ul
                                  class="table-cont-grp"
                                >
                                  <li class="table-cont-list flex-basis-20 txt-left">
                                    <span class="table-txt f-bold">매출채권</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                </ul>
                                <ul
                                  class="table-cont-grp"
                                >
                                  <li class="table-cont-list flex-basis-20 txt-left">
                                    <span class="table-txt f-bold">재고자산</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                </ul>
                                <ul
                                  class="table-cont-grp"
                                >
                                  <li class="table-cont-list flex-basis-20 txt-left">
                                    <span class="table-txt f-bold">무형자산</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                </ul>
                                <ul
                                  class="table-cont-grp"
                                >
                                  <li class="table-cont-list flex-basis-20 txt-left">
                                    <span class="table-txt f-bold">투자자산</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                </ul>
                                <ul
                                  class="table-cont-grp"
                                >
                                  <li class="table-cont-list flex-basis-20 txt-left">
                                    <span class="table-txt f-bold">기타자산</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                </ul>
                                <ul
                                  class="table-cont-grp f-bold"
                                >
                                  <li class="table-cont-list flex-basis-20 txt-left">
                                    <span class="table-txt f-bold">자산총계</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                </ul>
                                <ul
                                  class="table-cont-grp"
                                >
                                  <li class="table-cont-list flex-basis-20 txt-left">
                                    <span class="table-txt f-bold">유통부재</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                </ul>
                                <ul
                                  class="table-cont-grp"
                                >
                                  <li class="table-cont-list flex-basis-20 txt-left">
                                    <span class="table-txt f-bold">장기부채</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                </ul>
                                <ul
                                  class="table-cont-grp f-bold"
                                >
                                  <li class="table-cont-list flex-basis-20 txt-left">
                                    <span class="table-txt f-bold">부채총계</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                </ul>
                                <ul
                                  class="table-cont-grp"
                                >
                                  <li class="table-cont-list flex-basis-20 txt-left">
                                    <span class="table-txt f-bold">자본금</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                </ul>
                                <ul
                                  class="table-cont-grp f-600-lg"
                                >
                                  <li class="table-cont-list flex-basis-20 txt-left">
                                    <span class="table-txt f-bold">자본총계</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right padding-change">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right padding-change">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right padding-change">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                </ul>
                              </div>
                              <!-- END 내용이 있을 때 -->

                              <!-- END 테이블 내용 그룹 -->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="bot-txt">
                      단위 : 원
                    </div>
                  </div>
                </div>
                <!-- END 항목 정보 -->

                <!-- 작성내용 -->
                <div class="req-cont-grp">
                  <div class="req-hgrp">
                    <p class="ttl">
                      요청 내용
                    </p>
                  </div>
                  <div class="req-cats-point-grp">
                    <div class="req-cats-grp">
                      <span class="label">작성중인 항목</span>
                      <span class="info">재무상태</span>
                      <btn-bd-light
                        class="btn-rounded btn-xsm"
                      >
                        <i class="icon icon-trash" />항목 삭제하기
                      </btn-bd-light>
                    </div>
                    <div class="point-grp">
                      <span class="label">사용 포인트</span>
                      <span class="point">5,000</span>
                      <i class="icon icon-point" />
                    </div>
                  </div>
                  <div class="inp-grp editor-inp-grp">
                    <input
                      type="text"
                      class="inp editor-inp"
                      placeholder="팩트체크 요청 제목을 입력하세요, (n자 입력)"
                    >
                  </div>
                  <div
                    class="editor-cont-grp"
                    style="border: 1px solid #DDDEE6"
                  >
                    EDITOR 들어가는 부분
                  </div>
                  <div class="btn-all-grp">
                    <div class="ment-grp">
                      <i class="icon icon-i" />
                      <span class="ment">요청한 팩트체크는 마이페이지 > 팩트체크 > 요청한 팩트체크에서 확인 가능합니다.</span>
                    </div>
                    <div class="btn-grp">
                      <btn-solid-dark
                        class="btn-md"
                        @click="window.alert('검정버튼을 클릭하셨습니다.')"
                      >
                        <img
                          src="@/assets/images/icon/icon-check-gn.svg"
                          alt="체크"
                          class="check-icon"
                        > 팩트체크 요청완료
                      </btn-solid-dark>
                    </div>
                  </div>
                </div>
                <!-- END 작성내용 -->
              </div>
              <!-- TODO: tab: END 재무상태 -->

              <!-- TODO: tab: 손익계산서 -->
              <div
                v-show="tabActive === 5"
                class="etpr-profile-request-ftck-cont-wrap"
              >
                <!-- 항목 정보 -->
                <div
                  class="req-info-grp"
                >
                  <div class="req-hgrp">
                    <p class="ttl">
                      항목 정보
                    </p>
                  </div>
                  <div class="etpr-panel-wrap flexable-inner">
                    <!-- TODO: 최상위 요소에 is-blur 주면 blur 처리되고 해당 데이터 더미 처리(-) -->
                    <div
                      class="white-panel pd-0"
                      :class="{'is-blur': noUpdate}"
                    >
                      <!-- 필터처리된 데이터 가운데 뜨는 영역 -->
                      <div class="cover-blur-container">
                        <div class="cover-blur-inner">
                          <img
                            class="img"
                            src="@/assets/images/icon/icon-noti.svg"
                            alt="!"
                          >
                          <p class="text">
                            최신 정보를 등록하지 않아<br>블라인드 처리 되었습니다.
                          </p>
                        </div>
                      </div>
                      <!-- END 필터처리된 데이터 가운데 뜨는 영역 -->
                      <div class="common-info-container blur-filter-container">
                        <div class="common-info-graph">
                          <div class="table-all-wrap">
                            <div class="table-grp">
                              <!-- 테이블 헤더 그룹 -->
                              <ul class="table-hgrp">
                                <li class="table-hlist flex-basis-20 txt-left">
                                  <span class="table-txt">항목</span>
                                </li>
                                <li class="table-hlist flex-basis-26 txt-right">
                                  <span class="table-txt">2019</span>
                                </li>
                                <li class="table-hlist flex-basis-26 txt-right">
                                  <span class="table-txt">2020</span>
                                </li>
                                <li class="table-hlist flex-basis-26 txt-right">
                                  <span class="table-txt">2021</span>
                                </li>
                              </ul>
                              <!-- END 테이블 헤더 그룹 -->

                              <!-- 테이블 내용 그룹 -->
                              <!-- 내용이 없을 때 -->
                              <div
                                class="table-cont-wrap empty-cont-wrap"
                              >
                                <p class="empty-ment">
                                  내용이 없습니다.
                                </p>
                              </div>
                              <!-- END 내용이 없을 때 -->

                              <!-- 내용이 있을 때 -->
                              <div
                                class="table-cont-wrap"
                              >
                                <ul
                                  class="table-cont-grp"
                                >
                                  <li class="table-cont-list flex-basis-20 txt-left">
                                    <span class="table-txt f-bold">매출액</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                </ul>
                                <ul
                                  class="table-cont-grp"
                                >
                                  <li class="table-cont-list flex-basis-20 txt-left">
                                    <span class="table-txt f-bold">매출원가</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                </ul>
                                <ul
                                  class="table-cont-grp f-bold"
                                >
                                  <li class="table-cont-list flex-basis-20 txt-left">
                                    <span class="table-txt f-bold">매출총이익</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                </ul>
                                <ul
                                  class="table-cont-grp"
                                >
                                  <li class="table-cont-list flex-basis-20 txt-left">
                                    <span class="table-txt f-bold">일반관리비</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                </ul>
                                <ul
                                  class="table-cont-grp"
                                >
                                  <li class="table-cont-list flex-basis-20 txt-left">
                                    <span class="table-txt f-bold">영업이익</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                </ul>
                                <ul
                                  class="table-cont-grp"
                                >
                                  <li class="table-cont-list flex-basis-20 txt-left">
                                    <span class="table-txt f-bold">영업외수익</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                </ul>
                                <ul
                                  class="table-cont-grp"
                                >
                                  <li class="table-cont-list flex-basis-20 txt-left">
                                    <span class="table-txt f-bold">영업외비용</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                </ul>
                                <ul
                                  class="table-cont-grp"
                                >
                                  <li class="table-cont-list flex-basis-20 txt-left">
                                    <span class="table-txt f-bold">경상이익</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                </ul>
                                <ul
                                  class="table-cont-grp"
                                >
                                  <li class="table-cont-list flex-basis-20 txt-left">
                                    <span class="table-txt f-bold">특별이익</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                </ul>
                                <ul
                                  class="table-cont-grp"
                                >
                                  <li class="table-cont-list flex-basis-20 txt-left">
                                    <span class="table-txt f-bold">세전순이익</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                </ul>
                                <ul
                                  class="table-cont-grp"
                                >
                                  <li class="table-cont-list flex-basis-20 txt-left">
                                    <span class="table-txt f-bold">법인세</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                </ul>
                                <ul
                                  class="table-cont-grp f-bold"
                                >
                                  <li class="table-cont-list flex-basis-20 txt-left">
                                    <span class="table-txt f-bold">당기순이익</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-26 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                </ul>
                              </div>
                              <!-- END 내용이 있을 때 -->

                              <!-- END 테이블 내용 그룹 -->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="bot-txt">
                      단위 : 원
                    </div>
                  </div>
                </div>
                <!-- END 항목 정보 -->

                <!-- 작성내용 -->
                <div class="req-cont-grp">
                  <div class="req-hgrp">
                    <p class="ttl">
                      요청 내용
                    </p>
                  </div>
                  <div class="req-cats-point-grp">
                    <div class="req-cats-grp">
                      <span class="label">작성중인 항목</span>
                      <span class="info">손익계산서</span>
                      <btn-bd-light
                        class="btn-rounded btn-xsm"
                      >
                        <i class="icon icon-trash" />항목 삭제하기
                      </btn-bd-light>
                    </div>
                    <div class="point-grp">
                      <span class="label">사용 포인트</span>
                      <span class="point">5,000</span>
                      <i class="icon icon-point" />
                    </div>
                  </div>
                  <div class="inp-grp editor-inp-grp">
                    <input
                      type="text"
                      class="inp editor-inp"
                      placeholder="팩트체크 요청 제목을 입력하세요, (n자 입력)"
                    >
                  </div>
                  <div
                    class="editor-cont-grp"
                    style="border: 1px solid #DDDEE6"
                  >
                    EDITOR 들어가는 부분
                  </div>
                  <div class="btn-all-grp">
                    <div class="ment-grp">
                      <i class="icon icon-i" />
                      <span class="ment">요청한 팩트체크는 마이페이지 > 팩트체크 > 요청한 팩트체크에서 확인 가능합니다.</span>
                    </div>
                    <div class="btn-grp">
                      <btn-solid-dark
                        class="btn-md"
                        @click="window.alert('검정버튼을 클릭하셨습니다.')"
                      >
                        <img
                          src="@/assets/images/icon/icon-check-gn.svg"
                          alt="체크"
                          class="check-icon"
                        > 팩트체크 요청완료
                      </btn-solid-dark>
                    </div>
                  </div>
                </div>
                <!-- END 작성내용 -->
              </div>
              <!-- TODO: tab: END 손익계산서 -->

              <!-- TODO: tab: 매출 추이 -->
              <div
                v-show="tabActive === 6"
                class="etpr-profile-request-ftck-cont-wrap"
              >
                <!-- 항목 정보 -->
                <div
                  class="req-info-grp"
                >
                  <div class="req-hgrp">
                    <p class="ttl">
                      항목 정보
                    </p>
                  </div>
                  <div class="etpr-panel-wrap flexable-inner">
                    <div class="layout-center">
                      <div
                        class="white-panel pd-0"
                        :class="{'is-blur': noUpdate}"
                      >
                        <!-- 필터처리된 데이터 가운데 뜨는 영역 -->
                        <div class="cover-blur-container">
                          <div class="cover-blur-inner">
                            <img
                              class="img"
                              src="@/assets/images/icon/icon-noti.svg"
                              alt="!"
                            >
                            <p class="text">
                              최신 정보를 등록하지 않아<br>블라인드 처리 되었습니다.
                            </p>
                          </div>
                        </div>
                        <!-- END 필터처리된 데이터 가운데 뜨는 영역 -->
                        <div class="common-info-container blur-filter-container">
                          <!-- blur 처리용 더미 데이터 -->
                          <p
                            v-if="noUpdate"
                            class="common-info-graph"
                          >
                            <column-chart
                              :data="[0, 5000, 10000]"
                            />
                          </p>
                          <!-- 일반 데이터 -->
                          <p
                            v-else
                            class="common-info-graph"
                          >
                            <span
                              class="nothing-ment"
                            >매출 추이가 없습니다.</span>
                            <column-chart
                              :data="[0, 500, 10000]"
                            />
                          </p>
                        </div>
                      </div>
                      <div class="bot-txt">
                        단위 : 원
                      </div>
                    </div>
                  </div>
                </div>
                <!-- END 항목 정보 -->

                <!-- 작성내용 -->
                <div class="req-cont-grp">
                  <div class="req-hgrp">
                    <p class="ttl">
                      요청 내용
                    </p>
                  </div>
                  <div class="req-cats-point-grp">
                    <div class="req-cats-grp">
                      <span class="label">작성중인 항목</span>
                      <span class="info">매출 추이</span>
                      <btn-bd-light
                        class="btn-rounded btn-xsm"
                      >
                        <i class="icon icon-trash" />항목 삭제하기
                      </btn-bd-light>
                    </div>
                    <div class="point-grp">
                      <span class="label">사용 포인트</span>
                      <span class="point">5,000</span>
                      <i class="icon icon-point" />
                    </div>
                  </div>
                  <div class="inp-grp editor-inp-grp">
                    <input
                      type="text"
                      class="inp editor-inp"
                      placeholder="팩트체크 요청 제목을 입력하세요, (n자 입력)"
                    >
                  </div>
                  <div
                    class="editor-cont-grp"
                    style="border: 1px solid #DDDEE6"
                  >
                    EDITOR 들어가는 부분
                  </div>
                  <div class="btn-all-grp">
                    <div class="ment-grp">
                      <i class="icon icon-i" />
                      <span class="ment">요청한 팩트체크는 마이페이지 > 팩트체크 > 요청한 팩트체크에서 확인 가능합니다.</span>
                    </div>
                    <div class="btn-grp">
                      <btn-solid-dark
                        class="btn-md"
                        @click="window.alert('검정버튼을 클릭하셨습니다.')"
                      >
                        <img
                          src="@/assets/images/icon/icon-check-gn.svg"
                          alt="체크"
                          class="check-icon"
                        > 팩트체크 요청완료
                      </btn-solid-dark>
                    </div>
                  </div>
                </div>
                <!-- END 작성내용 -->
              </div>
              <!-- TODO: tab: END 매출추이 -->

              <!-- TODO: tab: 영업이익 추이 -->
              <div
                v-show="tabActive === 7"
                class="etpr-profile-request-ftck-cont-wrap"
              >
                <!-- 항목 정보 -->
                <div
                  class="req-info-grp"
                >
                  <div class="req-hgrp">
                    <p class="ttl">
                      항목 정보
                    </p>
                  </div>
                  <div class="etpr-panel-wrap flexable-inner">
                    <!-- TODO: 최상위 요소에 is-blur 주면 blur 처리되고 해당 데이터 더미 처리(-) -->
                    <div class="layout-center">
                      <div
                        class="white-panel pd-0"
                        :class="{'is-blur': noUpdate}"
                      >
                        <!-- 필터처리된 데이터 가운데 뜨는 영역 -->
                        <div class="cover-blur-container">
                          <div class="cover-blur-inner">
                            <img
                              class="img"
                              src="@/assets/images/icon/icon-noti.svg"
                              alt="!"
                            >
                            <p class="text">
                              최신 정보를 등록하지 않아<br>블라인드 처리 되었습니다.
                            </p>
                          </div>
                        </div>
                        <!-- END 필터처리된 데이터 가운데 뜨는 영역 -->
                        <div class="common-info-container blur-filter-container">
                          <p
                            v-if="noUpdate"
                            class="common-info-graph"
                          >
                            <column-chart :data="[0, 500000, 1000000]" />
                          </p>
                          <p
                            v-else
                            class="common-info-graph"
                          >
                            <span class="nothing-ment">영업이익 추이가 없습니다.</span>
                            <column-chart :data="[0, 500000, 10000000]" />
                          </p>
                        </div>
                      </div>
                      <div class="bot-txt">
                        단위 : 원
                      </div>
                    </div>
                  </div>
                </div>
                <!-- END 항목 정보 -->

                <!-- 작성내용 -->
                <div class="req-cont-grp">
                  <div class="req-hgrp">
                    <p class="ttl">
                      요청 내용
                    </p>
                  </div>
                  <div class="req-cats-point-grp">
                    <div class="req-cats-grp">
                      <span class="label">작성중인 항목</span>
                      <span class="info">영업이익 추이</span>
                      <btn-bd-light
                        class="btn-rounded btn-xsm"
                      >
                        <i class="icon icon-trash" />항목 삭제하기
                      </btn-bd-light>
                    </div>
                    <div class="point-grp">
                      <span class="label">사용 포인트</span>
                      <span class="point">5,000</span>
                      <i class="icon icon-point" />
                    </div>
                  </div>
                  <div class="inp-grp editor-inp-grp">
                    <input
                      type="text"
                      class="inp editor-inp"
                      placeholder="팩트체크 요청 제목을 입력하세요, (n자 입력)"
                    >
                  </div>
                  <div
                    class="editor-cont-grp"
                    style="border: 1px solid #DDDEE6"
                  >
                    EDITOR 들어가는 부분
                  </div>
                  <div class="btn-all-grp">
                    <div class="ment-grp">
                      <i class="icon icon-i" />
                      <span class="ment">요청한 팩트체크는 마이페이지 > 팩트체크 > 요청한 팩트체크에서 확인 가능합니다.</span>
                    </div>
                    <div class="btn-grp">
                      <btn-solid-dark
                        class="btn-md"
                        @click="window.alert('검정버튼을 클릭하셨습니다.')"
                      >
                        <img
                          src="@/assets/images/icon/icon-check-gn.svg"
                          alt="체크"
                          class="check-icon"
                        > 팩트체크 요청완료
                      </btn-solid-dark>
                    </div>
                  </div>
                </div>
                <!-- END 작성내용 -->
              </div>
              <!-- TODO: tab: END 영업이익 추이 -->

              <!-- TODO: tab: 당기순이익 추이 -->
              <div
                v-show="tabActive === 8"
                class="etpr-profile-request-ftck-cont-wrap"
              >
                <!-- 항목 정보 -->
                <div
                  class="req-info-grp"
                >
                  <div class="req-hgrp">
                    <p class="ttl">
                      항목 정보
                    </p>
                  </div>
                  <div class="etpr-panel-wrap flexable-inner">
                    <!-- TODO: 최상위 요소에 is-blur 주면 blur 처리되고 해당 데이터 더미 처리(-) -->
                    <div class="layout-center">
                      <div
                        class="white-panel pd-0"
                        :class="{'is-blur': noUpdate}"
                      >
                        <!-- 필터처리된 데이터 가운데 뜨는 영역 -->
                        <div class="cover-blur-container">
                          <div class="cover-blur-inner">
                            <img
                              class="img"
                              src="@/assets/images/icon/icon-noti.svg"
                              alt="!"
                            >
                            <p class="text">
                              최신 정보를 등록하지 않아<br>블라인드 처리 되었습니다.
                            </p>
                          </div>
                        </div>
                        <!-- END 필터처리된 데이터 가운데 뜨는 영역 -->
                        <div class="common-info-container blur-filter-container">
                          <p
                            v-if="noUpdate"
                            class="common-info-graph"
                          >
                            <column-chart :data="[0, 5000000, 10000000]" />
                          </p>
                          <p
                            v-else
                            class="common-info-graph"
                          >
                            <span class="nothing-ment">당기순이익 추이가 없습니다.</span>
                            <column-chart :data="[0, 5000000, 10000000]" />
                          </p>
                        </div>
                      </div>
                      <div class="bot-txt">
                        단위 : 원
                      </div>
                    </div>
                  </div>
                </div>
                <!-- END 항목 정보 -->

                <!-- 작성내용 -->
                <div class="req-cont-grp">
                  <div class="req-hgrp">
                    <p class="ttl">
                      요청 내용
                    </p>
                  </div>
                  <div class="req-cats-point-grp">
                    <div class="req-cats-grp">
                      <span class="label">작성중인 항목</span>
                      <span class="info">당기순이익 추이</span>
                      <btn-bd-light
                        class="btn-rounded btn-xsm"
                      >
                        <i class="icon icon-trash" />항목 삭제하기
                      </btn-bd-light>
                    </div>
                    <div class="point-grp">
                      <span class="label">사용 포인트</span>
                      <span class="point">5,000</span>
                      <i class="icon icon-point" />
                    </div>
                  </div>
                  <div class="inp-grp editor-inp-grp">
                    <input
                      type="text"
                      class="inp editor-inp"
                      placeholder="팩트체크 요청 제목을 입력하세요, (n자 입력)"
                    >
                  </div>
                  <div
                    class="editor-cont-grp"
                    style="border: 1px solid #DDDEE6"
                  >
                    EDITOR 들어가는 부분
                  </div>
                  <div class="btn-all-grp">
                    <div class="ment-grp">
                      <i class="icon icon-i" />
                      <span class="ment">요청한 팩트체크는 마이페이지 > 팩트체크 > 요청한 팩트체크에서 확인 가능합니다.</span>
                    </div>
                    <div class="btn-grp">
                      <btn-solid-dark
                        class="btn-md"
                        @click="window.alert('검정버튼을 클릭하셨습니다.')"
                      >
                        <img
                          src="@/assets/images/icon/icon-check-gn.svg"
                          alt="체크"
                          class="check-icon"
                        > 팩트체크 요청완료
                      </btn-solid-dark>
                    </div>
                  </div>
                </div>
                <!-- END 작성내용 -->
              </div>
              <!-- TODO: tab: END 당기순이익 추이 -->

              <!-- TODO: tab: 투자유치 -->
              <div
                v-show="tabActive === 9"
                class="etpr-profile-request-ftck-cont-wrap"
              >
                <!-- 항목 정보 -->
                <div
                  class="req-info-grp"
                >
                  <div class="req-hgrp">
                    <p class="ttl">
                      항목 정보
                    </p>
                  </div>
                  <!-- TODO: 최상위 요소에 is-blur 주면 blur 처리되고 해당 데이터 더미 처리(-) -->
                  <div
                    class="etpr-panel-wrap flexable-inner etpr-prifile-page"
                    :class="{'is-blur': noUpdate}"
                  >
                    <!-- 필터처리된 데이터 가운데 뜨는 영역 -->
                    <div class="cover-blur-container">
                      <div class="cover-blur-inner">
                        <img
                          class="img"
                          src="@/assets/images/icon/icon-noti.svg"
                          alt="!"
                        >
                        <p class="text">
                          최신 정보를 등록하지 않아<br>블라인드 처리 되었습니다.
                        </p>
                      </div>
                    </div>
                    <!-- END 필터처리된 데이터 가운데 뜨는 영역 -->
                    <div class="blur-filter-container">
                      <div class="top-cont-wrap">
                        <div class="invest-list">
                          <div class="ttl">
                            최종투자단계
                          </div>
                          <div class="dec">
                            {{ noUpdate ? '-' : 'serues E (추정)' }}
                          </div>
                        </div>
                        <div class="invest-list">
                          <div class="ttl">
                            누적투자유치금액
                          </div>
                          <div class="dec">
                            {{ noUpdate ? '-' : '88.8억' }}
                          </div>
                        </div>
                        <div class="invest-list">
                          <div class="ttl">
                            투자유치횟수
                          </div>
                          <div class="dec">
                            {{ noUpdate ? '-' : '8' }}
                          </div>
                        </div>
                      </div>
                      <div class="white-panel pd-0">
                        <div class="common-info-graph">
                          <div class="table-all-wrap">
                            <div class="table-grp">
                              <!-- 테이블 헤더 그룹 -->
                              <ul class="table-hgrp">
                                <li class="table-hlist flex-basis-13 txt-left">
                                  <span class="table-txt">날짜</span>
                                </li>
                                <li class="table-hlist flex-basis-13 txt-center">
                                  <span class="table-txt">투자단계</span>
                                </li>
                                <li class="table-hlist flex-basis-20 txt-right">
                                  <span class="table-txt">투자유치 금액</span>
                                </li>
                                <li class="table-hlist flex-basis-61 txt-center">
                                  <span class="table-txt">투자자</span>
                                </li>
                              </ul>
                              <!-- END 테이블 헤더 그룹 -->

                              <!-- 테이블 내용 그룹 -->
                              <!-- 내용이 없을 때 -->
                              <div
                                class="table-cont-wrap empty-cont-wrap"
                              >
                                <p class="empty-ment">
                                  내용이 없습니다.
                                </p>
                              </div>
                              <!-- END 내용이 없을 때 -->

                              <!-- 내용이 있을 때 -->
                              <div
                                class="table-cont-wrap custom-scroll-wrap"
                              >
                                <ul
                                  v-for="(item, idx) in 20"
                                  :key="idx"
                                  class="table-cont-grp"
                                >
                                  <li class="table-cont-list flex-basis-13 txt-left">
                                    <span class="table-txt">{{ noUpdate ? '-' : '2021.00' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-13 txt-center">
                                    <span class="table-txt">{{ noUpdate ? '-' : 'M&A' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-20 txt-right">
                                    <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                                  </li>
                                  <li class="table-cont-list flex-basis-61 txt-left">
                                    <span class="table-txt">{{ noUpdate ? '-' : '투자자명, 투자자명, 투자자명, 투자자명, 투자자명, 투자자명' }}</span>
                                  </li>
                                </ul>
                              </div>
                              <!-- END 내용이 있을 때 -->

                              <!-- END 테이블 내용 그룹 -->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- END 항목 정보 -->

                <!-- 작성내용 -->
                <div class="req-cont-grp">
                  <div class="req-hgrp">
                    <p class="ttl">
                      요청 내용
                    </p>
                  </div>
                  <div class="req-cats-point-grp">
                    <div class="req-cats-grp">
                      <span class="label">작성중인 항목</span>
                      <span class="info">투자유치</span>
                      <btn-bd-light
                        class="btn-rounded btn-xsm"
                      >
                        <i class="icon icon-trash" />항목 삭제하기
                      </btn-bd-light>
                    </div>
                    <div class="point-grp">
                      <span class="label">사용 포인트</span>
                      <span class="point">5,000</span>
                      <i class="icon icon-point" />
                    </div>
                  </div>
                  <div class="inp-grp editor-inp-grp">
                    <input
                      type="text"
                      class="inp editor-inp"
                      placeholder="팩트체크 요청 제목을 입력하세요, (n자 입력)"
                    >
                  </div>
                  <div
                    class="editor-cont-grp"
                    style="border: 1px solid #DDDEE6"
                  >
                    EDITOR 들어가는 부분
                  </div>
                  <div class="btn-all-grp">
                    <div class="ment-grp">
                      <i class="icon icon-i" />
                      <span class="ment">요청한 팩트체크는 마이페이지 > 팩트체크 > 요청한 팩트체크에서 확인 가능합니다.</span>
                    </div>
                    <div class="btn-grp">
                      <btn-solid-dark
                        class="btn-md"
                        @click="window.alert('검정버튼을 클릭하셨습니다.')"
                      >
                        <img
                          src="@/assets/images/icon/icon-check-gn.svg"
                          alt="체크"
                          class="check-icon"
                        > 팩트체크 요청완료
                      </btn-solid-dark>
                    </div>
                  </div>
                </div>
                <!-- END 작성내용 -->
              </div>
              <!-- TODO: tab: END 투자유치 -->

              <!-- TODO: tab: 보유특허 -->
              <div
                v-show="tabActive === 10"
                class="etpr-profile-request-ftck-cont-wrap"
              >
                <!-- 항목 정보 -->
                <div
                  class="req-info-grp"
                >
                  <div class="req-hgrp">
                    <p class="ttl">
                      항목 정보
                    </p>
                  </div>
                  <!-- TODO: 최상위 요소에 is-blur 주면 blur 처리되고 해당 데이터 더미 처리(-) -->
                  <div
                    class="etpr-panel-wrap flexable-inner"
                    :class="{'is-blur': noUpdate}"
                  >
                    <!-- 필터처리된 데이터 가운데 뜨는 영역 -->
                    <div class="cover-blur-container">
                      <div class="cover-blur-inner">
                        <img
                          class="img"
                          src="@/assets/images/icon/icon-noti.svg"
                          alt="!"
                        >
                        <p class="text">
                          최신 정보를 등록하지 않아<br>블라인드 처리 되었습니다.
                        </p>
                      </div>
                    </div>
                    <!-- END 필터처리된 데이터 가운데 뜨는 영역 -->
                    <div class="blur-filter-container">
                      <div class="top-txt">
                        총 <span>{{ noUpdate ? '-' : '5' }}</span>개
                      </div>
                      <empty-contents txt="내용이 없습니다." />
                      <div>
                        <div class="table-all-wrap border-bottom-remove">
                          <div class="table-grp">
                            <!-- 테이블 내용 그룹 -->
                            <div
                              class="table-cont-wrap custom-scroll-wrap padding-add"
                            >
                              <ul
                                v-for="(item, idx) in 20"
                                :key="idx"
                                class="table-cont-grp"
                              >
                                <li class="table-cont-list flex-basis-76 txt-left f-14">
                                  <span class="table-txt">{{ noUpdate ? '-' : '반응형 오브젝트 제공방법 및 그 시스템(Responsive object providing method and providing system thereof)' }}</span>
                                </li>
                                <li class="table-cont-list flex-basis-20 txt-right f-gray">
                                  <span class="table-txt">출원일 {{ noUpdate ? '-' : '2021.00.00' }}</span>
                                </li>
                              </ul>
                            </div>
                            <!-- END 테이블 내용 그룹 -->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- END 항목 정보 -->

                <!-- 작성내용 -->
                <div class="req-cont-grp">
                  <div class="req-hgrp">
                    <p class="ttl">
                      요청 내용
                    </p>
                  </div>
                  <div class="req-cats-point-grp">
                    <div class="req-cats-grp">
                      <span class="label">작성중인 항목</span>
                      <span class="info">보유특허</span>
                      <btn-bd-light
                        class="btn-rounded btn-xsm"
                      >
                        <i class="icon icon-trash" />항목 삭제하기
                      </btn-bd-light>
                    </div>
                    <div class="point-grp">
                      <span class="label">사용 포인트</span>
                      <span class="point">5,000</span>
                      <i class="icon icon-point" />
                    </div>
                  </div>
                  <div class="inp-grp editor-inp-grp">
                    <input
                      type="text"
                      class="inp editor-inp"
                      placeholder="팩트체크 요청 제목을 입력하세요, (n자 입력)"
                    >
                  </div>
                  <div
                    class="editor-cont-grp"
                    style="border: 1px solid #DDDEE6"
                  >
                    EDITOR 들어가는 부분
                  </div>
                  <div class="btn-all-grp">
                    <div class="ment-grp">
                      <i class="icon icon-i" />
                      <span class="ment">요청한 팩트체크는 마이페이지 > 팩트체크 > 요청한 팩트체크에서 확인 가능합니다.</span>
                    </div>
                    <div class="btn-grp">
                      <btn-solid-dark
                        class="btn-md"
                        @click="window.alert('검정버튼을 클릭하셨습니다.')"
                      >
                        <img
                          src="@/assets/images/icon/icon-check-gn.svg"
                          alt="체크"
                          class="check-icon"
                        > 팩트체크 요청완료
                      </btn-solid-dark>
                    </div>
                  </div>
                </div>
                <!-- END 작성내용 -->
              </div>
              <!-- TODO: tab: END 보유특허 -->

              <!-- TODO: tab: 구성원 -->
              <div
                v-show="tabActive === 11"
                class="etpr-profile-request-ftck-cont-wrap"
              >
                <!-- 항목 정보 -->
                <div
                  class="req-info-grp"
                >
                  <div class="req-hgrp">
                    <p class="ttl">
                      항목 정보
                    </p>
                  </div>
                  <!-- TODO: 최상위 요소에 is-blur 주면 blur 처리되고 해당 데이터 더미 처리(-) -->
                  <div
                    :class="{'is-blur': noUpdate}"
                  >
                    <!-- 필터처리된 데이터 가운데 뜨는 영역 -->
                    <div class="cover-blur-container">
                      <div class="cover-blur-inner">
                        <img
                          class="img"
                          src="@/assets/images/icon/icon-noti.svg"
                          alt="!"
                        >
                        <p class="text">
                          최신 정보를 등록하지 않아<br>블라인드 처리 되었습니다.
                        </p>
                      </div>
                    </div>
                    <!-- END 필터처리된 데이터 가운데 뜨는 영역 -->
                    <div class="blur-filter-container">
                      <!-- 구성원 명수 표시 -->
                      <div class="member-list-grp-ttl">
                        <p class="txt">
                          총 <span class="bold">{{ noUpdate ? '-' : '0' }}</span>명
                        </p>
                      </div>
                      <!-- // 구성원 명수 표시 -->

                      <!-- 구성원이 없을 때 -->
                      <empty-contents txt="내용이 없습니다." />
                      <!-- // 구성원이 없을 때 -->
                      <!-- 구성원이 있을 때 -->
                      <div class="member-list-grp">
                        <div
                          v-for="(item, index) in 2"
                          :key="index"
                          class="member-list"
                        >
                          <avatar />
                          <article class="member-info">
                            <div class="account-info">
                              <h5 class="name">
                                {{ noUpdate ? '-' : '김철수' }}
                              </h5>
                              <span class="mail">{{ noUpdate ? '-' : 'email@email.com' }}</span>
                              <dl class="dlist">
                                <dt class="lbel">
                                  키포인트
                                </dt>
                                <dd class="txt">
                                  {{ noUpdate ? '-' : '키포인트 텍스트' }}
                                </dd>
                              </dl>
                            </div>

                            <ul class="ul-bullet">
                              <li class="list">
                                {{ noUpdate ? '-' : '이력사항 텍스트' }}
                              </li>
                              <li class="list">
                                {{ noUpdate ? '-' : '이력사항 텍스트' }}
                              </li>
                              <li class="list">
                                {{ noUpdate ? '-' : '이력사항 텍스트' }}
                              </li>
                            </ul>
                          </article>

                          <div class="member-btn-grp btn-grp">
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
                      </div>
                      <!-- // 구성원이 있을 때 -->
                    </div>
                  </div>
                </div>
                <!-- END 항목 정보 -->

                <!-- 작성내용 -->
                <div class="req-cont-grp">
                  <div class="req-hgrp">
                    <p class="ttl">
                      요청 내용
                    </p>
                  </div>
                  <div class="req-cats-point-grp">
                    <div class="req-cats-grp">
                      <span class="label">작성중인 항목</span>
                      <span class="info">구성원</span>
                      <btn-bd-light
                        class="btn-rounded btn-xsm"
                      >
                        <i class="icon icon-trash" />항목 삭제하기
                      </btn-bd-light>
                    </div>
                    <div class="point-grp">
                      <span class="label">사용 포인트</span>
                      <span class="point">5,000</span>
                      <i class="icon icon-point" />
                    </div>
                  </div>
                  <div class="inp-grp editor-inp-grp">
                    <input
                      type="text"
                      class="inp editor-inp"
                      placeholder="팩트체크 요청 제목을 입력하세요, (n자 입력)"
                    >
                  </div>
                  <div
                    class="editor-cont-grp"
                    style="border: 1px solid #DDDEE6"
                  >
                    EDITOR 들어가는 부분
                  </div>
                  <div class="btn-all-grp">
                    <div class="ment-grp">
                      <i class="icon icon-i" />
                      <span class="ment">요청한 팩트체크는 마이페이지 > 팩트체크 > 요청한 팩트체크에서 확인 가능합니다.</span>
                    </div>
                    <div class="btn-grp">
                      <btn-solid-dark
                        class="btn-md"
                        @click="window.alert('검정버튼을 클릭하셨습니다.')"
                      >
                        <img
                          src="@/assets/images/icon/icon-check-gn.svg"
                          alt="체크"
                          class="check-icon"
                        > 팩트체크 요청완료
                      </btn-solid-dark>
                    </div>
                  </div>
                </div>
                <!-- END 작성내용 -->
              </div>
              <!-- TODO: tab: END 구성원 -->

              <!-- TODO: tab: 추가 요청 -->
              <div
                v-show="tabActive === 12"
                class="etpr-profile-request-ftck-cont-wrap"
              >
                <!-- 작성내용 -->
                <div class="req-cont-grp">
                  <div class="req-hgrp">
                    <p class="ttl">
                      요청 내용
                    </p>
                  </div>
                  <div class="req-cats-point-grp">
                    <div class="req-cats-grp">
                      <span class="label">작성중인 항목</span>
                      <span class="info">추가 요청</span>
                      <btn-bd-light
                        class="btn-rounded btn-xsm"
                      >
                        <i class="icon icon-trash" />항목 삭제하기
                      </btn-bd-light>
                    </div>
                    <div class="point-grp">
                      <span class="label">사용 포인트</span>
                      <span class="point">5,000</span>
                      <i class="icon icon-point" />
                    </div>
                  </div>
                  <div class="inp-grp editor-inp-grp">
                    <input
                      type="text"
                      class="inp editor-inp"
                      placeholder="팩트체크 요청 제목을 입력하세요, (n자 입력)"
                    >
                  </div>
                  <div
                    class="editor-cont-grp"
                    style="border: 1px solid #DDDEE6"
                  >
                    EDITOR 들어가는 부분
                  </div>
                  <div class="btn-all-grp">
                    <div class="ment-grp">
                      <i class="icon icon-i" />
                      <span class="ment">요청한 팩트체크는 마이페이지 > 팩트체크 > 요청한 팩트체크에서 확인 가능합니다.</span>
                    </div>
                    <div class="btn-grp">
                      <btn-solid-dark
                        class="btn-md"
                        @click="window.alert('검정버튼을 클릭하셨습니다.')"
                      >
                        <img
                          src="@/assets/images/icon/icon-check-gn.svg"
                          alt="체크"
                          class="check-icon"
                        > 팩트체크 요청완료
                      </btn-solid-dark>
                    </div>
                  </div>
                </div>
                <!-- END 작성내용 -->
              </div>
              <!-- TODO: tab: END 추가 요청 -->
            </div>
          </div>
          <!-- // 나의 팩트체크 수정 - 내용  -->
        </div>
      </div>
      <!-- // 마이페이지 컨텐츠 영역 -->
    </div>

    <layout-footer />
  </div>
</template>

<script>
export default {
  name: 'EtprProfileRequestFtck',
  data() {
    return {
      tabActive: 1, // 1~12
      noUpdate: true, // 3개월 동안 업데이트 없으면 blur 처리
    };
  },
  created() {
    this.scrollFixed();
  },
  methods: {
    scrollFixed() {
      
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
