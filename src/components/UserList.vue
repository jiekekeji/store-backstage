<template>
  <div class="userlist-container">
    <div class="title">
      用户列表
    </div>
    <!--start 搜索操作部分-->
    <div class="content-option">
      <div class="search-option">
        <el-button type="primary" icon="delete">刪除所选</el-button>
      </div>
      <div class="search-input">
        <el-input placeholder="请输入内容" v-model="input5" style="margin-top: 10px">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="用户名" value="1"></el-option>
            <el-option label="手机号" value="2"></el-option>
            <el-option label="邮箱" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="search"></el-button>
        </el-input>
      </div>
    </div>
    <!--end 搜索操作部分-->

    <!--start 表格内容-->
    <div class="content">
      <div>
        <el-table :data="tableData3" border class="table-style" height="500">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            prop="username"
            label="用户名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="phonenum"
            label="手机号">
          </el-table-column>
          <el-table-column
            prop="viplevel"
            label="会员等级"
            width="180">
          </el-table-column>
          <el-table-column
            prop="fullname"
            label="姓名">
          </el-table-column>
          <el-table-column
            prop="gender"
            label="性别">
          </el-table-column>
          <el-table-column
            prop="email"
            label="Email">
          </el-table-column>
          <el-table-column
            prop="balance"
            label="余额">
          </el-table-column>
          <el-table-column
            prop="integral"
            label="积分">
          </el-table-column>
          <el-table-column
            prop="status"
            label="状态">
          </el-table-column>
          <el-table-column
            prop="registertime"
            label="注册时间">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="120">
            <template scope="scope">
              <el-button @click="handleClick" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!--start 分页内容-->
      <div class="page-sty">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage3"
          :page-size="100"
          layout="prev, pager, next, jumper"
          :total="1000">
        </el-pagination>
      </div>
      <!--end 分页内容-->
    </div>
  </div>
</template>

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
        }],
        currentPage3: ''
      }
    },
    components: {}
  }
</script>
<style scoped lang="scss">
  /*@import "../assets/style/base.css";*/
  @import "../assets/style/userlist.scss";

</style>
