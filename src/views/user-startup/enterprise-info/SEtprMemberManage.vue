<template>
  <!-- [D] 마이페이지 - 기업정보-구성원관리 -->
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
          구성원 관리
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
            구성원 관리
          </p>
          <p class="ttl-sub">
            기업의 구성원을 관리합니다.
          </p>
        </div>

        <article class="guide-box">
          <div class="guide-box-cont">
            <h6 class="lbel">
              안내사항
            </h6>
            <p class="txt">
              기업 프로필에 '구성원'으로 노출됩니다. 
            </p>
          </div>

          <div class="btn-grp">
            <btn-solid-grayblue
              class="btn-sm"
            >
              구성원 추가
            </btn-solid-grayblue>
            <btn-bd-light class="btn-sm">
              항목 공개 설정
            </btn-bd-light>
          </div>
        </article>

        <div class="member-list-grp-ttl">
          <p class="txt">
            총 <span class="bold">0</span>명
          </p>
        </div>

        <!-- 구성원이 있을 때 -->
        <div class="member-list-grp">
          <div
            v-for="(item, index) in 5"
            :key="index"
            class="member-list"
          >
            <avatar />
            <article class="member-info">
              <div class="member-info-top">
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
        
        <!-- 구성원이 없을 때 -->
        <div class="member-list-grp">
          <empty-contents txt="구성원이 없습니다." />
        </div>
        <!-- // 구성원이 없을 때 -->
      </div>
    </div>
    <!-- // 마이페이지 컨텐츠 영역 -->
  </div>
</template>

<script>
export default {
  name: 'SEtprMemberManage',
};
</script>

<style lang="scss" scoped>
</style>