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
        
        <ul class="mypage-snav-grp">
          <!-- 대시보드 -->
          <li class="mypage-snav-list">
            <router-link
              class="mypage-snav-btn"
              to="/startup/mypage/dashboard-main"
              :class="{'router-link-active': $route.path.startsWith(`/startup/mypage/dashboard-`)}"
            >
              <span class="txt">대시보드</span>
              <i class="arrow" />
            </router-link>
          </li>

          <!-- 내 정보 -->
          <li class="mypage-snav-list">
            <router-link
              class="mypage-snav-btn"
              to="/startup/mypage/myinfo-main"
            >
              <span class="txt">내 정보</span>
              <i class="arrow" />
            </router-link>
          </li>
          
          <!-- 기업정보 -->
          <li
            class="mypage-snav-list" 
            :class="{'is-active': $route.path.startsWith(`/startup/mypage/etpr-`)}"
          >
            <router-link
              to="/startup/mypage/etpr-default-info"
              class="mypage-snav-btn"
              :class="{'router-link-active': $route.path.startsWith(`/startup/mypage/etpr-`)}"
            >
              <span class="txt">기업정보</span>
              <i class="arrow" />
            </router-link>

            <div
              class="mypage-snav-lnb-grp"
            >
              <router-link
                class="lnb-btn"
                to="/startup/mypage/etpr-default-info"
                :class="{'router-link-active': $route.path.startsWith(`/startup/mypage/etpr-default-info`)}"
              >
                기본정보
              </router-link>
              
              <router-link
                class="lnb-btn"
                to="/startup/mypage/etpr-detail-info"
                :class="{'router-link-active': $route.path.startsWith(`/startup/mypage/etpr-detail-info`)}"
              >
                상세정보
              </router-link>
              
              <router-link
                class="lnb-btn"
                to="/startup/mypage/etpr-document-manage"
              >
                제출서류 관리
              </router-link>
              
              <router-link
                class="lnb-btn"
                to="/startup/mypage/etpr-member-manage"
              >
                구성원 관리
              </router-link>
              
              <router-link
                class="lnb-btn"
                to="/startup/mypage/etpr-group-manage"
              >
                그룹 관리
              </router-link>
            </div>
          </li>
          
          <!-- 관심기업 -->
          <li class="mypage-snav-list">
            <router-link
              to="/startup/mypage/fav-list"
              class="mypage-snav-btn"
            >
              <span class="txt">관심기업</span>
              <i class="arrow" />
            </router-link>
          </li>
          
          <!-- 최근 조회한 기업 -->
          <li class="mypage-snav-list">
            <router-link
              to="/startup/mypage/recent-list"
              class="mypage-snav-btn"
            >
              <span class="txt">최근 조회한 기업</span>
              <i class="arrow" />
            </router-link>
          </li>
          
          <!-- 팩트체크 -->
          <li
            class="mypage-snav-list"
            :class="{'is-active': $route.path.startsWith(`/startup/mypage/ftck-`)}"
          >
            <router-link
              to="/startup/mypage/ftck-apply-main"
              class="mypage-snav-btn"
              :class="{'router-link-active': $route.path.startsWith(`/startup/mypage/ftck-`)}"
            >
              <span class="txt">팩트체크</span>
              <i class="arrow" />
            </router-link>

            <div
              class="mypage-snav-lnb-grp"
            >
              <router-link
                class="lnb-btn"
                to="/startup/mypage/ftck-apply-main"
              >
                팩트체커 신청
              </router-link>
              
              <router-link
                class="lnb-btn"
                to="/startup/mypage/ftck-list"
              >
                우리 회사가 받은 팩트체크
              </router-link>
            </div>
          </li>
          
          <!-- 쪽지함 -->
          <li class="mypage-snav-list">
            <router-link
              to="/startup/mypage/note-list"
              class="mypage-snav-btn"
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
  name: 'SMypage',
  data() {
    return{
      testNav: [
        {
          gnb: '대시보드',
          lnb: null,
          visible: false,
        },
        {
          gnb: '내 정보',
          lnb: null,
          visible: false,
        },
        {
          gnb: '기업정보',
          lnb: ['기본정보', '상세정보', '제출서류 관리', '구성원 관리'],
          visible: false,
        },
      ],
    };
  },
  methods: {
    // 왼쪽 사이드네비게이션 클릭시 아코디언 효과
    clickSideNavBtn(data, index) {
      this.testNav.forEach(x => {
        if(!this.testNav[index].visible) {
          x.visible = false;
        }
      });

      data.visible = !data.visible;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>