<template>
  <!-- [D] 마이페이지 - 내정보-내정보수정 -->
  <div class="mypage-container myinfo-edit-page">
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
          내 정보
        </li>
        <li class="txt">
          내 정보 수정
        </li>
      </breadcrumb>

      <h2 class="ttl">
        내 정보
      </h2>
    </div>
    <!-- // 마이페이지 페이지 제목 -->

    <!-- 마이페이지 컨텐츠 영역 -->
    <div class="mypage-cont-wrap">
      <div class="mypage-card">
        <div class="narrow-panel">
          <div class="cont-hgrp">
            <p class="ttl">
              내 정보 수정
            </p>
            <p class="ttl-sub">
              내 계정 정보를 수정합니다.
            </p>
          </div>
          <form class="form-area auth-form-area ftck-auth-form-area">
            <fieldset class="ffieldset">
              <legend class="ffieldset-ttl is-voice-only">
                내 정보 수정
              </legend>
              <div class="lbel-inp-grp">
                <label class="lbel">이름</label>
                <div class="inp-grp">
                  <input
                    type="text"
                    class="inp"
                    disabled
                    value="김철수"
                  >
                </div>
              </div>
              <div class="lbel-inp-grp">
                <label class="lbel">이메일 아이디</label>
                <div class="inp-grp">
                  <input
                    type="text"
                    class="inp"
                    disabled
                    value="test@test.com"
                  >
                </div>
              </div>
              <div class="lbel-inp-grp">
                <label class="lbel">비밀번호</label>
                <div class="inp-grp">
                  <input
                    type="password"
                    class="inp"
                    placeholder="8~16자 입력"
                  >
                </div>
              </div>
              <div class="lbel-inp-grp">
                <label class="lbel">비밀번호 확인</label>
                <div class="inp-grp">
                  <input
                    type="password"
                    class="inp"
                    placeholder="8~16자 입력"
                  >
                </div>
              </div>
              <div class="lbel-inp-grp">
                <label class="lbel">휴대폰 번호</label>
                <div class="inp-grp inp-btn-grp">
                  <input
                    type="text"
                    class="inp"
                    placeholder="인증번호를 입력하세요"
                  >

                  <btn-bd class="btn-md">
                    인증번호 발송
                  </btn-bd>
                </div>
              </div>
            </fieldset>
          </form>
          <div class="btn-grp">
            <btn-bd-light
              class="btn-lg btn-full color-gray btn-prev"
              @click="window.alert('이전 버튼을 클릭하셨습니다.')"
            >
              이전
            </btn-bd-light>
            <btn-solid
              class="btn-lg btn-full"
              @click="window.alert('완료 버튼을 클릭하셨습니다.')"
            >
              완료
            </btn-solid>
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
