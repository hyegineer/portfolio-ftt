<template>
  <!-- [D] 마이페이지 - 신청대기중, 마이페이지 - 신청거절/그룹강퇴 -->
  <div class="mypage-container waiting-page">
    <div class="narrow-panel">
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