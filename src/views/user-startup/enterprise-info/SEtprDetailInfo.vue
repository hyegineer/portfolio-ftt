<template>
  <!-- [D] 마이페이지 - 기업정보-상세정보 -->
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
          상세정보
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
            상세정보
          </p>
          <p class="ttl-sub">
            기업 프로필의 상세정보입니다.
          </p>
        </div>

        <article class="guide-box">
          <div class="guide-box-cont">
            <h6 class="lbel">
              안내사항
            </h6>
            <p class="txt">
              원활한 투자를 위해 모든 기업정보를 작성해주세요. 
            </p>
          </div>

          <div class="btn-grp">
            <btn-bd-light
              class="btn-sm"
              @click="$router.push('etpr-detail-info-edit')"
            >
              수정하기
            </btn-bd-light>
          </div>
        </article>

        <div class="article-wrap">
          <div class="cont-wrap">
            <div class="info-grp">
              <p class="label">
                발행주식 수
              </p>
              <p class="info">
                00주
              </p>
            </div>
            <div class="info-grp">
              <p class="label">
                액면가
              </p>
              <p class="info">
                0,000,000,000 원
              </p>
            </div>
            <div class="info-grp">
              <p class="label">
                자본금
              </p>
              <p class="info">
                0,000,000,000 원
              </p>
            </div>
            <div class="info-grp">
              <p class="label">
                주주수
              </p>
              <p class="info">
                000 명
              </p>
            </div>
            <div class="info-grp">
              <p class="label">
                대표보통주식주 비율
              </p>
              <p class="info">
                000 % 
              </p>
            </div>
            <div class="info-grp">
              <p class="label">
                대표주주구분
              </p>
              <p class="info">
                임원
              </p>
            </div>
            <div class="info-grp">
              <p class="label">
                대표주주명
              </p>
              <p class="info">
                김철수
              </p>
            </div>
            <div class="info-grp">
              <p class="label">
                대표지분율
              </p>
              <p class="info">
                000 %
              </p>
            </div>
            <div class="info-grp">
              <p class="label">
                종업원 수
              </p>
              <p class="info">
                00 명
                <span class="info-sub">(기준일 : 2000.00.00)</span>
              </p>
            </div>
          </div>
        </div>

        <!-- 주주정보  -->
        <div class="table-all-wrap">
          <!-- 테이블 타이틀 -->
          <div class="ttl-wrap">
            <p class="table-ttl">
              주주정보
            </p>
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
            <!-- 내용이 없을 때 -->
            <div
              class="table-cont-wrap empty-cont-wrap"
              style="display: none;"
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
            <!-- END 내용이 있을 때 -->

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
            <!-- 내용이 없을 때 -->
            <div
              class="table-cont-wrap empty-cont-wrap"
              style="display: none;"
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
            <!-- END 내용이 있을 때 -->
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
            <!-- 내용이 없을 때 -->
            <div
              class="table-cont-wrap empty-cont-wrap"
              style="display: none;"
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
        <!-- END 손익계산서 -->
      </div>
    </div>
    <!-- // 마이페이지 컨텐츠 영역 -->
  </div>
</template>

<script>
export default {
  name: 'SEtprDetailInfo',
};
</script>

<style lang="scss" scoped>
</style>