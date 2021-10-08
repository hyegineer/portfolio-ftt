<template>
  <!-- [D] 마이페이지 - 내정보 -->
  <div class="page myinfo-page">
    <div class="wide-panel">
      <div class="mypage-card">
        <div class="name-box">
          <p class="name">
            <b class="bold-txt">김철수</b>님의<br>계정 정보입니다.
          </p>
          <btn-bd-dark
            class="btn-sm btn-edit"
            @click="window.alert('수정하기 버튼을 클릭하셨습니다.')"
          >
            수정하기
          </btn-bd-dark>
        </div>
        <div class="info-box">
          <div class="info-grp">
            <span class="info-label">회원형태</span>
            <span class="info">
              스타트업
              <span class="badge">대표</span>
            </span>
          </div>
          <div class="info-grp">
            <span class="info-label">기업명</span>
            <span class="info">
              주식회사 팩트컴퍼니
            </span>
          </div>
          <div class="info-grp">
            <span class="info-label">기업 고유 아이디</span>
            <span class="info">
              abcd1234
            </span>
          </div>
          <div class="info-grp">
            <span class="info-label">이름</span>
            <span class="info">
              김철수
            </span>
          </div>
          <div class="info-grp">
            <span class="info-label">이메일</span>
            <span class="info">
              test@test.com
            </span>
          </div>
          <div class="info-grp">
            <span class="info-label">휴대폰</span>
            <span class="info">
              010-1234-5678
            </span>
          </div>
          <button
            type="button"
            class="btn-txt btn-gray-txt"
          >
            <i class="icon icon-exit" />
            <span class="txt">회원탈퇴</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SMyInfoMain',
};
</script>

<style lang="scss" scoped>
</style>
