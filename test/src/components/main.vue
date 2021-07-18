<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>用户管理</template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <router-link :to="{name: 'profile', params: {id:1}}">
                个人信息
              </router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link to="/list">
                用户列表
              </router-link>
            </el-menu-item>
            <el-menu-item index="1-3">
              <router-link to="/gohome">
                回profile
              </router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>内容管理</template>
          <el-menu-item-group>
            <el-menu-item index="2-1">分类管理</el-menu-item>
            <el-menu-item index="2-2">内容列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
<!--  </el-container>-->
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>退出登陆</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
  <el-main>
    <router-view></router-view>
  </el-main>
  </el-container>
  </el-container>
</template>

<script>
export default {
  name: "main"
};
</script>

<style scoped>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
