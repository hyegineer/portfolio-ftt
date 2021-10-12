<template>
  <!-- [D] 마이페이지 - 기업정보-그룹관리 -->
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
          그룹 관리
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
            그룹 관리
          </p>
          <p class="ttl-sub">
            우리 기업으로 가입한 직원 계정을 관리합니다.
          </p>
        </div>

        <article class="guide-box">
          <div class="guide-box-cont">
            <h6 class="lbel">
              안내사항
            </h6>
            <p class="txt">
              초대하기 링크로 가입시, 우리 기업의 소속으로 회원가입이 진행됩니다.
            </p>
          </div>

          <div class="btn-grp">
            <btn-solid-grayblue
              class="btn-sm"
              @click="alert('외부링크가 복사됩니다.')"
            >
              초대하기
            </btn-solid-grayblue>
          </div>
        </article>

        <div class="member-list-grp-ttl">
          <p class="txt">
            총 <span class="bold">0</span>명
          </p>
        </div>

        <!-- 구성원이 있을 때 -->
        <div class="box-list-grp">
          <div
            v-for="(item, index) in 3"
            :key="index"
            class="box-list box-grpmember-list"
          >
            <span class="account-type">그룹관리 계정</span>
            
            <div class="account-info">
              <p class="name">
                이름
              </p>
              <span class="mail">id@idemail.com</span>
            </div>

            <div class="btn-grp">
              <btn-bd-light class="btn-xsm btn-rounded">
                관리자 해제
              </btn-bd-light>
              <btn-bd-light class="btn-xsm btn-rounded">
                관리자 지정
              </btn-bd-light>
              <btn-solid-dark class="btn-xsm btn-rounded">
                승인
              </btn-solid-dark>
              <btn-bd-red class="btn-xsm btn-rounded">
                거절
              </btn-bd-red>
              <btn-bd-red class="btn-xsm btn-rounded">
                그룹강퇴
              </btn-bd-red>
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
  name: 'SEtprGroupManage',
};
</script>

<style lang="scss" scoped>
</style>