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
        
        <div class="avatar-with-name">
          <avatar />
          <div class="name-grp">
            <span class="name-user-type">개인 투자자</span>
            <span class="name">
              투자 컴퍼니
            </span>
          </div>
        </div>
        
        <ul class="mypage-snav-grp">
          <!-- 대시보드 -->
          <li class="mypage-snav-list">
            <router-link
              class="mypage-snav-btn"
              to="/investor/mypage/dashboard-main"
              :class="{'router-link-active': $route.path.startsWith(`/investor/mypage/dashboard-`)}"
            >
              <span class="txt">대시보드</span>
              <i class="arrow" />
            </router-link>
          </li>

          <!-- 내 정보 -->
          <li class="mypage-snav-list">
            <router-link
              class="mypage-snav-btn"
              to="/investor/mypage/myinfo-main"
              :class="{'router-link-active': $route.path.startsWith(`/investor/mypage/myinfo-`)}"
            >
              <span class="txt">내 정보</span>
              <i class="arrow" />
            </router-link>
          </li>
          
          <!-- 기업정보 -->
          <li
            class="mypage-snav-list" 
            :class="{'is-active': $route.path.startsWith(`/investor/mypage/etpr-`)}"
          >
            <router-link
              to="/investor/mypage/etpr-default-info"
              class="mypage-snav-btn"
              :class="{'router-link-active': $route.path.startsWith(`/investor/mypage/etpr-`)}"
            >
              <span class="txt">기업정보</span>
              <i class="arrow" />
            </router-link>

            <div
              class="mypage-snav-lnb-grp"
            >
              <router-link
                class="lnb-btn"
                to="/investor/mypage/etpr-default-info"
                :class="{'router-link-active': $route.path.startsWith(`/investor/mypage/etpr-default-info`)}"
              >
                기본정보
              </router-link>

              <router-link
                class="lnb-btn"
                to="/investor/mypage/etpr-portfolio-main"
                :class="{'router-link-active': $route.path.startsWith(`/investor/mypage/etpr-portfolio-`)}"
              >
                포트폴리오
              </router-link>
              
              <router-link
                class="lnb-btn"
                to="/investor/mypage/etpr-member-manage"
              >
                구성원 관리
              </router-link>
              
              <router-link
                class="lnb-btn"
                to="/investor/mypage/etpr-group-manage"
              >
                그룹 관리
              </router-link>
            </div>
          </li>
          
          <!-- 관심기업 -->
          <li class="mypage-snav-list">
            <router-link
              to="/investor/mypage/fav-list"
              class="mypage-snav-btn"
            >
              <span class="txt">관심기업</span>
              <i class="arrow" />
            </router-link>
          </li>
          
          <!-- 최근 조회한 기업 -->
          <li class="mypage-snav-list">
            <router-link
              to="/investor/mypage/recent-list"
              class="mypage-snav-btn"
            >
              <span class="txt">최근 조회한 기업</span>
              <i class="arrow" />
            </router-link>
          </li>
          
          <!-- 포인트 -->
          <li
            class="mypage-snav-list"
            :class="{'is-active': $route.path.startsWith(`/investor/mypage/point-`) 
              || $route.path.startsWith(`/investor/mypage/membership-`)}"
          >
            <router-link
              to="/investor/mypage/point-main"
              class="mypage-snav-btn"
              :class="{'router-link-active': $route.path.startsWith(`/investor/mypage/point-`)
                || $route.path.startsWith(`/investor/mypage/membership-`)}"
            >
              <span class="txt">포인트</span>
              <i class="arrow" />
            </router-link>

            <div
              class="mypage-snav-lnb-grp"
            >
              <router-link
                class="lnb-btn"
                to="/investor/mypage/point-main"
                :class="{'router-link-active': $route.path.startsWith(`/investor/mypage/point-`)}"
              >
                포인트 충전/내역
              </router-link>

              <router-link
                class="lnb-btn"
                to="/investor/mypage/membership-main"
                :class="{'router-link-active': $route.path.startsWith(`/investor/mypage/membership-`)}"
              >
                멤버십 구매
              </router-link>
            </div>
          </li>
          
          <!-- 팩트체크 -->
          <li
            class="mypage-snav-list"
            :class="{'is-active': $route.path.startsWith(`/investor/mypage/ftck-`)}"
          >
            <router-link
              to="/investor/mypage/ftck-list"
              class="mypage-snav-btn"
              :class="{'router-link-active': $route.path.startsWith(`/investor/mypage/ftck-`)}"
            >
              <span class="txt">팩트체크</span>
              <i class="arrow" />
            </router-link>

            <div
              class="mypage-snav-lnb-grp"
            >
              <router-link
                class="lnb-btn"
                to="/investor/mypage/ftck-list"
                :class="{'router-link-active': $route.path.startsWith(`/investor/mypage/ftck-detail`)}"
              >
                요청한 팩트체크
              </router-link>

              <router-link
                class="lnb-btn"
                to="/investor/mypage/ftck-apply-main"
                :class="{'router-link-active': $route.path.startsWith(`/investor/mypage/ftck-apply`)}"
              >
                팩트체커 신청
              </router-link>
            </div>
          </li>
          
          <!-- 쪽지함 -->
          <li class="mypage-snav-list">
            <router-link
              to="/investor/mypage/note-list"
              class="mypage-snav-btn"
              :class="{'router-link-active': $route.path.startsWith(`/investor/mypage/note`)}"
            >
              <span class="txt">쪽지함</span>
              <i class="arrow" />
            </router-link>
          </li>
        </ul>
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
  name: 'IMypage',
};
</script>

<style lang="scss" scoped>
</style>