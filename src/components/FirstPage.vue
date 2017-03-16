<template>
  <div style="height: 100%;width: 100%;overflow: auto">
    <ul class="data-area">
      <li id="main1"></li>
      <li id="main2"></li>
      <li id="main3"></li>
      <li id="main4"></li>
      <li id="main5"></li>
    </ul>
  </div>
</template>
<style scoped>
  .data-area {
    margin: 0 auto;
    width: auto;
    height: auto;
  }

  .data-area > li {
    float: left;
    height: 400px;
    width: 400px;
    margin-left: 20px;
    margin-top: 20px;
  }
</style>
<script>
  var echarts = require('../assets/echarts/echarts.min');
  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    created () {
    },
    mounted: function () {
    },
    activated: function () {
      // 基于准备好的dom，初始化echarts实例
      var myChart1 = echarts.init(document.getElementById('main1'));
      var myChart2 = echarts.init(document.getElementById('main2'));
      var myChart3 = echarts.init(document.getElementById('main3'));
      var myChart4 = echarts.init(document.getElementById('main4'));
      var myChart5 = echarts.init(document.getElementById('main5'));

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: '各种数据统计'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart1.setOption(option);
      myChart2.setOption(option);
      myChart3.setOption(option);
      myChart4.setOption(option);
      myChart5.setOption(option);
    },
    components: {}
  }
</script>
