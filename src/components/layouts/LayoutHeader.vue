<template>
  <div class="header-wrap">
    <header class="header">
      <div class="header-inner">
        <div class="hd-left">
          <button
            type="button"
            class="btn-hamburger"
            @click="viewSidebar = true"
          >
            <i class="icon icon-hamburger" />
          </button>

          <div class="hd-logo-wrap">
            <h1 class="hd-logo">
              <router-link
                to="/"
                class="hd-logo-link"
              >
                <img
                  src="@/assets/images/logo/logo-bk.svg"
                  alt="logo"
                  class="hd-logo-img"
                >
              </router-link>
            </h1>
          </div>

          <div class="gnb-group">
            <router-link
              to="/notice"
              class="gnb-link"
            >
              공지사항
            </router-link>
            <router-link
              to="/faq"
              class="gnb-link"
            >
              자주 묻는 질문
            </router-link>
            <router-link
              to="/inquiry"
              class="gnb-link"
            >
              1:1문의
            </router-link>
            <!-- TODO: update-point 있으면 업데이트 표시 -->
            <router-link
              v-if="testIsUser && testUserType === 'startup'"
              to="/startup/mypage/note-list"
              class="gnb-link update-point"
            >
              쪽지함
            </router-link>

            <!-- TODO: update-point 있으면 업데이트 표시 -->
            <router-link
              v-if="testIsUser && testUserType === 'investor'"
              to="/investor/mypage/note-list"
              class="gnb-link update-point"
            >
              쪽지함
            </router-link>
          </div>

          <button
            type="button"
            class="btn-hd-search"
            @click="viewSearchbarToggle"
          >
            스타트업 검색
          </button>
        </div>

        <div class="hd-right">
          <!-- INFO: 로그인 전 -->
          <div
            v-if="!testIsUser"
            class="auth-wrap"
          >
            <router-link
              to="/login"
              class="auth-link"
            >
              로그인
            </router-link>

            <router-link
              to="/register-intro"
              class="auth-link"
            >
              회원가입
            </router-link>
          </div>
          <!-- INFO: END 로그인 전 -->

          <!-- INFO: 로그인 후 -->
          <div
            v-if="testIsUser"
            class="greeting-wrap"
          >
            <div class="greeting-name-wrap underline-color">
              <span class="greeting-name">{{ '이투자' }}</span>
              <span class="greeting-title">{{ testUserType === 'investor' || testUserType === 'startup' ? '님' : '팩트체커' }}</span>
            </div>

            <div
              v-if="testUserType === 'investor'"
              class="greeting-ment-wrap"
            >
              <span
                v-if="testUserType === 'investor' && testMembership"
                class="greeting-date"
              >
                멤버십 2021.12.31 까지
              </span>

              <span
                v-if="testUserType === 'investor' && !testMembership"
                class="greeting-ment"
              >
                <b class="bold-txt underline-bk">멤버십에 가입</b>해보세요!
              </span>
            </div>
          </div>
          <!-- INFO: END 로그인 후 -->
        </div>
      </div>

      <!-- search-bar -->
      <!-- TODO: is-active에 서치바 출력 -->
      <div
        class="hd-search-wrap"
        :class="{'is-active': viewSearchbar}"
      >
        <div class="hd-search-grp">
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

          <button
            type="button"
            class="btn close-btn"
            @click="viewSearchbarToggle"
          >
            <i class="icon icon-primary-close" />
          </button>
        </div>
      </div>
      <!-- END search-bar -->

      <!-- side-bar -->
      <div
        class="side-overlay"
        :class="{'is-active': viewSidebar}"
        @click="viewSidebar = false"
      />
      <!-- TODO: is-active에 사이드바 출력 -->
      <div
        class="hd-side-wrap"
        :class="{'is-active': viewSidebar}"
      >
        <div class="hd-side-inner">
          <div class="hd-side-top">
            <div class="btn-close-wrap">
              <button
                type="button"
                class="btn-close"
                @click="viewSidebar = false"
              >
                닫기
              </button>
            </div>
            <div
              v-if="testIsUser"
              class="btn-change-wrap"
            >
              <div
                v-if="testUserType === 'startup' || testUserType === 'investor'"
                class="btn-change-fact-checker"
              >
                <i class="icon icon-change" />
                <button
                  type="button"
                  class="btn-change"
                >
                  팩트체커로 전환하기
                </button>
              </div>
              <div
                v-if="testUserType === 'fact-checker'"
                class="btn-change-biz"
              >
                <i class="icon icon-change" />
                <button
                  type="button"
                  class="btn-change"
                >
                  기업회원으로 전환하기
                </button>
              </div>
            </div>
          </div>
          <div
            v-if="!testIsUser"
            class="hd-side-login-top"
          >
            <p class="dec">
              팩트시트에 <b class="bold-txt">회원가입</b> 하고<br>다양한 서비스를 이용해보세요!
            </p>
            <div class="auth-wrap">
              <router-link
                to="/login"
                class="auth-link"
              >
                로그인
              </router-link>
              <router-link
                to="/register-intro"
                class="auth-link"
              >
                회원가입
              </router-link>
            </div>
          </div>
          <div class="hd-side-bottom">
            <!-- 로그인 전 공용 메뉴 -->
            <div
              v-if="testIsUser === false"
              class="sidemenu-wrap"
            >
              <router-link
                to="/search-startup/1"
                class="sidemenu-link"
              >
                <span class="sidemenu-txt">스타트업 찾기</span>
              </router-link>
              <router-link
                to="/notice"
                class="sidemenu-link"
              >
                <span class="sidemenu-txt">공지사항</span>
              </router-link>
              <router-link
                to="/faq"
                class="sidemenu-link"
              >
                <span class="sidemenu-txt">자주 묻는 질문</span>
              </router-link>
              <div class="sidemenu-grp">
                <router-link
                  to="/inquiry"
                  class="sidemenu-link"
                >
                  <span class="sidemenu-txt">1:1문의</span>
                </router-link>
                <div class="sidemenu-depth2-wrap">
                  <div class="sidemenu-depth2">
                    <router-link
                      to="/inquiry"
                      class="link"
                    >
                      문의하기
                    </router-link>
                  </div>
                </div>
              </div>
              <router-link
                to="/policy-guide"
                class="sidemenu-link"
              >
                <span class="sidemenu-txt">약관</span>
              </router-link>
            </div>
            <!-- END 로그인 전 공용 메뉴 -->

            <!-- 투자자 회원일 때 -->
            <div
              v-if="testIsUser && testUserType === 'investor'"
              class="sidemenu-wrap"
            >
              <router-link
                to="/search-startup/1"
                class="sidemenu-link"
              >
                <span class="sidemenu-txt">스타트업 찾기</span>
              </router-link>
              <div
                v-if="testIsUser"
                class="sidemenu-grp"
              >
                <router-link
                  to="/investor/mypage/dashboard-main"
                  class="sidemenu-link"
                >
                  <span class="sidemenu-txt">마이페이지</span>
                </router-link>
                <div class="sidemenu-depth2-wrap">
                  <div
                    class="sidemenu-depth2"
                  >
                    <router-link
                      to="/investor/mypage/dashboard-main"
                      class="link"
                    >
                      대시보드
                    </router-link>
                  </div>
                  <div class="sidemenu-depth2">
                    <router-link
                      to="/investor/mypage/myinfo-main"
                      class="link"
                    >
                      내정보
                    </router-link>
                  </div>
                  <div
                    class="sidemenu-depth2"
                  >
                    <router-link
                      to="/investor/mypage/etpr-default-info"
                      class="link"
                    >
                      기업정보
                    </router-link>
                  </div>
                  <div
                    class="sidemenu-depth2"
                  >
                    <router-link
                      to="/investor/mypage/fav-list"
                      class="link"
                    >
                      관심기업
                    </router-link>
                  </div>
                  <div
                    class="sidemenu-depth2"
                  >
                    <router-link
                      to="/investor/mypage/recent-list"
                      class="link"
                    >
                      최근조회기업
                    </router-link>
                  </div>
                  <div class="sidemenu-depth2">
                    <router-link
                      to="/investor/mypage/ftck-apply-main"
                      class="link"
                    >
                      팩트체크
                    </router-link>
                  </div>
                  <div
                    class="sidemenu-depth2"
                  >
                    <router-link
                      to="/investor/mypage/point-main"
                      class="link"
                    >
                      포인트
                    </router-link>
                  </div>
                  <div
                    class="sidemenu-depth2"
                  >
                    <router-link
                      to="/investor/mypage/note-list"
                      class="link"
                    >
                      쪽지함
                    </router-link>
                  </div>
                </div>
              </div>
              <router-link
                to="/notice"
                class="sidemenu-link"
              >
                <span class="sidemenu-txt">공지사항</span>
              </router-link>
              <router-link
                to="/faq"
                class="sidemenu-link"
              >
                <span class="sidemenu-txt">자주 묻는 질문</span>
              </router-link>
              <div class="sidemenu-grp">
                <router-link
                  to="/inquiry"
                  class="sidemenu-link"
                >
                  <span class="sidemenu-txt">1:1문의</span>
                </router-link>
                <div class="sidemenu-depth2-wrap">
                  <div class="sidemenu-depth2">
                    <router-link
                      to="/inquiry"
                      class="link"
                    >
                      문의하기
                    </router-link>
                  </div>
                  <div
                    v-if="testIsUser"
                    class="sidemenu-depth2"
                  >
                    <router-link
                      to="/inquiry-history"
                      class="link"
                    >
                      문의내역
                    </router-link>
                  </div>
                </div>
              </div>
              <router-link
                to="/policy-guide"
                class="sidemenu-link"
              >
                <span class="sidemenu-txt">약관</span>
              </router-link>
            </div>
            <!-- END 투자자 회원일 때 -->

            <!-- 스타트업 회원일 때 -->
            <div
              v-if="testIsUser && testUserType === 'startup'"
              class="sidemenu-wrap"
            >
              <router-link
                to="/search-startup/1"
                class="sidemenu-link"
              >
                <span class="sidemenu-txt">스타트업 찾기</span>
              </router-link>
              <div
                v-if="testIsUser"
                class="sidemenu-grp"
              >
                <router-link
                  to="/startup/mypage/dashboard-main"
                  class="sidemenu-link"
                >
                  <span class="sidemenu-txt">마이페이지</span>
                </router-link>
                <div class="sidemenu-depth2-wrap">
                  <div
                    class="sidemenu-depth2"
                  >
                    <router-link
                      to="/startup/mypage/dashboard-main"
                      class="link"
                    >
                      대시보드
                    </router-link>
                  </div>
                  <div class="sidemenu-depth2">
                    <router-link
                      to="/startup/mypage/myinfo-main"
                      class="link"
                    >
                      내정보
                    </router-link>
                  </div>
                  <div
                    class="sidemenu-depth2"
                  >
                    <router-link
                      to="/startup/mypage/etpr-default-info"
                      class="link"
                    >
                      기업정보
                    </router-link>
                  </div>
                  <div
                    class="sidemenu-depth2"
                  >
                    <router-link
                      to="/startup/mypage/fav-list"
                      class="link"
                    >
                      관심기업
                    </router-link>
                  </div>
                  <div
                    class="sidemenu-depth2"
                  >
                    <router-link
                      to="/startup/mypage/recent-list"
                      class="link"
                    >
                      최근조회기업
                    </router-link>
                  </div>
                  <div class="sidemenu-depth2">
                    <router-link
                      to="/startup/mypage/ftck-apply-main"
                      class="link"
                    >
                      팩트체크
                    </router-link>
                  </div>
                  <div
                    class="sidemenu-depth2"
                  >
                    <router-link
                      to="/startup/mypage/note-list"
                      class="link"
                    >
                      쪽지함
                    </router-link>
                  </div>
                </div>
              </div>
              <router-link
                to="/notice"
                class="sidemenu-link"
              >
                <span class="sidemenu-txt">공지사항</span>
              </router-link>
              <router-link
                to="/faq"
                class="sidemenu-link"
              >
                <span class="sidemenu-txt">자주 묻는 질문</span>
              </router-link>
              <div class="sidemenu-grp">
                <router-link
                  to="/inquiry"
                  class="sidemenu-link"
                >
                  <span class="sidemenu-txt">1:1문의</span>
                </router-link>
                <div class="sidemenu-depth2-wrap">
                  <div class="sidemenu-depth2">
                    <router-link
                      to="/inquiry"
                      class="link"
                    >
                      문의하기
                    </router-link>
                  </div>
                  <div
                    v-if="testIsUser"
                    class="sidemenu-depth2"
                  >
                    <router-link
                      to="/inquiry-history"
                      class="link"
                    >
                      문의내역
                    </router-link>
                  </div>
                </div>
              </div>
              <router-link
                to="/policy-guide"
                class="sidemenu-link"
              >
                <span class="sidemenu-txt">약관</span>
              </router-link>
            </div>
            <!-- END 스타트업 회원일 때 -->

            <!-- 팩트체커 회원일 때 -->
            <div
              v-if="testIsUser && testUserType === 'fact-checker'"
              class="sidemenu-wrap"
            >
              <router-link
                to="/search-startup/1"
                class="sidemenu-link"
              >
                <span class="sidemenu-txt">스타트업 찾기</span>
              </router-link>
              <div
                v-if="testIsUser"
                class="sidemenu-grp"
              >
                <router-link
                  to="/fact-checker/mypage/myinfo-main"
                  class="sidemenu-link"
                >
                  <span class="sidemenu-txt">마이페이지</span>
                </router-link>
                <div class="sidemenu-depth2-wrap">
                  <div class="sidemenu-depth2">
                    <router-link
                      to="/fact-checker/mypage/myinfo-main"
                      class="link"
                    >
                      내정보
                    </router-link>
                  </div>
                  <div class="sidemenu-depth2">
                    <router-link
                      to="/fact-checker/mypage/ftck-my-list"
                      class="link"
                    >
                      팩트체크
                    </router-link>
                  </div>
                  <div
                    class="sidemenu-depth2"
                  >
                    <router-link
                      to="/fact-checker/mypage/point-main"
                      class="link"
                    >
                      포인트 관리
                    </router-link>
                  </div>
                  <div
                    class="sidemenu-depth2"
                  >
                    <router-link
                      to="/fact-checker/mypage/enroll-list"
                      class="link"
                    >
                      기업회원 등록
                    </router-link>
                  </div>
                </div>
              </div>
              <router-link
                to="/notice"
                class="sidemenu-link"
              >
                <span class="sidemenu-txt">공지사항</span>
              </router-link>
              <router-link
                to="/faq"
                class="sidemenu-link"
              >
                <span class="sidemenu-txt">자주 묻는 질문</span>
              </router-link>
              <div class="sidemenu-grp">
                <router-link
                  to="/inquiry"
                  class="sidemenu-link"
                >
                  <span class="sidemenu-txt">1:1문의</span>
                </router-link>
                <div class="sidemenu-depth2-wrap">
                  <div class="sidemenu-depth2">
                    <router-link
                      to="/inquiry"
                      class="link"
                    >
                      문의하기
                    </router-link>
                  </div>
                  <div
                    v-if="testIsUser"
                    class="sidemenu-depth2"
                  >
                    <router-link
                      to="/inquiry-history"
                      class="link"
                    >
                      문의내역
                    </router-link>
                  </div>
                </div>
              </div>
              <router-link
                to="/policy-guide"
                class="sidemenu-link"
              >
                <span class="sidemenu-txt">약관</span>
              </router-link>
            </div>
            <!-- END 팩트체커 회원일 때 -->

            <div
              v-if="testIsUser"
              class="btn-logout-wrap"
            >
              <i class="icon icon-logout" />
              <button
                type="button"
                class="btn btn-logout"
              >
                로그아웃
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
  <!-- END sidemenu-bar -->
</template>

<script>
export default {
  name: 'LayoutHeader',
  data() {
    return {
      testIsUser: true,
      testUserType: 'investor', // startup, investor, fact-checker
      testMembership: false,
      viewSearchbar: false,
      viewSidebar: false,
      hdSearchOptions: { // 상단 검색바에 custom-select 동작을 구현하기위한 더미데이터
        depth01: null,
        depth02: null,
        keyword: '',
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
