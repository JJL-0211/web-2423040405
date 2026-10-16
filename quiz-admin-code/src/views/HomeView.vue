<template>
  <div class="container">
    <h1>Quiz后台管理</h1>
    <el-container style="height: calc(100vh - 50px);border:1px solid #eee">
      <el-aside width="200px">
        <el-menu router :default-active="$route.path" :default-openeds="['1']" class="el-menu-vertical-demo">
          <el-sub-menu index="1">
            <template #title>
              <el-icon><Location /></el-icon>
              <span>系统信息管理</span>
            </template>
            <el-menu-item index="/user">用户管理</el-menu-item>
            <el-menu-item index="/question">题目管理</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { Location } from '@element-plus/icons-vue'

export default {
  name: "HomeView",
  components: { Location }
}
</script>

<style scoped>
.container{
  padding:10px;
}
h1{
  margin-top:0;
}
</style>