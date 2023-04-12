<template>
  <div id="home">
    <NavBar class="home-nav">
      <template #center>
        <div>购物街</div>
      </template>
    </NavBar>
    <Scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <HomeSwiper :banners="this.banners"></HomeSwiper>
      <RecommendView :recommends="this.recommends"></RecommendView>
      <FeatureView></FeatureView>
      <TabControl
        class="tab-control"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
      ></TabControl>
      <GoodList :goods="showGoods"></GoodList>
    </Scroll>
    <BackTop @click="backClick" v-show="isShowBackTop"></BackTop>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";

import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import TabControl from "components/content/tabControl/TabControl";
import GoodList from "components/content/goods/GoodList";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home";

import { getCurrentInstance, onMounted } from "vue";
const ctx = getCurrentInstance();

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
    };
  },
  setup(props) {
    onMounted(() => {
      const { bus } = getCurrentInstance().appContext.config.globalProperties;
      bus.on("itemImageLoad", (name) => {
        console.log(name);
      });
    });
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },

  created() {
    // 1.请求多个数据
    this.getHomeMultidata();

    // 2.请求商品数据
    this.getHomeGoods("pop");

    this.getHomeGoods("new");

    this.getHomeGoods("sell");

    // 3.监听item图片加载
    // bus.on("itemImageLoad", (name) => {
    //   this.$refs.scroll.refresh();
    //   console.log(name);
    // });
  },
  methods: {
    /* 
    事件监听
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },

    // 网络请求
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },

    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp();
      });
    },

    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },

    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000;
    },

    loadMore() {
      this.getHomeGoods(this.currentType);

      this.$refs.scroll.scroll.refresh();
    },
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodList,
    Scroll,
    BackTop,
  },
};
</script>

<style scoped>
#home {
  /* padding-top: 44px;
  padding-bottom: 49px; */
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
}

.tab-control {
  position: sticky;
  top: 100;
}

.content {
  /* height: 300px; */
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

/* .content {
  height: calc(100% - 93px);

  overflow: hidden;
  margin-top: 44px;
} */
</style>