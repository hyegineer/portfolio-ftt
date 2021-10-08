<template>
  <div class="page mypage-page">
    <layout-header />

    <layout-mypage>
      <layout-mypage-side-nav>
        왼쪽 네비게이션~
      </layout-mypage-side-nav>

      <layout-mypage-container>
        <keep-alive
          :include="keepAlive"
        >
          <router-view />
        </keep-alive>

        <layout-footer />
      </layout-mypage-container>
    </layout-mypage>
  </div>
</template>

<script>
export default {
  name: 'SMypage',
};
</script>

<style lang="scss" scoped>
</style>