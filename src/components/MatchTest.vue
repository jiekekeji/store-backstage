<!--测试页面-->
<template>
  <div class="container">
    <!--start 顶部导航栏-->
    <div class="top-nav">


    </div>
    <!--end 顶部导航栏-->
    <!--start 左侧导航栏-->
    <div class="left-nav">
      <el-menu default-active="2"  @open="handleOpen" @close="handleClose">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>用户管理</template>
          <el-menu-item index="matchresult">用户功能设置</el-menu-item>
          <el-menu-item index="1-2">添加用户</el-menu-item>
          <el-menu-item index="1-3">管理用户</el-menu-item>
          <el-menu-item index="1-4">选项1</el-menu-item>
        </el-submenu>
        <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
        <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
      </el-menu>
    </div>
    <!--end 左侧导航栏-->
    <div class="main-content">
      <!--主路由出口-->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>

  import {api} from '../constant/api'
  import {utils} from '../constant/utils'

  export default{
    data(){
      return {
        scrolltop: 0,
        result: 0,
        items: [1, 2, 3, 4, 5],
        resultid: this.$route.query.resultid,
      }
    },
    components: {},

    watch: {
      'phoneNum': 'listenPhoneNum'
    },
    created () {
//      this.toMatchTest();
    },
    mounted: function () {
      console.log($('.qt-body > ul').height());
    },
    activated: function () {

    },
    beforeRouteEnter  (to, from, next) {
      utils.setDocumentTitle('测试页面');
      utils.setBodyBgColor("#F6F2ED");
      next();
    },
    beforeRouteLeave (to, from, next) {
      utils.setBodyBgColor("#FFFFFF");
      next();
    },
    computer: {},
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },

  }
</script>

<style scoped>
  @import "../style/match-test.css";


</style>
