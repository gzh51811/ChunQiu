<template>
  <div id="goods">
    <headerComponent/>
    <banner-component/>
    <mainComponent/>
    <footerComponent/>
  </div>
</template>
<script>
import bannerComponent from "../components/banner.czl.vue";
import headerComponent from "../components/header.czl.vue";
import mainComponent from "../components/main.czl.vue";
import footerComponent from "../components/footer.czl.vue";
export default {
  components: {
    headerComponent,
    bannerComponent,
    footerComponent,
    mainComponent
  }
};
</script>
<style>
body {
  margin: 0;
}
#goods{
  width: 100%;
  position:relative;
}
</style>

