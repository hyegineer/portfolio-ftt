<template>
  <!-- [D] 마이페이지 - 포인트-멤버십 구매 완료 -->
  <div class="mypage-container mypage-membership-complete-page">
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
          멤버십 구매완료
        </li>
      </breadcrumb>

      <h2 class="ttl">
        포인트
      </h2>
    </div>
    <!-- // 마이페이지 페이지 제목 -->

    <!-- 마이페이지 컨텐츠 영역 -->

    <!-- 마이페이지 컨텐츠 영역 -->
    <div class="mypage-cont-wrap">
      <div class="mypage-common-card">
        <div class="state-guide-box">
          <img
            src="@/assets/images/img/img-complete-lights.svg"
            alt=""
            class="state-img"
          >
          <h3 class="state-ttl">
            멤버십 구매가 완료되었습니다.
          </h3>
          <p class="state-period">
            멤버십 혜택은 <b>2020.00.00까지</b> 이용 가능합니다.
          </p>
          <p class="state-desc fc-gray">
            마이페이지 > 포인트 > 포인트 충전/내역에서 확인하실 수 있습니다.
          </p>
          
          <div class="space-between charge-form-grp">
            <label class="lbel">현재 보유 포인트</label>

            <div class="space-between-item">
              <div class="amount-item">
                <strong class="amount">0</strong>
                <div class="badge-p" />
              </div>
            </div>
          </div>

          <btn-solid
            position="single-centered"
            class="btn-lg"
            @click="$router.push('point-main')"
          >
            포인트 충전/내역으로
          </btn-solid>
        </div>
      </div>
    </div>
    <!-- // 마이페이지 컨텐츠 영역 -->
    <!-- // 마이페이지 컨텐츠 영역 -->
  </div>
</template>

<script>
export default {
  name: 'IMembershipComplete',
};
</script>

<style lang="scss" scoped>
</style>