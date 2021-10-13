<template>
  <!-- [D] 마이페이지 - 포인트-포인트 내역 -->
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
          포인트 충전/내역
        </li>
      </breadcrumb>

      <h2 class="ttl">
        포인트
      </h2>
    </div>
    <!-- // 마이페이지 페이지 제목 -->

    <!-- 마이페이지 컨텐츠 영역 -->
    <div class="mypage-cont-wrap">
      <div class="mypage-point-card">
        <div class="mypage-point-hgrp">
          <p class="ttl">
            <b class="bold">투자 컴퍼니</b>의 <br>보유 포인트
          </p>
          <div class="ttl-sub">
            <strong class="amount">100,000</strong>
            <div class="badge-p" />
          </div>
          <btn-bd-dark
            class="charge-btn btn-sm"
            @click="$router.push('point-charge')"
          >
            충전하기
          </btn-bd-dark>
        </div>

        <div class="mypage-point-history-wrap">
          <div class="ttl">
            포인트 내역
          </div>

          <!-- 내용이 있을 때 -->
          <div class="cont">
            <table class="simple-list-grp">
              <tr
                v-for="(item, index) in 15"
                :key="index"
                class="simple-list"
              >
                <td>
                  <span class="bold">+ 20,000 P</span>
                </td>
                
                <td>
                  <span>포인트 충전</span>
                </td>
                
                <td>
                  <span>이투자</span>
                </td>
                
                <td class="td-date">
                  <span class="fc-gray-light">2020.00.00 00:00</span>
                </td>
              </tr>
            </table>
          </div>
          <!-- // 내용이 있을 때 -->

          <!-- 내용이 없을 때 -->
          <div
            class="cont"
            style="display: none;"
          >
            <span class="fc-gray">내용이 없습니다.</span>
          </div>
          <!-- // 내용이 없을 때 -->
        </div>
      </div>
    </div>
    <!-- // 마이페이지 컨텐츠 영역 -->
  </div>
</template>

<script>
export default {
  name: 'IPointMain',
};
</script>

<style lang="scss" scoped>
</style>