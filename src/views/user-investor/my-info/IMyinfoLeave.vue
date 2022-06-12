<template>
  <!-- [D] 마이페이지 - 내정보-회원탈퇴 -->
  <div 
    mypage="myinfo-leave-page"
    class="mypage-container"
  >
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
          회원탈퇴
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
        <div class="cont-hgrp">
          <p class="ttl">
            회원탈퇴
          </p>
          <p class="ttl-sub">
            팩트시트를 탈퇴합니다.
          </p>
        </div>
        <div class="cont-grp">
          <div class="left-box">
            <p class="terms-ttl">
              회원탈퇴 약관
            </p>
            <div class="terms-area">
              약관에 들어가는 내용<br>
              약관에 들어가는 내용<br>
              약관에 들어가는 내용<br>
              약관에 들어가는 내용<br>
              약관에 들어가는 내용<br>
              약관에 들어가는 내용<br>
              약관에 들어가는 내용<br>
              약관에 들어가는 내용<br>
              약관에 들어가는 내용<br>
              약관에 들어가는 내용<br>
              약관에 들어가는 내용<br>
              약관에 들어가는 내용<br>
              약관에 들어가는 내용<br>
              약관에 들어가는 내용<br>
              약관에 들어가는 내용<br>
              약관에 들어가는 내용<br>
              약관에 들어가는 내용<br>
              약관에 들어가는 내용<br>
              약관에 들어가는 내용<br>
              약관에 들어가는 내용<br>
              약관에 들어가는 내용<br>
              약관에 들어가는 내용<br>
              약관에 들어가는 내용<br>
              약관에 들어가는 내용<br>
              약관에 들어가는 내용<br>
              약관에 들어가는 내용<br>
            </div>
          </div>
          <div class="right-box">
            <div class="lbel-inp-grp mt-remove">
              <label class="lbel">비밀번호</label>
              <div class="inp-grp">
                <input
                  type="text"
                  class="inp"
                  placeholder="8~16자 입력"
                >
              </div>
            </div>
            <div class="lbel-inp-grp mb-remove">
              <label class="lbel">탈퇴사유</label>
              <div class="inp-grp">
                <textarea
                  id=""
                  name=""
                  cols="30"
                  rows="12"
                  class="inp"
                  placeholder="탈퇴사유를 작성해주세요. 서비스 향상을 위해 더욱 노력하겠습니다."
                />
              </div>
            </div>
          </div>
        </div>
        <div class="chk-grp">
          <input
            id="check-box"
            v-model="isAgree"
            type="checkbox"
            class="is-none check-switch"
          >
          <label
            for="check-box"
            class="check-onoff"
          />
          <label
            for="check-box"
            class="check-box-lb"
          >위 내용을 확인하였으며, 회원탈퇴를 진행하겠습니다.</label>
        </div>
        <div
          position="double-centered"
          class="btn-grp"
        >
          <btn-bd-light
            class="btn-lg btn-full color-gray btn-prev"
            @click="window.alert('이전 버튼을 클릭하셨습니다.')"
          >
            이전
          </btn-bd-light>
          <btn-solid
            :disabled="!isAgree"
            class="btn-lg btn-full"
            @click="window.alert('회원탈퇴 버튼을 클릭하셨습니다.')"
          >
            회원탈퇴
          </btn-solid>
        </div>
      </div>
    </div>
    <!-- // 마이페이지 컨텐츠 영역 -->
  </div>
</template>

<script>
export default {
  name: 'IMyinfoLeave',
  data() {
    return {
      isAgree: false,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
