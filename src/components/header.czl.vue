<template>
  <div class="header">
    <mt-header fixed title="产品详情">
      <mt-button slot="left">
        <i class="el-icon-back"></i>
      </mt-button>
      <mt-button slot="right">
        <i class="el-icon-menu"></i>
      </mt-button>
      <mt-button slot="right">
        <i class="el-icon-share"></i>
      </mt-button>
    </mt-header>
  </div>
</template>
<script>
export default {
    data(){
        return {
            fixed: true
        }
    },
    methods: {
      // handleClick() {}
  },
};
</script>

<style lang="scss">
.header {
    height: 40px;
  .el-icon-menu {
    margin-right: 5px;
    font-size: 20px;
  }
  .el-icon-share {
    font-size: 20px;
  }
  .el-icon-back {
    font-size: 20px;
  }
}
</style>

