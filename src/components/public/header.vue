<template>
  <div class="felx-1 text-left">
    <span class="name">Coderlxl</span>
  </div>
  <div class="flex">
    <el-button :icon="Search"><span class="title">搜索</span></el-button>
    <div class="menus_items">
      <el-button :icon="FolderOpened"
        ><span class="title">分类</span></el-button
      >
      <el-button :icon="PriceTag"><span class="title">标签</span></el-button>
      <el-button :icon="Timer"><span class="title">时间轴</span></el-button>
    </div>
    <el-button v-show="false" class="menu" :icon="Menu"></el-button>
  </div>
</template>
<script lang="ts" setup>
import {
  Search,
  Menu,
  FolderOpened,
  PriceTag,
  Timer,
} from "@element-plus/icons-vue"
</script>
<style lang="less" scoped>
@media screen and (max-width: 768px) {
  .menus_items {
    display: none;
  }
  .title {
    display: none;
  }
  .menu {
    display: block !important;
  }
}

.el-button {
  background-color: transparent;
  color: @lowColor;
  border: none;
}
</style>
