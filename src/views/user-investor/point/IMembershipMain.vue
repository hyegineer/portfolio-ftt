<template>
  <!-- [D] 마이페이지 - 포인트-멤버십 구매 -->
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
          포인트
        </li>
        <li class="txt">
          멤버십 구매
        </li>
      </breadcrumb>

      <h2 class="ttl">
        포인트
      </h2>
    </div>
    <!-- // 마이페이지 페이지 제목 -->

    <!-- 마이페이지 컨텐츠 영역 -->
    <div class="mypage-cont-wrap">
      <div class="keyword-card">
        <section class="keyword-card-section">
          <div class="hgrp">
            <span class="sub-ttl">
              <img
                src="@/assets/images/img/img-txt-member.svg"
                alt="membership"
              >
            </span>
            <h3 class="ttl">
              팩트시트 멤버십은?
            </h3>
          </div>

          <p class="keyword-card-desc">
            투자에 필요한 정보를 숨김없이 확인할 수 있는 혜택을 가집니다. <br>
            업데이트된 정보의 히스토리를 파악하여, 기업의 성장성과 투자시장에서의 가치를 판단할 수 있습니다. <br>
            빠르고 정확한 정보를 얻기 위하여 팩트시트 멤버십에 가입해보세요.
          </p>
        </section>
      </div>
    </div>
    <!-- // 마이페이지 컨텐츠 영역 -->
  </div>
</template>

<script>
export default {
  name: 'IMembershipMain',
};
</script>

<style lang="scss" scoped>
</style>