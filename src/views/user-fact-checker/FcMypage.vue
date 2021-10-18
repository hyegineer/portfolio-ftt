<template>
  <div class="page mypage-page">
    <layout-header />

    <layout-mypage>
      <layout-mypage-side-nav>
        <div class="mypage-snav-ttl-grp">
          <h1 class="ttl">
            마이페이지
          </h1>
        </div>

        <!-- 소속된 기업이 없을 때 -->
        <div style="display: none;">
          <span class="mypage-snav-ttl-sub">소속된 기업이 없습니다.</span>

          <ul class="mypage-snav-grp">
            <li class="mypage-snav-list">
              <router-link
                class="mypage-snav-btn"
                to="/fact-checker/mypage/wating-main"
                :class="{'router-link-active': $route.path.startsWith(`/fact-checker/mypage/wating-`)}"
              >
                <span class="txt">내 정보</span>
                <i class="arrow" />
              </router-link>
            </li>
          </ul>
        </div>
        <!-- // 소속된 기업이 없을 때 -->
        
        <!-- 투자자: 소속된 기업이 있을 때 -->
        <div class="avatar-with-name">
          <avatar />
          <div class="name-grp">
            <span class="name-user-type">개인 투자자</span>
            <span class="name">
              투자 컴퍼니
            </span>
          </div>
        </div>
        <!-- // 투자자: 소속된 기업이 있을 때 -->

        <!-- 스타트업: 소속된 기업이 있을 때 -->
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
        <!-- // 스타트업: 소속된 기업이 있을 때 -->
        
        <ul class="mypage-snav-grp">
          <!-- 내 정보 -->
          <li class="mypage-snav-list">
            <router-link
              class="mypage-snav-btn"
              to="/fact-checker/mypage/myinfo-main"
              :class="{'router-link-active': $route.path.startsWith(`/fact-checker/mypage/myinfo-`)}"
            >
              <span class="txt">내 정보</span>
              <i class="arrow" />
            </router-link>
          </li>
          
          <!-- 팩트체크 -->
          <li
            class="mypage-snav-list"
            :class="{'is-active': $route.path.startsWith(`/fact-checker/mypage/ftck-`)}"
          >
            <router-link
              to="/fact-checker/mypage/ftck-my-list"
              class="mypage-snav-btn"
              :class="{'router-link-active': $route.path.startsWith(`/fact-checker/mypage/ftck-`)}"
            >
              <span class="txt">팩트체크</span>
              <i class="arrow" />
            </router-link>

            <div
              class="mypage-snav-lnb-grp"
            >
              <router-link
                class="lnb-btn"
                to="/fact-checker/mypage/ftck-my-list"
                :class="{'router-link-active': $route.path.startsWith(`/fact-checker/mypage/ftck-my`)}"
              >
                나의 팩트체크
              </router-link>

              <router-link
                class="lnb-btn"
                to="/fact-checker/mypage/ftck-total-list"
                :class="{'router-link-active': $route.path.startsWith(`/fact-checker/mypage/ftck-total`)}"
              >
                전체 팩트체크
              </router-link>
            </div>
          </li>
          
          <!-- 포인트 -->
          <li
            class="mypage-snav-list"
          >
            <router-link
              to="/fact-checker/mypage/point-main"
              class="mypage-snav-btn"
            >
              <span class="txt">포인트 관리</span>
              <i class="arrow" />
            </router-link>
          </li>
          
          <!-- 기업회원 등록 -->
          <li
            class="mypage-snav-list"
          >
            <router-link
              to="/fact-checker/mypage/enroll-list"
              class="mypage-snav-btn"
              :class="{'router-link-active': $route.path.startsWith(`/fact-checker/mypage/enroll-`)}"
            >
              <span class="txt">기업회원 등록</span>
              <i class="arrow" />
            </router-link>
          </li>
        </ul>
        <!-- // 소속된 기업이 있을 때 -->
      </layout-mypage-side-nav>

      <layout-mypage-container>
        <keep-alive
          :include="keepAlive"
        >
          <router-view />
        </keep-alive>

        <layout-footer />
      </layout-mypage-container>
    </layout-mypage>
  </div>
</template>

<script>
export default {
  name: 'FcMypage',
};
</script>

<style lang="scss" scoped>
</style>