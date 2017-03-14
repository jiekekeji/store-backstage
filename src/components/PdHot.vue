<template>
  <el-tree
    :data="data2"
    :props="defaultProps"
    show-checkbox
    node-key="id"
    default-expand-all
    :expand-on-click-node="false"
    :render-content="renderContent">
  </el-tree>
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
<style>
  .dd {
    background-color: red;
    position: absolute;
    right: 0;
  }
</style>
