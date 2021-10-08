<template>
  <!-- [D] 마이페이지 - 내정보-내정보수정 -->
  <div class="page myinfo-edit-page">
    <div class="wide-panel">
      <div class="mypage-card">
        <div class="narrow-panel">
          <p class="ttl">
            내 정보 수정
          </p>
          <p class="ttl-sub">
            내 계정 정보를 수정합니다.
          </p>
          <div class="lbel-inp-grp">
            <label class="lbel">이름
              <div class="inp-grp">
                <input
                  type="text"
                  class="inp"
                  disabled
                  value="김철수"
                >
              </div>
            </label>
          </div>
          <div class="lbel-inp-grp">
            <label class="lbel">이메일 아이디
              <div class="inp-grp">
                <input
                  type="text"
                  class="inp"
                  disabled
                  value="test@test.com"
                >
              </div>
            </label>
          </div>
          <div class="lbel-inp-grp">
            <label class="lbel">비밀번호
              <div class="inp-grp">
                <input
                  type="password"
                  class="inp"
                  placeholder="8~16자 입력"
                >
              </div>
            </label>
          </div>
          <div class="lbel-inp-grp">
            <label class="lbel">비밀번호 확인
              <div class="inp-grp">
                <input
                  type="password"
                  class="inp"
                  placeholder="8~16자 입력"
                >
              </div>
            </label>
          </div>
          <div class="inp-grp inp-btn-grp">
            <input
              type="text"
              class="inp"
              placeholder="검색어를 입력하세요"
            >

            <btn-bd class="btn-md">
              인증번호 발송
            </btn-bd>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SMyInfoEdit',
};
</script>

<style lang="scss" scoped>
</style>
