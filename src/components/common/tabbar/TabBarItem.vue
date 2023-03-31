<template>
  <div class="tabBarItem" @click="itemClick">
    <!-- <img src="../../assets/img/tabbar/home.svg" alt="" />
    <div>首页</div> -->
    <div v-if="!isActive"><slot name="item-img"></slot></div>
    <div v-else><slot name="item-img-active"></slot></div>

    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    itemColor: {
      type: String,
      default: "pink",
    },
  },
  data() {
    return {
      // isActive: false,
    };
  },
  computed: {
    isActive() {
      return this.$route.path == this.path;
    },
    activeStyle() {
      return this.isActive ? { color: this.itemColor } : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style>
.tabBarItem {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
}
.tabBarItem img {
  width: 24px;
  height: 24px;
  margin-top: 2px;
  vertical-align: middle;
}
</style>