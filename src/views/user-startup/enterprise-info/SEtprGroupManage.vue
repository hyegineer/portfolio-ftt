<template>
  <!-- [D] 마이페이지 - 기업정보-그룹관리 -->
  <div class="mypage-container">
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
          그룹 관리
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
            그룹 관리
          </p>
          <p class="ttl-sub">
            우리 기업으로 가입한 직원 계정을 관리합니다.
          </p>
        </div>

        <article class="guide-box">
          <div class="guide-box-cont">
            <h6 class="lbel">
              안내사항
            </h6>
            <p class="txt">
              초대하기 링크로 가입시, 우리 기업의 소속으로 회원가입이 진행됩니다.
            </p>
          </div>

          <div class="btn-grp">
            <btn-solid-grayblue
              class="btn-sm"
              @click="alert('외부링크가 복사됩니다.')"
            >
              초대하기
            </btn-solid-grayblue>
          </div>
        </article>

        <div class="member-list-grp-ttl">
          <p class="txt">
            총 <span class="bold">0</span>명
          </p>
        </div>

        <!-- 그룹원이 있을 때 -->
        <div class="box-list-grp">
          <!-- [D] 그룹관리 계정일때는 is-active 클래스 추가 -->
          <div
            v-for="(item, index) in 1"
            :key="index"
            class="box-list box-grpmember-list is-active"
          >
            <span class="account-type">그룹관리 계정</span>
            
            <div class="account-info">
              <!-- [D] 신규신청일 때만 보임 -->
              <!-- <span class="tooltip-apply">신청일 2021.00.00</span> -->
            
              <p class="name">
                김철수
              </p>
              <span class="mail">id@idemail.com</span>
            </div>

            <div class="btn-grp">
              <btn-bd-light class="btn-xsm btn-rounded">
                관리자 해제
              </btn-bd-light>
            </div>
          </div>

          <!-- [D] 신규신청 계정일때 -->
          <div
            v-for="(item, index) in 1"
            :key="index"
            class="box-list box-grpmember-list"
          >
            <span class="account-type">신규신청 계정</span>
            
            <div class="account-info">
              <!-- [D] 신규신청일 때만 보임 -->
              <span class="tooltip-apply">신청일 2021.00.00</span>

              <p class="name">
                김철수
              </p>
              <span class="mail">id@idemail.com</span>
            </div>

            <div class="btn-grp">
              <btn-solid-dark class="btn-xsm btn-rounded">
                승인
              </btn-solid-dark>
              <btn-bd-red class="btn-xsm btn-rounded">
                거절
              </btn-bd-red>
            </div>
          </div>

          <!-- [D] 그룹소속 계정일때 -->
          <div
            v-for="(item, index) in 1"
            :key="index"
            class="box-list box-grpmember-list"
          >
            <span class="account-type">그룹소속 계정</span>
            
            <div class="account-info">
              <!-- [D] 신규신청일 때만 보임 -->
              <!-- <span class="tooltip-apply">신청일 2021.00.00</span> -->

              <p class="name">
                김철수
              </p>
              <span class="mail">id@idemail.com</span>
            </div>

            <div class="btn-grp">
              <btn-bd-light class="btn-xsm btn-rounded">
                관리자 지정
              </btn-bd-light>
              <btn-bd-red class="btn-xsm btn-rounded">
                그룹강퇴
              </btn-bd-red>
            </div>
          </div>
        </div>
        <!-- // 그룹원이 있을 때 -->
        
        <!-- 그룹원이 없을 때 -->
        <div class="member-list-grp">
          <empty-contents txt="그룹원이 없습니다." />
        </div>
        <!-- // 그룹원이 없을 때 -->

        <!-- 페이지네이션 -->
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
      <!-- // 페이지네이션 -->
      </div>
    </div>
    <!-- // 마이페이지 컨텐츠 영역 -->
  </div>
</template>

<script>
export default {
  name: 'SEtprGroupManage',
};
</script>

<style lang="scss" scoped>
</style>