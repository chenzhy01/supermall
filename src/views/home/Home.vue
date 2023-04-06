<template>
  <div id="home">
    <NavBarVue class="home-nav">
      <template #center>
        <div>购物街</div>
      </template>
    </NavBarVue>
    <HomeSwiper :banners="this.banners"></HomeSwiper>
    <RecommendView :recommends="this.recommends"></RecommendView>
    <FeatureView></FeatureView>
  </div>
</template>

<script>
import NavBarVue from "components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home";
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },

  created() {
    // 1.请求多个数据
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
  components: {
    NavBarVue,
    HomeSwiper,
    RecommendView,
    FeatureView,
  },
};
</script>

<style>
#home {
  padding-top: 44px;
  padding-bottom: 49px;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
}
</style>