<template>
  <div class="content-container">
    <!--start 标题和操作部分-->
    <div class="title-container">
      <div class="content-title">
        用户添加
      </div>
    </div>
    <!--end 标题和操作部分-->
    <!--start 表内容-->
    <div class="content">
      <div class="container">
        <el-form :label-position="right" label-width="80px" :model="formLabelAlign">
          <el-form-item label="用户名：">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="手机号：">
            <el-input v-model="formLabelAlign.region"></el-input>
          </el-form-item>
          <el-form-item label="等级：">
            <el-input v-model="formLabelAlign.type"></el-input>
          </el-form-item>
          <el-form-item label="姓名：">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="性别：">
            <el-input v-model="formLabelAlign.region"></el-input>
          </el-form-item>
          <el-form-item label="Email">
            <el-input v-model="formLabelAlign.type"></el-input>
          </el-form-item>
          <el-form-item label="余额：">
            <el-input v-model="formLabelAlign.region"></el-input>
          </el-form-item>
          <el-form-item label="积分:">
            <el-input v-model="formLabelAlign.type"></el-input>
          </el-form-item>
          <el-form-item label="状态：">
            <el-input v-model="formLabelAlign.region"></el-input>
          </el-form-item>
          <el-form-item label="注册时间:">
            <el-input v-model="formLabelAlign.type"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!--end 内容-->
  </div>
</template>
<style scoped>
  .container {
    margin: 0 auto;
    margin-top: 15px;
    width: 480px;
    height: auto;
    padding-bottom: 60px;
    /*background-color: darkseagreen;*/
  }
</style>
<script>
  export default{
    data(){
      return {
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
      }
    }
    ,
    components: {}
  }
</script>
