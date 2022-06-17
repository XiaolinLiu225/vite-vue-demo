<template>
  <div class="home-wrapper">
    <div class="common-layout">
      <el-container>
        <div class="layout">
          <div class="recents-posts transition">
            <div class="example-pagination-block">
              <el-card class="card-content" v-for="item in 3">
                <h3>JS</h3>
                <p>2022-06-15</p>
                <p>JavaScript是最好的语言</p>
              </el-card>
              <el-pagination
                class="justify-center py-8"
                layout="prev, pager, next"
                :total="5"
              />
            </div>
          </div>
          <div class="aside-content">
            <el-card class="flex flex-col justify-center">
              <el-avatar size="large" icon="el-icon-user"></el-avatar>
              <div class="card-name text-2xl">Coderlxl</div>
              <div class="card-desc">这个人很懒什么都没有留下</div>
              <div class="card-menus flex justify-around">
                <div class="menus-item">
                  <div>文章</div>
                  <div>70</div>
                </div>
                <div class="menus-item">
                  <div>文章</div>
                  <div>70</div>
                </div>
                <div class="menus-item">
                  <div>文章</div>
                  <div>70</div>
                </div>
              </div>
              <div class="card-connect flex justify-center items-center">
                <a target="_blank" href="https://github.com/XiaolinLiu225"
                  ><img
                    class="w-10 h-10"
                    src="@/assets/img/Github.svg"
                    alt="Github"
                /></a>

                <a target="_blank" href="https://gitee.com/xiaolin-liu"
                  ><img
                    class="w-9 h-9 mx-4"
                    src="@/assets/img/gitee.svg"
                    alt="Gitee"
                /></a>

                <div>
                  <a target="_blank" href="#"
                    ><img
                      class="w-10 h-10"
                      src="@/assets/img/email.svg"
                      alt="1571198573@qq.com"
                  /></a>
                </div>
              </div>
            </el-card>
          </div>
        </div>
        <el-footer class="text-lg bg-black">
          <home-footer />
        </el-footer>
      </el-container>
    </div>
  </div>
</template>

<script lang="ts" setup>
import homeFooter from "./chilComps/homeFooter.vue"
</script>
<style lang="less" scoped>
@white: white;
@black: black;

.common-layout {
  backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, 0.5);
  :deep(.el-footer) {
    height: 100%;
    padding: 40px 20px;
  }
}

.el-footer {
  opacity: 0.7;
}
.layout {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px 15px;
  max-width: 1200px;
}
@media screen and(min-width: 900px) {
  .layout > div:first-child {
    width: 74% !important;
    -webkit-box-ordinal-group: 2;
    order: 2;
  }
  .layout > .aside-content {
    width: 26% !important;
    padding-right: 15px;
    -webkit-box-ordinal-group: 1;
  }
}
.el-card {
  background-color: @white;
}
.card-name {
  padding: 0.5rem;
}
.card-desc {
  margin-bottom: 16px;
}
.card-menus {
  margin-bottom: 20px;
}
.aside-content {
  width: 100%;
  order: 1;
}
.recents-posts {
  width: 100%;
  order: 1;
}
.card-content {
  margin-top: 1.5rem;
}
.card-content:first-of-type {
  margin-top: 0;
}
</style>
