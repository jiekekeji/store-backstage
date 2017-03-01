<!--测试结果-->
<template>
  <div class="container">
    <div>结果:{{resultid}}</div>

    <div @click="goMatchTest">去测试</div>
    <a href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI0MDE3ODE3NQ==&scene=124#wechat_redirect">
      关注公众号
    </a>
  </div>
</template>

<script>

  import {api} from '../constant/api'
  import {utils} from '../constant/utils'

  export default{
    data(){
      return {
        isTelError: false,
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
    },
    activated: function () {

    },
    beforeRouteEnter  (to, from, next) {
      utils.setDocumentTitle('我的测试结果');
      utils.setBodyBgColor("#F6F2ED");
      next();
    },
    beforeRouteLeave (to, from, next) {
      utils.setBodyBgColor("#FFFFFF");
      next();
    },
    computer: {},
    methods: {
      //导航到测试页面
      toMatchTest(){
        if (utils.isEmpty(this.resultid)) {
          this.$router.push({path: 'matchtest'});
          return;
        }
      },
      goMatchTest(){
        this.$router.push({path: 'matchtest'});
      }
    },

  }
</script>

<style scoped>
  @import "../style/match-result.css";
</style>
