<template>
  <div class="page">
    <layout-header />
    <div class="page-container">
      <!-- section-visual -->
      <section class="section-visual">
        <div class="obj-wrap">
          <img
            src="@/assets/images/img/obj-factsheet.png"
            alt="object"
            class="obj01"
          >
        </div>
        <div class="wide-panel">
          <i class="icon icon-factsheet" />
          <div class="main-hgrp">
            <p class="ttl-sub">
              투자할 만한 스타트업 찾기
            </p>
            <h4 class="ttl">
              투자의 혁신 <b class="bold-txt">팩트시트</b>
            </h4>
          </div>
          <div class="hd-search-grp main-search-grp">
            <custom-slct
              class="custom-slct01 slct-depth01"
              :selected="hdSearchOptions.depth01"
            >
              <template #select>
                <span class="word">
                  {{ hdSearchOptions.depth01 || '산업분류 전체' }}
                </span>
              </template>

              <template #options>
                <custom-slct-opt
                  @click="hdSearchOptions.depth01 = '산업분류 1'"
                >
                  산업분류 1
                </custom-slct-opt>

                <custom-slct-opt
                  @click="hdSearchOptions.depth01 = '산업분류 2'"
                >
                  산업분류 2
                </custom-slct-opt>
              </template>
            </custom-slct>

            <custom-slct
              class="custom-slct01 slct-depth02"
              :selected="hdSearchOptions.depth02"
            >
              <template #select>
                <span class="word">
                  {{ hdSearchOptions.depth02 || '산업분야 전체' }}
                </span>
              </template>

              <template #options>
                <custom-slct-opt
                  @click="hdSearchOptions.depth02 = '산업분야 1'"
                >
                  산업분야 1
                </custom-slct-opt>

                <custom-slct-opt
                  @click="hdSearchOptions.depth02 = '산업분야 2'"
                >
                  산업분야 2
                </custom-slct-opt>
              </template>
            </custom-slct>

            <div class="inp-grp inp-sch-grp">
              <input
                v-model="hdSearchOptions.keyword"
                type="text"
                class="inp inp-strong"
                placeholder="스타트업 검색"
              >
              <button
                v-if="hdSearchOptions.keyword"
                type="button"
                class="inp-del-btn"
                @click="hdSearchOptions.keyword = ''"
              >
                <span class="is-voice-only">검색어 지우기</span>
              </button>
              <button
                type="button"
                class="inp-sch-btn"
                @click="$router.push('/search-result/1')"
              >
                <span class="is-voice-only">검색하기</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <!-- END section-visual -->

      <!-- section-join -->
      <section
        class="section-join"
      >
        <div class="wide-panel">
          <div class="join-grp">
            <div class="join-list list-startup">
              <p class="role-ttl">
                스타트업
              </p>
              <p class="role-sub">
                우리 회사 정보 관리하기
              </p>
              <p class="role-dec">
                투자가 필요하신가요?<br>
                투자 받기 전에도 투자 받은 후에도<br>
                우리 기업의 정보를 관리하고 자동 보고합니다.<br>
                누구나 신뢰할 수 있게 팩트시트를 채워주세요.
              </p>
              <router-link
                to="/register-intro-startup"
                class="role-link"
              >
                회원가입
              </router-link>
            </div>
            <div class="join-list list-investor">
              <p class="role-ttl">
                투자자
              </p>
              <p class="role-sub">
                포트폴리오 관리하기
              </p>
              <p class="role-dec">
                관리할 인력은 부족한데<br>
                투자 기업 찾기 어렵고 관리할 투자 기업이 많다면<br>
                팩트시트에게 관리를 맡기세요.<br>
                엄밀하게 검수한 정보만 투자자에게 보여드립니다.
              </p>
              <router-link
                to="/register-intro-investor"
                class="role-link"
              >
                회원가입
              </router-link>
            </div>
            <div class="join-list list-fact-checker">
              <p class="role-ttl">
                팩트체커
              </p>
              <p class="role-sub">
                기업 정밀 관리사가 되어보세요!
              </p>
              <p class="role-dec">
                투자 전후 기업들의 정보를 엄밀하게 점검하고<br>
                수익을 창출할 수 있습니다.<br>
                투자자를 도와, 투자 기업들의 정보를 직접 확인하고<br>
                관리합니다.
              </p>
              <router-link
                to="/register-fact-checker"
                class="role-link"
              >
                회원가입
              </router-link>
            </div>
          </div>
        </div>
      </section>
      <!-- END section-join -->
      <!-- section-video -->
      <section class="section-video">
        <div class="wide-panel">
          <div class="video-hgrp">
            <img
              src="@/assets/images/badge/badge-video.svg"
              alt="비디오"
              class="badge-flag"
            >
            <img
              src="@/assets/images/logo/logo-word-wh.svg"
              alt="Factsheet"
              class="logo-word-wh"
            >
            <h3 class="ttl">
              팩트체크 현장
            </h3>
            <p class="dec">
              영상설명 간략한 2~3줄 텍스트가 필요합니다.<br>
              영상설명 간략한 2~3줄 텍스트가 필요합니다.<br>
              영상설명 간략한 2~3줄 텍스트가 필요합니다.<br>
            </p>
          </div>
          <!-- TODO: 비디오 삽입되는 영역 -->
          <div
            class="video-cont"
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/85ULJf-ShV8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>
      </section>
      <!-- END section-video -->
      <!-- section-recent-review -->
      <section class="section-recent-review">
        <div class="wide-panel">
          <div class="recent-review-hgrp">
            <img
              src="@/assets/images/badge/badge-review.svg"
              alt="최근 등록한 리뷰"
              class="badge-flag"
            >
            <h3 class="ttl">
              최근 등록된 리뷰
            </h3>
            <p class="dec">
              투자자가 등록한 리뷰를 참고하여<br>
              원하는 스타트업을 찾아보세요!
            </p>
          </div>
          <div class="slide-grp">
            <div
              v-swiper:recentSlide="recentOptions"
              class="swiper-container recent-container"
            >
              <div class="swiper-wrapper recent-review-wrapper">
                <div
                  v-for="(item, idx) in 10"
                  :key="idx"
                  class="swiper-slide"
                >
                  <div
                    class="review-card"
                  >
                    <div class="top-info-grp">
                      <div class="left-box">
                        <p class="name">
                          익명
                        </p>
                        <p class="role">
                          개인 투자자
                        </p>
                      </div>
                      <div class="right-box">
                        <div class="hover-desc">
                          <span
                            class="hover-overlay mb-show"
                          />

                          <div
                            class="star-txt"
                          >
                            <i class="icon icon-star" />
                            <span class="txt">4.3</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="cont-grp">
                      <p class="review-cont">
                        투자자 리뷰 텍스트 자리입니다. 최대 6줄까지 표시하고 그이후로는 말줄임표로 생략합니다. 투자자 리뷰 텍스트 자리입니다. 최대 6줄까지 표시하고
                        투자자 리뷰 텍스트 자리입니다. 최대 6줄까지 표시하고 그이후로는 말줄임표로 생략합니다. 투자자 리뷰 텍스트 자리입니다. 최대 6줄까지 표시하고
                      </p>
                      <p class="review-date">
                        2021.00.00 00:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="recent-btn-grp">
                <div class="swiper-button-prev recent-btn-prev" />
                <div class="swiper-button-next recent-btn-next" />
                <button
                  type="button"
                  class="recent-btn recent-btn-pause"
                  @click="recentSlide.autoplay.stop()"
                />
                <button
                  type="button"
                  class="recent-btn recent-btn-play"
                  @click="recentSlide.autoplay.start()"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- END section-recent-review -->
      <!-- section-subscribe -->
      <section class="section-subscribe">
        <div class="wide-panel">
          <div class="subscribe-hgrp">
            <img
              src="@/assets/images/badge/badge-subs.svg"
              alt="최근 등록한 리뷰"
              class="badge-flag"
            >
            <h3 class="ttl">
              이메일 주소만 입력하면<br>
              팩트시트 최신소식을 받아보실 수 있습니다!
            </h3>
          </div>
          <div>
            <div class="chk-grp">
              <input
                id="check-box"
                type="checkbox"
                class="is-none check-switch"
              >
              <label
                for="check-box"
                class="check-onoff"
              />
              <label
                for="check-box"
                class="check-box-lb"
              >개인정보 취급방침에 동의합니다.</label>
            </div>
            <div class="inp-grp inp-btn-grp">
              <div class="inp-grp inp-time-grp">
                <input
                  type="text"
                  class="inp"
                  placeholder="구독하실 이메일 주소를 입력해주세요!"
                >
              </div>

              <btn-solid-dark
                class="btn-md"
              >
                구독하기
              </btn-solid-dark>
            </div>
          </div>
        </div>
      </section>
      <!-- END section-subscribe -->
    </div>
    <layout-footer />
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      viewSearchbar: false,
      hdSearchOptions: { // 검색바에 custom-select 동작을 구현하기위한 더미데이터
        depth01: null,
        depth02: null,
        keyword: '',
      },
      // swiperOptions: {
      //   grabCursor: true,
      //   loop: true,
      //   slidesPerView: 'auto',
      //   centeredSlides: true,
      //   direction: 'vertical',
      //   effect: 'coverflow',
      //   coverflowEffect: {
      //     rotate: 0,
      //     stretch: 435,
      //     depth: 180,
      //     modifier: 1,
      //     slideShadows: false,
      //   },
      //   navigation: {
      //     nextEl: '.swiper-button-next',
      //     prevEl: '.swiper-button-prev',
      //   },
      //   pagination: {
      //     el: '.swiper-pagination',
      //     type: 'bullets',
      //     clickable: true,
      //   },
      // },
      recentOptions: {
        autoplay: true,
        loop: true,
        slidesPerView: 5.5,
        spaceBetween: 10,
        navigation: {
          nextEl: '.recent-btn-next',
          prevEl: '.recent-btn-prev',
        },

      },
    };
  },
  methods: {
    viewSearchbarToggle() {
      this.viewSearchbar = !this.viewSearchbar;
      this.hdSearchOptions = {
        depth01: null,
        depth02: null,
        keyword: '',
      };
    },
  },
};
</script>

<style>
</style>
