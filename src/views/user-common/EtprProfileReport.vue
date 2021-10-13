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
            @click="$router.push('/etpr-profile-report-detail')"
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
            @click="$router.push('/etpr-profile-report-detail')"
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
    </div>
    <layout-footer />
  </div>
</template>

<script>
export default {
  name: 'EtprProfileReport',
};
</script>

<style lang="scss" scoped>
</style>