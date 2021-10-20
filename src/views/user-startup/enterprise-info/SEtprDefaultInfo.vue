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
              원활한 투자를 위해 모든 작성란을 채워주세요.
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

        <div class="article-wrap profile-image-wrap">
          <p class="ttl">
            프로필 이미지
          </p>
          <div class="cont-wrap">
            <div class="left-wrap">
              <div class="biz-logo-wrap">
                <p class="sub-ttl">
                  기업 로고
                </p>
                <avatar lg />
              </div>
              <div class="avatar-with-name">
                <avatar class="avatar-lg" />
                <div class="name-grp name-grp-lg">
                  <span class="name name-lg">
                    주식회사 팩트컴퍼니
                  </span>

                  <ul class="name-subtxt-grp name-subtxt-grp-lg">
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
            <div class="right-wrap">
              <p class="sub-ttl">
                대표 이미지
              </p>
              <div
                class="card-thumb"
                style="max-width: 260px;"
              >
                <thumbnail />
              </div>
            </div>
          </div>
        </div>
        
        <!-- 업데이트 내역 -->
        <!-- // 업데이트 내역 -->

        <div class="article-wrap">
          <p class="ttl">
            기본정보
          </p>
          <div class="cont-wrap">
            <div class="info-grp">
              <p class="label">
                기업 한 줄 소개
              </p>
              <p class="info">
                팩트체크 전문기업 주식회사 팩트컴퍼니입니다.
              </p>
            </div>
            <div class="info-grp">
              <p class="label">
                상세소개
              </p>
              <p class="info custom-info">
                기업상세소개 1000자 텍스트입니다.<br>
                기업상세소개 1000자 텍스트입니다.<br>
                기업상세소개 1000자 텍스트입니다.<br>
              </p>
            </div>
          </div>
        </div>

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
                사업자번호
              </p>
              <p class="info">
                000-0000-0000
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
            <div class="info-grp">
              <p class="label">
                법인번호
              </p>
              <p class="info">
                000000-0000000
              </p>
            </div>
            <div class="info-grp">
              <p class="label">
                전화번호
              </p>
              <p class="info">
                00-0000-0000
              </p>
            </div>
            <div class="info-grp">
              <p class="label">
                홈페이지 주소
              </p>
              <a
                href="#"
                target="_blank"
                class="info"
              >
                https://www.test.com
              </a>
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

        <div class="article-wrap border-remove">
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
              본사주소
            </p>
            <p class="info">
              서울특별시 강남구 테헤란로 312 13층
            </p>
          </div>
          <div class="info-grp is-padding-change">
            <p class="label">
              태그
            </p>
            <p class="info">
              <badge-rounded
                v-for="(item, idx) in 5"
                :key="idx"
              >
                최대여덟글자입력
              </badge-rounded>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- // 마이페이지 컨텐츠 영역 -->
  </div>
</template>

<script>
export default {
  name: 'SEtprDefaultInfo',
};
</script>

<style lang="scss" scoped>
</style>
