<!--测试页面-->
<template>
  <div class="container">
    <ul class="test-item" v-for="item in items">
      <li @click="selectResult(item)">{{item}}</li>
    </ul>
    <div>你选择的结果:{{result}}</div>

    <input type="radio">

    <a class="gz-btn"
       href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI0MDE3ODE3NQ==&scene=124#wechat_redirect">
      关注公众号
    </a>
    <div class="question">
      <div class="qt-title" @click="slideUp()">
        下一个
      </div>
      <div class="qt-body">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import 'mint-ui/lib/style.css';
  import {Toast} from 'mint-ui';
  import {Indicator} from 'mint-ui';
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
        this.result = item;
        if (typeof(this.$route.query.resultid) === 'undefined') {
          location.href = location.href + "?resultid=" + this.result;
        } else {
          let temp = location.href.substring(0, location.href.indexOf('?'));
          location.href = temp + "?resultid=" + this.result;
        }
      },
      //导航到测试页面
      toMatchTest(){
        if (!utils.isEmpty(this.resultid)) {
          this.$router.push({path: 'matchresult', query: {resultid: this.resultid}});
          return;
        }
      },
      //向上滑动
      slideUp(){
        this.scrolltop = this.scrolltop - 3;
//        let height = $('.qt-body > ul').height();
        $('.qt-body > ul').animate({top: this.scrolltop + 'rem'});
      }
    },

  }
</script>

<style scoped>
  @import "../style/match-test.css";


</style>
