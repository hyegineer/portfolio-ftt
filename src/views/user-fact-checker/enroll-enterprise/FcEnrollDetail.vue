<template>
  <!-- [D] 마이페이지 - 기업회원 등록 상세 -->
  <div class="mypage-container mypage-enroll-container">
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
            소속된 기업이 있으신가요?
          </h6>
          <p class="txt-dec">
            기업등록시 스타트업/투자자 회원으로 전환이 가능합니다.
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
    </div>
    <!-- // 마이페이지 컨텐츠 영역 -->
  </div>
</template>

<script>
export default {
  name: 'FcEnrollDetail',
};
</script>

<style lang="scss" scoped>
</style>
