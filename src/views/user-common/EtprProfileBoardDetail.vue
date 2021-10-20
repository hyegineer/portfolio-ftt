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
        <div class="mypboard-detail-wrap">
          <!-- 제목 -->
          <div class="mypboard-detail-hd">
            <article class="mypboard-subject-grp">
              <h3 class="mypboard-subject">
                게시판 제목 
              </h3>

              <div class="mypboard-etc-grp">
                <span class="fc-gray-light fz-13">글번호 000</span>
                <span class="fc-gray-light fz-13">2021.00.00</span>
                <span class="fc-gray fz-13">작성자명</span>
              </div>
            </article>
          </div>
          <!-- // 제목 -->

          <!-- 내용 -->
          <div class="mypboard-detail-cont">
            <div class="mypboard-cont">
              <p class="p-preline">
                문의내용 텍스트입니다.
              </p>
            </div>
            
            <div class="mypboard-btns">
              <!-- 삭제 버튼 -->
              <button
                type="button"
                class="btn-txt"
                @click="$router.push('note-create')"
              >
                <i class="icon icon-reply" />
                <span class="txt">답장하기</span>
              </button>
              <!-- // 삭제 버튼 -->

              <!-- 삭제 버튼 -->
              <button
                type="button"
                class="btn-txt btn-warning-txt"
              >
                <i class="icon icon-trash" />
                <span class="txt">삭제하기</span>
              </button>
            <!-- // 삭제 버튼 -->
            </div>
          </div>
          <!-- // 내용 -->
        </div>

        <!-- 이전 / 목록 / 다음 -->
        <div class="board-detail-nav">
          <div class="bnav-ctrl bnav-ctrl-prev">
            <btn-square-bd @click="window.alert('이전글로 이동')">
              <i class="icon icon-page-prev" />
            </btn-square-bd>

            <span class="txt">이전글</span>
          </div>

          <btn-bd
            class="btn-sm bnav-ctrl-list"
            @click="$router.push('/etpr-profile-board')"
          >
            목록으로
          </btn-bd>
            
          <div class="bnav-ctrl bnav-ctrl-next">
            <span class="txt">다음글</span>

            <btn-square-bd @click="window.alert('다음글로 이동')">
              <i class="icon icon-page-next" />
            </btn-square-bd>
          </div>
        </div>
        <!-- // 이전 / 목록 / 다음 -->
      </div>
    </div>

    <layout-footer />
  </div>
</template>

<script>
export default {
  name: 'EtprProfileBoardDetail',
};
</script>

<style lang="scss" scoped>
</style>