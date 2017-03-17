<template>
  <div class="pdfunset-container">
    <!--start 标题部分-->
    <div class="title">
      商城功能设置
    </div>
    <!--end 标题部分-->
  </div>
</template>

<script>
  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    components: {},
    methods: {
      open(obj){
        console.log(obj);
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "../assets/style/pdfunset.scss";
</style>
