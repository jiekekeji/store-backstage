<template>
  <div>
    <button @click="open({name:'jack'})">试试</button>
  </div>
</template>
<style>
</style>
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
