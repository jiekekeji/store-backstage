<template>
  <div class="content-container">
    <!--start 标题和操作部分-->
    <div class="title-container">
      <div class="content-title">
        用户列表
      </div>
      <div class="content-option">
        <div class="search-input">
          <el-input placeholder="请输入内容" v-model="input5">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="用户名" value="1"></el-option>
              <el-option label="手机号" value="2"></el-option>
              <el-option label="邮箱" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="search"></el-button>
          </el-input>
        </div>
        <div class="search-option"></div>

      </div>
    </div>
    <!--<div class="zhanwei"></div>-->
    <!--start 表格内容-->
    <div class="content">
      <div>
        <el-table :data="tableData3" border class="table-style">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
      </div>
      <!--start 分页内容-->
      <div class="page-sty">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </div>
      <!--end 分页内容-->
    </div>
  </div>
</template>
<style>
  @import "../assets/style/base.css";
  @import "../assets/style/userlist.css";
</style>
<script>
  export default{
    data(){
      return {
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
      }
    },
    components: {}
  }
</script>
