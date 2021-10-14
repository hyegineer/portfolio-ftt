<template>
  <!-- [D] 마이페이지 - 포인트-포인트 관리 -->
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
          포인트 관리
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
            <b class="bold">홍길동</b> 팩트체커의 <br>보유 포인트
          </p>
          <div class="ttl-sub">
            <div class="amount-item">
              <strong class="amount">100,000</strong>
              <div class="badge-p" />
            </div>
          </div>
        </div>

        <div class="mypage-point-history-wrap">
          <div class="ttl">
            포인트 내역
          </div>

          <div class="simple-list-grp-box">
            <!-- 내용이 있을 때 -->
            <table
              class="simple-list-grp" 
            >
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
                
                <td class="td-right">
                  <span class="fc-gray-light">2020.00.00 00:00</span>
                </td>
              </tr>
            </table>
            <!-- // 내용이 있을 때 -->

            <!-- 내용이 없을 때 -->
            <div
              class="simple-list-nothing"
            >
              <span class="fc-gray">내용이 없습니다.</span>
            </div>
          <!-- // 내용이 없을 때 -->
          </div>
        </div>
      </div>
    </div>
    <!-- // 마이페이지 컨텐츠 영역 -->
  </div>
</template>

<script>
export default {
  name: 'FcPointMain',
};
</script>

<style lang="scss" scoped>
</style>