<template>
    <div class="banner" style="height:100px;">
        <mt-swipe :auto="4000">
        <mt-swipe-item><img src="http://media.china-sss.com/img/M00/04/77/wKjFbFyI2tKAKyWdAAVnwiW4XQQ647.png" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="http://media.china-sss.com/img/M00/04/76/wKjFbFyHgJCAJBXYAARmX3q0V7Q.12.png" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="http://media.china-sss.com/img/M00/04/6C/wKjFbFx_c4yAdAulAAF_VjtD9iA116.jpg" alt=""></mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.banner{
    img {
        display: block;
        border: 0;
        max-width: 100%;
        height: auto;
        background-size: 25%;
    }
}
</style>
