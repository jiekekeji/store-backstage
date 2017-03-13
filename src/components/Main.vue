<!--测试页面-->
<template>
  <div class="container">
    <!--start 顶部导航栏-->
    <div class="top-nav">
    </div>
    <!--end 顶部导航栏-->
    <!--start 左侧导航栏-->
    <div class="left-nav">
      <el-menu default-active="/main/firstpage" @select="openMenu">
        <el-menu-item index="/main/firstpage"><i class="el-icon-menu"></i>首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-message"></i>用户管理</template>
          <el-menu-item index="/main/userfunset">用户功能设置</el-menu-item>
          <el-menu-item index="/main/userlist">用户列表</el-menu-item>
          <el-menu-item index="/main/userfind">用户查找</el-menu-item>
          <el-menu-item index="/main/useradd">添加用户</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-message"></i>商城管理</template>
          <el-menu-item index="/main/pdfunset">商城功能设置</el-menu-item>
          <el-menu-item index="/main/pdclz">商品类别</el-menu-item>
          <el-menu-item index="/main/pdadd">添加商品</el-menu-item>
          <el-menu-item index="/main/pdlist">商品列表</el-menu-item>
          <el-menu-item index="/main/pdlunbo">轮播商品</el-menu-item>
          <el-menu-item index="/main/pdhot">热销商品</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"><i class="el-icon-message"></i>购物车管理</template>
          <el-menu-item index="/main/userfunset">商城功能设置</el-menu-item>
          <el-menu-item index="/main/userlist">商品管理</el-menu-item>
          <el-menu-item index="/main/userfind">轮播商品管理</el-menu-item>
          <el-menu-item index="/main/userfind">订单管理</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title"><i class="el-icon-message"></i>订单管理</template>
          <el-menu-item index="/main/userfunset">商城功能设置</el-menu-item>
          <el-menu-item index="/main/userlist">商品管理</el-menu-item>
          <el-menu-item index="/main/userfind">轮播商品管理</el-menu-item>
          <el-menu-item index="/main/userfind">订单管理</el-menu-item>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title"><i class="el-icon-message"></i>物流管理</template>
          <el-menu-item index="/main/userfunset">商城功能设置</el-menu-item>
          <el-menu-item index="/main/userlist">商品管理</el-menu-item>
          <el-menu-item index="/main/userfind">轮播商品管理</el-menu-item>
          <el-menu-item index="/main/userfind">订单管理</el-menu-item>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title"><i class="el-icon-message"></i>售后管理</template>
          <el-menu-item index="/main/userfunset">商城功能设置</el-menu-item>
          <el-menu-item index="/main/userlist">商品管理</el-menu-item>
          <el-menu-item index="/main/userfind">轮播商品管理</el-menu-item>
          <el-menu-item index="/main/userfind">订单管理</el-menu-item>
        </el-submenu>
        <el-submenu index="8">
          <template slot="title"><i class="el-icon-message"></i>数据中心</template>
          <el-menu-item index="/main/userfunset">商城功能设置</el-menu-item>
          <el-menu-item index="/main/userlist">商品管理</el-menu-item>
          <el-menu-item index="/main/userfind">轮播商品管理</el-menu-item>
          <el-menu-item index="/main/userfind" style="margin-bottom: 60px">订单管理</el-menu-item>
        </el-submenu>
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
    },
    activated: function () {

    },
    beforeRouteEnter  (to, from, next) {
      utils.setDocumentTitle('商城后台');
      next();
    },
    beforeRouteLeave (to, from, next) {
      next();
    },
    computer: {},
    methods: {
      openMenu(index){
        this.$router.push(index);
      }
    },

  }
</script>

<style scoped>
  @import "../assets/style/main.css";

</style>
