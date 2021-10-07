<template>
  <div class="page-error page-404">
    <div class="page-error-box">
      <img
        src="@/assets/images/logo/logo-bk.svg"
        alt=""
        class="logo"
      >

      <h1 class="ttl">
        페이지를 찾을 수 없습니다
      </h1>
      <p class="ttl-sub">
        찾을 수 없는 페이지입니다. <br>요청하신 페이지가 사라졌거나, 잘못된 경로입니다.
      </p>

      <btn-bd-dark
        class="btn-sm go-main-btn"
        @click="$router.push('/')"
      >
        팩트시트 메인으로
      </btn-bd-dark>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page404',
};
</script>

<style lang="scss" scoped>
</style>