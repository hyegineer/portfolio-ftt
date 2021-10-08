<template>
  <div class="page">
    <div>
      왼쪽 네비게이션~
    </div>

    <div>
      우측 컨텐츠 내용영역~
      
      <keep-alive
        :include="keepAlive"
      >
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SMypage',
};
</script>

<style lang="scss" scoped>
</style>