<template>
    <mt-header fixed :title="title">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="goback">返回</mt-button>
      </router-link>
    </mt-header>
</template>
<script>
export default {
  data(){
    return{
      name:"YKB"
    }
  },
  props:["title"],
  methods:{
        goback(){
        this.$router.back();
    }
  }
}
</script>
<style scoped>
.mint-header.is-fixed {
  background-color: #fff;
  color: #000;
}

</style>

