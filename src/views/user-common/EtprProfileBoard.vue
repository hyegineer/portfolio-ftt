<template>
  <div class="page etpr-prifile-page etpr-profile-board-page">
    <layout-header />

    <div class="page-container">

      <div class="wide-panel">
        <breadcrumb>
          <li class="txt">
            홈
          </li>
          <li class="txt">
            스타트업 찾기
          </li>
          <li class="txt">
            4차 산업기술
          </li>
          <li class="txt">
            가상·증강현실
          </li>
        </breadcrumb>
        <!-- 기업 간략 소개 -->
        <div class="etpr-info-shot">
          <div class="flexable-container">
            <div class="flexable-inner card-thumb">
              <thumbnail lg />
            </div>
            <div class="flexable-inner card-text white-panel">
              <div class="desc-wrap">
                <div class="avatar-with-name">
                  <avatar />
                  <div class="name-grp">
                    <span class="name">
                      주식회사 팩트컴퍼니
                    </span>
    
                    <ul class="name-subtxt-grp">
                      <li class="name-subtxt-list">
                        기업규모
                      </li>
                      <li class="name-subtxt-list">
                        산업분류
                      </li>
                      <li class="name-subtxt-list">
                        산업분야
                      </li>
                    </ul>
                    <div class="icon-with-txt">
                      <i class="icon icon-jump" />
                      <a
                        href="#"
                        class="txt"
                      >www.팩트컴퍼니.com</a>
                    </div>
                  </div>
                  <btn-square-bd @click="window.alert('메세지 버튼 누르기')">
                    <i class="icon icon-msg" />
                    <span class="is-voice-only">메세지</span>
                  </btn-square-bd>
                </div>
  
                <div class="text-wrap">
                  <p class="info-txt">
                    {{ '내용이 없습니다.기업 한줄 소개 텍스트 자리입니다. 기업 한줄 소개 텍스트 자리입니다.' }}
                  </p>
    
                  <div class="bottom-data">
                    <div class="edit-date">
                      {{ '2021.10.11 12:13' }} 기업정보가 업데이트 되었습니다.
                    </div>

                    <btn-solid-blue
                      class="fav-btn btn-xlg btn-full"
                      @click="window.alert('관심기업 등록을 하셨습니다.')"
                    >
                      <span class="txt">+ 관심기업 등록</span>
                    </btn-solid-blue>

                    <btn-bd-blue
                      class="fav-btn btn-xlg btn-full"
                      @click="window.alert('관심기업 등록을 취소하셨습니다.')"
                    >
                      <i class="icon icon-check-blue" /><span class="txt">관심기업 등록 완료</span>
                    </btn-bd-blue>

                    <div class="btn-grp">
                      <btn-bd
                        class="btn-xlg btn-full"
                        @click="window.alert('우리 기업 투자자 정보 버튼을 클릭하셨습니다.')"
                      >
                        우리 기업 투자자 정보
                      </btn-bd>
                      <btn-bd
                        class="btn-xlg btn-full"
                        @click="window.alert('기업정보 업데이트 버튼을 클릭하셨습니다.')"
                      >
                        기업정보 업데이트
                      </btn-bd>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 업데이트 내역 -->
          <layout-right-fixed />
          <!-- // 업데이트 내역 -->

          <div class="mgt-30 white-panel etpr-dt-txt">
            <div class="label">
              상세소개
            </div>
            <p class="label-txt">
              {{ '내용이 없습니다.' }}<br>
              {{ '내용이 없습니다.' }}
            </p>
          </div>
        </div>
        <!-- END 기업 간략 소개 -->

        <div class="mgt-10 white-panel active-ttl-container">
          <div class="active-ttl-inner">
            <div
              class="active-ttl" 
              @click="$router.push('/etpr-profile-info')"
            >
              기업정보
            </div>
            <div
              class="active-ttl" 
              @click="$router.push('/etpr-profile-report')"
            >
              팩트체크
            </div>
            <div
              class="active-ttl active" 
              @click="$router.push('/etpr-profile-board')"
            >
              게시판
            </div>
          </div>
        </div>
      </div>

      <div class="wide-panel etpr-tab-container">
        <div class="board-list-grp-ttl">
          <p class="ttl-txt">
            총 <span class="bold">15</span>개의 게시글이 있습니다.
          </p>

          <div class="txt-right">
            <button
              type="button"
              class="btn-txt"
              @click="$router.push('/etpr-profile-board-create')"
            >
              <i class="icon icon-pen" />
              <span class="txt">작성하기</span>
            </button>
          </div>
        </div>

        <!-- 게시물이 있을 때 -->
        <table class="board-list-grp">
          <tr
            v-for="(item, index) in 2"
            :key="index"
            class="board-list"
            @click="$router.push('/etpr-profile-board-detail')"
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
        <!-- // 게시물이 있을 때 -->

        <!-- 게시물이 없을 때 -->
        <div class="board-list-grp">
          <empty-contents txt="등록된 게시물이 없습니다." />
        </div>
        <!-- // 게시물이 없을 때 -->

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
    
    <layout-footer />
  </div>
</template>

<script>
export default {
  name: 'EtprProfileBoard',
};
</script>

<style lang="scss" scoped>
</style>