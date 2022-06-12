<template>
  <!-- [D] 마이페이지 - 기업정보-기본정보 -->
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
          기본정보
        </li>
      </breadcrumb>

      <h2 class="ttl">
        기업정보
      </h2>
    </div>
    <!-- // 마이페이지 페이지 제목 -->

    <!-- 마이페이지 컨텐츠 영역 -->
    <div class="mypage-cont-wrap">
      <!-- 기업 투자자 기본정보 -->
      <div class="mypage-common-card">
        <div class="cont-hgrp">
          <p class="ttl">
            기본정보
          </p>
          <p class="ttl-sub">
            기업 프로필의 기본정보입니다.
          </p>
        </div>
        
        <layout-right-fixed />

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
              @click="$router.push('etpr-default-info-edit')"
            >
              수정하기
            </btn-bd-light>
          </div>
        </article>

        <div class="article-wrap">
          <div class="flex-row-start-grp">
            <div class="img-wrap">
              <div
                class="card-thumb"
                style="max-width: 260px;"
              >
                <thumbnail />
              </div>
            </div>
            <div class="avatar-wrap">
              <div class="avatar-with-name">
                <avatar class="avatar-lg" />
                <div class="name-grp name-grp-lg">
                  <span class="name-user-type name-user-type-lg">{{ testInvestorType === 'idv' ? '개인 투자자' : '기업 투자자' }}</span>
                  <span class="name name-lg">
                    주식회사 팩트컴퍼니
                  </span>
                </div>
              </div>
              <div
                v-if="testInvestorType === 'company'"
                class="icon-with-txt"
              >
                <i class="icon icon-jump" />
                <a
                  href="#"
                  target="_blank"
                  class="txt"
                >{{ 'www.naver.com' }}</a>
              </div>
            </div>
          </div>
          <div class="biz-detail-wrap">
            <p class="ttl">
              상세소개
            </p>
            <p class="dec">
              투자자 상세소개 1000자 텍스트입니다.<br>
              투자자 상세소개 1000자 텍스트입니다.<br>
              투자자 상세소개 1000자 텍스트입니다.<br>
              투자자 상세소개 1000자 텍스트입니다.<br>
              투자자 상세소개 1000자 텍스트입니다.
            </p>
          </div>
        </div>
        
        <!-- 업데이트 내역 -->
        <!-- // 업데이트 내역 -->

        <div class="article-wrap">
          <div class="cont-wrap">
            <div class="info-grp">
              <p class="label">
                기업명
              </p>
              <p class="info">
                주식회사 팩트컴퍼니
              </p>
            </div>
            <div class="info-grp">
              <p class="label">
                대표자명
              </p>
              <p class="info">
                김철수
              </p>
            </div>
            <div
              v-if="testInvestorType === 'company'"
              class="info-grp"
            >
              <p class="label">
                사업자번호
              </p>
              <p class="info">
                000-0000-0000
              </p>
            </div>
            <div
              v-if="testInvestorType === 'company'"
              class="info-grp"
            >
              <p class="label">
                법인번호
              </p>
              <p class="info">
                000000-0000000
              </p>
            </div>
            <div
              v-if="testInvestorType === 'company'"
              class="info-grp"
            >
              <p class="label">
                본사주소
              </p>
              <p class="info">
                서울특별시 강남구 테헤란로 312 13층
              </p>
            </div>
            <div
              v-if="testInvestorType === 'company'"
              class="info-grp"
            >
              <p class="label">
                전화번호
              </p>
              <p class="info">
                00-0000-0000
              </p>
            </div>
            <div class="info-grp">
              <p class="label">
                운영규모
              </p>
              <p class="info">
                0,000,000,000 원
              </p>
            </div>
            <div class="info-grp">
              <p class="label">
                설립일
              </p>
              <p class="info">
                2021년 00월 00일
              </p>
            </div>
            <div class="info-grp">
              <p class="label">
                기업고유 아이디
              </p>
              <p class="info">
                abcd1234
              </p>
            </div>
          </div>
        </div>

        <div class="article-wrap">
          <div class="table-all-wrap">
            <!-- 테이블 타이틀 -->
            <div class="ttl-wrap">
              <p class="table-ttl">
                재원관리
              </p>
              <span class="table-ttl-sub">단위 : 원</span>
            </div>
            <!-- END 테이블 타이틀 -->

            <div class="table-grp">
              <!-- 테이블 헤더 그룹 -->
              <ul class="table-hgrp">
                <li class="table-hlist flex-basis-76 txt-left">
                  <span class="table-txt">재원</span>
                </li>
                <li class="table-hlist flex-basis-22 txt-right">
                  <span class="table-txt">금액</span>
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
                  <li class="table-cont-list flex-basis-76 txt-left">
                    <span class="table-txt">재원출처명</span>
                  </li>
                  <li class="table-cont-list flex-basis-22 txt-right">
                    <span class="table-txt">0,000,000,000</span>
                  </li>
                </ul>
              </div>
            <!-- END 내용이 있을 때 -->

            <!-- END 테이블 내용 그룹 -->
            </div>
          </div>
        </div>

        <div class="article-wrap border-remove">
          <p class="ttl-lg">
            인증서
          </p>
          <p class="ttl-sub">
            팩트시트 관리자 확인용이며, 회원들에게는 공개되지 않습니다.<br>
            인증서는 최초 1회만 등록되며, 등록된 파일 변경은 1:1문의를 통해 가능합니다.
          </p>
          <div class="info-grp auth-info-grp">
            <p class="label">
              투자자 자격 인증서
            </p>
            <p class="info">
              <span>첨부파일명.jpg</span>
              <span class="empty-txt">등록된 인증서가 없습니다.</span>
            </p>
          </div>
        </div>
      </div>
      <!-- // 기업 투자자 기본정보 -->
    </div>
    <!-- // 마이페이지 컨텐츠 영역 -->
  </div>
</template>

<script>
export default {
  name: 'IEtprDefaultInfo',
  data() {
    return {
      testInvestorType: 'company', // idv(개인투자자), company(기업투자자)
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
