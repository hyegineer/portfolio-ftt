<template>
  <!-- [D] 기업프로필 - 게시글 작성 -->
  <div class="page etpr-prifile-page etpr-prifile-board-create-page">
    <layout-header />

    <div class="page-container">
      <div class="wide-panel">
        <breadcrumb>
          <li class="txt">
            홈
          </li>
          <li class="txt">
            스타트업 찾기
          </li>
          <li class="txt">
            4차 산업기술
          </li>
          <li class="txt">
            가상·증강현실
          </li>
        </breadcrumb>
        <div class="section-ttl">
          게시글 수정
        </div>
        <div class="white-panel name-container">
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
        </div>
        <div class="white-panel editor-container">
          <div class="panel-ttl">
            게시 내용
          </div>
          <div class="inp-grp">
            <input
              type="text"
              class="inp"
              value="기존에 작성된 게시 제목"
            >
          </div>
          <div class="editor-wrap">
            에디터가 들어올 자리입니다.
          </div>
          <div class="btn-wrap">
            <div
              position="double-centered"
              class="btn-grp"
            >
              <btn-bd-light
                class="btn-lg btn-prev"
              >
                이전
              </btn-bd-light>
        
              <btn-solid
                class="btn-lg btn-full"
              >
                수정완료
              </btn-solid>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <layout-footer />
  </div>
</template>

<script>
export default {
  name: 'EtprProfileBoardEdit',
};
</script>

<style lang="scss" scoped>
</style>