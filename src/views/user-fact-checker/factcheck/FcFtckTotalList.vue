<template>
  <!-- [D] 마이페이지 - 팩트체크-전체 팩트체크 -->
  <div
    mypage="ftck-list-page"
    class="mypage-container"
  >
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
          전체 팩트체크
        </li>
      </breadcrumb>

      <h2 class="ttl">
        팩트체크
      </h2>
    </div>
    <!-- // 마이페이지 페이지 제목 -->

    <!-- 마이페이지 컨텐츠 영역 -->
    <div class="mypage-cont-wrap">
      <!-- 전체 팩트체크 - 검색 -->
      <div class="inp-grp inp-sch-grp page-inp-grp">
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
      <!-- // 전체 팩트체크 - 검색 -->
        
      <!-- 팩트체크가 있을 때 -->
      <div class="board-list-grp-ttl">
        <p class="ttl-txt">
          총 <span class="bold">15</span>개
        </p>
        
        <!-- 검색어만 입력한 검색결과일 때만 보임 -->
        <div class="ttl-txt">
          <span class="highlight">
            <u>'검색어'</u>
          </span>
          에 대한 검색결과 <span class="bold">15</span>개
        </div>
        <!-- // 검색어만 입력한 검색결과일 때만 보임 -->

        <btn-bd-light
          class="btn-rounded btn-xsm btn-edit-ctrl"
        >
          <i class="icon icon-trash" />
          <span class="txt">배정완료된 내역 삭제</span>
        </btn-bd-light>

        <div class="txt-right">
          <custom-slct
            class="page-custom-slct custom-slct02"
            :selected="searchOptions"
          >
            <template #select>
              {{ searchOptions || '전체' }}
            </template>

            <template #options>
              <custom-slct-opt 
                @click="searchOptions = '대기중'"
              >
                대기중
              </custom-slct-opt>
            
              <custom-slct-opt 
                @click="searchOptions = '진행중'"
              >
                진행중
              </custom-slct-opt>
            
              <custom-slct-opt 
                @click="searchOptions = '내용 검토중'"
              >
                내용 검토중
              </custom-slct-opt>
            
              <custom-slct-opt 
                @click="searchOptions = '완료'"
              >
                완료
              </custom-slct-opt>
            
              <custom-slct-opt 
                @click="searchOptions = '이의신청'"
              >
                이의신청
              </custom-slct-opt>
            </template>
          </custom-slct>
        </div>
      </div>
        
      <!-- 전체 팩트체크가 있을 때 -->
      <table class="ftck-list-grp board-list-grp">
        <!-- [D] 비공개면 is-secret 클래스 추가 -->
        <tr
          class="board-list is-secret"
          @click="$router.push('ftck-total-detail')"
        >
          <td class="td-subject">
            <div class="ftck-state-subject">
              <div class="ftck-state">
                <badge-state txt="대기중" />

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
            <span class="amount-item">
              <div class="badge-p badge-p-sm" />
              <span class="fz-13">150</span>
            </span>
          </td>
          <td>
            <span class="td-word-writer">
              {{ '투자기업명' }}
              <i class="icon icon-gt" />
              {{ '요청 스타트업명' }}
            </span>
          </td>
          <td>
            <span class="td-word-date">{{ '2021.00.00' }}</span>
          </td>
        </tr>
        
        <tr
          class="board-list" 
          @click="$router.push('ftck-total-detail')"
        >
          <td class="td-subject">
            <div class="ftck-state-subject">
              <div class="ftck-state">
                <badge-state txt="배정완료" />

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
            <span class="amount-item">
              <div class="badge-p badge-p-sm" />
              <span class="fz-13">150</span>
            </span>
          </td>
          <td>
            <span class="td-word-writer">
              {{ '투자기업명' }}
              <i class="icon icon-gt" />
              {{ '요청 스타트업명' }}
            </span>
          </td>
          <td>
            <span class="td-word-date">{{ '2021.00.00' }}</span>
          </td>
        </tr>
      </table>
      <!-- // 전체 팩트체크가 있을 때 -->

      <!-- 팩트체크가 없을 때 -->
      <div class="ftck-list-grp">
        <empty-contents txt="전체 팩트체크가 없습니다." />
      </div>
      <!-- // 팩트체크가 없을 때 -->

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
  name: 'FcFtckTotalList',
  data() {
    return{
      searchOptions: '전체', // custom-select 동작을 구현하기위한 더미데이터
    };
  },
};
</script>

<style lang="scss" scoped>
</style>