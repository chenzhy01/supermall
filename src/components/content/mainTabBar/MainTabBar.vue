<template>
  <TabBar>
    <TabBarItem path="/home" itemColor="deepPink">
      <template #item-img>
        <img src="~assets/img/tabbar/home.svg" alt="" />
      </template>
      <template #item-img-active>
        <img src="~assets/img/tabbar/home_active.svg" alt="" />
      </template>

      <template #item-text>
        <div>首页</div>
      </template>
    </TabBarItem>

    <TabBarItem path="/category" itemColor="deepPink">
      <template #item-img>
        <img src="~assets/img/tabbar/category.svg" alt="" />
      </template>
      <template #item-img-active>
        <img src="~assets/img/tabbar/category_active.svg" alt="" />
      </template>

      <template #item-text>
        <div>分类</div>
      </template>
    </TabBarItem>

    <TabBarItem path="/cart" itemColor="deepPink">
      <template #item-img>
        <img src="~assets/img/tabbar/shopcart.svg" alt="" />
      </template>
      <template #item-img-active>
        <img src="~assets/img/tabbar/shopcart_active.svg" alt="" />
      </template>

      <template #item-text>
        <div>购物车</div>
      </template>
    </TabBarItem>

    <TabBarItem path="/profile" itemColor="deepPink">
      <template #item-img>
        <img src="~assets/img/tabbar/profile.svg" alt="" />
      </template>
      <template #item-img-active>
        <img src="~assets/img/tabbar/profile_active.svg" alt="" />
      </template>

      <template #item-text>
        <div>我的</div>
      </template>
    </TabBarItem>
    <!-- <TabBarItem path="/category" itemColor="deepPink">
      <img slot="item-img" src="../assets/img/tabbar/category.svg" alt="" />
      <img
        slot="item-img-active"
        src="../assets/img/tabbar/category_active.svg"
        alt=""
      />

      <div slot="item-text">分类</div>
    </TabBarItem> -->
  </TabBar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>