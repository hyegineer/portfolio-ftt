<template>
  <!-- [D] 마이페이지 - 기업정보-기본정보 수정 -->
  <div class="mypage-container mypage-default-info-container">
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
          기업정보
        </li>
        <li class="txt">
          기본정보 수정
        </li>
      </breadcrumb>

      <h2 class="ttl">
        기업정보
      </h2>
    </div>
    <!-- // 마이페이지 페이지 제목 -->

    <!-- 마이페이지 컨텐츠 영역 -->
    <div class="mypage-cont-wrap">
      <div class="mypage-common-card">
        <div class="cont-hgrp">
          <p class="ttl">
            기본정보 수정
          </p>
          <p class="ttl-sub">
            기업 프로필의 기본정보를 수정합니다.
          </p>
        </div>
        <div class="form-area">
          <div class="article-wrap profile-image-wrap">
            <div class="cont-wrap">
              <fieldset class="ffieldset">
                <legend class="ffieldset-ttl">
                  프로필 이미지
                </legend>
                <div class="flex-row-grp">
                  <div class="file-inp-grp">
                    <label class="lbel">기업 로고</label>
                    <div class="inp-grp">
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
                    </div>
                    <p class="ffieldset-guide">
                      해상도 100*100px 이상의 JPG, PNG 파일을 첨부해주세요. <br>
                      이미지 미첨부시, 기본이미지로 설정됩니다.
                    </p>
                  </div>

                  <div class="file-inp-grp">
                    <label class="lbel">대표 이미지</label>
                    <div class="inp-grp">
                      <!-- [D] 해당 DOM 클릭시 사진 업로드 & 수정 가능 -->
                      <div class="input-img-frame input-square-img-frame">
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
                    </div>
                    <p class="ffieldset-guide">
                      해상도 535*370px 이상의 JPG, PNG 파일을 첨부해주세요. <br>
                      이미지 미첨부시, 기본이미지로 설정됩니다.
                    </p>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
          <div class="article-wrap">
            <fieldset class="ffieldset">
              <legend class="ffieldset-ttl">
                기본정보
              </legend>
              <p class="ffieldset-guide">
                <span class="required">*</span> 표시된 정보는 필수입력사항입니다.
              </p>
              <div class="cont-wrap">
                <div class="flex-row-grp">
                  <div class="lbel-inp-grp">
                    <label class="lbel">기업명 <span class="required">*</span></label>
                    <div class="inp-grp">
                      <input
                        type="text"
                        class="inp"
                        value="주식회사 팩트컴퍼니"
                        disabled
                      >
                    </div>
                  </div>
                  <div class="lbel-inp-grp">
                    <label class="lbel">사업자번호 <span class="required">*</span></label>
                    <div class="inp-grp">
                      <input
                        type="text"
                        class="inp"
                        disabled
                        value="000-0000-0000"
                      >
                    </div>
                  </div>
                </div>
                <div class="flex-row-grp">
                  <div class="lbel-inp-grp">
                    <label class="lbel">대표자명 <span class="required">*</span></label>
                    <div class="inp-grp">
                      <input
                        type="text"
                        class="inp"
                        value="김철수"
                        disabled
                      >
                    </div>
                  </div>
                  <div class="lbel-inp-grp">
                    <label class="lbel">법인번호</label>
                    <div class="inp-grp">
                      <input
                        type="text"
                        class="inp"
                        placeholder="법인번호를 입력해주세요"
                      >
                    </div>
                  </div>
                </div>
                <div class="flex-row-grp">
                  <div class="lbel-inp-grp">
                    <label class="lbel">전화번호</label>
                    <div class="inp-grp">
                      <input
                        type="text"
                        class="inp"
                        placeholder="전화번호를 입력해주세요"
                      >
                    </div>
                  </div>
                  <div class="lbel-inp-grp">
                    <label class="lbel">홈페이지 주소</label>
                    <div class="inp-grp inp-icon-grp">
                      <i class="icon icon-link" />
                      <input
                        type="text"
                        class="inp"
                        placeholder="홈페이지 주소를 입력해주세요"
                      >
                    </div>
                  </div>
                </div>
                <div class="flex-row-grp">
                  <div class="lbel-inp-grp">
                    <label class="lbel">기업 고유 아이디</label>
                    <div class="inp-grp">
                      <input
                        type="text"
                        class="inp"
                        value="abcd123"
                        disabled
                      >
                    </div>
                  </div>
                  <div class="lbel-inp-grp" />
                </div>
              </div>
            </fieldset>
          </div>
          <div class="article-wrap">
            <fieldset class="ffieldset">
              <div class="cont-wrap">
                <div class="lbel-inp-grp">
                  <div class="lbel-wrap">
                    <label class="lbel">기업 한 줄 소개 <span class="required">*</span></label>
                    <small class="length-txt">(0/50)</small>
                  </div>
                  <div class="inp-grp">
                    <textarea
                      id=""
                      class="inp"
                      name=""
                      cols="30"
                      rows="1"
                      placeholder="기업 한 줄 소개를 입력해주세요. 기업 프로필에 노출됩니다."
                    />
                  </div>
                </div>
                <div class="lbel-inp-grp">
                  <div class="lbel-wrap">
                    <label class="lbel">기업 상세소개</label>
                    <small class="length-txt">(0/1000)</small>
                  </div>
                  <div class="inp-grp">
                    <textarea
                      id=""
                      class="inp"
                      name=""
                      cols="30"
                      rows="10"
                      placeholder="기업 상세소개를 입력해주세요. 기업 프로필에 노출됩니다."
                    />
                  </div>
                </div>
                <div class="flex-row-grp">
                  <div class="lbel-inp-grp">
                    <div class="lbel-toggle">
                      <label class="lbel">기업규모 <span class="required">*</span></label>
                    </div>

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
                  </div>
                  <div class="lbel-inp-grp">
                    <div class="lbel-toggle">
                      <label class="lbel">산업분류</label>

                      <!-- 토글 스위치 -->
                      <div class="toggle-item">
                        <label
                          class="tg-lbel"
                          for="open01"
                        >공개여부</label>
                        <input
                          id="open01"
                          type="checkbox"
                          class="is-none toggle-switch"
                        >
                        <label
                          for="open01"
                          class="toggle-onoff"
                        />
                      </div>
                      <!-- // 토글 스위치 -->
                    </div>

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
                  </div>
                  <div class="lbel-inp-grp">
                    <div class="lbel-toggle">
                      <label class="lbel">산업분야</label>

                      <!-- 토글 스위치 -->
                      <div class="toggle-item">
                        <label
                          class="tg-lbel"
                          for="open02"
                        >공개여부</label>
                        <input
                          id="open02"
                          type="checkbox"
                          class="is-none toggle-switch"
                        >
                        <label
                          for="open02"
                          class="toggle-onoff"
                        />
                      </div>
                      <!-- // 토글 스위치 -->
                    </div>

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
                  </div>
                </div>
              </div>
            </fieldset>
          </div>

          <div class="article-wrap border-remove">
            <fieldset class="ffieldset">
              <div class="flex-row-grp">
                <div class="lbel-inp-grp">
                  <div class="lbel-toggle">
                    <label class="lbel">설립일</label>

                    <!-- 토글 스위치 -->
                    <div class="toggle-item">
                      <label
                        class="tg-lbel"
                        for="open03"
                      >공개여부</label>
                      <input
                        id="open03"
                        type="checkbox"
                        class="is-none toggle-switch"
                      >
                      <label
                        for="open03"
                        class="toggle-onoff"
                      />
                    </div>
                    <!-- // 토글 스위치 -->
                  </div>
                  <div class="inp-grp">
                    <button
                      type="button"
                      class="inp inp-icon"
                    >
                      <i class="icon icon-cal" />
                      <span>2021.10.05</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="flex-row-grp">
                <div class="inp-grp inp-btn-grp lbel-inp-grp">
                  <label class="lbel">본사 주소</label>
                  <div class="inp-grp">
                    <input
                      type="text"
                      class="inp"
                      placeholder="기본주소"
                    >

                    <btn-bd class="btn-md">
                      주소찾기
                    </btn-bd>
                  </div>
                </div>
              </div>
              <div class="inp-grp">
                <input
                  type="text"
                  class="inp"
                  placeholder="상세주소"
                >
              </div>
              <div class="inp-half-grp">
                <div class="inp-grp inp-btn-grp lbel-inp-grp">
                  <label class="lbel">태그</label>
                  <div class="inp-grp">
                    <input
                      type="text"
                      class="inp"
                      placeholder="최대 8글자"
                    >

                    <btn-bd class="btn-md">
                      태그 추가
                    </btn-bd>
                  </div>
                  <p class="info-guide">
                    5개까지 등록이 가능합니다.
                  </p>
                </div>
                <div class="badge-wrap">
                  <badge-rounded
                    v-for="(item, idx) in 5"
                    :key="idx"
                  >
                    최대여덟글자입력
                  </badge-rounded>
                </div>
              </div>
            </fieldset>
          </div>
          <div
            position="double-centered"
            margin-top
            class="btn-grp"
          >
            <btn-bd-light
              class="btn-lg btn-full color-gray btn-prev"
              @click="window.alert('이전 버튼을 클릭하셨습니다.')"
            >
              이전
            </btn-bd-light>
            <btn-solid
              class="btn-lg btn-full"
              @click="window.alert('수정완료 버튼을 클릭하셨습니다.')"
            >
              수정완료
            </btn-solid>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- // 마이페이지 컨텐츠 영역 -->
</template>

<script>
export default {
  name: 'SEtprDefaultInfoEdit',
};
</script>

<style lang="scss" scoped>
</style>
