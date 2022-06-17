<script setup lang="ts">
import { ref, reactive } from "vue"
import opera from "@/components/common/opera.vue"
import homeHeader from "@/components/public/header.vue"

type headerType = {
  showHeader: boolean
  isDark: boolean
}
const header = ref<any>()
const headerProperty = reactive<headerType>({
  showHeader: true,
  isDark: false,
})
const scrollTop = ref<number>(0)
const affixScroll = (e: any) => {
  e.scrollTop - scrollTop.value > 0 &&
  e.scrollTop > header.value.$el.offsetHeight
    ? (headerProperty.showHeader = false)
    : (headerProperty.showHeader = true)

  if (e.scrollTop > 120) {
    headerProperty.isDark = true
  } else {
    headerProperty.isDark = false
  }

  scrollTop.value = e.scrollTop
}
</script>

<template>
  <div id="bg" class="fixed inset-0"></div>
  <el-affix @scroll="affixScroll" :offset="0">
    <el-header
      v-show="headerProperty.showHeader"
      ref="header"
      class="top-0 flex justify-between items-center transition-colors duration-1000"
      :class="{ dark: headerProperty.isDark }"
    >
      <home-header />
    </el-header>
  </el-affix>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component class="font-mono" :is="Component"></component>
    </keep-alive>
  </router-view>
  <opera></opera>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
body {
  font-size: @global-font-size;
}
#bg {
  z-index: -999;
  background-image: url("./assets/img/bg.avif");
  background-size: cover;
  background-position: center;
}
.el-header {
  position: relative;
  backdrop-filter: blur(2px);
}
.dark {
  background: rgba(250, 250, 250, 0.8);
  color: #606266 !important;
  :deep(.el-button) {
    color: #606266;
  }
}
.el-button + .el-button {
  margin-left: 0 !important;
}
</style>
