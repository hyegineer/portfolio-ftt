<template>
  <!-- [D] 마이페이지 - 신청대기중, 마이페이지 - 신청거절/그룹강퇴 -->
  <div
    mypage="wating-page"
    class="mypage-container"
  >
    <div class="narrow-panel">
      <!-- TODO: 가입신청 대기중일 때 -->
      <div class="waiting-cont-wrap">
        <p class="cont-ment">
          가입신청 대기중입니다.
        </p>
        <div class="process-card">
          <p class="process-ment">
            신청 대기중인 기업
          </p>
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
        <p class="cont-ment-sub">
          가입신청 대기중입니다.<br>
          그룹관리자 권한으로 신청 승인이 완료 후<br>
          팩트시트 서비스를 이용하실 수 있습니다.
        </p>
      </div>
      <!-- END 가입신청 대기중일 때 -->

      <!-- TODO: 신청거절/그룹강퇴일 때 -->
      <div class="waiting-cont-wrap">
        <div class="section-cont ">
          <empty-contents txt="소속된 기업이 없습니다.<br />신규 스타트업 생성 / 기존 스타트업 신청을 통하여<br />소속기업 지정을 해주세요." />
        </div>
        <div class="btn-wrap">
          <btn-bd-dark
            class="btn btn-md btn-full"
            @click="$router.push('wating-create')"
          >
            신규 스타트업 생성하기
          </btn-bd-dark>
          <btn-bd-dark
            class="btn btn-md btn-full"
            @click="$router.push('wating-search-company')"
          >
            기존 스타트업 신청하기
          </btn-bd-dark>
        </div>
      </div>
      <!-- END신청거절/그룹강퇴일 때 -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'SWatingMain',
};
</script>

<style lang="scss" scoped>
</style>