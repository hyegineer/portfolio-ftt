<template>
  <!-- [D] 대시보드-투자기업에관심을가진투자자 상세 -->
  <div 
    mypage="dashboard"
    class="mypage-container"
  >
    <!-- 마이페이지 페이지 제목 -->

    <div class="mypage-hgrp mb-remove">
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
        <li class="txt">
          우리 기업에 관심을 가진 투자자
        </li>
      </breadcrumb>
    </div>
    <!-- END 마이페이지 페이지 제목 -->

    <!-- 마이페이지 컨텐츠 영역 -->

    <div class="mypage-cont-wrap">
      <div class="etpr-info-shot">
        <div class="flexable-container">
          <div class="flexable-inner card-thumb">
            <thumbnail lg />
          </div>
          <div class="flexable-inner card-text white-panel">
            <div class="desc-wrap">
              <div class="avatar-with-name">
                <avatar class="avatar-lg" />
                <div class="name-grp name-grp-lg">
                  <span class="name-user-type name-user-type-lg">개인 투자자</span>
                  <span class="name name-lg">
                    주식회사 팩트컴퍼니
                  </span>
                  <div
                    class="icon-with-txt"
                  >
                    <i class="icon icon-jump" />
                    <a
                      href="#"
                      class="txt"
                    >{{ 'www.naver.com' }}</a>
                  </div>
                </div>
                <btn-square-bd @click="window.alert('메세지 버튼 누르기')">
                  <i class="icon icon-msg" />
                  <span class="is-voice-only">메세지</span>
                </btn-square-bd>
              </div>

              <div class="info-wrap">
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
                  <span class="info">-</span>
                </div>
                <div class="info-grp">
                  <span class="label">설립일</span>
                  <span class="info">-</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section-dashboard">
        <div class="big-ttl-grp">
          <h3 class="cont-big-ttl">
            상세정보
          </h3>
        </div>
        <div class="dashboard-cont-wrap">
          <div class="half-grp detail-grp">
            <div class="panel-ttl-grp">
              <div class="panel-ttl">
                <span>상세소개</span>
              </div>
            </div>
            <div class="cont-grp">
              <!-- 상세소개 내용이 있을 때 -->
              <div
                class="txt-box"
              >
                기업상세소개 1000자 텍스트입니다.<br>
                기업상세소개 1000자 텍스트입니다.<br>
                기업상세소개 1000자 텍스트입니다.<br>
                기업상세소개 1000자 텍스트입니다.<br>
                기업상세소개 1000자 텍스트입니다.<br>
                기업상세소개 1000자 텍스트입니다.<br>
                기업상세소개 1000자 텍스트입니다.<br>
                기업상세소개 1000자 텍스트입니다.<br>
                기업상세소개 1000자 텍스트입니다.<br>
                기업상세소개 1000자 텍스트입니다.<br>
                기업상세소개 1000자 텍스트입니다.<br>
                기업상세소개 1000자 텍스트입니다.<br>
                기업상세소개 1000자 텍스트입니다.<br>
                기업상세소개 1000자 텍스트입니다.<br>
                기업상세소개 1000자 텍스트입니다.<br>
                기업상세소개 1000자 텍스트입니다.<br>
                기업상세소개 1000자 텍스트입니다.<br>
                기업상세소개 1000자 텍스트입니다.<br>
                기업상세소개 1000자 텍스트입니다.<br>
                기업상세소개 1000자 텍스트입니다.<br>
                기업상세소개 1000자 텍스트입니다.<br>
                기업상세소개 1000자 텍스트입니다.<br>
                기업상세소개 1000자 텍스트입니다.<br>
                기업상세소개 1000자 텍스트입니다.<br>
                기업상세소개 1000자 텍스트입니다.<br>
                기업상세소개 1000자 텍스트입니다.<br>
                기업상세소개 1000자 텍스트입니다.<br>
                기업상세소개 1000자 텍스트입니다.<br>
                기업상세소개 1000자 텍스트입니다.<br>
                기업상세소개 1000자 텍스트입니다.<br>
                기업상세소개 1000자 텍스트입니다.<br>
                기업상세소개 1000자 텍스트입니다.<br>
                기업상세소개 1000자 텍스트입니다.<br>
              </div>
              <!-- END 상세소개 내용이 있을 때 -->

              <!-- 상세소개 내용이 없을 때 -->
              <div class="txt-box">
                <empty-contents txt="내용이 없습니다." />
              </div>
              <!-- END 상세소개 내용이 없을 때 -->
            </div>
          </div>
          <div class="half-grp finance-grp">
            <div class="panel-ttl-grp">
              <div class="panel-ttl">
                <span>재원</span>
                <span class="panel-ttl-sub">단위 : 원</span>
              </div>
            </div>
            <div class="cont-grp">
              <div class="table-all-wrap">
                <div class="table-grp">
                  <!-- 테이블 헤더 그룹 -->
                  <ul class="table-hgrp">
                    <li class="table-hlist flex-basis-38 txt-left">
                      <span class="table-txt">재원</span>
                    </li>
                    <li class="table-hlist flex-basis-61 txt-right">
                      <span class="table-txt">금액</span>
                    </li>
                  </ul>
                  <!-- END 테이블 헤더 그룹 -->

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
                      <li class="table-cont-list flex-basis-38 txt-left">
                        <span class="table-txt f-bold">재원출처명</span>
                      </li>
                      <li class="table-cont-list flex-basis-61 txt-right">
                        <span class="table-txt">000,000,000</span>
                      </li>
                    </ul>
                  </div>
                  <!-- END 내용이 있을 때 -->

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

                  <!-- END 테이블 내용 그룹 -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section-dashboard section-dashboard-member">
        <div class="big-ttl-grp">
          <h3 class="cont-big-ttl">
            구성원
          </h3>
        </div>
        <div class="section-cont">
          <!-- 구성원 명수 표시 -->
          <div class="member-list-grp-ttl">
            <p class="txt">
              총 <span class="bold">0</span>명
            </p>
          </div>
          <!-- // 구성원 명수 표시 -->

          <!-- 구성원이 있을 때 -->
          <div
            class="member-list-grp"
          >
            <div
              v-for="(item, index) in 5"
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
          <!-- // END 구성원이 있을 때 -->

          <!-- // 구성원이 없을 때 -->
          <empty-contents txt="구성원이 없습니다." />
          <!-- // END 구성원이 없을 때 -->
        </div>
      </div>
      <div class="section-dashboard section-dashboard-pf">
        <div class="big-ttl-grp">
          <h3 class="cont-big-ttl">
            포트폴리오
          </h3>
        </div>
        <div class="section-cont">
          <!-- 포트폴리오가 있을 때 -->
          <div
            class="pflio-grid-grp"
          >
            <div
              v-for="(item, index) in 8"
              :key="index"
              class="pflio-grid"
            >
              <div class="pflio-wrap">
                <div class="pflio">
                  <div class="avatar-with-name col-avatar-with-name">
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
            </div>
          </div>
          <!-- // 포트폴리오가 있을 때 -->

          <!-- 포트폴리오가 없을 때 -->
          <div class="pflio-list-grp">
            <empty-contents txt="정보가 없습니다." />
          </div>
        <!-- // 포트폴리오가 없을 때 -->
        </div>
      </div>
    </div>
    <!-- END 마이페이지 컨텐츠 영역 -->
  </div>
</template>

<script>
export default {
  name: 'SDashboardInvestorDetail',
};
</script>

<style lang="scss" scoped>
</style>
