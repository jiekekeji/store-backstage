<template>
  <div class="contianer">
    <div class="pg-title">
      添加商品
    </div>
    <div class="pg-content">
      <!--start 商品添加表单-->
      <div class="pg-desc">
        <el-form ref="form" :model="form" label-width="160px" label-position="top">
          <!--1、商品名称-->
          <el-form-item label="商品名称:">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <!--2、商品简述-->
          <el-form-item label="商品简述:">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <!--2.1 商品主图-->
          <el-form-item label="商品主图:">
            <el-upload
              class="upload-demo"
              action="//jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList2"
              list-type="picture">
              <el-button size="small" type="primary">点击上传</el-button>
              <el-tooltip class="item" effect="dark" content="只能上传jpg/png文件，且不超过500kb" placement="top-start">
                <el-tag type="warning" class='el-icon-warning' style="margin-left: 20px"></el-tag>
              </el-tooltip>
            </el-upload>
          </el-form-item>
          <!--13、商品金额等其他信息-->
          <el-form-item label="商品货号:">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <!--7、产品相册-->
          <el-form-item label="产品相册:">
            <el-upload
              class="upload-demo"
              action="//jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList2"
              list-type="picture">
              <el-button size="small" type="primary">点击上传</el-button>
              <el-tooltip class="item" effect="dark" content="只能上传jpg/png文件，且不超过500kb" placement="top-start">
                <el-tag type="warning" class='el-icon-warning' style="margin-left: 20px"></el-tag>
              </el-tooltip>
            </el-upload>
          </el-form-item>
          <!--3、关键词-->
          <el-form-item label="关键词:">
            <el-input v-model="form.name"></el-input>
          </el-form-item>

          <!--10 商品推荐类型-->
          <el-form-item label="商品推荐类型:">
            <el-radio-group v-model="form.resource">
              <el-radio label="最新商品"></el-radio>
              <el-radio label="特价商品"></el-radio>
              <el-radio label="热卖商品"></el-radio>
              <el-radio label="推荐商品"></el-radio>
            </el-radio-group>
          </el-form-item>
          <!--11 发货时间-->
          <el-form-item label="发货时间:">
            <el-radio-group v-model="form.resource">
              <el-radio label="6小时内"></el-radio>
              <el-radio label="12小时内"></el-radio>
              <el-radio label="24小时内"></el-radio>
              <el-radio label="48小时内"></el-radio>
              <el-radio label="72小时内"></el-radio>
            </el-radio-group>
          </el-form-item>
          <!--12 商品服务-->
          <el-form-item label="商品服务:">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="7天无理由" name="type" style="margin-left: 0px;margin-right: 15px"></el-checkbox>
              <el-checkbox label="急速发货" name="type" style="margin-left: 0px;margin-right: 15px"></el-checkbox>
              <el-checkbox label="急速退款" name="type" style="margin-left: 0px;margin-right: 15px"></el-checkbox>
              <el-checkbox label="全国联保" name="type" style="margin-left: 0px;margin-right: 15px"></el-checkbox>
              <el-checkbox label="7天无理由" name="type" style="margin-left: 0px;margin-right: 15px"></el-checkbox>
              <el-checkbox label="急速发货" name="type" style="margin-left: 0px;margin-right: 15px"></el-checkbox>
              <el-checkbox label="急速退款" name="type" style="margin-left: 0px;margin-right: 15px"></el-checkbox>
              <el-checkbox label="全国联保" name="type" style="margin-left: 0px;margin-right: 15px"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="商品规格:">
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4}"
              placeholder="请输入内容"
              v-model="textarea">
            </el-input>
            <p style="color: orange">格式:颜色：黑色、白色、绿色；重量：100KG、200KG</p>
          </el-form-item>
        </el-form>

        <el-form :inline="true" :model="formInline" class="demo-form-inline" label-position="top">
          <!--14、库存-->
          <el-form-item label="库存:">
            <el-input-number size="small" v-model="num1" @change="handleChange" :min="0"></el-input-number>
          </el-form-item>
          <!--15、市场价-->
          <el-form-item label="市场价:">
            <el-input-number size="small" v-model="num1" @change="handleChange" :min="0"></el-input-number>
          </el-form-item>
          <!--16、销售价-->
          <el-form-item label="销售价:">
            <el-input-number size="small" v-model="num1" @change="handleChange" :min="0"></el-input-number>
          </el-form-item>
          <!--17、成本价-->
          <el-form-item label="成本价:">
            <el-input-number size="small" v-model="num1" @change="handleChange" :min="0"></el-input-number>
          </el-form-item>
          <!--9、购买成功后增加积分-->
          <el-form-item label="计件单位:">
            <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
          </el-form-item>
          <!--5、是否上架-->
          <el-form-item label="是否上架:">
            <el-radio-group v-model="form.resource">
              <el-radio label="是"></el-radio>
              <el-radio label="否"></el-radio>
              <el-tooltip class="item" effect="dark" content="只有上架的商品才会在前台显示出来，客户是无法看到下架商品" placement="top-start">
                <el-tag type="warning" class='el-icon-warning' style="margin-left: 20px"></el-tag>
              </el-tooltip>
            </el-radio-group>
          </el-form-item>
          <!--6、是否免运费-->
          <el-form-item label="是否免运费:">
            <el-radio-group v-model="form.resource">
              <el-radio label="是"></el-radio>
              <el-radio label="否"></el-radio>
              <el-tooltip class="item" effect="dark" content="商品是否免运费" placement="top-start">
                <el-tag type="warning" class='el-icon-warning' style="margin-left: 20px"></el-tag>
              </el-tooltip>
            </el-radio-group>
          </el-form-item>
          <!--9、运费-->
          <el-form-item label="运费:">
            <el-input-number size="small" v-model="num1" @change="handleChange" :min="0"></el-input-number>
          </el-form-item>
          <!--9、购买成功后增加积分-->
          <el-form-item label="普通会员积分:">
            <el-input-number size="small" v-model="num1" @change="handleChange" :min="0"></el-input-number>
          </el-form-item>
          <!--9、购买成功后增加积分-->
          <el-form-item label="铜牌会员积分:">
            <el-input-number size="small" v-model="num1" @change="handleChange" :min="0"></el-input-number>
          </el-form-item>
          <!--9、购买成功后增加积分-->
          <el-form-item label="银牌会员积分:">
            <el-input-number size="small" v-model="num1" @change="handleChange" :min="0"></el-input-number>
          </el-form-item>
          <!--9、购买成功后增加积分-->
          <el-form-item label="金牌会员积分:">
            <el-input-number size="small" v-model="num1" @change="handleChange" :min="0"></el-input-number>
          </el-form-item>
          <!--4、所属分类-->
          <el-form-item label="所属分类:">
            <el-button type="primary" size="small">选择分类</el-button>
            <el-button type="text" :disabled="true">电器家电电器家电电器家电电器家电</el-button>
          </el-form-item>


        </el-form>
        <el-button type="primary" style="margin-bottom: 50px">提交</el-button>
      </div>
      <!--end 商品添加表单-->
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
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
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
    overflow: auto;
  }

  .pg-desc {
    margin: 0 auto;
    margin-top: 15px;
    width: 600px;
    height: auto;
    padding-bottom: 60px;
    overflow: auto;
    /*background-color: darkseagreen;*/
  }

  /*end 内容区域*/
</style>
