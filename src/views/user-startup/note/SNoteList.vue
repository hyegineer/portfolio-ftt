<template>
  <!-- [D] 마이페이지 - 쪽지함 목록 -->
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
          쪽지함
        </li>
      </breadcrumb>

      <h2 class="ttl">
        쪽지함
      </h2>
    </div>
    <!-- // 마이페이지 페이지 제목 -->

    <!-- 마이페이지 컨텐츠 영역 -->
    <div class="mypage-cont-wrap">
      받은쪽지 , 보낸 쪽지
    </div>
    <!-- // 마이페이지 컨텐츠 영역 -->
  </div>
</template>

<script>
export default {
  name: 'SNoteList',
};
</script>

<style lang="scss" scoped>
</style>