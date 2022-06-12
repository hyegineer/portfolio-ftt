<template>
  <!-- [D] 마이페이지 - 기업회원 등록 상세 -->
  <div
    mypage="enroll-page"
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
          내 정보
        </li>
        <li class="txt">
          기업회원 등록 상세
        </li>
      </breadcrumb>

      <h2 class="ttl">
        기업회원 등록
      </h2>
    </div>
    <!-- // 마이페이지 페이지 제목 -->


    <!-- 마이페이지 컨텐츠 영역 -->
    <div class="mypage-cont-wrap">
      <article class="select-guide-box">
        <div class="txt-grp">
          <h6 class="txt-ttl">
            선택한 기업정보를 확인해주세요.
          </h6>
          <p class="txt-dec">
            {{ testSelectType === 'investor' ? '투자자' : '스타트업' }} 기업을 선택하였습니다.
          </p>
        </div>
        <div class="btn-grp">
          <btn-bd-light
            class="btn-lg btn-prev"
          >
            이전
          </btn-bd-light>
          <btn-solid-dark
            class="btn-md"
            @click="window.alert('검정버튼을 클릭하셨습니다.')"
          >
            선택완료
          </btn-solid-dark>
        </div>
      </article>

      <!-- 투자자 상세정보 -->
      <div
        v-if="testSelectType === 'investor'"
        class="enroll-cont-wrap"
      >
        <div class="top-info-wrap">
          <div class="card-thumb card-thumb-max">
            <thumbnail />
          </div>
          <div class="txt-wrap">
            <div class="txt-top-grp">
              <div class="avatar-with-name">
                <avatar class="avatar-lg" />
                <div class="name-grp name-grp-lg">
                  <span class="name-user-type name-user-type-lg">개인 투자자</span>
                  <span class="name name-lg">
                    주식회사 팩트컴퍼니
                  </span>
                </div>
              </div>
              <div
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
            <div class="txt-bottom-grp">
              <div class="info-grp">
                <span class="label">대표자</span>
                <span class="info">김투자</span>
              </div>
              <div class="info-grp">
                <span class="label">사업자번호</span>
                <span class="info">000-00-00***</span>
              </div>
              <div class="info-grp">
                <span class="label">본사주소</span>
                <span class="info">서울특별시 강남구 테헤란로 312 13층 주소길어지면 최대 2줄 (우편번호)</span>
              </div>
              <div class="info-grp">
                <span class="label">전화번호</span>
                <span class="info">02-1234-5678</span>
              </div>
              <div class="info-grp">
                <span class="label">운영규모</span>
                <span class="info">0,000,000,000,000 원</span>
              </div>
              <div class="info-grp">
                <span class="label">설립일</span>
                <span class="info">2021년 03월 10일</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END 투자자 상세정보 -->

      <!-- 스타트업 상세정보 -->
      <div
        v-if="testSelectType === 'startup'"
        class="enroll-cont-wrap"
      >
        <div class="top-info-wrap">
          <div class="card-thumb card-thumb-max">
            <thumbnail />
          </div>
          <div class="txt-wrap">
            <div class="txt-top-grp">
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
              <div
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
            <div class="txt-bottom-grp">
              <p class="introduce-txt">
                스타트업 기업 한줄 소개 텍스트 자리입니다. 기업 한줄 소개 텍스트 자리입니다.
              </p>
            </div>
          </div>
        </div>
        <div class="bottom-info-wrap">
          <div class="bottom-info-grp">
            <div class="info-grp">
              <span class="label">대표자</span>
              <span class="info">대표자</span>
            </div>
            <div class="info-grp">
              <span class="label">사업자번호</span>
              <span class="info">000-00-00***</span>
            </div>
            <div class="info-grp">
              <span class="label">본사주소</span>
              <span class="info">서울특별시 강남구 테헤란로 312 13층 주소길어지면 최대 2줄 (우편번호)</span>
            </div>
            <div class="info-grp">
              <span class="label">전화번호</span>
              <span class="info">02-1234-5678</span>
            </div>
            <div class="info-grp">
              <span class="label">기업규모</span>
              <span class="info">소기업</span>
            </div>
            <div class="info-grp">
              <span class="label">산업분류</span>
              <span class="info">ICT 서비스</span>
            </div>
            <div class="info-grp">
              <span class="label">산업분야</span>
              <span class="info">-</span>
            </div>
            <div class="info-grp">
              <span class="label">설립일</span>
              <span class="info">2021년 3월 10일</span>
            </div>
          </div>
          <div class="bottom-tag-wrap">
            <div class="info-grp">
              <span class="label">태그</span>
              <div
                v-for="(item, idx) in 5"
                :key="idx"
                class="tag-list"
              >
                <badge-rounded>
                  최대여덟글자입력
                </badge-rounded>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END 스타트업 상세정보 -->
    </div>
    <!-- // 마이페이지 컨텐츠 영역 -->
  </div>
</template>

<script>
export default {
  name: 'FcEnrollDetail',
  data() {
    return {
      testSelectType: 'startup', // startup, investor
    };
  },

};
</script>

<style lang="scss" scoped>
</style>
