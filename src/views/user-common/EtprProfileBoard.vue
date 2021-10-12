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
            <div class="active-ttl active">
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
      <!-- 정보 영역 -->
      <div class="wide-panel">
        <!-- 기업정보 -->
        <div class="etpr-main-conts">
          <h2 class="section-ttl">기업정보</h2>
          <div class="flexable-container">
            <div class="etpr-panel-wrap flexable-inner">
              <div class="panel-ttl">
                <span>기업 기본정보</span>
                
        <div class="hover-desc">
          <span
            class="hover-overlay mb-show"
            :class="{'is-show': mbMdOptions2.visible}"
            @click="mbMdClose('question')"
          />

          <div
            class="badge-qus"
            @click="mbMdOpen('question')"
          >
            <span class="is-voice-only">도움말</span>
          </div>

          <div
            class="hover-desc-box"
            :class="{'is-show' : mbMdOptions2.visible}"
          >
            <span class="ttl">토글 제목</span>

            <p class="desc">
              해당 토글 내용
            </p>
          </div>
        </div>
                    <!-- TODO: 업데이트 데이터. 팩트체커 green, 자사 yellow, 오래된 항목은 badge만 -->
                <p class="badge green">{{'팩트체커 업데이트  2020.00.00'}}</p>
              </div>
              <div class="white-panel">
                <div class="common-info-container">
                  <ul class="common-info-list-wrap">
                    <!-- TODO: 정보가 없는 곳은 전부 - 로 표시 -->
                    <li class="common-info-list">
                      <h4 class="ttl">대표자</h4>
                      <div class="dec">{{'홍길동'}}</div>
                    </li>
                    <li class="common-info-list">
                      <h4 class="ttl">사업자번호</h4>
                      <div class="dec">{{'000-00-00***'}}</div>
                    </li>
                    <li class="common-info-list">
                      <h4 class="ttl">본사주소</h4>
                      <div class="dec">{{'서울특별시 강남구 테헤란로 312 13층 주소길어지면 최대 2줄 (우편번호)'}}</div>
                    </li>
                    <li class="common-info-list">
                      <h4 class="ttl">전화번호</h4>
                      <div class="dec">{{'02-1234-5678'}}</div>
                    </li>
                    <li class="common-info-list">
                      <h4 class="ttl">기업규모</h4>
                      <div class="dec">{{'소기업'}}</div>
                    </li>
                    <li class="common-info-list">
                      <h4 class="ttl">산업분류</h4>
                      <div class="dec">{{'ICT 서비스'}}</div>
                    </li>
                    <li class="common-info-list">
                      <h4 class="ttl">산업분야</h4>
                      <div class="dec">{{'-'}}</div>
                    </li>
                    <li class="common-info-list">
                      <h4 class="ttl">설립일</h4>
                      <div class="dec">{{'2021년 03월 10일'}}</div>
                    </li>
                    <li class="common-info-list tag-list">
                      <h4 class="ttl">태그</h4>
                      <div class="dec">
                        <div class="tag-badge">태그최대여덟글자</div>
                        <div class="tag-badge">태그최대</div>
                        <div class="tag-badge">여덟글자</div>
                        <div class="tag-badge">두줄까지표시가능</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="etpr-panel-wrap flexable-inner">
              <div class="panel-ttl">
                <span>기업가치</span>
                컴포넌트에서 가져오기
                    <!-- TODO: 업데이트 데이터. 팩트체커 green, 자사 yellow, 오래된 항목은 badge만 -->
                <p class="badge yellow">{{'자사 업데이트  2020.00.00'}}</p>
              </div>
              <div class="white-panel">
                <div class="common-info-container">
                  <p class="common-info-graph">그래프 들어옵니다.</p>
                </div>
              </div>
              <div class="bot-txt">투자자가 작성한 리뷰 기반의 평균 지수입니다.</div>
            </div>
          </div>
        </div>
        <!-- END 기업정보 -->
        <!-- 상세정보 -->
        <div class="etpr-main-conts">
          <h2 class="section-ttl">상세정보</h2>
          <div class="flexable-container">
            <div class="etpr-panel-wrap flexable-inner">
              <div class="panel-ttl">
                <span>규모</span>
                컴포넌트에서 가져오기
                    <!-- TODO: 업데이트 데이터. 팩트체커 green, 자사 yellow, 오래된 항목은 badge만 -->
                <p class="badge">{{'팩트체커 업데이트  2020.00.00'}}</p>
              </div>
              <div class="white-panel">
                <div class="common-info-container">
                  <ul class="common-info-list-wrap">
                    <!-- TODO: 정보가 없는 곳은 전부 - 로 표시 -->
                    <li class="common-info-list scale-list">
                      <h4 class="ttl">발행주식 수</h4>
                      <div class="dec">{{'-'}} 주</div>
                    </li>
                    <li class="common-info-list scale-list">
                      <h4 class="ttl">액면가</h4>
                      <div class="dec">{{'-'}} 원</div>
                    </li>
                    <li class="common-info-list scale-list">
                      <h4 class="ttl">자본금</h4>
                      <div class="dec">{{'-'}} 원</div>
                    </li>
                    <li class="common-info-list scale-list">
                      <h4 class="ttl">주주수</h4>
                      <div class="dec">{{'-'}} 명</div>
                    </li>
                    <li class="common-info-list scale-list">
                      <h4 class="ttl">대표보통주식주 비율</h4>
                      <div class="dec">{{'-'}} %</div>
                    </li>
                    <li class="common-info-list scale-list">
                      <h4 class="ttl">대표주주구분</h4>
                      <div class="dec">{{'-'}}</div>
                    </li>
                    <li class="common-info-list scale-list">
                      <h4 class="ttl">대표주주명</h4>
                      <div class="dec">{{'-'}}</div>
                    </li>
                    <li class="common-info-list scale-list">
                      <h4 class="ttl">대표지분율</h4>
                      <div class="dec">{{'-'}} %</div>
                    </li>
                    <li class="common-info-list scale-list">
                      <h4 class="ttl">종업원 수</h4>
                      <div class="dec">
                        <span class="comment">(기준일 : 2000.00.00)</span>
                        {{'-'}} 명
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="etpr-panel-wrap flexable-inner">
              <div class="panel-ttl">
                <span>주주정보</span>
                컴포넌트에서 가져오기
                    <!-- TODO: 업데이트 데이터. 팩트체커 green, 자사 yellow, 오래된 항목은 badge만 -->
                <p class="badge yellow">{{'팩트체커 업데이트  2020.00.00'}}</p>
              </div>
              <div class="white-panel">
                <div class="common-info-container">
                  <p class="common-info-graph">주주정보 들어옵니다.</p>
                </div>
              </div>
              <div class="bot-txt">결산 기준일 : 2021.00.00</div>
            </div>
          </div>
          <div class="flexable-container">
            <div class="etpr-panel-wrap flexable-inner">
              <div class="panel-ttl">
                <span>재무상태</span>
                컴포넌트에서 가져오기
                    <!-- TODO: 업데이트 데이터. 팩트체커 green, 자사 yellow, 오래된 항목은 badge만 -->
                <p class="badge yellow">{{'팩트체커 업데이트  2020.00.00'}}</p>
              </div>
              <div class="white-panel">
                <div class="common-info-container">
                  <p class="common-info-graph">재무상태 들어옵니다.</p>
                </div>
              </div>
              <div class="bot-txt">결산 기준일 : 2021.00.00</div>
            </div>
            <div class="etpr-panel-wrap flexable-inner">
              <div class="panel-ttl">
                <span>손익계산서</span>
                컴포넌트에서 가져오기
                    <!-- TODO: 업데이트 데이터. 팩트체커 green, 자사 yellow, 오래된 항목은 badge만 -->
                <p class="badge yellow">{{'팩트체커 업데이트  2020.00.00'}}</p>
              </div>
              <div class="white-panel">
                <div class="common-info-container">
                  <p class="common-info-graph">손익계산서 들어옵니다.</p>
                </div>
              </div>
              <div class="bot-txt">결산 기준일 : 2021.00.00</div>
            </div>
          </div>
          <div class="flexable-container split3">
            <div class="etpr-panel-wrap flexable-inner">
              <div class="panel-ttl">
                <span>매출 추이</span>
                컴포넌트에서 가져오기
                    <!-- TODO: 업데이트 데이터. 팩트체커 green, 자사 yellow, 오래된 항목은 badge만 -->
                <p class="badge yellow">{{'팩트체커 업데이트  2020.00.00'}}</p>
              </div>
              <div class="white-panel">
                <div class="common-info-container">
                  <p class="common-info-graph">매출 추이 들어옵니다.</p>
                </div>
              </div>
              <div class="bot-txt">결산 기준일 : 2021.00.00</div>
            </div>
            <div class="etpr-panel-wrap flexable-inner">
              <div class="panel-ttl">
                <span>영업이익 추이</span>
                컴포넌트에서 가져오기
                    <!-- TODO: 업데이트 데이터. 팩트체커 green, 자사 yellow, 오래된 항목은 badge만 -->
                <p class="badge yellow">{{'팩트체커 업데이트  2020.00.00'}}</p>
              </div>
              <div class="white-panel">
                <div class="common-info-container">
                  <p class="common-info-graph">영업이익 추이 들어옵니다.</p>
                </div>
              </div>
              <div class="bot-txt">결산 기준일 : 2021.00.00</div>
            </div>
            <div class="etpr-panel-wrap flexable-inner">
              <div class="panel-ttl">
                <span>당기순이익 추이</span>
                컴포넌트에서 가져오기
                    <!-- TODO: 업데이트 데이터. 팩트체커 green, 자사 yellow, 오래된 항목은 badge만 -->
                <p class="badge yellow">{{'팩트체커 업데이트  2020.00.00'}}</p>
              </div>
              <div class="white-panel">
                <div class="common-info-container">
                  <p class="common-info-graph">당기순이익 추이 들어옵니다.</p>
                </div>
              </div>
              <div class="bot-txt">결산 기준일 : 2021.00.00</div>
            </div>
          </div>
        </div>
        <!-- END 상세정보 -->
      </div>
      <!-- END 정보 영역 -->
      <layout-footer />
    </div>
  </div>
</template>

<script>
export default {
  name: 'EtprProfileBoard',
  date() {
    return {
      mbMdOptions1: {
        visible: false,
      },
      mbMdOptions2: {
        visible: false,
      },
    }
  },
  methods: {
    mbMdOpen(opt) {
      if(window.innerWidth <= 600) {
        switch (opt) {
        case 'star':
          this.mbMdOptions1.visible = true;
          break;
        case 'question':
          this.mbMdOptions2.visible = true;
          break;
        }
      }
    },
    mbMdClose(opt) {
      if(window.innerWidth <= 600) {
        switch (opt) {
        case 'star':
          this.mbMdOptions1.visible = false;
          break;
        case 'question':
          this.mbMdOptions2.visible = false;
          break;
        }
      }
    },
  }
};
</script>

<style lang="scss" scoped>
</style>