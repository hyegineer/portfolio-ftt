<template>
  <div class="page etpr-prifile-page etpr-profile-report-page">
    <layout-header />
    <div class="page-container">
      <div class="right-fixed">
        <div class="fixed-con-container">
          <div class="fixed-con-ttl">
            업데이트 내역 ({{ '5' }})
          </div>
          <div class="fixed-con-contents">
            <div class="empty-conts">
              <img
                src="@/assets/images/icon/icon-empty-update.svg"
                alt="업데이트 아이콘"
              >
              <p class="txt">
                업데이트 내역이 없습니다.
              </p>
            </div>
            <ul class="fixed-conts-list-wrap">
              <li class="fixed-con-list">
                <!-- TODO: 자사 yellow, 팩트체커 green, 오래된 항목은 badge만 -->
                <div class="badge green">
                  {{ '팩트체커' }}
                </div>
                <div class="date">
                  {{ '2021.00.00 00:00' }}
                </div>
                <ul class="info-list">
                  <li class="info">
                    {{ '기업정보' }}
                  </li>
                  <li class="info">
                    {{ '재무상태' }}
                  </li>
                </ul>
                <a
                  href="#"
                  target="_blank"
                  class="view-link"
                >+ 상세보기</a>
              </li>
              <li class="fixed-con-list">
                <!-- TODO: 자사 yellow, 팩트체커 green, 오래된 항목은 badge만 -->
                <div class="badge yellow">
                  {{ '자사' }}
                </div>
                <div class="date">
                  {{ '2021.00.00 00:00' }}
                </div>
                <ul class="info-list">
                  <li class="info">
                    {{ '기업정보' }}
                  </li>
                  <li class="info">
                    {{ '재무상태' }}
                  </li>
                </ul>
                <a
                  href="#"
                  target="_blank"
                  class="view-link"
                >+ 상세보기</a>
              </li>
              <li class="fixed-con-list">
                <!-- TODO: 자사 yellow, 팩트체커 green, 오래된 항목은 badge만 -->
                <div class="badge">
                  {{ '팩트체커' }}
                </div>
                <div class="date">
                  {{ '2021.00.00 00:00' }}
                </div>
                <ul class="info-list">
                  <li class="info">
                    {{ '기업정보' }}
                  </li>
                  <li class="info">
                    {{ '재무상태' }}
                  </li>
                </ul>
                <a
                  href="#"
                  target="_blank"
                  class="view-link"
                >+ 상세보기</a>
              </li>
              <li class="fixed-con-list">
                <!-- TODO: 자사 yellow, 팩트체커 green, 오래된 항목은 badge만 -->
                <div class="badge">
                  {{ '자사' }}
                </div>
                <div class="date">
                  {{ '2021.00.00 00:00' }}
                </div>
                <ul class="info-list">
                  <li class="info">
                    {{ '기업정보' }}
                  </li>
                  <li class="info">
                    {{ '재무상태' }}
                  </li>
                </ul>
                <a
                  href="#"
                  target="_blank"
                  class="view-link"
                >+ 상세보기</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
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
    
                  <div class="edit-date">
                    {{ '2021.10.11 12:13' }} 기업정보가 업데이트 되었습니다.
                  </div>
                </div>
  
                <btn-solid-blue
                  class="btn-xlg btn-full"
                  @click="window.alert('관심기업 등록을 하셨습니다.')"
                >
                  + 관심기업 등록
                </btn-solid-blue>
  
                <btn-bd-blue
                  class="btn-xlg btn-full"
                  @click="window.alert('관심기업 등록을 취소하셨습니다.')"
                >
                  <img
                    src="@/assets/images/icon/icon-check-bl.svg"
                    alt="체크"
                    class="check-icon"
                  > 관심기업 등록 완료
                </btn-bd-blue>
              </div>
            </div>
          </div>

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

        <div class="mgt-20 white-panel active-ttl-container">
          <div class="active-ttl-inner">
            <div
              class="active-ttl" 
              @click="$router.push('/etpr-profile-info')"
            >
              기업정보
            </div>
            <div
              class="active-ttl active"
              @click="$router.push('/etpr-profile-report')"
            >
              팩트체크
            </div>
            <div
              class="active-ttl" 
              @click="$router.push('/etpr-profile-board')"
            >
              게시판
            </div>
          </div>
        </div>
      </div>
      <div class="wide-panel etpr-tab-container">
        <div class="information-txt">
          <div class="icon-with-txt ai-center">
            <i class="icon icon-i" />
            <span class="txt">팩트체크는 3개월 동안 본인만 확인 가능 하며, 3개월 이후에는 모든 이용자들에게 공개됩니다.</span>
          </div>
        </div>
        
        <div class="ftck-detail-wrap">
          <!-- 제목 -->
          <div class="mypboard-detail-hd">
            <!-- 팩트체크 진행상태 & 제목 -->
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
            <!-- // 팩트체크 진행상태 & 제목 -->

            <div class="mypboard-etc-grp">
              <span class="fc-gray fz-13">투자자명</span>
              <span class="fc-gray-light fz-13">2021.00.00</span>
            </div>
          </div>
          <!-- // 제목 -->

          <!-- 내용 -->
          <div class="mypboard-detail-cont">
            <div class="mypboard-cont">
              <div class="mypboard-cont-ttl">
                <span class="fc-gray-light fz-13">※ 팩트체크 요청 내용입니다.</span>

                <div class="right-grp">
                  <button
                    type="button"
                    class="btn btn-send-note"
                  >
                    <span class="txt">쪽지 보내기</span>
                    <i class="icon icon-msg" />
                  </button>
                </div>
              </div>
              
              <p class="p-preline">
                좌우 패딩 40px / 상하 패딩 30px <br>
                팩트체크 요청 내용 자리입니다. <br>
                팩트체크 요청 내용 자리입니다. <br>
              </p>
            </div>
          
            <div class="mypboard-cont">
              <div class="mypboard-cont-ttl">
                <span class="fc-gray-light fz-13">※ 팩트체크 요청 내용입니다.</span>

                <div class="right-grp">
                  <span class="fc-gray fz-13">팩트체커명</span>
                  <span class="fc-gray-light fz-13">2021.00.00</span>
                </div>
              </div>
              
              <p class="p-preline">
                좌우 패딩 40px / 상하 패딩 30px <br>
                팩트체크 요청 내용 자리입니다. <br>
                팩트체크 요청 내용 자리입니다. <br>
              </p>
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
            @click="$router.push('/etpr-profile-report')"
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
  name: 'EtprProfileReportDetail',
};
</script>

<style lang="scss" scoped>
</style>