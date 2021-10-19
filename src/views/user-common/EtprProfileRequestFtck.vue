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
                    {{ '기본정보' }}
                  </btn-bd-dark>
                  <btn-bd-dark
                    class="btn-sm btn-tab"
                    :class="{'is-active': tabActive === 2}"
                    @click="tabActive = 2"
                  >
                    {{ '손익계산서' }}
                  </btn-bd-dark>
                  <btn-bd-dark
                    class="btn-sm btn-tab"
                    :class="{'is-active': tabActive === 3}"
                    @click="tabActive = 3"
                  >
                    {{ '구성원' }}
                  </btn-bd-dark>
                  <btn-bd-dark
                    class="btn-sm btn-tab"
                    :class="{'is-active': tabActive === 4}"
                    @click="tabActive = 4"
                  >
                    {{ '추가 요청' }}
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
                      {{ '기본정보' }}
                    </p>
                  </div>
                  <div class="etpr-panel-wrap flexable-inner">
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
                              <badge-rounded>태그최대여덟글자</badge-rounded>
                              <badge-rounded>태그최대여덟글자</badge-rounded>
                              <badge-rounded>태그최대여덟글자</badge-rounded>
                              <badge-rounded>태그최대여덟글자</badge-rounded>
                              <badge-rounded>태그최대여덟글자</badge-rounded>
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
                      <span class="info">{{ '기본정보' }}</span>
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

              <!-- TODO: tab: 손익계산서 -->
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
                      {{ '손익계산서' }}
                    </p>
                  </div>
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
                              <span class="table-txt">0,000,000,000</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">0,000,000,000</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">0,000,000,000</span>
                            </li>
                          </ul>
                          <ul
                            class="table-cont-grp"
                          >
                            <li class="table-cont-list flex-basis-20 txt-left">
                              <span class="table-txt f-bold">매출원가</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">0,000,000,000</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">0,000,000,000</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">0,000,000,000</span>
                            </li>
                          </ul>
                          <ul
                            class="table-cont-grp f-bold"
                          >
                            <li class="table-cont-list flex-basis-20 txt-left">
                              <span class="table-txt f-bold">매출총이익</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">0,000,000,000</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">0,000,000,000</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">0,000,000,000</span>
                            </li>
                          </ul>
                          <ul
                            class="table-cont-grp"
                          >
                            <li class="table-cont-list flex-basis-20 txt-left">
                              <span class="table-txt f-bold">일반관리비</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">0,000,000,000</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">0,000,000,000</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">0,000,000,000</span>
                            </li>
                          </ul>
                          <ul
                            class="table-cont-grp"
                          >
                            <li class="table-cont-list flex-basis-20 txt-left">
                              <span class="table-txt f-bold">영업이익</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">0,000,000,000</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">0,000,000,000</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">0,000,000,000</span>
                            </li>
                          </ul>
                          <ul
                            class="table-cont-grp"
                          >
                            <li class="table-cont-list flex-basis-20 txt-left">
                              <span class="table-txt f-bold">영업외수익</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">0,000,000,000</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">0,000,000,000</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">0,000,000,000</span>
                            </li>
                          </ul>
                          <ul
                            class="table-cont-grp"
                          >
                            <li class="table-cont-list flex-basis-20 txt-left">
                              <span class="table-txt f-bold">영업외비용</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">0,000,000,000</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">0,000,000,000</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">0,000,000,000</span>
                            </li>
                          </ul>
                          <ul
                            class="table-cont-grp"
                          >
                            <li class="table-cont-list flex-basis-20 txt-left">
                              <span class="table-txt f-bold">경상이익</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">0,000,000,000</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">0,000,000,000</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">0,000,000,000</span>
                            </li>
                          </ul>
                          <ul
                            class="table-cont-grp"
                          >
                            <li class="table-cont-list flex-basis-20 txt-left">
                              <span class="table-txt f-bold">특별이익</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">0,000,000,000</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">0,000,000,000</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">0,000,000,000</span>
                            </li>
                          </ul>
                          <ul
                            class="table-cont-grp"
                          >
                            <li class="table-cont-list flex-basis-20 txt-left">
                              <span class="table-txt f-bold">세전순이익</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">0,000,000,000</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">0,000,000,000</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">0,000,000,000</span>
                            </li>
                          </ul>
                          <ul
                            class="table-cont-grp"
                          >
                            <li class="table-cont-list flex-basis-20 txt-left">
                              <span class="table-txt f-bold">법인세</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">0,000,000,000</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">0,000,000,000</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">0,000,000,000</span>
                            </li>
                          </ul>
                          <ul
                            class="table-cont-grp f-bold"
                          >
                            <li class="table-cont-list flex-basis-20 txt-left">
                              <span class="table-txt f-bold">당기순이익</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">0,000,000,000</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">0,000,000,000</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">0,000,000,000</span>
                            </li>
                          </ul>
                        </div>
                        <!-- END 내용이 있을 때 -->

                        <!-- END 테이블 내용 그룹 -->
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
                      <span class="info">{{ '손익계산서' }}</span>
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

              <!-- TODO: tab: 구성원 -->
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
                      {{ '구성원' }}
                    </p>
                  </div>
                  <div class="etpr-main-conts">
                    <!-- 구성원 명수 표시 -->
                    <div class="member-list-grp-ttl">
                      <p class="txt">
                        총 <span class="bold">0</span>명
                      </p>
                    </div>
                    <!-- // 구성원 명수 표시 -->

                    <!-- 구성원이 없을 때 -->
                    <empty-contents txt="현재 구성원이 없습니다." />
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
                              {{ '김철수' }}
                            </h5>
                            <span class="mail">{{ 'email@email.com' }}</span>
                            <dl class="dlist">
                              <dt class="lbel">
                                키포인트
                              </dt>
                              <dd class="txt">
                                {{ '키포인트 텍스트' }}
                              </dd>
                            </dl>
                          </div>

                          <ul class="ul-bullet">
                            <li class="list">
                              {{ '이력사항 텍스트' }}
                            </li>
                            <li class="list">
                              {{ '이력사항 텍스트' }}
                            </li>
                            <li class="list">
                              {{ '이력사항 텍스트' }}
                            </li>
                          </ul>
                        </article>
                      </div>
                    </div>
                    <!-- // 구성원이 있을 때 -->
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
                      <span class="info">{{ '구성원' }}</span>
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
                v-show="tabActive === 4"
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
                      <span class="info">{{ '추가 요청' }}</span>
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
      tabActive: 1, // 1~4
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
