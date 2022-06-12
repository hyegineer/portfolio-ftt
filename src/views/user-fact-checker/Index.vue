<template>
  <keep-alive
    :include="keepAlive"
  >
    <router-view />
  </keep-alive>
</template>

<script>
export default {
  name: 'FactCheckerIndex',
};
</script>