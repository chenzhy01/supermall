<template>
  <div class="good-list">
    <GoodListItem
      v-for="item in goods"
      :key="item.iid"
      :goods-item="item"
    ></GoodListItem>
  </div>
</template>

<script>
import GoodListItem from "./GoodListItem";

export default {
  name: "GoodList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    GoodListItem,
  },
};
</script>

<style scoped>
.good-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: var(--color-background);

  padding: 2px;
}
</style>