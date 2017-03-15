<template>
  <div class="content-container">
    <!--start 标题和操作部分-->
    <div class="title-container">
      <div class="content-title">
        商品类别列表
      </div>
      <div class="content-option">
        <div class="search-option">
          <el-button type="primary" icon="delete">添加分类</el-button>
        </div>
        <div class="search-input">
          <el-input placeholder="请输入内容" v-model="input5" style="margin-top: 10px">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="一级分类" value="1"></el-option>
              <el-option label="二级分类" value="2"></el-option>
              <el-option label="三级分类" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="search"></el-button>
          </el-input>
        </div>
      </div>
    </div>
    <!--end 标题和操作部分-->
    <!--start 内容部分-->
    <div class="content" style="height: auto;">
      <el-tree
        :data="data2"
        :props="defaultProps"
        show-checkbox
        node-key="id"
        default-expand-all
        @node-click="nodeClick"
        :expand-on-click-node="false"
        :render-content="renderContent">
      </el-tree>
    </div>
    <!--end 内容部分-->

  </div>
</template>

<script>
  let id = 1000;

  export default {
    data() {
      return {
        data2: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        mstore: {},
        mdata: {}
      }

    },

    methods: {
      append(store, data) {
        console.log(data);
        store.append({id: id++, label: 'testtest', children: []}, data);
      },
      remove(store, data) {
        console.log('remove');
//        store.remove(data);
      },
      nodeClick(node, data, store){
        console.log(node);
        console.log(data);
        console.log(store);
      },
      renderContent(h, {node, data, store}) {
        console.log(data);
        console.log(store);
        let me = this;
        me.mstore = store;
        me.mdata = data;
        return h('span', [h('span', [h('span', node.label)]), h('span', {
          style: {
            'margin-right': '20px',
            'position': 'absolute',
            'right': '0'
          }
        }, [h('el-button', {
          attrs: {
            'size': 'mini',
          },
          on: {
            click: function (store, data) {
              console.log('click');
            },
          }
        }, ['添加']), h('el-button', {
            attrs: {
              'size': 'mini',
            },
            on: {
              click: function (store, data) {
                console.log(store.target);
              }
            }
          },
          ['删除']
        )])]);
      }
    }
  };
</script>
<style scoped>
  @import "../assets/style/base.css";
  /*start 搜索区域*/
  .content-option {
    height: 60px;
    width: 100%;
  }

  .content-option > div {
    height: 100%;
  }

  .search-input {
    float: right;
    width: 360px;
    margin: 0 auto;
    line-height: 60px;
    margin-right: 30px;
  }

  .search-option {
    line-height: 60px;
    float: left;
    width: 120px;
    margin-left: 10px;
  }

  /*end 搜索区域*/
</style>
