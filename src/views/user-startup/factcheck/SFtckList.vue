<template>
  <!-- [D] 마이페이지 - 팩트체크-받은팩트체크 목록 -->
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
          팩트체크
        </li>
        <li class="txt">
          우리 회사가 받은 팩트체크
        </li>
      </breadcrumb>

      <h2 class="ttl">
        팩트체크
      </h2>
    </div>
    <!-- // 마이페이지 페이지 제목 -->

    <!-- 마이페이지 컨텐츠 영역 -->
    <div class="mypage-cont-wrap">
      <!-- 팩트체크 인트로박스 -->
      <div class="ftck-intro-box">
        <img
          src="@/assets/images/badge/badge-check.svg"
          alt="check!"
          class="check-badge"
        >
        <h3 class="ttl">
          <span class="ttl-lg point-color">{{ '주식회사 팩트컴퍼니' }}</span> 기업은 <br>
          총 <span class="point-color">10건</span>의 팩트체크 요청을 받았습니다.
        </h3>
        
        <div class="inp-grp inp-sch-grp">
          <input
            v-model="keyword"
            type="text"
            class="inp inp-strong"
            placeholder="제목/내용을 검색하세요."
          >
          <button
            v-if="keyword"
            type="button"
            class="inp-del-btn"
            @click="keyword = ''"
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
      </div>
      <!-- // 팩트체크 인트로박스 -->

      <!-- 팩트체크가 있을 때 -->
      <table class="ftck-list-grp board-list-grp">
        <!-- [D] 비공개면 is-secret 클래스 추가 -->
        <tr
          class="board-list is-secret"
          @click="$router.push('ftck-detail')"
        >
          <td class="td-subject">
            <div class="ftck-state-subject">
              <div class="ftck-state">
                <badge-state txt="진행중" />

                <!-- [D] 비공개일 때만 보임 -->
                <div class="badge-secret">
                  <i class="icon icon-secret" />
                  <span class="txt">비공개</span>
                </div>
              </div>

              <div class="ftck-subject">
                <span class="lbel">{{ '항목명' }}</span>
                <p class="subject">
                  {{ '비공개 팩트체크입니다.' }}
                </p>
              </div>
            </div>
          </td>
          <td>
            <span class="td-word-writer">{{ '작성자명' }}</span>
          </td>
          <td>
            <span class="td-word-date">{{ '2021.00.00' }}</span>
          </td>
        </tr>
        
        <!-- [D] 완료 -->
        <tr
          class="board-list" 
          @click="$router.push('ftck-detail')"
        >
          <td class="td-subject">
            <div class="ftck-state-subject">
              <div class="ftck-state">
                <badge-state txt="완료" />

                <!-- [D] 비공개일 때만 보임 -->
                <!-- <div class="badge-secret">
                  <i class="icon icon-secret" />
                  <span class="txt">비공개</span>
                </div> -->
              </div>

              <div class="ftck-subject">
                <span class="lbel">{{ '항목명' }}</span>
                <p class="subject">
                  {{ '팩트체크 요청사항 제목입니다. 두 줄일리 없겠지만 두 줄일 때는 말줄임표시가 나옵니다. 팩트체크 요청사항 제목입니다. 두 줄일리 없겠지만 두 줄일 때는 말줄임표시가 나옵니다.' }}
                </p>
              </div>
            </div>
          </td>
          <td>
            <span class="td-word-writer">{{ '작성자명' }}</span>
          </td>
          <td>
            <span class="td-word-date">{{ '2021.00.00' }}</span>
          </td>
        </tr>
      </table>
      <!-- // 받은 팩트체크가 있을 때 -->

      <!-- 팩트체크가 없을 때 -->
      <div class="ftck-list-grp">
        <empty-contents txt="받은 팩트체크가 없습니다." />
      </div>
      <!-- // 받은 팩트체크가 없을 때 -->

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
    <!-- // 마이페이지 컨텐츠 영역 -->
  </div>
</template>

<script>
export default {
  name: 'SFtckList',
  data() {
    return{
      keyword: null,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>