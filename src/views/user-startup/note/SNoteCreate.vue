<template>
  <!-- [D] 마이페이지 - 쪽지 보내기 -->
  <div class="mypage-container mypage-white-container">
    <div class="mypage-white-panel">
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
            쪽지 보내기
          </li>
        </breadcrumb>

        <h2 class="ttl">
          쪽지함
        </h2>
      </div>
      <!-- // 마이페이지 페이지 제목 -->

      <!-- 마이페이지 컨텐츠 영역 -->
      <div class="mypage-cont-wrap">
        <div class="nboard-form-wrap">
          <!-- 제목 -->
          <div class="nboard-form-hd">
            <h2 class="nboard-form-ttl">
              쪽지 보내기
            </h2>
          </div>
          <!-- // 제목 -->

          <!-- 받는 이 -->
          <div class="nboard-form-item type-row">
            <div class="lbel">
              받는이
            </div>
            <div class="cont">
              <!-- 회사이름 -->
              <div class="avatar-with-name">
                <avatar />
                <div class="name-grp">
                  <span class="name-user-type">개인 투자자</span>
                  <span class="name">
                    {{ '투자자명' }}
                  </span>
                </div>
              </div>
            <!-- // 회사이름 -->
            </div>
          </div>
          <!-- // 받는 이 -->

          <!-- 내용 -->
          <div class="nboard-form-item">
            <div class="lbel">
              <span>내용</span>
              <span class="length-unit">(0/500)</span>
            </div>
            <div class="cont">
              <textarea
                class="inp"
                cols="30"
                rows="10"
                placeholder="내용을 작성해주세요."
              />
            </div>
          </div>
          <!-- // 받는 이 -->
          
          <div
            position="double-centered"
            class="btn-grp"
          >
            <btn-bd-light
              class="btn-lg btn-full color-gray btn-prev"
              @click="$router.back();"
            >
              취소
            </btn-bd-light>

            <!-- [D] 내용 다 입력되면 disabled 해제 -->
            <btn-solid
              class="btn-lg btn-full"
              disabled
              @click="window.alert('전송 완료')"
            >
              보내기
            </btn-solid>
          </div>
        </div>
      </div>
    <!-- // 마이페이지 컨텐츠 영역 -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'SNoteCreate',
};
</script>

<style lang="scss" scoped>
</style>