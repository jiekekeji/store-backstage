<!--测试页面-->
<template>
  <div class="container">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
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
      selectResult(item){
      },
      //导航到测试页面
      toMatchTest(){
      },
      //向上滑动
      slideUp(){
      }
    },

  }
</script>

<style scoped>
  @import "../style/match-test.css";


</style>
