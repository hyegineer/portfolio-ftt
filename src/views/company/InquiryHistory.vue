<template>
  <!-- [D] 문의하기 내역 (회원만 조회가능) -->
  <div class="page inquiry-page">
    <layout-header />

    <div class="page-container">
      <div class="company-hgrp">
        <div class="wide-panel">
          <h5 class="ttl">
            <span class="txt">1:1문의</span>
          </h5>
          <p class="ttl-sub">
            <span class="txt1">고객님께서 문의하신 </span><br>
            <span class="txt2">1:1문의 내역입니다.</span>
          </p>
        </div>
      </div>

      <div class="tab">
        <div class="wide-panel">
          <button
            class="tab-btn"
            @click="$router.push('/inquiry')"
          >
            문의하기
          </button>
          <button class="tab-btn is-active">
            문의내역
          </button>
        </div>
      </div>

      <div class="inquiry-history-wrap">
        <div class="wide-panel">
          <div class="board-list-grp-ttl">
            총 <span class="bold">15</span>개의 게시글이 있습니다.
          </div>

          <!-- 등록된 게시글이 있을 때 -->
          <table class="board-list-grp inquiry-list-grp">
            <tr
              v-for="(item, index) in 4"
              :key="index"
              class="board-list"
              @click="$router.push('/inquiry-history-detail')"
            >
              <td class="td-num">
                <span class="td-word-num">{{ index }}</span>
              </td>
              <td class="td-cat">
                <span class="td-word-cat">{{ '카테고리명' }}</span>
              </td>
              <td class="td-subject">
                <span class="td-word-subject">{{ '1:1문의 제목 텍스트입니다' }}</span>
              </td>
              <td>
                <span class="badge-qa-state">
                  <span class="txt">답변대기</span>
                </span>
              </td>
              <td>
                <span class="td-date">{{ '2021.00.00' }}</span>
              </td>
            </tr>
            <tr 
              class="board-list"
              @click="$router.push('/inquiry-history-detail')"
            >
              <td class="td-num">
                <span class="td-word-num">{{ 10 }}</span>
              </td>
              <td class="td-cat">
                <span class="td-word-cat">{{ '카테고리명' }}</span>
              </td>
              <td class="td-subject">
                <span class="td-word-subject">{{ '1:1문의 제목 텍스트입니다' }}</span>
              </td>
              <td>
                <!-- [D] 답변완료시 is-active 클래스 추가 -->
                <span class="badge-qa-state is-active">
                  <span class="txt">답변완료</span>
                </span>
              </td>
              <td>
                <span class="td-date">{{ '2021.00.00' }}</span>
              </td>
            </tr>
          </table>
          <!-- // 등록된 게시글이 있을 때 -->

          <!-- 등록된 게시글이 없을 때 -->
          <div
            class="board-list-grp"
          >
            <empty-contents txt="등록된 게시글이 없습니다." />
          </div>
          <!-- // 등록된 게시글이 없을 때 -->

          <!-- 페이지네이션 -->
          <div class="pagination">
            <btn-square-bd @click="window.alert('이전 버튼 누르기')">
              <i class="icon icon-page-prev" />
              <span class="is-voice-only">이전</span>
            </btn-square-bd>

            <button
              type="button"
              class="num-btn is-active"
            >
              1
            </button>
        
            <button
              type="button" 
              class="num-btn"
            >
              2
            </button>
        
            <button
              type="button" 
              class="num-btn"
            >
              3
            </button>
        
            <button
              type="button" 
              class="num-btn"
            >
              4
            </button>

            <button
              type="button" 
              class="num-btn"
            >
              ···
            </button>
        
            <button
              type="button" 
              class="num-btn"
            >
              10
            </button>
        
            <btn-square-bd @click="window.alert('다음 버튼 누르기')">
              <i class="icon icon-page-next" />
              <span class="is-voice-only">다음</span>
            </btn-square-bd>
          </div>
        <!-- // 페이지네이션 -->
        </div>
      </div>
    </div>

    <layout-footer />
  </div>
</template>

<script>
export default {
  name: 'InquiryHistory',
};
</script>

<style lang="scss" scoped>
</style>