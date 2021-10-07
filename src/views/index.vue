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
              >
                <span class="is-voice-only">검색하기</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <!-- END section-visual -->

      <!-- section-join -->
      <section class="section-join">
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
              <a
                href="#"
                class="role-link"
              >회원가입</a>
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
              <a
                href="#"
                class="role-link"
              >회원가입</a>
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
              <a
                href="#"
                class="role-link"
              >회원가입</a>
            </div>
          </div>
        </div>
      </section>
      <!-- END section-join -->
      <!-- section-slide -->
      <section class="section-slide">
        <div class="wide-panel">
          <div
            v-swiper:factSlide="swiperOptions"
            class="swiper-container"
          >
            <div class="swiper-wrapper">
              <div
                v-for="(item, idx) in 5"
                :key="idx"
                class="swiper-slide"
              >
                <div class="section-cont">
                  <div class="info-card">
                    <div class="card-thumb card-thumb-lg">
                      <thumbnail lg />
                      <span class="ribbon">정보 업데이트</span>
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
              </div>
            </div>
            <div class="swiper-button-next" />
            <div class="swiper-button-prev" />
            <div class="swiper-pagination" />
          </div>
        </div>
      </section>
      <!-- END section-slide -->
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
      hdSearchOptions: {
        depth01: null,
        depth02: null,
        keyword: '',
      },
      swiperOptions: { 
        loop: true,
        autoplay: false,
        effect: 'coverflow',
        slidesPerView: 3,
        direction: 'vertical',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
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