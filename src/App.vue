<template>
  <MainTabBar />
  <router-view></router-view>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar";

export default {
  name: "app",
  components: {
    MainTabBar,
  },
};
</script>


<style lang="less">
@import "assets/css/base.css";
</style>
