<template>
  <div
    class="opera fixed right-10 bottom-10 flex flex-col"
    :class="darkmode ? 'dark' : 'mode'"
  >
    <el-button
      id="darkmode"
      plain
      size="large"
      color="white"
      title="切换深色/浅色模式"
      @click="toggleDarkMode"
      ><el-icon :size="20"><sunny /></el-icon>
    </el-button>
    <el-button
      id="go-up"
      plain
      size="large"
      color="white"
      title="返回顶部"
      @click="goup"
    >
      <el-icon :size="20"><top /></el-icon>
    </el-button>
  </div>
</template>
<script lang="ts" setup>
import { Top, Sunny } from "@element-plus/icons-vue"
import { ref } from "vue"

const darkmode = ref<boolean>(false)
const toggleDarkMode = () => {
  darkmode.value = !darkmode.value
  console.log(darkmode.value)
}
const goup = () => {
  window.scrollTo(0, 0)
}
</script>
<style lang="less" scoped>
.opera {
  opacity: 0.8;
  background-color: transparent;
  .el-button {
    margin-bottom: 5px;
    border: none;
  }
  :deep(button) {
    width: 35px;
    height: 35px;
  }
}

#darkmode,
#go-up {
  background-color: @blue;
  &:hover {
    background-color: @orange;
    border: none;
  }
}
</style>
