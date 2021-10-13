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
            <btn-bd-light
              class="btn-sm"
              @click="$router.push('etpr-detail-info-edit')"
            >
              엑셀양식 다운로드
            </btn-bd-light>
          </div>
        </article>
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