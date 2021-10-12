<template>
  <div class="page etpr-prifile-page">
    <layout-header />
    <div class="page-container">
        <div class="right-fixed">
          <div class="fixed-con-container">
            <div class="fixed-con-ttl">업데이트 내역 ({{'5'}})</div>
            <div class="fixed-con-contents">
              <div class="empty-conts">
                <img src="@/assets/images/icon/icon-empty-update.svg" alt="업데이트 아이콘" />
                <p class="txt">업데이트 내역이 없습니다.</p>
              </div>
              <ul class="fixed-conts-list-wrap">
                <li class="fixed-con-list">
                  <!-- TODO: 자사 yellow, 팩트체커 green, 오래된 항목은 badge만 -->
                  <div class="badge green">{{'팩트체커'}}</div>
                  <div class="date">{{'2021.00.00 00:00'}}</div>
                  <ul class="info-list">
                    <li class="info">{{'기업정보'}}</li>
                    <li class="info">{{'재무상태'}}</li>
                  </ul>
                  <a href="#" target="_blank" class="view-link">+ 상세보기</a>
                </li>
                <li class="fixed-con-list">
                  <!-- TODO: 자사 yellow, 팩트체커 green, 오래된 항목은 badge만 -->
                  <div class="badge yellow">{{'자사'}}</div>
                  <div class="date">{{'2021.00.00 00:00'}}</div>
                  <ul class="info-list">
                    <li class="info">{{'기업정보'}}</li>
                    <li class="info">{{'재무상태'}}</li>
                  </ul>
                  <a href="#" target="_blank" class="view-link">+ 상세보기</a>
                </li>
                <li class="fixed-con-list">
                  <!-- TODO: 자사 yellow, 팩트체커 green, 오래된 항목은 badge만 -->
                  <div class="badge">{{'팩트체커'}}</div>
                  <div class="date">{{'2021.00.00 00:00'}}</div>
                  <ul class="info-list">
                    <li class="info">{{'기업정보'}}</li>
                    <li class="info">{{'재무상태'}}</li>
                  </ul>
                  <a href="#" target="_blank" class="view-link">+ 상세보기</a>
                </li>
                <li class="fixed-con-list">
                  <!-- TODO: 자사 yellow, 팩트체커 green, 오래된 항목은 badge만 -->
                  <div class="badge">{{'자사'}}</div>
                  <div class="date">{{'2021.00.00 00:00'}}</div>
                  <ul class="info-list">
                    <li class="info">{{'기업정보'}}</li>
                    <li class="info">{{'재무상태'}}</li>
                  </ul>
                  <a href="#" target="_blank" class="view-link">+ 상세보기</a>
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
            <div class="active-ttl">
              기업정보
            </div>
            <div class="active-ttl">
              팩트체크
            </div>
            <div class="active-ttl">
              게시판
            </div>
          </div>
        </div>
      </div>
      <layout-footer />
    </div>
  </div>
</template>

<script>
export default {
  name: 'EtprProfileBoardDetail',
};
</script>

<style lang="scss" scoped>
</style>