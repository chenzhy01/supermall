<template>
  <MainTabBar class="main-tab-bar" />
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


<style lang="less" scoped>
@import "assets/css/base.css";

.main-tab-bar {
  z-index: 99999;
}
</style>
