<template>
  <!-- [D] 마이페이지 - 쪽지함 목록 -->
  <div class="mypage-container mypage-white-container">
    <div class="mypage-white-panel">
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
        <!-- 쪽지함 - 검색 -->
        <div class="inp-grp inp-sch-grp">
          <input
            type="text"
            class="inp"
            placeholder="제목, 내용을 검색하세요."
          >
          <!-- [D] 클릭시 검색어 지워짐 -->
          <button
            type="button"
            class="inp-del-btn"
          >
            <span class="is-voice-only">검색어 지우기</span>
          </button>
          <button
            type="button" 
            class="inp-sch-btn"
          >
            <span class="is-voice-only">검색하기</span>
          </button>
        </div>
        <!-- // 쪽지함 - 검색 -->
          
        <!-- 쪽지함 - 탭 -->
        <div class="tab">
          <button
            class="tab-btn is-active"
          >
            받은 쪽지 (0)
          </button>
          <button
            class="tab-btn" 
          >
            보낸 쪽지 (0)
          </button>
        </div>
        <!-- // 쪽지함 - 탭 -->

        <!-- 쪽지함 - 리스트 -->
        <!-- FIXME 쪽지함 리스트 재스타일링 -->
        <div>
          <!-- 쪽지 있을 때 -->
          <table class="note-list-grp board-list-grp">
            <tr
              v-for="(item, index) in 2"
              :key="index"
              class="board-list"
            >
              <td class="td-num">
                <span class="td-word-num">{{ index }}</span>
              </td>
              <td class="td-subject">
                <span class="td-word-subject">{{ '기업정보 게시판 제목 텍스트입니다.' }}</span>
              </td>
              <td>
                <span class="td-word-writer">{{ '작성자명' }}</span>
              </td>
              <td>
                <span class="td-word-date">{{ '2021.00.00' }}</span>
              </td>
            </tr>
          </table>

          <!-- 쪽지 없을 때 -->
          <empty-contents txt="쪽지가 없습니다." />
        </div>
        <!-- // 쪽지함 - 리스트 -->

        <!-- // 쪽지함 - 페이지네이션 -->
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
      <!-- // 쪽지함 - 페이지네이션 -->
      </div>
    <!-- // 마이페이지 컨텐츠 영역 -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'SNoteList',
};
</script>

<style lang="scss" scoped>
</style>