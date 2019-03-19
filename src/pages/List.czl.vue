<template>
    <div>
        <mt-button class="datas" @click="tiao(5286)">更多日期</mt-button>
    </div>
</template>
<script>
export default {
    methods:{
        tiao(id){
            this.$router.push({name:'Goods.czl',params:{id},query:{id}});
            // console.log(this.$router);
        }
    }
}
</script>

