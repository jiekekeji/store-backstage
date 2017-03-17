<template>
  <div class="pdclz-container">
    <!--start 标题和操作部分-->
    <div class="title">
      商品类别列表
    </div>
    <div class="content-option">
      <div class="search-option">
        <el-button type="primary" icon="delete">添加分类</el-button>
      </div>
      <div class="search-input">
        <el-input placeholder="请输入内容" v-model="filterText" style="margin-top: 10px">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="一级分类" value="1"></el-option>
            <el-option label="二级分类" value="2"></el-option>
            <el-option label="三级分类" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="search"></el-button>
        </el-input>
      </div>
    </div>
    <!--end 标题和操作部分-->
    <!--start 内容部分-->
    <div class="content">
      <el-tree
        ref="tree"
        :data="data2"
        :props="defaultProps"
        show-checkbox
        node-key="id"
        default-expand-all
        :filter-node-method="filterNode"
        :expand-on-click-node="false"
        :render-content="renderContent">
      </el-tree>
    </div>
    <!--end 内容部分-->
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
        filterText: '',
        select: ''
      }

    },

    watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      }
    },

    methods: {
      //节点过滤
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
      //自定义节点内容
      renderContent(h, {node, data, store}) {
        return h('span', [h('span', [h('span', node.label)]), h('span', {
          style: {
            'margin-right': '20px',
            'float': 'right'
          }
        }, [h('el-button', {
          attrs: {
            'size': 'mini',
          },
          on: {
            click: function () {
              store.append({id: id++, label: 'testtest', children: []}, data);
            },
          }
        }, ['添加']), h('el-button', {
            attrs: {
              'size': 'mini',
            },
            on: {
              click: function () {
                store.remove(data);
              }
            }
          },
          ['删除']
        )])]);
      }
    }
  };
</script>
<style scoped lang="scss">
  @import "../assets/style/pdclz.scss";
</style>
