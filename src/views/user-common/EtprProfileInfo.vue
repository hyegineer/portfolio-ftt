<template>
  <div class="page etpr-prifile-page">
    <layout-header id="header" />

    <div class="page-container">
      <!-- 업데이트 내역 -->
      <layout-right-fixed />
      <!-- // 업데이트 내역 -->

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

          <div class="mgt-30 white-panel etpr-dt-txt">
            <div class="label">
              상세소개
            </div>
            <p class="label-txt">
              {{ '내용이 없습니다.' }}<br>
              {{ '내용이 없습니다.' }}
            </p>
          </div>

          <!-- TODO: 투자자가 들어오면 보이는 영역 -->
          <div class="mgt-30 fc-request-container">
            <!-- TODO: ttl에 active가 되면 conts가 보임 -->
            <div class="fc-request-ttl active">
              팩트체크 추가 요청
            </div>
            <div class="fc-requesr-conts">
              <div class="point-wrap">
                <div class="my-point point">
                  <span class="ttl">보유 포인트</span>
                  <b class="bold">{{ '100,000' }}</b>
                  <div class="badge-p">
                    <span class="is-voice-only">포인트</span>
                  </div>
                </div>
                <div class="use-point point">
                  <span class="ttl">사용 포인트</span>
                  
                  <div class="inp-grp inp-unit-grp">
                    <input
                      type="text"
                      placeholder="사용 포인트 입력"
                      class="inp"
                    >
                    <div class="inp-unit">
                      <div class="badge-p">
                        <span class="is-voice-only">포인트</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="input-wrap">
                <div class="input-ttl">
                  요청 내용
                </div>
                <div class="inp-grp">
                  <input
                    type="text"
                    class="inp"
                    placeholder="팩트체크 요청 제목을 입력하세요. (n자 입력)"
                  >
                </div>
                <div class="inp-grp">
                  <textarea
                    id="#"
                    name="#"
                    class="inp inp-textarea" 
                    placeholder="팩트체크를 요청할 내용을 자세히 입력해주세요.
요청 내용이 자세할 수록 정확한 펙트체크가 작성됩니다!

ex) 대표자의 학력이 A대학교로 알고있는데, 왜 B대학교로 기입되어있나요?
                  "
                  />
                </div>
              </div>
              <div class="btn-wrap">
                <div class="icon-with-txt ai-center">
                  <i class="icon icon-i" />
                  <span class="txt">
                    선택 가능한 항목에 없는 팩트체크 내용을 추가로 요청합니다.
                  </span>
                </div>
                <btn-solid-dark
                  class="btn-md"
                  @click="window.alert('검정버튼을 클릭하셨습니다.')"
                >
                  <img
                    src="@/assets/images/icon/icon-check-gn.svg"
                    alt="check"
                    class="icon"
                  >
                  팩트체크 추가 요청하기
                </btn-solid-dark>
              </div>
            </div>
          </div>
          <!-- END 투자자가 들어오면 보이는 영역 -->
        </div>
        <!-- END 기업 간략 소개 -->

        <div class="mgt-20 white-panel active-ttl-container">
          <div class="active-ttl-inner">
            <div
              class="active-ttl active" 
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
              class="active-ttl" 
              @click="$router.push('/etpr-profile-board')"
            >
              게시판
            </div>
          </div>
        </div>
      </div>

      <!-- TODO: 투자자가 들어오면 보이는 영역 -->
      <div class="bottom-fixed-title">
        <div class="wide-panel check-fc-container">
          <div class="check-fc-ttl">
            <div class="txt-wrap">
              <div class="text">
                <span class="ttl">선택된 항목</span>
                <b class="bold">{{ '3' }}개</b>
              </div>
              <div class="use-point text">
                <span class="ttl">사용예정 포인트</span>
                <b class="bold">{{ '1,000' }}</b>
                <div class="badge-p">
                  <span class="is-voice-only">포인트</span>
                </div>
              </div>
            </div>
            <div class="btn-wrap">
              <btn-solid-dark
                class="btn-md"
                @click="window.alert('검정버튼을 클릭하셨습니다.')"
              >
                <img
                  src="@/assets/images/icon/icon-check-gn.svg"
                  alt="check"
                  class="icon"
                >
                팩트체크 요청하기
              </btn-solid-dark>
            </div>
          </div>
        </div>
      </div>

      <div class="bottom-fixed-conts">
        <!-- TODO: toggle을 누르면 active가 toggle됨 -->
        <div class="wide-panel check-fc-container">
          <div class="check-fc-conts-toggle">
            <div class="conts-wrap">
              <img
                class="close"
                src="@/assets/images/btn/btn-spread.svg"
                alt="닫기"
              >
              <img
                class="open"
                src="@/assets/images/btn/btn-fold.svg"
                alt="열기"
              >
            </div>
          </div>
          <div class="check-fc-conts">
            <ul class="check-fc-list-wrap">
              <!-- 항목 -->
              <li class="check-fc-list">
                <p class="text">
                  {{ '항목 1~3개까진 높이에 맞춰 표시' }}
                </p>
                <div class="list-right-conts">
                  <div class="use-point text">
                    <b class="bold">{{ '1,000' }}</b>
                    <div class="badge-p">
                      <span class="is-voice-only">포인트</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    class="check-out-btn"
                  >
                    <img
                      src="@/assets/images/btn/btn-cancle-sch.svg"
                      alt="빼기"
                    >
                  </button>
                </div>
              </li>
              <!-- // 항목 -->
              <li class="check-fc-list">
                <p class="text">
                  {{ '기업 가치' }}
                </p>
                <div class="list-right-conts">
                  <div class="use-point text">
                    <b class="bold">{{ '1,000' }}</b>
                    <div class="badge-p">
                      <span class="is-voice-only">포인트</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    class="check-out-btn"
                  >
                    <img
                      src="@/assets/images/btn/btn-cancle-sch.svg"
                      alt="빼기"
                    >
                  </button>
                </div>
              </li>
              <li class="check-fc-list">
                <p class="text">
                  {{ '기업 가치' }}
                </p>
                <div class="list-right-conts">
                  <div class="use-point text">
                    <b class="bold">{{ '1,000' }}</b>
                    <div class="badge-p">
                      <span class="is-voice-only">포인트</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    class="check-out-btn"
                  >
                    <img
                      src="@/assets/images/btn/btn-cancle-sch.svg"
                      alt="빼기"
                    >
                  </button>
                </div>
              </li>
              <li class="check-fc-list">
                <p class="text">
                  {{ '기업 기본정보' }}
                </p>
                <div class="list-right-conts">
                  <div class="use-point text">
                    <b class="bold">{{ '1,000' }}</b>
                    <div class="badge-p">
                      <span class="is-voice-only">포인트</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    class="check-out-btn"
                  >
                    <img
                      src="@/assets/images/btn/btn-cancle-sch.svg"
                      alt="빼기"
                    >
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- END 투자자가 들어오면 보이는 영역 -->

      <!-- 정보 영역 -->
      <div class="wide-panel">
        <!-- 기업정보 -->
        <div class="etpr-main-conts">
          <h2 class="section-ttl">
            기업정보
          </h2>
          <div class="flexable-container">
            <div class="etpr-panel-wrap flexable-inner">
              <div class="panel-ttl">
                <!-- TODO: 투자자가 들어오면 보이는 영역 -->
                <div class="flex-ttl">
                  <div class="check-wrap">
                    <input
                      id="check-box"
                      type="checkbox"
                      class="is-none check-switch"
                    >
                    <label
                      for="check-box"
                      class="check-onoff"
                    />
                  </div>
                  <!-- END 투자자가 들어오면 보이는 영역 -->
                  <span>기업 기본정보</span>
                  <div class="hover-desc">
                    <span
                      class="hover-overlay mb-show"
                      :class="{'is-show': mbMdOptions.type === 'ttip-dft-info' && mbMdOptions.visible}"
                      @click="mbMdControl(null, 'close')"
                    />
  
                    <div
                      class="badge-qus"
                      @click="mbMdControl('ttip-dft-info', 'open')"
                    >
                      <span class="is-voice-only">기업 기본정보 툴팁 내용</span>
                    </div>
  
                    <div
                      class="hover-desc-box"
                      :class="{'is-show': mbMdOptions.type === 'ttip-dft-info' && mbMdOptions.visible}"
                    >
                      <span class="ttl">기업 기본정보</span>
  
                      <p class="desc">
                        기업 기본정보에 대한 내용입니다.
                      </p>
                    </div>
                  </div>
                </div>
                <!-- TODO: 업데이트 데이터. 팩트체커 green, 자사 yellow, 오래된 항목은 badge만 -->
                <p class="badge badge-sm-square green">
                  {{ '팩트체커 업데이트  2020.00.00' }}
                </p>
              </div>
              <!-- TODO: 최상위 요소에 is-blur 주면 blur 처리되고 해당 데이터 더미 처리(-) -->
              <div
                class="white-panel"
                :class="{'is-blur': noUpdate}"
              >
                <!-- 필터처리된 데이터 가운데 뜨는 영역 -->
                <div class="cover-blur-container">
                  <div class="cover-blur-inner">
                    <img
                      class="img"
                      src="@/assets/images/icon/icon-noti.svg"
                      alt="!"
                    >
                    <p class="text">
                      최신 정보를 등록하지 않아<br>블라인드 처리 되었습니다.
                    </p>
                  </div>
                </div>
                <!-- END 필터처리된 데이터 가운데 뜨는 영역 -->
                <div class="common-info-container blur-filter-container">
                  <ul class="common-info-list-wrap">
                    <!-- TODO: 정보가 없는 곳은 전부 - 로 표시 -->
                    <li class="common-info-list">
                      <h4 class="ttl">
                        대표자
                      </h4>
                      <div class="dec">
                        {{ noUpdate ? '-' : '홍길동' }}
                      </div>
                    </li>
                    <li class="common-info-list">
                      <h4 class="ttl">
                        사업자번호
                      </h4>
                      <div class="dec">
                        {{ noUpdate ? '-' : '000-00-00***' }}
                      </div>
                    </li>
                    <li class="common-info-list">
                      <h4 class="ttl">
                        본사주소
                      </h4>
                      <div class="dec">
                        {{ noUpdate ? '-' : '서울특별시 강남구 테헤란로 312 13층 주소길어지면 최대 2줄 (우편번호)' }}
                      </div>
                    </li>
                    <li class="common-info-list">
                      <h4 class="ttl">
                        전화번호
                      </h4>
                      <div class="dec">
                        {{ noUpdate ? '-' : '02-1234-5678' }}
                      </div>
                    </li>
                    <li class="common-info-list">
                      <h4 class="ttl">
                        기업규모
                      </h4>
                      <div class="dec">
                        {{ noUpdate ? '-' : '소기업' }}
                      </div>
                    </li>
                    <li class="common-info-list">
                      <h4 class="ttl">
                        산업분류
                      </h4>
                      <div class="dec">
                        {{ noUpdate ? '-' : 'ICT 서비스' }}
                      </div>
                    </li>
                    <li class="common-info-list">
                      <h4 class="ttl">
                        산업분야
                      </h4>
                      <div class="dec">
                        {{ noUpdate ? '-' : '물류업' }}
                      </div>
                    </li>
                    <li class="common-info-list">
                      <h4 class="ttl">
                        설립일
                      </h4>
                      <div class="dec">
                        {{ noUpdate ? '-' : '2021년 03월 10일' }}
                      </div>
                    </li>
                    <li class="common-info-list tag-list">
                      <h4 class="ttl">
                        태그
                      </h4>
                      <div
                        v-if="noUpdate === false"
                        class="dec"
                      >
                        <badge-rounded>태그최대여덟글자</badge-rounded>
                        <badge-rounded>태그최대여덟글자</badge-rounded>
                        <badge-rounded>태그최대여덟글자</badge-rounded>
                        <badge-rounded>태그최대여덟글자</badge-rounded>
                        <badge-rounded>태그최대여덟글자</badge-rounded>
                      </div>
                      <div
                        v-else
                        class="dec"
                      >
                        <badge-rounded>-</badge-rounded>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="etpr-panel-wrap flexable-inner">
              <div class="panel-ttl">
                <!-- TODO: 투자자가 들어오면 보이는 영역 -->
                <div class="flex-ttl">
                  <div class="check-wrap">
                    <input
                      id="check-box"
                      type="checkbox"
                      class="is-none check-switch"
                    >
                    <label
                      for="check-box"
                      class="check-onoff"
                    />
                  </div>
                  <!-- END 투자자가 들어오면 보이는 영역 -->
                  <span>기업가치</span>
                  <div class="hover-desc">
                    <span
                      class="hover-overlay mb-show"
                      :class="{'is-show': mbMdOptions.type === 'ttip-help' && mbMdOptions.visible}"
                      @click="mbMdControl(null, 'close')"
                    />
  
                    <div
                      class="badge-qus"
                      @click="mbMdControl('ttip-help', 'open')"
                    >
                      <span class="is-voice-only">기업가치 툴팁 내용</span>
                    </div>
  
                    <div
                      class="hover-desc-box"
                      :class="{'is-show': mbMdOptions.type === 'ttip-help' && mbMdOptions.visible}"
                    >
                      <span class="ttl">기업가치</span>
  
                      <p class="desc">
                        기업가치에 대한 툴팁 내용입니다.
                      </p>
                    </div>
                  </div>
                </div>
                <!-- TODO: 업데이트 데이터. 팩트체커 green, 자사 yellow, 오래된 항목은 badge만 -->
                <p class="badge badge-sm-square yellow">
                  {{ '자사 업데이트  2020.00.00' }}
                </p>
              </div>
              <!-- TODO: 최상위 요소에 is-blur 주면 blur 처리되고 해당 데이터 더미 처리(-) -->
              <div
                class="white-panel pd-0"
                :class="{'is-blur': noUpdate}"
              >
                <!-- 필터처리된 데이터 가운데 뜨는 영역 -->
                <div class="cover-blur-container">
                  <div class="cover-blur-inner">
                    <img
                      class="img"
                      src="@/assets/images/icon/icon-noti.svg"
                      alt="!"
                    >
                    <p class="text">
                      최신 정보를 등록하지 않아<br>블라인드 처리 되었습니다.
                    </p>
                  </div>
                </div>
                <!-- END 필터처리된 데이터 가운데 뜨는 영역 -->
                <div class="common-info-container blur-filter-container">
                  <!-- blur 처리용 더미 데이터 -->
                  <p
                    v-if="noUpdate"
                    class="common-info-graph"
                  >
                    <rader-chart
                      :data="{'가능성': 0, '시장성': 0, '아이템 우수성': 0, '실행역량': 0, '팀역량': 0}"
                    />
                  </p>
                  <!-- 일반 데이터 -->
                  <p
                    v-else
                    class="common-info-graph"
                  >
                    <!-- [D] 별점 없을 때 -->
                    <rader-chart
                      :data="null"
                    />

                    <!-- [D] 별점 있을 때 -->
                    <rader-chart
                      :data="{'가능성': 5, '시장성': 3, '아이템 우수성': 1, '실행역량': 0, '팀역량': 5}"
                    />
                  </p>
                </div>
              </div>
              <div class="bot-txt">
                투자자가 작성한 리뷰 기반의 평균 지수입니다.
              </div>
            </div>
          </div>
        </div>
        <!-- END 기업정보 -->
        <!-- 상세정보 -->
        <div class="etpr-main-conts">
          <h2 class="section-ttl">
            상세정보
          </h2>
          <div class="flexable-container">
            <div class="etpr-panel-wrap flexable-inner">
              <div class="panel-ttl">
                <!-- TODO: 투자자가 들어오면 보이는 영역 -->
                <div class="flex-ttl">
                  <div class="check-wrap">
                    <input
                      id="check-box"
                      type="checkbox"
                      class="is-none check-switch"
                    >
                    <label
                      for="check-box"
                      class="check-onoff"
                    />
                  </div>
                  <!-- END 투자자가 들어오면 보이는 영역 -->
                  <span>규모</span>
                  <div class="hover-desc">
                    <span
                      class="hover-overlay mb-show"
                      :class="{'is-show': mbMdOptions.type === 'ttip-scale' && mbMdOptions.visible}"
                      @click="mbMdControl(null, 'close')"
                    />
  
                    <div
                      class="badge-qus"
                      @click="mbMdControl('ttip-scale', 'open')"
                    >
                      <span class="is-voice-only">규모 툴팁 내용</span>
                    </div>
  
                    <div
                      class="hover-desc-box"
                      :class="{'is-show': mbMdOptions.type === 'ttip-scale' && mbMdOptions.visible}"
                    >
                      <span class="ttl">규모</span>
  
                      <p class="desc">
                        규모에 대한 툴팁 내용입니다.
                      </p>
                    </div>
                  </div>
                </div>
                <!-- TODO: 업데이트 데이터. 팩트체커 green, 자사 yellow, 오래된 항목은 badge만 -->
                <p class="badge badge-sm-square">
                  {{ '팩트체커 업데이트  2020.00.00' }}
                </p>
              </div>
              <!-- TODO: 최상위 요소에 is-blur 주면 blur 처리되고 해당 데이터 더미 처리(-) -->
              <div
                class="white-panel"
                :class="{'is-blur': noUpdate}"
              >
                <!-- 필터처리된 데이터 가운데 뜨는 영역 -->
                <div class="cover-blur-container">
                  <div class="cover-blur-inner">
                    <img
                      class="img"
                      src="@/assets/images/icon/icon-noti.svg"
                      alt="!"
                    >
                    <p class="text">
                      최신 정보를 등록하지 않아<br>블라인드 처리 되었습니다.
                    </p>
                  </div>
                </div>
                <!-- END 필터처리된 데이터 가운데 뜨는 영역 -->
                <div class="common-info-container blur-filter-container">
                  <ul class="common-info-list-wrap">
                    <!-- TODO: 정보가 없는 곳은 전부 - 로 표시 -->
                    <li class="common-info-list scale-list">
                      <h4 class="ttl">
                        발행주식 수
                      </h4>
                      <div class="dec">
                        {{ noUpdate ? '-' : '12' }} 주
                      </div>
                    </li>
                    <li class="common-info-list scale-list">
                      <h4 class="ttl">
                        액면가
                      </h4>
                      <div class="dec">
                        {{ noUpdate ? '-' : '500,000' }} 원
                      </div>
                    </li>
                    <li class="common-info-list scale-list">
                      <h4 class="ttl">
                        자본금
                      </h4>
                      <div class="dec">
                        {{ noUpdate ? '-' : '500,000' }} 원
                      </div>
                    </li>
                    <li class="common-info-list scale-list">
                      <h4 class="ttl">
                        주주수
                      </h4>
                      <div class="dec">
                        {{ noUpdate ? '-' : '12' }} 명
                      </div>
                    </li>
                    <li class="common-info-list scale-list">
                      <h4 class="ttl">
                        대표보통주식주 비율
                      </h4>
                      <div class="dec">
                        {{ noUpdate ? '-' : '12' }} %
                      </div>
                    </li>
                    <li class="common-info-list scale-list">
                      <h4 class="ttl">
                        대표주주구분
                      </h4>
                      <div class="dec">
                        {{ noUpdate ? '-' : '임원' }}
                      </div>
                    </li>
                    <li class="common-info-list scale-list">
                      <h4 class="ttl">
                        대표주주명
                      </h4>
                      <div class="dec">
                        {{ noUpdate ? '-' : '김철수' }}
                      </div>
                    </li>
                    <li class="common-info-list scale-list">
                      <h4 class="ttl">
                        대표지분율
                      </h4>
                      <div class="dec">
                        {{ noUpdate ? '-' : '000' }} %
                      </div>
                    </li>
                    <li class="common-info-list scale-list">
                      <h4 class="ttl">
                        종업원 수
                      </h4>
                      <div class="dec">
                        <span class="comment">(기준일 : {{ '2000.00.00' }})</span>
                        {{ noUpdate ? '-' : '00' }} 명
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="etpr-panel-wrap flexable-inner">
              <div class="panel-ttl">
                <!-- TODO: 투자자가 들어오면 보이는 영역 -->
                <div class="flex-ttl">
                  <div class="check-wrap">
                    <input
                      id="check-box"
                      type="checkbox"
                      class="is-none check-switch"
                    >
                    <label
                      for="check-box"
                      class="check-onoff"
                    />
                  </div>
                  <!-- END 투자자가 들어오면 보이는 영역 -->
                  <span>주주정보</span>
                  <div class="hover-desc">
                    <span
                      class="hover-overlay mb-show"
                      :class="{'is-show': mbMdOptions.type === 'ttip-holder-info' && mbMdOptions.visible}"
                      @click="mbMdControl(null, 'close')"
                    />
  
                    <div
                      class="badge-qus"
                      @click="mbMdControl('ttip-holder-info', 'open')"
                    >
                      <span class="is-voice-only">주주정보 툴팁 내용</span>
                    </div>
  
                    <div
                      class="hover-desc-box"
                      :class="{'is-show': mbMdOptions.type === 'ttip-holder-info' && mbMdOptions.visible}"
                    >
                      <span class="ttl">주주정보</span>
  
                      <p class="desc">
                        주주정보에 대한 툴팁 내용입니다.
                      </p>
                    </div>
                  </div>
                </div>
                <!-- TODO: 업데이트 데이터. 팩트체커 green, 자사 yellow, 오래된 항목은 badge만 -->
                <p class="badge badge-sm-square yellow">
                  {{ '팩트체커 업데이트  2020.00.00' }}
                </p>
              </div>
              <!-- TODO: 최상위 요소에 is-blur 주면 blur 처리되고 해당 데이터 더미 처리(-) -->
              <div
                class="white-panel pd-0"
                :class="{'is-blur': noUpdate}"
              >
                <!-- 필터처리된 데이터 가운데 뜨는 영역 -->
                <div class="cover-blur-container">
                  <div class="cover-blur-inner">
                    <img
                      class="img"
                      src="@/assets/images/icon/icon-noti.svg"
                      alt="!"
                    >
                    <p class="text">
                      최신 정보를 등록하지 않아<br>블라인드 처리 되었습니다.
                    </p>
                  </div>
                </div>
                <!-- END 필터처리된 데이터 가운데 뜨는 영역 -->
                <div class="common-info-container stock-holder-container blur-filter-container">
                  <div class="common-info-graph">
                    <div class="table-all-wrap">
                      <div class="table-grp">
                        <!-- 테이블 헤더 그룹 -->
                        <ul class="table-hgrp">
                          <li class="table-hlist flex-basis-16 txt-left pl-20">
                            <span class="table-txt">주주구분</span>
                          </li>
                          <li class="table-hlist flex-basis-17 txt-left pl-18">
                            <span class="table-txt">주주명</span>
                          </li>
                          <li class="table-hlist flex-basis-10 txt-center">
                            <span class="table-txt">주종</span>
                          </li>
                          <li class="table-hlist flex-basis-13 txt-right pr-5">
                            <span class="table-txt">지분율(%)</span>
                          </li>
                          <li class="table-hlist flex-basis-20 txt-right pr-15">
                            <span class="table-txt">보유주식수(주)</span>
                          </li>
                          <li class="table-hlist flex-basis-26 txt-right pr-15">
                            <span class="table-txt">보유주식 금액(원)</span>
                          </li>
                        </ul>
                        <!-- END 테이블 헤더 그룹 -->

                        <!-- 테이블 내용 그룹 -->
                        <!-- 내용이 없을 때 -->
                        <div
                          class="table-cont-wrap empty-cont-wrap"
                        >
                          <p class="empty-ment">
                            내용이 없습니다.
                          </p>
                        </div>
                        <!-- END 내용이 없을 때 -->

                        <!-- 내용이 있을 때 -->
                        <div
                          class="table-cont-wrap custom-scroll-wrap"
                        >
                          <ul
                            v-for="(item, idx) in 20"
                            :key="idx"
                            class="table-cont-grp"
                          >
                            <li class="table-cont-list flex-basis-16 txt-center pl-20">
                              <span class="table-txt">{{ noUpdate ? '-' : '주요주주' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-17 txt-left pl-18">
                              <span class="table-txt">{{ noUpdate ? '-' : '이름여섯글자' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-10 txt-center">
                              <span class="table-txt">{{ noUpdate ? '-' : '보통주' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-13 txt-right pr-5">
                              <span class="table-txt">{{ noUpdate ? '-' : '100' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-20 txt-right pr-15">
                              <span class="table-txt">{{ noUpdate ? '-' : '000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right pr-15">
                              <span class="table-txt">{{ noUpdate ? '-' : '000,000,000,000' }}</span>
                            </li>
                          </ul>
                        </div>
                        <!-- END 내용이 있을 때 -->

                        <!-- END 테이블 내용 그룹 -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bot-txt">
                결산 기준일 : {{ '2021.00.00' }}
              </div>
            </div>
          </div>
          <div class="flexable-container pdt-60">
            <div class="etpr-panel-wrap flexable-inner">
              <div class="panel-ttl">
                <div class="flex-ttl">
                  <!-- TODO: 투자자가 들어오면 보이는 영역 -->
                  <div class="check-wrap">
                    <input
                      id="check-box"
                      type="checkbox"
                      class="is-none check-switch"
                    >
                    <label
                      for="check-box"
                      class="check-onoff"
                    />
                  </div>
                  <!-- END 투자자가 들어오면 보이는 영역 -->
                  <span>재무상태</span>
                  <div class="hover-desc">
                    <span
                      class="hover-overlay mb-show"
                      :class="{'is-show': mbMdOptions.type === 'ttip-finance' && mbMdOptions.visible}"
                      @click="mbMdControl(null, 'close')"
                    />
  
                    <div
                      class="badge-qus"
                      @click="mbMdControl('ttip-finance', 'open')"
                    >
                      <span class="is-voice-only">재무상태 툴팁 내용</span>
                    </div>
  
                    <div
                      class="hover-desc-box"
                      :class="{'is-show': mbMdOptions.type === 'ttip-finance' && mbMdOptions.visible}"
                    >
                      <span class="ttl">재무상태</span>
  
                      <p class="desc">
                        재무상태에 대한 툴팁 내용입니다.
                      </p>
                    </div>
                  </div>
                </div>
                <!-- TODO: 업데이트 데이터. 팩트체커 green, 자사 yellow, 오래된 항목은 badge만 -->
                <p class="badge badge-sm-square yellow">
                  {{ '팩트체커 업데이트  2020.00.00' }}
                </p>
              </div>
              <!-- TODO: 최상위 요소에 is-blur 주면 blur 처리되고 해당 데이터 더미 처리(-) -->
              <div
                class="white-panel pd-0"
                :class="{'is-blur': noUpdate}"
              >
                <!-- 필터처리된 데이터 가운데 뜨는 영역 -->
                <div class="cover-blur-container">
                  <div class="cover-blur-inner">
                    <img
                      class="img"
                      src="@/assets/images/icon/icon-noti.svg"
                      alt="!"
                    >
                    <p class="text">
                      최신 정보를 등록하지 않아<br>블라인드 처리 되었습니다.
                    </p>
                  </div>
                </div>
                <!-- END 필터처리된 데이터 가운데 뜨는 영역 -->
                <div class="common-info-container blur-filter-container">
                  <div class="common-info-graph">
                    <div class="table-all-wrap">
                      <div class="table-grp">
                        <!-- 테이블 헤더 그룹 -->
                        <ul class="table-hgrp">
                          <li class="table-hlist flex-basis-20 txt-left">
                            <span class="table-txt">항목</span>
                          </li>
                          <li class="table-hlist flex-basis-25 txt-right">
                            <span class="table-txt">2019</span>
                          </li>
                          <li class="table-hlist flex-basis-25 txt-right">
                            <span class="table-txt">2020</span>
                          </li>
                          <li class="table-hlist flex-basis-25 txt-right">
                            <span class="table-txt">2021</span>
                          </li>
                        </ul>
                        <!-- END 테이블 헤더 그룹 -->

                        <!-- 테이블 내용 그룹 -->
                        <!-- 내용이 없을 때 -->
                        <div
                          class="table-cont-wrap empty-cont-wrap"
                        >
                          <p class="empty-ment">
                            내용이 없습니다.
                          </p>
                        </div>
                        <!-- END 내용이 없을 때 -->

                        <!-- 내용이 있을 때 -->
                        <div
                          class="table-cont-wrap"
                        >
                          <ul
                            class="table-cont-grp"
                          >
                            <li class="table-cont-list flex-basis-20 txt-left">
                              <span class="table-txt f-bold">현금성자산</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                          </ul>
                          <ul
                            class="table-cont-grp"
                          >
                            <li class="table-cont-list flex-basis-20 txt-left">
                              <span class="table-txt f-bold">매출채권</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                          </ul>
                          <ul
                            class="table-cont-grp"
                          >
                            <li class="table-cont-list flex-basis-20 txt-left">
                              <span class="table-txt f-bold">재고자산</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                          </ul>
                          <ul
                            class="table-cont-grp"
                          >
                            <li class="table-cont-list flex-basis-20 txt-left">
                              <span class="table-txt f-bold">무형자산</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                          </ul>
                          <ul
                            class="table-cont-grp"
                          >
                            <li class="table-cont-list flex-basis-20 txt-left">
                              <span class="table-txt f-bold">투자자산</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                          </ul>
                          <ul
                            class="table-cont-grp"
                          >
                            <li class="table-cont-list flex-basis-20 txt-left">
                              <span class="table-txt f-bold">기타자산</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                          </ul>
                          <ul
                            class="table-cont-grp f-bold"
                          >
                            <li class="table-cont-list flex-basis-20 txt-left">
                              <span class="table-txt f-bold">자산총계</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                          </ul>
                          <ul
                            class="table-cont-grp"
                          >
                            <li class="table-cont-list flex-basis-20 txt-left">
                              <span class="table-txt f-bold">유통부재</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                          </ul>
                          <ul
                            class="table-cont-grp"
                          >
                            <li class="table-cont-list flex-basis-20 txt-left">
                              <span class="table-txt f-bold">장기부채</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                          </ul>
                          <ul
                            class="table-cont-grp f-bold"
                          >
                            <li class="table-cont-list flex-basis-20 txt-left">
                              <span class="table-txt f-bold">부채총계</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                          </ul>
                          <ul
                            class="table-cont-grp"
                          >
                            <li class="table-cont-list flex-basis-20 txt-left">
                              <span class="table-txt f-bold">자본금</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                          </ul>
                          <ul
                            class="table-cont-grp f-600-lg"
                          >
                            <li class="table-cont-list flex-basis-20 txt-left">
                              <span class="table-txt f-bold">자본총계</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right padding-change">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right padding-change">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right padding-change">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                          </ul>
                        </div>
                        <!-- END 내용이 있을 때 -->

                        <!-- END 테이블 내용 그룹 -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bot-txt">
                단위 : 원
              </div>
            </div>
            <div class="etpr-panel-wrap flexable-inner">
              <div class="panel-ttl">
                <div class="flex-ttl">
                  <!-- TODO: 투자자가 들어오면 보이는 영역 -->
                  <div class="check-wrap">
                    <input
                      id="check-box"
                      type="checkbox"
                      class="is-none check-switch"
                    >
                    <label
                      for="check-box"
                      class="check-onoff"
                    />
                  </div>
                  <!-- END 투자자가 들어오면 보이는 영역 -->
                  <span>손익계산서</span>
                  <div class="hover-desc">
                    <span
                      class="hover-overlay mb-show"
                      :class="{'is-show': mbMdOptions.type === 'ttip-calc' && mbMdOptions.visible}"
                      @click="mbMdControl(null, 'close')"
                    />
  
                    <div
                      class="badge-qus"
                      @click="mbMdControl('ttip-calc', 'open')"
                    >
                      <span class="is-voice-only">손익계산서 툴팁 내용</span>
                    </div>
  
                    <div
                      class="hover-desc-box"
                      :class="{'is-show': mbMdOptions.type === 'ttip-calc' && mbMdOptions.visible}"
                    >
                      <span class="ttl">손익계산서</span>
  
                      <p class="desc">
                        손익계산서에 대한 툴팁 내용입니다.
                      </p>
                    </div>
                  </div>
                </div>
                <!-- TODO: 업데이트 데이터. 팩트체커 green, 자사 yellow, 오래된 항목은 badge만 -->
                <p class="badge badge-sm-square yellow">
                  {{ '팩트체커 업데이트  2020.00.00' }}
                </p>
              </div>
              <!-- TODO: 최상위 요소에 is-blur 주면 blur 처리되고 해당 데이터 더미 처리(-) -->
              <div
                class="white-panel pd-0"
                :class="{'is-blur': noUpdate}"
              >
                <!-- 필터처리된 데이터 가운데 뜨는 영역 -->
                <div class="cover-blur-container">
                  <div class="cover-blur-inner">
                    <img
                      class="img"
                      src="@/assets/images/icon/icon-noti.svg"
                      alt="!"
                    >
                    <p class="text">
                      최신 정보를 등록하지 않아<br>블라인드 처리 되었습니다.
                    </p>
                  </div>
                </div>
                <!-- END 필터처리된 데이터 가운데 뜨는 영역 -->
                <div class="common-info-container blur-filter-container">
                  <div class="common-info-graph">
                    <div class="table-all-wrap">
                      <div class="table-grp">
                        <!-- 테이블 헤더 그룹 -->
                        <ul class="table-hgrp">
                          <li class="table-hlist flex-basis-20 txt-left">
                            <span class="table-txt">항목</span>
                          </li>
                          <li class="table-hlist flex-basis-26 txt-right">
                            <span class="table-txt">2019</span>
                          </li>
                          <li class="table-hlist flex-basis-26 txt-right">
                            <span class="table-txt">2020</span>
                          </li>
                          <li class="table-hlist flex-basis-26 txt-right">
                            <span class="table-txt">2021</span>
                          </li>
                        </ul>
                        <!-- END 테이블 헤더 그룹 -->

                        <!-- 테이블 내용 그룹 -->
                        <!-- 내용이 없을 때 -->
                        <div
                          class="table-cont-wrap empty-cont-wrap"
                        >
                          <p class="empty-ment">
                            내용이 없습니다.
                          </p>
                        </div>
                        <!-- END 내용이 없을 때 -->

                        <!-- 내용이 있을 때 -->
                        <div
                          class="table-cont-wrap"
                        >
                          <ul
                            class="table-cont-grp"
                          >
                            <li class="table-cont-list flex-basis-20 txt-left">
                              <span class="table-txt f-bold">매출액</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                          </ul>
                          <ul
                            class="table-cont-grp"
                          >
                            <li class="table-cont-list flex-basis-20 txt-left">
                              <span class="table-txt f-bold">매출원가</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                          </ul>
                          <ul
                            class="table-cont-grp f-bold"
                          >
                            <li class="table-cont-list flex-basis-20 txt-left">
                              <span class="table-txt f-bold">매출총이익</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                          </ul>
                          <ul
                            class="table-cont-grp"
                          >
                            <li class="table-cont-list flex-basis-20 txt-left">
                              <span class="table-txt f-bold">일반관리비</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                          </ul>
                          <ul
                            class="table-cont-grp"
                          >
                            <li class="table-cont-list flex-basis-20 txt-left">
                              <span class="table-txt f-bold">영업이익</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                          </ul>
                          <ul
                            class="table-cont-grp"
                          >
                            <li class="table-cont-list flex-basis-20 txt-left">
                              <span class="table-txt f-bold">영업외수익</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                          </ul>
                          <ul
                            class="table-cont-grp"
                          >
                            <li class="table-cont-list flex-basis-20 txt-left">
                              <span class="table-txt f-bold">영업외비용</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                          </ul>
                          <ul
                            class="table-cont-grp"
                          >
                            <li class="table-cont-list flex-basis-20 txt-left">
                              <span class="table-txt f-bold">경상이익</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                          </ul>
                          <ul
                            class="table-cont-grp"
                          >
                            <li class="table-cont-list flex-basis-20 txt-left">
                              <span class="table-txt f-bold">특별이익</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                          </ul>
                          <ul
                            class="table-cont-grp"
                          >
                            <li class="table-cont-list flex-basis-20 txt-left">
                              <span class="table-txt f-bold">세전순이익</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                          </ul>
                          <ul
                            class="table-cont-grp"
                          >
                            <li class="table-cont-list flex-basis-20 txt-left">
                              <span class="table-txt f-bold">법인세</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                          </ul>
                          <ul
                            class="table-cont-grp f-bold"
                          >
                            <li class="table-cont-list flex-basis-20 txt-left">
                              <span class="table-txt f-bold">당기순이익</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                            <li class="table-cont-list flex-basis-26 txt-right">
                              <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                            </li>
                          </ul>
                        </div>
                        <!-- END 내용이 있을 때 -->

                        <!-- END 테이블 내용 그룹 -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bot-txt">
                단위 : 원
              </div>
            </div>
          </div>
          <div class="flexable-container split3 pdt-60">
            <div class="etpr-panel-wrap flexable-inner">
              <div class="panel-ttl">
                <!-- TODO: 투자자가 들어오면 보이는 영역 -->
                <div class="flex-ttl">
                  <div class="check-wrap">
                    <input
                      id="check-box"
                      type="checkbox"
                      class="is-none check-switch"
                    >
                    <label
                      for="check-box"
                      class="check-onoff"
                    />
                  </div>
                  <!-- END 투자자가 들어오면 보이는 영역 -->
                  <span>매출 추이</span>
                  <div class="hover-desc">
                    <span
                      class="hover-overlay mb-show"
                      :class="{'is-show': mbMdOptions.type === 'ttip-sales' && mbMdOptions.visible}"
                      @click="mbMdControl(null, 'close')"
                    />
  
                    <div
                      class="badge-qus"
                      @click="mbMdControl('ttip-sales', 'open')"
                    >
                      <span class="is-voice-only">매출 추이 툴팁 내용</span>
                    </div>
  
                    <div
                      class="hover-desc-box"
                      :class="{'is-show': mbMdOptions.type === 'ttip-sales' && mbMdOptions.visible}"
                    >
                      <span class="ttl">매출 추이</span>
  
                      <p class="desc">
                        매출 추이 툴팁 내용입니다.
                      </p>
                    </div>
                  </div>
                </div>
                <!-- TODO: 업데이트 데이터. 팩트체커 green, 자사 yellow, 오래된 항목은 badge만 -->
                <p class="badge badge-sm-square yellow">
                  {{ '팩트체커 업데이트  2020.00.00' }}
                </p>
              </div>
              <!-- TODO: 최상위 요소에 is-blur 주면 blur 처리되고 해당 데이터 더미 처리(-) -->
              <div
                class="white-panel pd-0"
                :class="{'is-blur': noUpdate}"
              >
                <!-- 필터처리된 데이터 가운데 뜨는 영역 -->
                <div class="cover-blur-container">
                  <div class="cover-blur-inner">
                    <img
                      class="img"
                      src="@/assets/images/icon/icon-noti.svg"
                      alt="!"
                    >
                    <p class="text">
                      최신 정보를 등록하지 않아<br>블라인드 처리 되었습니다.
                    </p>
                  </div>
                </div>
                <!-- END 필터처리된 데이터 가운데 뜨는 영역 -->
                <div class="common-info-container blur-filter-container">
                  <!-- blur 처리용 더미 데이터 -->
                  <p
                    v-if="noUpdate"
                    class="common-info-graph"
                  >
                    <column-chart
                      :data="[0, 5000, 10000]"
                    />
                  </p>
                  <!-- 일반 데이터 -->
                  <p
                    v-else
                    class="common-info-graph"
                  >
                    <span
                      class="nothing-ment"
                    >매출 추이가 없습니다.</span>
                    <column-chart
                      :data="[0, 500, 10000]"
                    />
                  </p>
                </div>
              </div>
              <div class="bot-txt">
                단위 : 원
              </div>
            </div>
            <div class="etpr-panel-wrap flexable-inner">
              <div class="panel-ttl">
                <div class="flex-ttl">
                  <!-- TODO: 투자자가 들어오면 보이는 영역 -->
                  <div class="check-wrap">
                    <input
                      id="check-box"
                      type="checkbox"
                      class="is-none check-switch"
                    >
                    <label
                      for="check-box"
                      class="check-onoff"
                    />
                  </div>
                  <!-- END 투자자가 들어오면 보이는 영역 -->
                  <span>영업이익 추이</span>
                  <div class="hover-desc">
                    <span
                      class="hover-overlay mb-show"
                      :class="{'is-show': mbMdOptions.type === 'ttip-sales-benefits' && mbMdOptions.visible}"
                      @click="mbMdControl(null, 'close')"
                    />
  
                    <div
                      class="badge-qus"
                      @click="mbMdControl('ttip-sales-benefits', 'open')"
                    >
                      <span class="is-voice-only">영업이익 추이 툴팁 내용</span>
                    </div>
  
                    <div
                      class="hover-desc-box"
                      :class="{'is-show': mbMdOptions.type === 'ttip-sales-benefits' && mbMdOptions.visible}"
                    >
                      <span class="ttl">영업이익 추이</span>
  
                      <p class="desc">
                        영업이익에 대한 툴팁 내용입니다.
                      </p>
                    </div>
                  </div>
                </div>
                <!-- TODO: 업데이트 데이터. 팩트체커 green, 자사 yellow, 오래된 항목은 badge만 -->
                <p class="badge badge-sm-square yellow">
                  {{ '팩트체커 업데이트  2020.00.00' }}
                </p>
              </div>
              <!-- TODO: 최상위 요소에 is-blur 주면 blur 처리되고 해당 데이터 더미 처리(-) -->
              <div
                class="white-panel pd-0"
                :class="{'is-blur': noUpdate}"
              >
                <!-- 필터처리된 데이터 가운데 뜨는 영역 -->
                <div class="cover-blur-container">
                  <div class="cover-blur-inner">
                    <img
                      class="img"
                      src="@/assets/images/icon/icon-noti.svg"
                      alt="!"
                    >
                    <p class="text">
                      최신 정보를 등록하지 않아<br>블라인드 처리 되었습니다.
                    </p>
                  </div>
                </div>
                <!-- END 필터처리된 데이터 가운데 뜨는 영역 -->
                <div class="common-info-container blur-filter-container">
                  <p
                    v-if="noUpdate"
                    class="common-info-graph"
                  >
                    <column-chart :data="[0, 500000, 1000000]" />
                  </p>
                  <p
                    v-else
                    class="common-info-graph"
                  >
                    <span class="nothing-ment">영업이익 추이가 없습니다.</span>
                    <column-chart :data="[0, 500000, 10000000]" />
                  </p>
                </div>
              </div>
              <div class="bot-txt">
                단위 : 원
              </div>
            </div>
            <div class="etpr-panel-wrap flexable-inner">
              <div class="panel-ttl">
                <div class="flex-ttl">
                  <!-- TODO: 투자자가 들어오면 보이는 영역 -->
                  <div class="check-wrap">
                    <input
                      id="check-box"
                      type="checkbox"
                      class="is-none check-switch"
                    >
                    <label
                      for="check-box"
                      class="check-onoff"
                    />
                  </div>
                  <!-- END 투자자가 들어오면 보이는 영역 -->
                  <span>당기순이익 추이</span>
                  <div class="hover-desc">
                    <span
                      class="hover-overlay mb-show"
                      :class="{'is-show': mbMdOptions.type === 'ttip-net-incomes' && mbMdOptions.visible}"
                      @click="mbMdControl(null, 'close')"
                    />
  
                    <div
                      class="badge-qus"
                      @click="mbMdControl('ttip-net-incomes', 'open')"
                    >
                      <span class="is-voice-only">당기순이익 추이 툴팁 내용</span>
                    </div>
  
                    <div
                      class="hover-desc-box"
                      :class="{'is-show': mbMdOptions.type === 'ttip-net-incomes' && mbMdOptions.visible}"
                    >
                      <span class="ttl">당기순이익 추이</span>
  
                      <p class="desc">
                        당기순이익 추이에 대한 툴팁 내용입니다.
                      </p>
                    </div>
                  </div>
                </div>
                <!-- TODO: 업데이트 데이터. 팩트체커 green, 자사 yellow, 오래된 항목은 badge만 -->
                <p class="badge badge-sm-square yellow">
                  {{ '팩트체커 업데이트  2020.00.00' }}
                </p>
              </div>
              <!-- TODO: 최상위 요소에 is-blur 주면 blur 처리되고 해당 데이터 더미 처리(-) -->
              <div
                class="white-panel pd-0"
                :class="{'is-blur': noUpdate}"
              >
                <!-- 필터처리된 데이터 가운데 뜨는 영역 -->
                <div class="cover-blur-container">
                  <div class="cover-blur-inner">
                    <img
                      class="img"
                      src="@/assets/images/icon/icon-noti.svg"
                      alt="!"
                    >
                    <p class="text">
                      최신 정보를 등록하지 않아<br>블라인드 처리 되었습니다.
                    </p>
                  </div>
                </div>
                <!-- END 필터처리된 데이터 가운데 뜨는 영역 -->
                <div class="common-info-container blur-filter-container">
                  <p
                    v-if="noUpdate"
                    class="common-info-graph"
                  >
                    <column-chart :data="[0, 5000000, 10000000]" />
                  </p>
                  <p
                    v-else
                    class="common-info-graph"
                  >
                    <span class="nothing-ment">당기순이익 추이가 없습니다.</span>
                    <column-chart :data="[0, 5000000, 10000000]" />
                  </p>
                </div>
              </div>
              <div class="bot-txt">
                단위 : 원
              </div>
            </div>
          </div>
        </div>
        <!-- END 상세정보 -->
        <!-- 투자유치 -->
        <div class="etpr-main-conts">
          <h2 class="section-ttl">
            <!-- TODO: 투자자가 들어오면 보이는 영역 -->
            <div class="check-wrap">
              <input
                id="check-box"
                type="checkbox"
                class="is-none check-switch"
              >
              <label
                for="check-box"
                class="check-onoff"
              />
            </div>
            <!-- END 투자자가 들어오면 보이는 영역 -->
            투자유치 
            <!-- TODO: 업데이트 데이터. 팩트체커 green, 자사 yellow, 오래된 항목은 badge만 -->
            <p class="badge badge-sm-square green">
              {{ '팩트체커 업데이트  2020.00.00' }}
            </p>
          </h2>
          <!-- TODO: 최상위 요소에 is-blur 주면 blur 처리되고 해당 데이터 더미 처리(-) -->
          <div
            :class="{'is-blur': noUpdate}"
          >
            <!-- 필터처리된 데이터 가운데 뜨는 영역 -->
            <div class="cover-blur-container">
              <div class="cover-blur-inner">
                <img
                  class="img"
                  src="@/assets/images/icon/icon-noti.svg"
                  alt="!"
                >
                <p class="text">
                  최신 정보를 등록하지 않아<br>블라인드 처리 되었습니다.
                </p>
              </div>
            </div>
            <!-- END 필터처리된 데이터 가운데 뜨는 영역 -->
            <div class="blur-filter-container">
              <div class="top-cont-wrap">
                <div class="invest-list">
                  <div class="ttl">
                    최종투자단계
                  </div>
                  <div class="dec">
                    {{ noUpdate ? '-' : 'serues E (추정)' }}
                  </div>
                </div>
                <div class="invest-list">
                  <div class="ttl">
                    누적투자유치금액
                  </div>
                  <div class="dec">
                    {{ noUpdate ? '-' : '88.8억' }}
                  </div>
                </div>
                <div class="invest-list">
                  <div class="ttl">
                    투자유치횟수
                  </div>
                  <div class="dec">
                    {{ noUpdate ? '-' : '8' }}
                  </div>
                </div>
              </div>
              <div class="white-panel pd-0">
                <div class="common-info-graph">
                  <div class="table-all-wrap">
                    <div class="table-grp">
                      <!-- 테이블 헤더 그룹 -->
                      <ul class="table-hgrp">
                        <li class="table-hlist flex-basis-10 txt-left">
                          <span class="table-txt">날짜</span>
                        </li>
                        <li class="table-hlist flex-basis-13 txt-center">
                          <span class="table-txt">투자단계</span>
                        </li>
                        <li class="table-hlist flex-basis-13 txt-right">
                          <span class="table-txt">투자유치 금액</span>
                        </li>
                        <li class="table-hlist flex-basis-61 txt-center">
                          <span class="table-txt">투자자</span>
                        </li>
                      </ul>
                      <!-- END 테이블 헤더 그룹 -->

                      <!-- 테이블 내용 그룹 -->
                      <!-- 내용이 없을 때 -->
                      <div
                        class="table-cont-wrap empty-cont-wrap"
                      >
                        <p class="empty-ment">
                          내용이 없습니다.
                        </p>
                      </div>
                      <!-- END 내용이 없을 때 -->

                      <!-- 내용이 있을 때 -->
                      <div
                        class="table-cont-wrap custom-scroll-wrap"
                      >
                        <ul
                          v-for="(item, idx) in 20"
                          :key="idx"
                          class="table-cont-grp"
                        >
                          <li class="table-cont-list flex-basis-10 txt-left">
                            <span class="table-txt">{{ noUpdate ? '-' : '2021.00' }}</span>
                          </li>
                          <li class="table-cont-list flex-basis-13 txt-center">
                            <span class="table-txt">{{ noUpdate ? '-' : 'M&A' }}</span>
                          </li>
                          <li class="table-cont-list flex-basis-13 txt-right">
                            <span class="table-txt">{{ noUpdate ? '-' : '0,000,000,000' }}</span>
                          </li>
                          <li class="table-cont-list flex-basis-61 txt-left">
                            <span class="table-txt">{{ noUpdate ? '-' : '투자자명, 투자자명, 투자자명, 투자자명, 투자자명, 투자자명' }}</span>
                          </li>
                        </ul>
                      </div>
                      <!-- END 내용이 있을 때 -->

                      <!-- END 테이블 내용 그룹 -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END 투자유치 -->
        <!-- 보유특허 -->
        <div class="etpr-main-conts">
          <h2 class="section-ttl">
            <!-- TODO: 투자자가 들어오면 보이는 영역 -->
            <div class="check-wrap">
              <input
                id="check-box"
                type="checkbox"
                class="is-none check-switch"
              >
              <label
                for="check-box"
                class="check-onoff"
              />
            </div>
            <!-- END 투자자가 들어오면 보이는 영역 -->
            보유특허 
            <!-- TODO: 업데이트 데이터. 팩트체커 green, 자사 yellow, 오래된 항목은 badge만 -->
            <p class="badge badge-sm-square green">
              {{ '팩트체커 업데이트  2020.00.00' }}
            </p>
          </h2>
          <!-- TODO: 최상위 요소에 is-blur 주면 blur 처리되고 해당 데이터 더미 처리(-) -->
          <div
            :class="{'is-blur': noUpdate}"
          >
            <!-- 필터처리된 데이터 가운데 뜨는 영역 -->
            <div class="cover-blur-container">
              <div class="cover-blur-inner">
                <img
                  class="img"
                  src="@/assets/images/icon/icon-noti.svg"
                  alt="!"
                >
                <p class="text">
                  최신 정보를 등록하지 않아<br>블라인드 처리 되었습니다.
                </p>
              </div>
            </div>
            <!-- END 필터처리된 데이터 가운데 뜨는 영역 -->
            <div class="blur-filter-container">
              <div class="top-txt">
                총 <span>{{ noUpdate ? '-' : '5' }}</span>개
              </div>
              <empty-contents txt="내용이 없습니다." />
              <div>
                <div class="table-all-wrap border-bottom-remove">
                  <div class="table-grp">
                    <!-- 테이블 내용 그룹 -->
                    <div
                      class="table-cont-wrap custom-scroll-wrap padding-add"
                    >
                      <ul
                        v-for="(item, idx) in 20"
                        :key="idx"
                        class="table-cont-grp"
                      >
                        <li class="table-cont-list flex-basis-84 txt-left f-14">
                          <span class="table-txt">{{ noUpdate ? '-' : '반응형 오브젝트 제공방법 및 그 시스템(Responsive object providing method and providing system thereof)' }}</span>
                        </li>
                        <li class="table-cont-list flex-basis-13 txt-right f-gray">
                          <span class="table-txt">출원일 {{ noUpdate ? '-' : '2021.00.00' }}</span>
                        </li>
                      </ul>
                    </div>
                    <!-- END 테이블 내용 그룹 -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END 보유특허 -->
        <!-- 구성원 -->
        <div class="etpr-main-conts">
          <h2 class="section-ttl">
            <!-- TODO: 투자자가 들어오면 보이는 영역 -->
            <div class="check-wrap">
              <input
                id="check-box"
                type="checkbox"
                class="is-none check-switch"
              >
              <label
                for="check-box"
                class="check-onoff"
              />
            </div>
            <!-- END 투자자가 들어오면 보이는 영역 -->
            구성원 
            <!-- TODO: 업데이트 데이터. 팩트체커 green, 자사 yellow, 오래된 항목은 badge만 -->
            <p class="badge badge-sm-square green">
              {{ '팩트체커 업데이트  2020.00.00' }}
            </p>
          </h2>
          <!-- TODO: 최상위 요소에 is-blur 주면 blur 처리되고 해당 데이터 더미 처리(-) -->
          <div
            :class="{'is-blur': noUpdate}"
          >
            <!-- 필터처리된 데이터 가운데 뜨는 영역 -->
            <div class="cover-blur-container">
              <div class="cover-blur-inner">
                <img
                  class="img"
                  src="@/assets/images/icon/icon-noti.svg"
                  alt="!"
                >
                <p class="text">
                  최신 정보를 등록하지 않아<br>블라인드 처리 되었습니다.
                </p>
              </div>
            </div>
            <!-- END 필터처리된 데이터 가운데 뜨는 영역 -->
            <div class="blur-filter-container">
              <!-- 구성원 명수 표시 -->
              <div class="member-list-grp-ttl">
                <p class="txt">
                  총 <span class="bold">{{ noUpdate ? '-' : '0' }}</span>명
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
                        {{ noUpdate ? '-' : '김철수' }}
                      </h5>
                      <span class="mail">{{ noUpdate ? '-' : 'email@email.com' }}</span>
                      <dl class="dlist">
                        <dt class="lbel">
                          키포인트
                        </dt>
                        <dd class="txt">
                          {{ noUpdate ? '-' : '키포인트 텍스트' }}
                        </dd>
                      </dl>
                    </div>

                    <ul class="ul-bullet">
                      <li class="list">
                        {{ noUpdate ? '-' : '이력사항 텍스트' }}
                      </li>
                      <li class="list">
                        {{ noUpdate ? '-' : '이력사항 텍스트' }}
                      </li>
                      <li class="list">
                        {{ noUpdate ? '-' : '이력사항 텍스트' }}
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
          </div>
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
              <a
                href="#"
                target="_blank"
                class="card-news"
              >  
                <div class="card-thumb card-thumb-lg">
                  <thumbnail />
                </div>
                <div class="card-text">
                  <span class="name">news</span>
                  <div class="ttl">{{ '뉴스 이미지 없을 시, 디폴트 이미지 처리합니다.' }}</div>
                  <div class="dec">
                    {{ '뉴스 제목 텍스트 최대 3줄 입니다. 그 이후로는 말줄임표로 생략합니다. 뉴스 제목 텍스트 최대 3줄 입니다. 그 이후로는 말줄임표로 생략합니다. 뉴스 제목...' }}
                  </div>
                  <div class="date">{{ '2021.00.00  00:00' }}</div>
                </div>
              </a>
            </div>

            <div class="flexable-inner">
              <a
                href="#"
                target="_blank"
                class="card-news"
              >  
                <div class="card-thumb card-thumb-lg">
                  <thumbnail />
                </div>
                <div class="card-text">
                  <span class="name">news</span>
                  <div class="ttl">{{ '뉴스 이미지 없을 시, 디폴트 이미지 처리합니다.' }}</div>
                  <div class="dec">
                    {{ '뉴스 제목 텍스트 최대 3줄 입니다. 그 이후로는 말줄임표로 생략합니다. 뉴스 제목 텍스트 최대 3줄 입니다. 그 이후로는 말줄임표로 생략합니다. 뉴스 제목...' }}
                  </div>
                  <div class="date">{{ '2021.00.00  00:00' }}</div>
                </div>
              </a>
            </div>

            <div class="flexable-inner">
              <a
                href="#"
                target="_blank"
                class="card-news"
              >  
                <div class="card-thumb card-thumb-lg">
                  <thumbnail />
                </div>
                <div class="card-text">
                  <span class="name">news</span>
                  <div class="ttl">{{ '뉴스 이미지 없을 시, 디폴트 이미지 처리합니다.' }}</div>
                  <div class="dec">
                    {{ '뉴스 제목 텍스트 최대 3줄 입니다. 그 이후로는 말줄임표로 생략합니다. 뉴스 제목 텍스트 최대 3줄 입니다. 그 이후로는 말줄임표로 생략합니다. 뉴스 제목...' }}
                  </div>
                  <div class="date">{{ '2021.00.00  00:00' }}</div>
                </div>
              </a>
            </div>

            <div class="flexable-inner">
              <a
                href="#"
                target="_blank"
                class="card-news"
              >  
                <div class="card-thumb card-thumb-lg">
                  <thumbnail />
                </div>
                <div class="card-text">
                  <span class="name">news</span>
                  <div class="ttl">{{ '뉴스 이미지 없을 시, 디폴트 이미지 처리합니다.' }}</div>
                  <div class="dec">
                    {{ '뉴스 제목 텍스트 최대 3줄 입니다. 그 이후로는 말줄임표로 생략합니다. 뉴스 제목 텍스트 최대 3줄 입니다. 그 이후로는 말줄임표로 생략합니다. 뉴스 제목...' }}
                  </div>
                  <div class="date">{{ '2021.00.00  00:00' }}</div>
                </div>
              </a>
            </div>

            <div class="flexable-inner">
              <a
                href="#"
                target="_blank"
                class="card-news"
              >  
                <div class="card-thumb card-thumb-lg">
                  <thumbnail />
                </div>
                <div class="card-text">
                  <span class="name">news</span>
                  <div class="ttl">{{ '뉴스 이미지 없을 시, 디폴트 이미지 처리합니다.' }}</div>
                  <div class="dec">
                    {{ '뉴스 제목 텍스트 최대 3줄 입니다. 그 이후로는 말줄임표로 생략합니다. 뉴스 제목 텍스트 최대 3줄 입니다. 그 이후로는 말줄임표로 생략합니다. 뉴스 제목...' }}
                  </div>
                  <div class="date">{{ '2021.00.00  00:00' }}</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <!-- END 관련 소식 -->
        <!-- 투자자 리뷰 -->
        <div class="etpr-main-conts">
          <h2 class="section-ttl section-ttl-verti">
            투자자 리뷰
            <div class="ttl-dec">
              <span class="txt">5가지 항목에 적용된 종합 점수입니다.</span>
              <div class="hover-desc">
                <span
                  class="hover-overlay mb-show"
                  :class="{'is-show': mbMdOptions.type === 'ttip-review' && mbMdOptions.visible}"
                  @click="mbMdControl(null, 'close')"
                />

                <div
                  class="badge-qus"
                  @click="mbMdControl('ttip-review', 'open')"
                >
                  <span class="is-voice-only">투자자 리뷰 툴팁 내용</span>
                </div>

                <div
                  class="hover-desc-box"
                  :class="{'is-show': mbMdOptions.type === 'ttip-review' && mbMdOptions.visible}"
                >
                  <span class="ttl">투자자 리뷰</span>

                  <p class="desc">
                    투자자 리뷰에 대한 툴팁 내용입니다.
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
                  <div class="name">
                    {{ '익명' }}
                  </div>
                  <div class="type">
                    {{ '개인 투자자' }}
                  </div>
                  <div class="hover-desc">
                    <span
                      class="hover-overlay mb-show"
                      :class="{'is-show': mbMdOptions.type === 'ttip-star' && mbMdOptions.visible}"
                      @click="mbMdControl(null, 'close')"
                    />
  
                    <div
                      class="star-txt"
                      @click="mbMdControl('ttip-star', 'open')"
                    >
                      <i class="icon icon-star" />
                      <span class="txt">4.3</span>
                    </div>
  
                    <div
                      class="hover-desc-box"
                      :class="{'is-show': mbMdOptions.type === 'ttip-star' && mbMdOptions.visible}"
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
                  {{ '투자자 리뷰 텍스트 자리입니다. 투자자 리뷰 텍스트 자리입니다.투자자 리뷰 텍스트 자리입니다. 투자자 리뷰 텍스트 자리입니다. 투자자 리뷰 텍스트 자리입니다.' }}
                </div>
                <div class="right-conts">
                  {{ '2021.00.00  00:00' }}
                </div>
              </div>
            </div>
            <!-- // card -->
            <div class="white-panel review-card">
              <div class="review-inner">
                <div class="left-conts">
                  <div class="name">
                    {{ '익명' }}
                  </div>
                  <div class="type">
                    {{ '개인 투자자' }}
                  </div>
                  <div class="hover-desc">
                    <span
                      class="hover-overlay mb-show"
                      :class="{'is-show': mbMdOptions.type === 'ttip-star-other' && mbMdOptions.visible}"
                      @click="mbMdControl(null, 'close')"
                    />
  
                    <div
                      class="star-txt"
                      @click="mbMdControl('ttip-star-other', 'open')"
                    >
                      <i class="icon icon-star" />
                      <span class="txt">4.3</span>
                    </div>
  
                    <div
                      class="hover-desc-box"
                      :class="{'is-show': mbMdOptions.type === 'ttip-star-other' && mbMdOptions.visible}"
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
                <div class="right-conts">
                  {{ '2021.00.00  00:00' }}
                </div>
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
    </div>
    
    <layout-footer />
  </div>
</template>
<script>
export default {
  name: 'EtprProfileInfo',
  data() {
    return {
      mbMdOptions: {
        type: null, // 모바일일 때는 툴팁 팝업으로 할 때 타입 데이터
        visible: false, // 모바일일 때는 툴팁 팝업으로 할 때 보이게하는 속성
      },
      noUpdate: true, // 3개월 동안 업데이트 없으면 blur 처리
    };
  },
  methods: {
    mbMdControl(opt, toggle) { // 모바일일 때만 작동
      if(window.innerWidth <= 600) {
        this.mbMdOptions.type = opt;
          
        if(toggle === 'open') {
          this.mbMdOptions.visible = true;

          // 일부 dom z-index 조절해야할 때 아래 로직 사용
          // document.querySelector('#header').style.zIndex = 5; 
        }

        if(toggle === 'close') {
          this.mbMdOptions.visible = false;
          
          // 일부 dom 조절한 z-index 원복해야할 때 아래 로직 사용
          // document.querySelector('#header').style.zIndex = 100;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>