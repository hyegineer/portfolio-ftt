<template>
  <!-- [D] 마이페이지 - 기업정보-상세정보 수정 -->
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
          상세정보 수정
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
            상세정보 수정
          </p>
          <p class="ttl-sub">
            기업 프로필의 상세정보를 수정합니다.
          </p>
        </div>

        <article class="guide-box">
          <div class="guide-box-cont">
            <h6 class="lbel">
              안내사항
            </h6>
            <p class="txt">
              주주정보/재무상태/손익계산서의 데이터는 엑셀파일을 기반으로 등록됩니다. 
            </p>
          </div>

          <div class="btn-grp">
            <btn-solid-grayblue
              class="btn-sm"
              @click="window.alert('엑셀파일 업로드')"
            >
              엑셀파일 업로드
            </btn-solid-grayblue>
            <btn-bd-light
              class="btn-sm"
              @click="window.alert('엑셀파일 다운로드')"
            >
              엑셀양식 다운로드
            </btn-bd-light>
          </div>
        </article>

        <div class="article-wrap">
          <fieldset class="ffieldset">
            <legend class="ffieldset-ttl">
              규모
            </legend>

            <div class="cont-wrap">
              <div class="flex-row-grp">
                <div class="lbel-inp-grp">
                  <div class="lbel-toggle">
                    <label class="lbel">발행주식 수</label>
                    <!-- 토글 스위치 -->
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
                    <!-- // 토글 스위치 -->
                  </div>
              
                  <div class="inp-grp inp-unit-grp">
                    <input
                      type="text"
                      class="inp"
                      value="0"
                    >
                    <span class="inp-unit">주</span>
                  </div>
                </div>
                <div class="lbel-inp-grp">
                  <div class="lbel-toggle">
                    <label class="lbel">액면가</label>

                    <!-- 토글 스위치 -->
                    <div class="toggle-item">
                      <label
                        class="tg-lbel"
                        for="open02"
                      >공개여부</label>
                      <input
                        id="open02"
                        type="checkbox"
                        class="is-none toggle-switch"
                      >
                      <label
                        for="open02"
                        class="toggle-onoff"
                      />
                    </div>
                    <!-- // 토글 스위치 -->
                  </div>
              
                  <div class="inp-grp inp-unit-grp">
                    <input
                      type="text"
                      class="inp"
                      value="0"
                    >
                    <span class="inp-unit">원</span>
                  </div>
                </div>
              </div>
              <div class="flex-row-grp">
                <div class="lbel-inp-grp">
                  <div class="lbel-toggle">
                    <label class="lbel">자본금</label>
                    <!-- 토글 스위치 -->
                    <div class="toggle-item">
                      <label
                        class="tg-lbel"
                        for="open03"
                      >공개여부</label>
                      <input
                        id="open03"
                        type="checkbox"
                        class="is-none toggle-switch"
                      >
                      <label
                        for="open03"
                        class="toggle-onoff"
                      />
                    </div>
                    <!-- // 토글 스위치 -->
                  </div>
              
                  <div class="inp-grp inp-unit-grp">
                    <input
                      type="text"
                      class="inp"
                      value="0"
                    >
                    <span class="inp-unit">원</span>
                  </div>
                </div>
                <div class="lbel-inp-grp">
                  <div class="lbel-toggle">
                    <label class="lbel">주주수</label>
                  </div>
              
                  <div class="inp-grp inp-unit-grp">
                    <input
                      type="text"
                      class="inp"
                      value="100"
                      disabled
                    >
                    <span class="inp-unit">명</span>
                  </div>
                </div>
              </div>
              <div class="flex-row-grp">
                <div class="lbel-inp-grp">
                  <div class="lbel-toggle">
                    <label class="lbel">대표보통주식주 비율</label>
                  </div>
              
                  <div class="inp-grp inp-unit-grp">
                    <input
                      type="text"
                      class="inp"
                      value="0"
                      disabled
                    >
                    <span class="inp-unit">%</span>
                  </div>
                </div>
                <div class="lbel-inp-grp">
                  <div class="lbel-toggle">
                    <label class="lbel">대표주주명</label>
                  </div>
              
                  <div class="inp-grp">
                    <input
                      type="text"
                      class="inp"
                      value="김철수"
                      disabled
                    >
                    <!-- <span class="inp-unit">명</span> -->
                  </div>
                </div>
              </div>
              <div class="flex-row-grp">
                <div class="lbel-inp-grp">
                  <div class="lbel-toggle">
                    <label class="lbel">대표지분율</label>
                  </div>
              
                  <div class="inp-grp inp-unit-grp">
                    <input
                      type="text"
                      class="inp"
                      value="0"
                      disabled
                    >
                    <span class="inp-unit">%</span>
                  </div>
                </div>
                <div class="lbel-inp-grp">
                  <div class="lbel-toggle">
                    <label class="lbel">종업원 수</label>

                    <span class="lbel-sub">(기준일 : 2000.00.00)</span>
                  </div>
              
                  <div class="inp-grp inp-unit-grp">
                    <input
                      type="text"
                      class="inp"
                      value="100"
                      disabled
                    >
                    <span class="inp-unit">명</span>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
        </div>

        <!-- 주주정보  -->
        <div class="table-all-wrap">
          <!-- 테이블 타이틀 -->
          <div class="ttl-wrap">
            <p class="table-ttl">
              주주정보
            </p>
            <div class="toggle-item">
              <label
                class="tg-lbel"
                for="open04"
              >공개여부</label>
              <input
                id="open04"
                type="checkbox"
                class="is-none toggle-switch"
              >
              <label
                for="open04"
                class="toggle-onoff"
              />
            </div>
          </div>
          <!-- END 테이블 타이틀 -->

          <div class="table-grp">
            <!-- 테이블 헤더 그룹 -->
            <ul class="table-hgrp">
              <li class="table-hlist flex-basis-10 txt-center">
                <span class="table-txt">주주구분</span>
              </li>
              <li class="table-hlist flex-basis-13 txt-left">
                <span class="table-txt">주주명</span>
              </li>
              <li class="table-hlist flex-basis-10 txt-left">
                <span class="table-txt">주종</span>
              </li>
              <li class="table-hlist flex-basis-16 txt-right">
                <span class="table-txt">지분율(%0)</span>
              </li>
              <li class="table-hlist flex-basis-22 txt-right">
                <span class="table-txt">보유주식수(주)</span>
              </li>
              <li class="table-hlist flex-basis-28 txt-right">
                <span class="table-txt">보유주식 금액(원)</span>
              </li>
            </ul>
            <!-- END 테이블 헤더 그룹 -->

            <!-- 테이블 내용 그룹 -->
            <div
              class="table-cont-wrap custom-scroll-wrap"
            >
              <ul
                v-for="(item, idx) in 20" 
                :key="idx"
                class="table-cont-grp"
              >
                <li class="table-cont-list flex-basis-10 txt-center">
                  <span class="table-txt">중앙정렬</span>
                </li>
                <li class="table-cont-list flex-basis-13 txt-left">
                  <span class="table-txt">좌측정렬</span>
                </li>
                <li class="table-cont-list flex-basis-10 txt-left">
                  <span class="table-txt">좌측정렬</span>
                </li>
                <li class="table-cont-list flex-basis-16 txt-right">
                  <span class="table-txt">우측정렬</span>
                </li>
                <li class="table-cont-list flex-basis-22 txt-right">
                  <span class="table-txt">우측정렬</span>
                </li>
                <li class="table-cont-list flex-basis-28 txt-right">
                  <span class="table-txt">우측정렬</span>
                </li>
              </ul>
            </div>
            <!-- END 테이블 내용 그룹 -->
          </div>
        </div>
        <!-- END 주주정보  -->

        <!-- 재무상태 -->
        <div class="table-all-wrap">
          <!-- 테이블 타이틀 -->
          <div class="ttl-wrap">
            <p class="table-ttl">
              재무상태
            </p>
            <div class="toggle-item">
              <label
                class="tg-lbel"
                for="open05"
              >공개여부</label>
              <input
                id="open05"
                type="checkbox"
                class="is-none toggle-switch"
              >
              <label
                for="open05"
                class="toggle-onoff"
              />
            </div>
          </div>
          <!-- END 테이블 타이틀 -->

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
                  <span class="table-txt f-bold">매출채권</span>
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
                  <span class="table-txt f-bold">재고자산</span>
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
                  <span class="table-txt f-bold">무형자산</span>
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
                  <span class="table-txt f-bold">투자자산</span>
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
                  <span class="table-txt f-bold">기타자산</span>
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
                  <span class="table-txt f-bold">자산총계</span>
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
                  <span class="table-txt f-bold">유통부재</span>
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
                  <span class="table-txt f-bold">장기부채</span>
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
                  <span class="table-txt f-bold">부채총계</span>
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
                  <span class="table-txt f-bold">자본금</span>
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
                class="table-cont-grp f-600-lg"
              >
                <li class="table-cont-list flex-basis-20 txt-left">
                  <span class="table-txt f-bold">자본총계</span>
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
            <!-- END 테이블 내용 그룹 -->
          </div>
        </div>
        <!-- END 재무상태 -->

        <!-- 손익계산서 -->
        <div class="table-all-wrap">
          <!-- 테이블 타이틀 -->
          <div class="ttl-wrap">
            <p class="table-ttl">
              손익계산서
            </p>
            <div class="toggle-item">
              <label
                class="tg-lbel"
                for="open06"
              >공개여부</label>
              <input
                id="open06"
                type="checkbox"
                class="is-none toggle-switch"
              >
              <label
                for="open06"
                class="toggle-onoff"
              />
            </div>
          </div>
          <!-- END 테이블 타이틀 -->

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
            <!-- END 테이블 내용 그룹 -->
          </div>
        </div>
        <!-- END 손익계산서 -->
        <div
          position="double-centered"
          margin-top
          class="btn-grp"
        >
          <btn-bd-light
            class="btn-lg btn-full color-gray btn-prev"
            @click="window.alert('이전 버튼을 클릭하셨습니다.')"
          >
            이전
          </btn-bd-light>
          <btn-solid
            class="btn-lg btn-full"
            @click="window.alert('수정완료 버튼을 클릭하셨습니다.')"
          >
            수정완료
          </btn-solid>
        </div>
      </div>
    </div>
    <!-- // 마이페이지 컨텐츠 영역 -->
  </div>
</template>

<script>
export default {
  name: 'SEtprDetailInfoEdit',
};
</script>

<style lang="scss" scoped>
</style>