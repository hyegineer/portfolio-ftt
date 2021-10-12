<template>
  <div class="components-page">
    <section class="section">
      <h1 class="cp-ttl">
        1. 버튼
      </h1>

      <div class="section-cont section-btns-cont">
        <btn-solid
          class="btn-lg btn-full"
          @click="window.alert('다음 버튼을 클릭하셨습니다.')"
        >
          다음
        </btn-solid>

        <btn-solid
          class="btn-xlg btn-full"
          @click="window.alert('로그인 버튼을 클릭하셨습니다.')"
        >
          로그인
        </btn-solid>

        <btn-solid-dark
          class="btn-md"
          @click="window.alert('검정버튼을 클릭하셨습니다.')"
        >
          검정버튼
        </btn-solid-dark>

        <btn-solid-grayblue
          class="btn-sm"
          @click="window.alert('구성원 추가버튼을 클릭하셨습니다.')"
        >
          구성원 추가
        </btn-solid-grayblue>

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

        <btn-bd
          class="btn-xlg"
          @click="window.alert('기업정보 업데이트 버튼을 클릭하셨습니다.')"
        >
          기업정보 업데이트
        </btn-bd>

        <btn-bd-dark
          class="btn-sm"
          @click="window.alert('설정하기 버튼을 클릭하셨습니다.')"
        >
          설정하기
        </btn-bd-dark>

        <btn-bd-dark
          class="btn-md"
          @click="window.alert('인증번호 발송 버튼을 클릭하셨습니다.')"
        >
          인증번호 발송
        </btn-bd-dark>

        <btn-bd-light
          class="btn-fb btn-sm"
          @click="window.alert('닫기 버튼을 클릭하셨습니다.')"
        >
          닫기
        </btn-bd-light>

        <btn-bd-light
          class="btn-sm"
          @click="window.alert('엑셀양식 다운로드 버튼을 클릭하셨습니다.')"
        >
          엑셀양식 다운로드
        </btn-bd-light>

        <btn-bd-light
          class="btn-rounded btn-xsm"
        >
          버튼명
        </btn-bd-light>
      </div>
    </section>

    <section class="section">
      <h1 class="cp-ttl">
        2. 기타 버튼들
      </h1>

      <div class="section-cont section-btns-cont">
        <!-- 토글 스위치 -->
        <input
          id="switch"
          type="checkbox"
          class="is-none toggle-switch"
        >
        <label
          for="switch"
          class="toggle-onoff"
        />
        <!-- // 토글 스위치 -->

        <!-- 체크박스 -->
        <input
          id="check-box"
          type="checkbox"
          class="is-none check-switch"
        >
        <label
          for="check-box"
          class="check-onoff"
        />
        <!-- // 체크박스 -->

        <!-- 채팅 버튼 -->
        <btn-square-bd @click="window.alert('메세지 버튼 누르기')">
          <i class="icon icon-msg" />
          <span class="is-voice-only">메세지</span>
        </btn-square-bd>
        <!-- // 채팅 버튼 -->

        <!-- 작성 버튼 -->
        <button
          type="button"
          class="btn-txt"
        >
          <i class="icon icon-pen" />
          <span class="txt">작성하기</span>
        </button>
        <!-- // 작성 버튼 -->

        <!-- 삭제 버튼 -->
        <button
          type="button"
          class="btn-txt btn-warning-txt"
        >
          <i class="icon icon-trash" />
          <span class="txt">삭제하기</span>
        </button>
        <!-- // 삭제 버튼 -->

        <!-- 탈퇴 버튼 -->
        <button
          type="button"
          class="btn-txt btn-gray-txt"
        >
          <i class="icon icon-exit" />
          <span class="txt">회원탈퇴</span>
        </button>
        <!-- // 탈퇴 버튼 -->
      </div>
    </section>

    <section class="section">
      <h1 class="cp-ttl">
        3. 기타 뱃지들
      </h1>

      <div class="section-cont section-btns-cont">
        <!-- 기본뱃지 -->
        <badge-rounded>
          최대여덟글자입력
        </badge-rounded>
        <!-- // 기본뱃지 -->

        <!-- 완료뱃지 -->
        <div class="badge-state">
          <i class="icon icon-check" />
          <span class="txt">
            완료
          </span>
        </div>
        <!-- // 완료뱃지 -->

        <!-- 포인트 -->
        <div class="badge-p">
          <span class="is-voice-only">포인트</span>
        </div>
        <!-- // 포인트 -->

        <!-- 별점 -->
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
        <!-- // 별점 -->

        <!-- 도움말 -->
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
        <!-- // 도움말 -->
      </div>
    </section>

    <section class="section">
      <h1 class="cp-ttl">
        4. 폼
      </h1>
      <div class="section-cont section-input-cont">
        <h2>4-1. 인풋만</h2>
        <div class="inp-grp">
          <input
            type="text"
            class="inp"
            placeholder="플레이스 홀더"
          >
        </div>

        <div class="inp-grp">
          <input
            type="text"
            class="inp"
            value="작성된 내용"
          >
        </div>

        <div class="inp-grp">
          <input
            type="text"
            class="inp"
            disabled
            value="작성할 수 없는 입력영역"
          >
        </div>

        <div class="inp-grp">
          <button
            type="button"
            class="inp"
          >
            <i class="icon icon-cal" />
            <span>2021.10.05</span>
          </button>
        </div>
        <!-- // 인풋만 -->


        <h2>4-2. 인풋 + 인증번호</h2>
        <div class="inp-grp inp-btn-grp">
          <input
            type="text"
            class="inp"
            placeholder="검색어를 입력하세요"
          >

          <btn-bd class="btn-md">
            인증번호 발송
          </btn-bd>
        </div>

        <div class="inp-grp inp-btn-grp">
          <div class="inp-grp inp-time-grp">
            <input
              type="text"
              class="inp"
              placeholder="검색어를 입력하세요"
            >
            <span class="inp-time">3:00</span>
          </div>

          <btn-solid-dark
            class="btn-md"
          >
            인증하기
          </btn-solid-dark>
        </div>

        <h2>4-3. 인풋 + 검색버튼</h2>
        <div class="inp-grp inp-sch-grp">
          <input
            v-model="exInput"
            type="text"
            class="inp"
            placeholder="검색어를 입력하세요"
          >
          <button
            v-if="exInput"
            type="button"
            class="inp-del-btn"
            @click="exInput = ''"
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
        <div class="inp-grp inp-sch-grp">
          <input
            v-model="exInput"
            type="text"
            class="inp inp-strong"
            placeholder="검색어를 입력하세요"
          >
          <button
            v-if="exInput"
            type="button"
            class="inp-del-btn"
            @click="exInput = ''"
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
        <!-- // 인풋 + 검색버튼 -->

        <h2>4-4. 라벨 + 인풋</h2>
        <div class="lbel-inp-grp">
          <label class="lbel">대표자명 <span class="required">*</span></label>
          <div class="inp-grp">
            <input
              type="text"
              class="inp"
              placeholder="플레이스 홀더"
            >
          </div>
        </div>
        <!-- // 라벨 + 인풋 -->

        <h2>4-5. 단위있는 인풋</h2>
        <div class="inp-grp inp-unit-grp">
          <input
            type="text"
            class="inp"
            placeholder="플레이스 홀더"
          >
          <span class="inp-unit">단위</span>
        </div>
        <!-- // 단위있는 인풋 -->

        <h2>4-6. 셀렉트</h2>
        <select
          id="#"
          name="#"
          class="slct"
        >
          <option value="옵션1">
            옵션1
          </option>
          <option value="옵션2">
            옵션2
          </option>
        </select>
        <!-- // 셀렉트 -->

        <h2>4-7. 커스텀 셀렉트</h2>
        <!-- 커스텀 셀렉트 1 -->
        <custom-slct
          class="custom-slct01"
          :selected="testOption"
        >
          <template #select>
            {{ testOption || '옵션을 선택해주세요ㅋㅋ' }}
          </template>

          <template #options>
            <custom-slct-opt
              @click="testOption = '선택사항1'"
            >
              선택사항 1
            </custom-slct-opt>

            <custom-slct-opt
              @click="testOption = '선택사항2'"
            >
              선택사항 2
            </custom-slct-opt>
          </template>
        </custom-slct>
        <!-- // 커스텀 셀렉트 1 -->

        <custom-slct
          class="custom-slct02"
          :selected="testOption"
        >
          <template #select>
            {{ testOption || '팩트체크 요청순' }}
          </template>

          <template #options>
            <custom-slct-opt
              @click="testOption = '선택사항1'"
            >
              선택사항 1
            </custom-slct-opt>

            <custom-slct-opt
              @click="testOption = '선택사항2'"
            >
              선택사항 2
            </custom-slct-opt>
          </template>
        </custom-slct>
        <!-- // 커스텀 셀렉트 2 -->
      </div>
    </section>

    <section class="section">
      <h1 class="cp-ttl">
        5. 아바타 & 썸네일
      </h1>

      <div class="section-cont ">
        <h2>5-1. 기업로고 아바타</h2>
        <avatar />

        <h2>5-2. 기업구성원 아바타</h2>
        <avatar lg />

        <h2>5-3. 썸네일</h2>
        <div
          class="card-thumb"
          style="max-width: 260px;"
        >
          <thumbnail />
        </div>

        <h2>5-4. 썸네일 큰사이즈</h2>
        <div class="card-thumb card-thumb-lg">
          <thumbnail />
        </div>
      </div>
    </section>

    <section class="section">
      <h1 class="cp-ttl">
        6. 내용이 없을 때
      </h1>

      <div class="section-cont ">
        <empty-contents txt="등록된 문의사항이 없습니다." />
      </div>
    </section>

    <section class="section">
      <h1 class="cp-ttl">
        7. 프로필 카드
      </h1>

      <div class="section-cont section-cards-cont">
        <h2>7-1. 검색결과 프로필 카드</h2>
        <div class="card">
          <div class="card-thumb">
            <thumbnail />
            <span class="ribbon">정보 업데이트</span>
            <avatar />
          </div>

          <ul class="card-subtxt-grp">
            <li class="card-subtxt-list">
              기업규모
            </li>
            <li class="card-subtxt-list">
              산업분류
            </li>
            <li class="card-subtxt-list">
              산업분야
            </li>
          </ul>

          <h6 class="card-name">
            주식회사 팩트컴퍼니z
          </h6>

          <ul class="card-tag-grp">
            <li class="card-tag-list">
              #태그텍스트여덟자
            </li>
            <li class="card-tag-list">
              #태그텍스트여덟자
            </li>
            <li class="card-tag-list">
              #태그텍스트여덟자
            </li>
            <li class="card-tag-list">
              #태그텍스트여덟자
            </li>
            <li class="card-tag-list">
              #태그텍스트여덟자
            </li>
          </ul>
        </div>

        <h2>7-2. 투자자 프로필 카드</h2>
        <div class="card">
          <div class="card-thumb">
            <thumbnail />
            <avatar />
          </div>

          <span class="card-user-type">
            개인 투자자
          </span>

          <h6 class="card-name">
            투자자명
          </h6>
        </div>
      </div>
    </section>

    <section class="section">
      <h1 class="cp-ttl">
        8. 아바타 + 정보
      </h1>

      <div class="section-cont">
        <h2>8-1. 아바타 + 회사정보</h2>
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
          </div>
        </div>

        <h2>8-2. 아바타 + 투자자 타입</h2>
        <div class="avatar-with-name">
          <avatar />
          <div class="name-grp">
            <span class="name-user-type">개인 투자자</span>
            <span class="name">
              주식회사 팩트컴퍼니
            </span>
          </div>
        </div>

        <h2>8-2. 아바타 + 회사정보</h2>
        <div class="avatar-with-name col-avatar-with-name">
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
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h1 class="cp-ttl">
        9. 기타 정보
      </h1>

      <div class="section-cont">
        <h2>9-1. 회사정보</h2>
        <div class="icon-with-txt">
          <i class="icon icon-jump" />
          <a
            href="#"
            class="txt"
          >www.팩트컴퍼니.com</a>
        </div>

        <div class="icon-with-txt">
          <i class="icon icon-loca" />
          <span class="txt">서울특별시 강남구 테헤란로 312 비전타워...</span>
        </div>

        <h2>9-2. 브레드크럼</h2>
        <breadcrumb>
          <li class="txt">
            홈
          </li>
          <li class="txt">
            마이페이지
          </li>
          <li class="txt">
            대시보드
          </li>
        </breadcrumb>
      </div>
    </section>

    <section class="section">
      <h1 class="cp-ttl">
        10. 회사정보 카드
      </h1>

      <div class="section-cont">
        <div class="info-card">
          <div class="card-thumb card-thumb-lg">
            <thumbnail lg />
          </div>

          <div class="card-company-info">
            <!-- 회사이름 -->
            <div class="avatar-with-name">
              <avatar />
              <div class="name-grp">
                <span class="name">
                  {{ '스타트업명' }}
                </span>

                <div class="icon-with-txt">
                  <i class="icon icon-jump" />
                  <a
                    href="#"
                    class="txt"
                  >{{ 'www.팩트컴퍼니.com' }}</a>
                </div>
              </div>
            </div>
            <!-- // 회사이름 -->

            <!-- 회사정보 -->
            <div class="dlist-grp">
              <dl class="dlist">
                <dt class="lbel">
                  대표자
                </dt>
                <dd class="txt">
                  <span>{{ '김철수' }}</span>
                </dd>
              </dl>

              <dl class="dlist">
                <dt class="lbel">
                  사업자번호
                </dt>
                <dd class="txt">
                  <span>{{ '000-00-00***' }}</span>
                </dd>
              </dl>

              <dl class="dlist">
                <dt class="lbel">
                  본사주소
                </dt>
                <dd class="txt">
                  <span>{{ '서울특별시 강남구 테헤란로 312 비전타워' }}</span>
                </dd>
              </dl>

              <dl class="dlist">
                <dt class="lbel">
                  연락처
                </dt>
                <dd class="txt">
                  <span>{{ '02-1234-5678' }}</span>
                </dd>
              </dl>

              <dl class="dlist">
                <dt class="lbel">
                  기업규모
                </dt>
                <dd class="txt">
                  <span>{{ '소기업' }}</span>
                </dd>
              </dl>

              <dl class="dlist">
                <dt class="lbel">
                  산업분류
                </dt>
                <dd class="txt">
                  <span>-</span>
                </dd>
              </dl>

              <dl class="dlist">
                <dt class="lbel">
                  산업분야
                </dt>
                <dd class="txt">
                  <span>-</span>
                </dd>
              </dl>

              <dl class="dlist">
                <dt class="lbel">
                  설립일
                </dt>
                <dd class="txt">
                  <span>{{ '2021년 03월 10일' }}</span>
                </dd>
              </dl>
            </div>
            <!-- // 회사정보 -->

            <!-- 회사 관련 키워드뱃지 -->
            <div class="card-keyword-badge-grp">
              <badge-rounded>
                최대여덟글자입력
              </badge-rounded>

              <badge-rounded>
                최대여덟글자입력
              </badge-rounded>

              <badge-rounded>
                최대여덟글자입력
              </badge-rounded>

              <badge-rounded>
                최대여덟글자입력
              </badge-rounded>

              <badge-rounded>
                최대여덟글자입력
              </badge-rounded>
            </div>
            <!-- // 회사 관련 키워드뱃지 -->
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h1 class="cp-ttl">
        11. 페이지네이션
      </h1>

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
    </section>

    <section class="section">
      <h1 class="cp-ttl">
        12. 슬라이드
      </h1>

      <div class="section-cont main-swiper-container-frame">
        <div
          v-swiper:infoSlide="slideOptions"
          class="swiper-container main-swiper-container"
        >
          <div class="swiper-wrapper">
            <div
              v-for="(item, index) in 10"
              :key="index"
              class="swiper-slide"
            >
              <info-card />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h1 class="cp-ttl">
        13. 모달
      </h1>

      <div
        class="section-cont section-modal-cont"
      >
        <h2>13-1. 커스텀 & 알럿 & 컨펌 모달 (클릭해보세요)</h2>
        <btn-solid-dark
          class="btn-sm"
          style="margin-right: 10px;"
          @click="openModal('test01')"
        >
          custom modal
        </btn-solid-dark>

        <btn-solid-dark
          class="btn-sm"
          style="margin-right: 10px;"
          @click="alert('alert 모달')"
        >
          alert
        </btn-solid-dark>

        <btn-solid-dark
          class="btn-sm"
          style="margin-right: 10px;"
          @click="confirm('confirm 모달')"
        >
          confirm
        </btn-solid-dark>

        <h2>13-2. 모달들</h2>
        <div class="comp-grp-modal">
          <h3>* 기업선택하기 모달</h3>
          <modal
            wide
            ttl="기업 선택하기"
          >
            <div class="modal-cont md-choice-cont">
              <!-- 검색어 입력영역 -->
              <div class="inp-grp inp-sch-grp">
                <input
                  v-model="exInput"
                  type="text"
                  class="inp"
                  placeholder="기업명 / 기업 고유 아이디를 검색하세요."
                >
                <button
                  v-if="exInput"
                  type="button"
                  class="inp-del-btn"
                  @click="exInput = ''"
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
              <!-- // 검색어 입력영역 -->

              <!-- 리스트 -->
              <div class="cnt-txt-grp">
                <!-- 검색 전 -->
                <!-- <div class="txt">
                  <span class="bold">전체</span>
                </div> -->

                <!-- 검색 후 갯수 표시 -->
                <div class="txt">
                  <span class="highlight">
                    <u>'검색어'</u>
                  </span>
                  에 대한 전체 검색 결과 <span class="bold">15</span>건
                </div>
              </div>

              <!-- 검색결과 있을 때 -->
              <div class="box-list-grp">
                <div
                  v-for="(item, index) in 10"
                  :key="index"
                  class="box-choice-list box-list"
                >
                  <div class="txt-dark-gray">
                    <p class="txt-dark">
                      주식회사 팩트컴퍼니
                    </p>
                    <span class="txt-gray">김철수 02-000-0000</span>
                  </div>

                  <!-- 체크박스 -->
                  <input
                    :id="`enter${index}`"
                    type="radio"
                    class="is-none check-switch"
                    name="enter"
                  >
                  <label
                    :for="`enter${index}`"
                    class="check-onoff"
                  />
                  <!-- // 체크박스 -->
                </div>
              </div>

              <!-- 검색결과 없을 때 -->
              <empty-contents txt="선택할 기업이 없습니다." />
              <!-- // 리스트 -->
            </div>

            <div class="modal-btn-wrap">
              <btn-bd-light class="btn-fb btn-md btn-cancel">
                닫기
              </btn-bd-light>
              <btn-solid-dark class="btn-md">
                선택완료
              </btn-solid-dark>
            </div>
          </modal>
        </div>
        <!-- // 기업선택하기 모달 -->

        <div class="comp-grp-modal">
          <h3>* 구성원 추가 모달</h3>
          <modal
            wide
            ttl="구성원 추가"
          >
            <div class="modal-cont">
              <form>
                <fieldset class="ffieldset">
                  <legend class="ffieldset-ttl">
                    프로필 이미지
                  </legend>

                  <div class="file-inp-grp">
                    <!-- [D] 해당 DOM 클릭시 사진 업로드 & 수정 가능 -->
                    <div class="input-img-frame input-circle-img-frame">
                      <!-- [D] 이미지 업로드 시 아래 img 태그 보임 -->
                      <!-- <img
                    src="@/assets/images/dft/ex.jpg"
                    alt="input img"
                    class="input-img"
                  > -->

                      <span
                        class="btn btn-upload"
                      >
                        <i class="icon icon-cam" />
                        <span class="is-voice-only">기업 로고 이미지 업로드</span>
                      </span>
                    </div>
                    <p class="ffieldset-guide">
                      해상도 100*100px 이상의 JPG, PNG 파일을 첨부해주세요. <br>
                      이미지 미첨부시, 기본이미지로 설정됩니다.
                    </p>
                  </div>
                </fieldset>

                <fieldset class="ffieldset">
                  <legend class="ffieldset-ttl">
                    기본 정보
                  </legend>

                  <!-- 이름 -->
                  <div class="lbel-inp-grp">
                    <label class="lbel">이름</label>
                    <div class="inp-grp">
                      <input
                        type="text"
                        class="inp"
                        placeholder="이름 입력"
                      >
                    </div>
                  </div>

                  <!-- 이메일 -->
                  <div class="lbel-inp-grp">
                    <label class="lbel">이메일</label>
                    <div class="inp-grp">
                      <input
                        type="email"
                        class="inp"
                        placeholder="이메일 입력"
                      >
                    </div>
                  </div>

                  <!-- 키포인트 -->
                  <div class="lbel-inp-grp">
                    <label class="lbel">키포인트</label>
                    <div class="inp-grp">
                      <input
                        type="text"
                        class="inp"
                        placeholder="ex) 10개 기업 창업"
                      >
                    </div>
                  </div>

                  <!-- 경력사항 -->
                  <div class="lbel-inp-grp">
                    <label class="lbel">경력사항</label>

                    <div class="inp-grp">
                      <input
                        type="text"
                        class="inp"
                      >
                    </div>

                    <div class="add-inp-grp">
                      <div class="inp-grp inp-btn-grp">
                        <input
                          type="text"
                          class="inp"
                        >
                        <btn-square-bd class="del-btn">
                          <span class="is-voice-only">항목 삭제</span>
                        </btn-square-bd>
                      </div>
                      <!-- 요기에 추가가 되어야합니다 -->
                    </div>

                    <btn-bd-dark class="btn-md btn-full add-inp-btn">
                      경력사항 추가
                    </btn-bd-dark>
                  </div>
                </fieldset>
              </form>
            </div>

            <div class="modal-btn-wrap">
              <btn-bd-light class="btn-fb btn-md btn-cancel">
                닫기
              </btn-bd-light>
              <btn-solid-dark class="btn-md">
                추가완료
              </btn-solid-dark>
            </div>
          </modal>
        </div>
        <!-- // 구성원 추가 모달 -->

        <div class="comp-grp-modal">
          <h3>* 팩트체커 후보 등록 모달1</h3>
          <modal
            ttl="팩트체커 후보 등록"
          >
            <div class="modal-cont">
              <p class="modal-cont-txt">
                투자자가 선택한 팩트체커가 팩트체크를 진행하며, <br>
                본인이 선정되면 취소가 불가합니다. <br>
                팩트체커 배정이 완료되면 카카오 알림톡으로 안내드립니다.
              </p>
            </div>

            <div class="modal-btn-wrap">
              <btn-bd-light class="btn-fb btn-md btn-cancel">
                아니오
              </btn-bd-light>
              <btn-solid-dark class="btn-md">
                등록하기
              </btn-solid-dark>
            </div>
          </modal>
        </div>
        <!-- // 팩트체커 후보 등록 모달1 -->

        <div class="comp-grp-modal">
          <h3>* 팩트체커 후보 등록 모달2</h3>
          <modal
            ttl="팩트체커 후보 등록"
          >
            <div class="modal-cont md-ftck-proposal">
              <span
                class="modal-ttl-dec"
              >
                팩트체크를 진행할 견적을 제시해주세요.
              </span>

              <div class="inp-grp inp-unit-grp">
                <input
                  type="text"
                  class="inp"
                  placeholder="최소 000P"
                >
                <span class="inp-unit">
                  <div class="badge-p">
                    <span class="is-voice-only">포인트</span>
                  </div>
                </span>
              </div>

              <p class="modal-cont-txt">
                투자자가 선택한 팩트체커가 팩트체크를 진행하며, <br>
                본인이 선정되면 취소가 불가합니다. <br>
                팩트체커 배정이 완료되면 카카오 알림톡으로 안내드립니다.
              </p>
            </div>

            <div class="modal-btn-wrap">
              <btn-bd-light class="btn-fb btn-md btn-cancel">
                아니오
              </btn-bd-light>
              <btn-solid-dark class="btn-md">
                등록하기
              </btn-solid-dark>
            </div>
          </modal>
        </div>
        <!-- // 팩트체커 후보 등록 모달2 -->


        <div class="comp-grp-modal">
          <h3>* 팩트체크 작성완료 모달</h3>
          <modal
            ttl="팩트체크 작성완료"
          >
            <div class="modal-cont">
              <p class="modal-cont-txt">
                작성완료시, 작성된 팩트체크 내용은 수정이 불가합니다. <br>
                계속 진행하시겠습니까?
              </p>

              <div class="check-lbel-ment">
                <input
                  id="agreeContents"
                  type="checkbox"
                  class="is-none check-switch"
                >
                <label
                  for="agreeContents"
                  class="check-onoff"
                />

                <label
                  for="agreeContents"
                  class="ment dark-ment"
                >위 내용을 확인하였으며,작성을 완료합니다.</label>
              </div>
            </div>

            <div class="modal-btn-wrap">
              <btn-bd-light class="btn-fb btn-md btn-cancel">
                닫기
              </btn-bd-light>
              <btn-solid-dark class="btn-md">
                선택완료
              </btn-solid-dark>
            </div>
          </modal>
        </div>
        <!-- // 팩트체크 작성완료 모달 -->

        <div class="comp-grp-modal">
          <h3>* 팩트체커 선택하기 모달</h3>
          <modal
            ttl="팩트체커 선택하기"
          >
            <div class="modal-cont">
              <div class="lbel-amount-point">
                <span class="lbel">사용되는 포인트</span>

                <div class="amount-point">
                  <strong class="amount">150</strong>
                  <div class="badge-p">
                    <span class="is-voice-only">포인트</span>
                  </div>
                </div>
              </div>

              <p class="modal-cont-txt">
                선택완료시, 팩트체커 변경 및 요청 내용 수정이 불가합니다. <br>
                계속 진행하시겠습니까?
              </p>
            </div>

            <div class="modal-btn-wrap">
              <btn-bd-light class="btn-fb btn-md btn-cancel">
                아니오
              </btn-bd-light>
              <btn-solid-dark class="btn-md">
                예
              </btn-solid-dark>
            </div>
          </modal>
        </div>
        <!-- // 팩트체커 선택하기 모달 -->

        <div class="comp-grp-modal">
          <h3>* 항목 추가 모달</h3>
          <modal
            ttl="항목 추가"
          >
            <div class="modal-cont">
              <custom-slct
                class="custom-slct01"
                :selected="testOption"
              >
                <template #select>
                  {{ testOption || '옵션을 선택해주세요ㅋㅋ' }}
                </template>

                <template #options>
                  <custom-slct-opt
                    @click="testOption = '선택사항1'"
                  >
                    선택사항 1
                  </custom-slct-opt>

                  <custom-slct-opt
                    @click="testOption = '선택사항2'"
                  >
                    선택사항 2
                  </custom-slct-opt>
                </template>
              </custom-slct>
            </div>

            <div class="modal-btn-wrap">
              <btn-bd-light class="btn-fb btn-md btn-cancel">
                닫기
              </btn-bd-light>
              <btn-solid-dark class="btn-md">
                완료
              </btn-solid-dark>
            </div>
          </modal>
        </div>
        <!-- // 항목 추가 모달 -->

        <div class="comp-grp-modal">
          <h3>* 항목 공개 설정 모달</h3>
          <modal
            ttl="항목 공개 설정"
          >
            <div class="modal-cont">
              <ul class="toggle-list-grp">
                <li class="toggle-list">
                  <span class="name">이메일</span>

                  <!-- 토글 스위치 -->
                  <input
                    id="openEmail"
                    type="checkbox"
                    class="is-none toggle-switch"
                  >
                  <label
                    for="openEmail"
                    class="toggle-onoff"
                  />
                  <!-- // 토글 스위치 -->
                </li>

                <li class="toggle-list">
                  <span class="name">이름</span>

                  <!-- 토글 스위치 -->
                  <input
                    id="openName"
                    type="checkbox"
                    class="is-none toggle-switch"
                  >
                  <label
                    for="openName"
                    class="toggle-onoff"
                  />
                  <!-- // 토글 스위치 -->
                </li>

                <li class="toggle-list">
                  <span class="name">키포인트</span>

                  <!-- 토글 스위치 -->
                  <input
                    id="openKeypoint"
                    type="checkbox"
                    class="is-none toggle-switch"
                  >
                  <label
                    for="openKeypoint"
                    class="toggle-onoff"
                  />
                  <!-- // 토글 스위치 -->
                </li>

                <li class="toggle-list">
                  <span class="name">이력사항</span>

                  <!-- 토글 스위치 -->
                  <input
                    id="openHistory"
                    type="checkbox"
                    class="is-none toggle-switch"
                  >
                  <label
                    for="openHistory"
                    class="toggle-onoff"
                  />
                  <!-- // 토글 스위치 -->
                </li>
              </ul>
            </div>

            <div class="modal-btn-wrap">
              <btn-bd-light class="btn-fb btn-md btn-cancel">
                닫기
              </btn-bd-light>
              <btn-solid-dark class="btn-md">
                저장
              </btn-solid-dark>
            </div>
          </modal>
        </div>
        <!-- // 항목 공개 설정 모달 -->
      </div>
    </section>

    <section class="section">
      <h1 class="cp-ttl">
        14. 게시판 레이아웃
      </h1>

      <div
        class="section-cont section-modal-cont"
      >
        <div class="board-list-grp-ttl">
          <p class="txt">
            총 <span class="bold">15</span>개의 게시글이 있습니다.
          </p>

          <div class="txt-right">
            <button
              type="button"
              class="btn-txt"
            >
              <i class="icon icon-pen" />
              <span class="txt">작성하기</span>
            </button>
          </div>
        </div>

        <table class="board-list-grp">
          <tr
            v-for="(item, index) in 2"
            :key="index"
            class="board-list"
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
      </div>
    </section>

    <section class="section">
      <h1 class="cp-ttl">
        15. 구성원 레이아웃
      </h1>

      <div class="section-cont">
        <!-- 구성원 명수 표시 -->
        <div class="member-list-grp-ttl">
          <p class="txt">
            총 <span class="bold">0</span>명
          </p>
        </div>
        <!-- // 구성원 명수 표시 -->

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
    </section>

    <modal-dialog>
      <modal-light-box @click="closeModal" />

      <modal
        :class="{'is-show': $store.state.modal.visible && $store.state.modal.type === 'test01'}"
        ttl="테스트 모달 1"
      >
        <div class="modal-cont">
          테스트 모달입니다.
        </div>

        <div class="modal-btn-wrap">
          <btn-bd-light
            class="btn-fb btn-md btn-cancel"
            @click="closeModal"
          >
            닫기
          </btn-bd-light>
          <btn-solid-dark
            class="btn-md"
            @click="window.alert('선택완료 버튼을 눌렀습니다.')"
          >
            선택완료
          </btn-solid-dark>
        </div>
      </modal>
    </modal-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return{
      mbMdOptions1: {
        visible: false,
      },
      mbMdOptions2: {
        visible: false,
      },
      customSlct1: {
        visible: false,
        value: false,
      },
      customSlct2: {
        visible: false,
        value: false,
      },
      exInput: null,
      testOption: null,
      slideOptions: {
        // grabCursor: true,
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        direction: 'vertical',
        effect: 'coverflow',
        coverflowEffect: {
          rotate: 0,
          stretch: 435,
          depth: 180,
          modifier: 1.014,
          slideShadows: false,
        },
      },
    };
  },
  created() {
    // this.alert('알럿 텍스트자리입니다 <br>알럿 텍스트자리입니다 <br>알럿 텍스트자리입니다');
    // this.confirm('확인 텍스트자리입니다 <br>확인 텍스트자리입니다 <br>확인 텍스트자리입니다');
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
    selectOpt(opt, val) {
      switch (opt) {
      case 1:
        this.customSlct1.value = val;
        this.customSlct1.visible = !this.customSlct1.visible;
        this.away();
        break;
      case 2:
        this.customSlct2.value = val;
        this.customSlct2.visible = !this.customSlct2.visible;
        break;
      }
    },
    showOpt(opt) {
      switch (opt) {
      case 1:
        this.customSlct1.visible = !this.customSlct1.visible;
        break;
      case 2:
        this.customSlct2.visible = !this.customSlct2.visible;
        break;
      }
    },
    away() {
      this.customSlct1.visible = false;
    },
  },
};
</script>

<style lang="scss">
.components-page {
  width: 100%;
  max-width: 1200px;
  margin: 50px auto;

  .cp-ttl {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .section {
    border-bottom: 1px solid #ebebeb;

    padding: 20px 0;

    &:last-child {
      border-bottom: 0;
    }
  }

  .section-btns-cont {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  .section-card-cont {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    align-items: flex-start;

    & > * {
      flex-shrink: 0;
    }
  }

  .section-cards-cont {
    .card {
      max-width: 260px;
    }
  }

  .section-modal-cont {
    .modal {
      position: relative;
      top: 0;
      left: 0;
      transform: translate(0, 0);
      opacity: 1;
      pointer-events: visible;
    }
  }

  .comp-grp-modal {
    & > h3 {
      font-size: 15px;
      font-weight: 500;
      margin-bottom: 10px;
    }

    margin-bottom: 25px;
  }
}

.section-cont {
  & > h2 {
    margin: 15px 0;
    font-weight: 500;
  }
}

// 12. 슬라이드 관련 스타일
.main-swiper-container-frame {
  width: 100%;
  height: 485px;
  overflow: hidden;
  position: relative;

  .swiper-container {
    position: absolute;
    top: -954.3%;
    width: 100%;
  }
}

.main-swiper-container {
  .swiper-slide {
    padding: 0 20px;
    .info-card {
      position: relative;
      border: 1px solid #dddee6;
      box-shadow: none;
      cursor: pointer;
      z-index: 10;

      @include make-before {
        @include absolute($t: -1px, $l: -1px);

        width: calc(100% + 2px);
        height: calc(100% + 2px);
        background-color: white;
        z-index: 10;
        opacity: 0.4;
        transition: all 0.3s;
      }
    }
  }

  .swiper-slide-active {
    .info-card {
      box-shadow: 0 10px 20px rgb(23 24 32 / 8%);
      z-index: 20;

      &:before {
        display: none;
      }
    }
  }
}
</style>
