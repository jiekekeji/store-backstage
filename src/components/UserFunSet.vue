<template>
  <div>
    <el-breadcrumb separator="/" style="padding-left: 10px;background-color: #EEF1F6">
      <el-breadcrumb-item :to="{ path: '/' }" class="mb-nav">首页</el-breadcrumb-item>
      <el-breadcrumb-item class="mb-nav">活动管理</el-breadcrumb-item>
      <el-breadcrumb-item class="mb-nav">活动列表</el-breadcrumb-item>
      <el-breadcrumb-item class="mb-nav">活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<style>
  @import "../assets/style/base.css";
</style>
<script>
  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    components: {}
  }
</script>
