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
                        <span class="comment">(기준일 : {{'2000.00.00'}})</span>
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
                <p class="badge yellow">{{'팩트체커 업데이트  2020.00.00'}}</p>
              </div>
              <div class="white-panel">
                <div class="common-info-container">
                  <p class="common-info-graph">주주정보 들어옵니다.</p>
                </div>
              </div>
              <div class="bot-txt">결산 기준일 : {{'2021.00.00'}}</div>
            </div>
          </div>
          <div class="flexable-container">
            <div class="etpr-panel-wrap flexable-inner">
              <div class="panel-ttl">
                <span>재무상태</span>
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
                <p class="badge yellow">{{'팩트체커 업데이트  2020.00.00'}}</p>
              </div>
              <div class="white-panel">
                <div class="common-info-container">
                  <p class="common-info-graph">재무상태 들어옵니다.</p>
                </div>
              </div>
              <div class="bot-txt">단위 : 원</div>
            </div>
            <div class="etpr-panel-wrap flexable-inner">
              <div class="panel-ttl">
                <span>손익계산서</span>
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
                <p class="badge yellow">{{'팩트체커 업데이트  2020.00.00'}}</p>
              </div>
              <div class="white-panel">
                <div class="common-info-container">
                  <p class="common-info-graph">손익계산서 들어옵니다.</p>
                </div>
              </div>
              <div class="bot-txt">단위 : 원</div>
            </div>
          </div>
          <div class="flexable-container split3">
            <div class="etpr-panel-wrap flexable-inner">
              <div class="panel-ttl">
                <span>매출 추이</span>
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
                <p class="badge yellow">{{'팩트체커 업데이트  2020.00.00'}}</p>
              </div>
              <div class="white-panel">
                <div class="common-info-container">
                  <p class="common-info-graph">매출 추이 들어옵니다.</p>
                </div>
              </div>
              <div class="bot-txt">단위 : 원</div>
            </div>
            <div class="etpr-panel-wrap flexable-inner">
              <div class="panel-ttl">
                <span>영업이익 추이</span>
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
                <p class="badge yellow">{{'팩트체커 업데이트  2020.00.00'}}</p>
              </div>
              <div class="white-panel">
                <div class="common-info-container">
                  <p class="common-info-graph">영업이익 추이 들어옵니다.</p>
                </div>
              </div>
              <div class="bot-txt">단위 : 원</div>
            </div>
            <div class="etpr-panel-wrap flexable-inner">
              <div class="panel-ttl">
                <span>당기순이익 추이</span>
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
                <p class="badge yellow">{{'팩트체커 업데이트  2020.00.00'}}</p>
              </div>
              <div class="white-panel">
                <div class="common-info-container">
                  <p class="common-info-graph">당기순이익 추이 들어옵니다.</p>
                </div>
              </div>
              <div class="bot-txt">단위 : 원</div>
            </div>
          </div>
        </div>
        <!-- END 상세정보 -->
        <!-- 투자유치 -->
        <div class="etpr-main-conts">
          <h2 class="section-ttl">
            투자유치 
            <!-- TODO: 업데이트 데이터. 팩트체커 green, 자사 yellow, 오래된 항목은 badge만 -->
            <p class="badge green">{{'팩트체커 업데이트  2020.00.00'}}</p>
          </h2>
          <div class="top-cont-wrap">
            <div class="invest-list">
              <div class="ttl">최종투자단계</div>
              <div class="dec">{{'serues E (추정)'}}</div>
            </div>
            <div class="invest-list">
              <div class="ttl">누적투자유치금액</div>
              <div class="dec">{{'88.8억'}}</div>
            </div>
            <div class="invest-list">
              <div class="ttl">투자유치횟수</div>
              <div class="dec">{{'8'}}</div>
            </div>
          </div>
          <div class="white-panel">
            투자유치 들어옵니다.
          </div>
        </div>
        <!-- END 투자유치 -->
        <!-- 보유특허 -->
        <div class="etpr-main-conts">
          <h2 class="section-ttl">
            보유특허 
            <!-- TODO: 업데이트 데이터. 팩트체커 green, 자사 yellow, 오래된 항목은 badge만 -->
            <p class="badge green">{{'팩트체커 업데이트  2020.00.00'}}</p>
          </h2>
          <div class="top-txt">총 <span>{{'5'}}</span>개</div>
          <empty-contents txt="내용이 없습니다." />
          <div class="white-panel">
            보유특허 들어옵니다.
          </div>
        </div>
        <!-- END 보유특허 -->
        <!-- 구성원 -->
        <div class="etpr-main-conts">
          <h2 class="section-ttl">
            구성원 
            <!-- TODO: 업데이트 데이터. 팩트체커 green, 자사 yellow, 오래된 항목은 badge만 -->
            <p class="badge green">{{'팩트체커 업데이트  2020.00.00'}}</p>
          </h2>
          <!-- 구성원 명수 표시 -->
          <div class="member-list-grp-ttl">
            <p class="txt">
              총 <span class="bold">0</span>명
            </p>
          </div>
          <!-- // 구성원 명수 표시 -->

          <!-- 구성원이 없을 때 -->
          <empty-contents txt="내용이 없습니다." />
          <!-- // 구성원이 없을 때 -->
          <!-- 구성원이 있을 때 -->
          <div class="member-list-grp">
            <div
              v-for="(item, index) in 2"
              :key="index"
              class="member-list"
            >
              <avatar />
              <article class="member-info">
                <div class="account-info">
                  <h5 class="name">
                    {{ '김철수' }}
                  </h5>
                  <span class="mail">{{ 'email@email.com' }}</span>
                  <dl class="dlist">
                    <dt class="lbel">
                      키포인트
                    </dt>
                    <dd class="txt">
                      {{ '키포인트 텍스트' }}
                    </dd>
                  </dl>
                </div>

                <ul class="ul-bullet">
                  <li class="list">
                    {{ '이력사항 텍스트' }}
                  </li>
                  <li class="list">
                    {{ '이력사항 텍스트' }}
                  </li>
                  <li class="list">
                    {{ '이력사항 텍스트' }}
                  </li>
                </ul>
              </article>

              <div class="member-btn-grp btn-grp">
                <btn-bd-light
                  class="btn-rounded btn-xsm btn-edit-ctrl"
                >
                  <i class="icon icon-pen" />
                  <span class="txt">수정</span>
                </btn-bd-light>
                

                <btn-bd-light
                  class="btn-rounded btn-xsm btn-edit-ctrl"
                >
                  <i class="icon icon-trash" />
                  <span class="txt">삭제</span>
                </btn-bd-light>
              </div>
            </div>
          </div>
          <!-- // 구성원이 있을 때 -->
        </div>
        <!-- END 구성원 -->
        <!-- 관련 소식 -->
        <div class="etpr-main-conts news-conts">
          <h2 class="section-ttl">
            관련 소식 
          </h2>
          <empty-contents txt="내용이 없습니다." />
          <div class="flexable-container split6">
            <!-- card -->
            <div class="flexable-inner">
              <a href="#" target="_blank" class="card-news">  
                <div class="card-thumb card-thumb-lg">
                  <thumbnail />
                </div>
                <div class="card-text">
                  <span class="name">news</span>
                  <div class="ttl">{{'뉴스 이미지 없을 시, 디폴트 이미지 처리합니다.'}}</div>
                  <div class="dec">
                    {{'뉴스 제목 텍스트 최대 3줄 입니다. 그 이후로는 말줄임표로 생략합니다. 뉴스 제목 텍스트 최대 3줄 입니다. 그 이후로는 말줄임표로 생략합니다. 뉴스 제목...'}}
                  </div>
                  <div class="date">{{'2021.00.00  00:00'}}</div>
                </div>
              </a>
            </div>
            <!-- // card -->
            <div class="flexable-inner">
              <a href="#" target="_blank" class="card-news">  
                <div class="card-thumb card-thumb-lg">
                  <thumbnail />
                </div>
                <div class="card-text">
                  <span class="name">news</span>
                  <div class="ttl">{{'뉴스 이미지 없을 시, 디폴트 이미지 처리합니다.'}}</div>
                  <div class="dec">
                    {{'뉴스 제목 텍스트 최대 3줄 입니다. 그 이후로는 말줄임표로 생략합니다. 뉴스 제목 텍스트 최대 3줄 입니다. 그 이후로는 말줄임표로 생략합니다. 뉴스 제목...'}}
                  </div>
                  <div class="date">{{'2021.00.00  00:00'}}</div>
                </div>
              </a>
            </div>

            <div class="flexable-inner">
              <a href="#" target="_blank" class="card-news">  
                <div class="card-thumb card-thumb-lg">
                  <thumbnail />
                </div>
                <div class="card-text">
                  <span class="name">news</span>
                  <div class="ttl">{{'뉴스 이미지 없을 시, 디폴트 이미지 처리합니다.'}}</div>
                  <div class="dec">
                    {{'뉴스 제목 텍스트 최대 3줄 입니다. 그 이후로는 말줄임표로 생략합니다. 뉴스 제목 텍스트 최대 3줄 입니다. 그 이후로는 말줄임표로 생략합니다. 뉴스 제목...'}}
                  </div>
                  <div class="date">{{'2021.00.00  00:00'}}</div>
                </div>
              </a>
            </div>

            <div class="flexable-inner">
              <a href="#" target="_blank" class="card-news">  
                <div class="card-thumb card-thumb-lg">
                  <thumbnail />
                </div>
                <div class="card-text">
                  <span class="name">news</span>
                  <div class="ttl">{{'뉴스 이미지 없을 시, 디폴트 이미지 처리합니다.'}}</div>
                  <div class="dec">
                    {{'뉴스 제목 텍스트 최대 3줄 입니다. 그 이후로는 말줄임표로 생략합니다. 뉴스 제목 텍스트 최대 3줄 입니다. 그 이후로는 말줄임표로 생략합니다. 뉴스 제목...'}}
                  </div>
                  <div class="date">{{'2021.00.00  00:00'}}</div>
                </div>
              </a>
            </div>

            <div class="flexable-inner">
              <a href="#" target="_blank" class="card-news">  
                <div class="card-thumb card-thumb-lg">
                  <thumbnail />
                </div>
                <div class="card-text">
                  <span class="name">news</span>
                  <div class="ttl">{{'뉴스 이미지 없을 시, 디폴트 이미지 처리합니다.'}}</div>
                  <div class="dec">
                    {{'뉴스 제목 텍스트 최대 3줄 입니다. 그 이후로는 말줄임표로 생략합니다. 뉴스 제목 텍스트 최대 3줄 입니다. 그 이후로는 말줄임표로 생략합니다. 뉴스 제목...'}}
                  </div>
                  <div class="date">{{'2021.00.00  00:00'}}</div>
                </div>
              </a>
            </div>

            <div class="flexable-inner">
              <a href="#" target="_blank" class="card-news">  
                <div class="card-thumb card-thumb-lg">
                  <thumbnail />
                </div>
                <div class="card-text">
                  <span class="name">news</span>
                  <div class="ttl">{{'뉴스 이미지 없을 시, 디폴트 이미지 처리합니다.'}}</div>
                  <div class="dec">
                    {{'뉴스 제목 텍스트 최대 3줄 입니다. 그 이후로는 말줄임표로 생략합니다. 뉴스 제목 텍스트 최대 3줄 입니다. 그 이후로는 말줄임표로 생략합니다. 뉴스 제목...'}}
                  </div>
                  <div class="date">{{'2021.00.00  00:00'}}</div>
                </div>
              </a>
            </div>

          </div>
        </div>
        <!-- END 관련 소식 -->
        <!-- 투자자 리뷰 -->
        <div class="etpr-main-conts">
          <h2 class="section-ttl">
            투자자 리뷰
            <div class="ttl-dec">
              <span class="txt">5가지 항목에 적용된 종합 점수입니다.</span>
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
            </div>
          </h2>
          <div class="member-list-grp-ttl">
            <p class="txt">
              총 <span class="bold">0</span>개
            </p>
          </div>
          <empty-contents txt="내용이 없습니다." />
          <div class="review-container">
            <!-- card -->
            <div class="white-panel review-card">
              <div class="review-inner">
                <div class="left-conts">
                  <div class="name">{{'익명'}}</div>
                  <div class="type">{{'개인 투자자'}}</div>
                  <div class="hover-desc">
                    <span
                      class="hover-overlay mb-show"
                      :class="{'is-show': mbMdOptions1.visible}"
                      @click="mbMdClose('star')"
                    />
  
                    <div
                      class="star-txt"
                      @click="mbMdOpen('star')"
                    >
                      <i class="icon icon-star" />
                      <span class="txt">4.3</span>
                    </div>
  
                    <div
                      class="hover-desc-box"
                      :class="{'is-show' : mbMdOptions1.visible}"
                    >
                      <span class="ttl">종합 점수</span>
  
                      <dl class="star-desc-list">
                        <dt class="desc-ttl">
                          기술성
                        </dt>
                        <dd class="desc-dt">
                          <i class="icon icon-star" />
                          <span class="txt">5</span>
                        </dd>
                      </dl>
  
                      <dl class="star-desc-list">
                        <dt class="desc-ttl">
                          시장성
                        </dt>
                        <dd class="desc-dt">
                          <i class="icon icon-star" />
                          <span class="txt">5</span>
                        </dd>
                      </dl>
  
                      <dl class="star-desc-list">
                        <dt class="desc-ttl">
                          팀역량
                        </dt>
                        <dd class="desc-dt">
                          <i class="icon icon-star" />
                          <span class="txt">5</span>
                        </dd>
                      </dl>
  
                      <dl class="star-desc-list">
                        <dt class="desc-ttl">
                          실행역량
                        </dt>
                        <dd class="desc-dt">
                          <i class="icon icon-star" />
                          <span class="txt">5</span>
                        </dd>
                      </dl>
  
                      <dl class="star-desc-list">
                        <dt class="desc-ttl">
                          아이템 우수성
                        </dt>
                        <dd class="desc-dt">
                          <i class="icon icon-star" />
                          <span class="txt">5</span>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div class="middle-conts">
                  {{'투자자 리뷰 텍스트 자리입니다. 투자자 리뷰 텍스트 자리입니다.투자자 리뷰 텍스트 자리입니다. 투자자 리뷰 텍스트 자리입니다. 투자자 리뷰 텍스트 자리입니다.'}}
                </div>
                <div class="right-conts">{{'2021.00.00  00:00'}}</div>
              </div>
            </div>
            <!-- // card -->
            <div class="white-panel review-card">
              <div class="review-inner">
                <div class="left-conts">
                  <div class="name">{{'익명'}}</div>
                  <div class="type">{{'개인 투자자'}}</div>
                  <div class="hover-desc">
                    <span
                      class="hover-overlay mb-show"
                      :class="{'is-show': mbMdOptions1.visible}"
                      @click="mbMdClose('star')"
                    />
  
                    <div
                      class="star-txt"
                      @click="mbMdOpen('star')"
                    >
                      <i class="icon icon-star" />
                      <span class="txt">4.3</span>
                    </div>
  
                    <div
                      class="hover-desc-box"
                      :class="{'is-show' : mbMdOptions1.visible}"
                    >
                      <span class="ttl">종합 점수</span>
  
                      <dl class="star-desc-list">
                        <dt class="desc-ttl">
                          기술성
                        </dt>
                        <dd class="desc-dt">
                          <i class="icon icon-star" />
                          <span class="txt">5</span>
                        </dd>
                      </dl>
  
                      <dl class="star-desc-list">
                        <dt class="desc-ttl">
                          시장성
                        </dt>
                        <dd class="desc-dt">
                          <i class="icon icon-star" />
                          <span class="txt">5</span>
                        </dd>
                      </dl>
  
                      <dl class="star-desc-list">
                        <dt class="desc-ttl">
                          팀역량
                        </dt>
                        <dd class="desc-dt">
                          <i class="icon icon-star" />
                          <span class="txt">5</span>
                        </dd>
                      </dl>
  
                      <dl class="star-desc-list">
                        <dt class="desc-ttl">
                          실행역량
                        </dt>
                        <dd class="desc-dt">
                          <i class="icon icon-star" />
                          <span class="txt">5</span>
                        </dd>
                      </dl>
  
                      <dl class="star-desc-list">
                        <dt class="desc-ttl">
                          아이템 우수성
                        </dt>
                        <dd class="desc-dt">
                          <i class="icon icon-star" />
                          <span class="txt">5</span>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div class="middle-conts">
                  {{'투자자 리뷰 텍스트 자리입니다. 투자자 리뷰 텍스트 자리입니다.<br>투자자 리뷰 텍스트 자리입니다.<br>투자자 리뷰 텍스트 자리입니다.<br>투자자 리뷰 텍스트 자리입니다.<br>투자자 리뷰 텍스트 자리입니다.<br>투자자 리뷰 텍스트 자리입니다.<br>투자자 리뷰 텍스트 자리입니다.<br>투자자 리뷰 텍스트 자리입니다.'}}
                </div>
                <div class="right-conts">{{'2021.00.00  00:00'}}</div>
              </div>
            </div>
  
            <div class="white-panel review-card">
              <div class="review-inner">
                <div class="left-conts">
                  <div class="name">{{'익명'}}</div>
                  <div class="type">{{'개인 투자자'}}</div>
                  <div class="hover-desc">
                    <span
                      class="hover-overlay mb-show"
                      :class="{'is-show': mbMdOptions1.visible}"
                      @click="mbMdClose('star')"
                    />
  
                    <div
                      class="star-txt"
                      @click="mbMdOpen('star')"
                    >
                      <i class="icon icon-star" />
                      <span class="txt">4.3</span>
                    </div>
  
                    <div
                      class="hover-desc-box"
                      :class="{'is-show' : mbMdOptions1.visible}"
                    >
                      <span class="ttl">종합 점수</span>
  
                      <dl class="star-desc-list">
                        <dt class="desc-ttl">
                          기술성
                        </dt>
                        <dd class="desc-dt">
                          <i class="icon icon-star" />
                          <span class="txt">5</span>
                        </dd>
                      </dl>
  
                      <dl class="star-desc-list">
                        <dt class="desc-ttl">
                          시장성
                        </dt>
                        <dd class="desc-dt">
                          <i class="icon icon-star" />
                          <span class="txt">5</span>
                        </dd>
                      </dl>
  
                      <dl class="star-desc-list">
                        <dt class="desc-ttl">
                          팀역량
                        </dt>
                        <dd class="desc-dt">
                          <i class="icon icon-star" />
                          <span class="txt">5</span>
                        </dd>
                      </dl>
  
                      <dl class="star-desc-list">
                        <dt class="desc-ttl">
                          실행역량
                        </dt>
                        <dd class="desc-dt">
                          <i class="icon icon-star" />
                          <span class="txt">5</span>
                        </dd>
                      </dl>
  
                      <dl class="star-desc-list">
                        <dt class="desc-ttl">
                          아이템 우수성
                        </dt>
                        <dd class="desc-dt">
                          <i class="icon icon-star" />
                          <span class="txt">5</span>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div class="middle-conts">
                  {{'투자자 리뷰 텍스트 자리입니다. 투자자 리뷰 텍스트 자리입니다.<br>투자자 리뷰 텍스트 자리입니다.<br>투자자 리뷰 텍스트 자리입니다.<br>투자자 리뷰 텍스트 자리입니다.'}}
                </div>
                <div class="right-conts">{{'2021.00.00  00:00'}}</div>
              </div>
            </div>
            
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
          </div>

        </div>
        <!-- END 투자자 리뷰 -->
      </div>
      <!-- END 정보 영역 -->
      <layout-footer />
    </div>
  </div>
</template>
<script>
export default {
  name: 'EtprProfileInfo',
  data() {
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