<template>
  <div class="contianer">
    <div class="pg-title">
      添加商品
    </div>
    <div class="pg-content">
      <div class="pg-desc">
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="商品名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="商品简述">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="关键词">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="所属分类">
            <el-button type="primary" size="small">选择分类</el-button>
            <el-button type="text" :disabled="true">电器家电</el-button>
          </el-form-item>
          <el-form-item label="是否上架">
            <el-radio-group v-model="form.resource">
              <el-radio label="是"></el-radio>
              <el-radio label="否"></el-radio>
              <el-tooltip class="item" effect="dark" content="只有上架的商品才会在前台显示出来，客户是无法看到下架商品" placement="top-start">
                <el-tag type="warning" class='el-icon-warning' style="margin-left: 20px"></el-tag>
              </el-tooltip>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="是否免运费">
            <el-radio-group v-model="form.resource">
              <el-radio label="是"></el-radio>
              <el-radio label="否"></el-radio>
              <el-tooltip class="item" effect="dark" content="商品是否免运费" placement="top-start">
                <el-tag type="warning" class='el-icon-warning' style="margin-left: 20px"></el-tag>
              </el-tooltip>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="产品相册">
            <el-button type="primary" size="small">选择文件</el-button>
            <el-button type="text" :disabled="true">电器家电</el-button>
          </el-form-item>


          <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动时间">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2"
                              style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="即时配送">
            <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="活动性质">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="特殊资源">
            <el-radio-group v-model="form.resource">
              <el-radio label="线上品牌商赞助"></el-radio>
              <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="活动形式">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
<style scoped>
  .contianer {
    height: 100%;
    width: 100%;
  }

  /*start 标题*/
  .pg-title {
    height: 36px;
    width: 100%;
    text-indent: 10px;
    line-height: 36px;
    font-size: 15px;
    color: white;
    background-color: #474544;
  }

  /*end 标题*/
  /*start 内容区域*/
  .pg-content {
    height: 100%;
    width: 100%;
  }

  .pg-desc {
    margin: 0 auto;
    margin-top: 15px;
    width: 480px;
    height: auto;
    padding-bottom: 60px;
    /*background-color: darkseagreen;*/
  }

  /*end 内容区域*/
</style>
