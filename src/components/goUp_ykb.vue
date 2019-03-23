<template>
   
    <div class="ic-top js_goTop"  v-if="state" @click="goup">
        <span>TOP</span>
    </div>
    
</template>
<script>
export default {
    props:["state"],
    methods:{
        goup(){
            this.timer=setInterval(() =>{
            // console.log(n++);
            if (window.scrollY <= 5) {
                clearInterval(this.timer);
            }
            window.scrollTo(0,0);
            }, 30);
        }
    }
}
</script>
<style scoped>
.ic-top {
    display: block;
    position: fixed;
    bottom: 2.8rem;
    right: .5rem;
    border-radius: 100%;
    color: #fff;
    line-height: 1rem;
    width: 1rem;
    background-color: rgba(0,0,0,.5);
    -moz-animation: myfirstt 1s;
    -o-animation: myfirstt 1s;
    -webkit-animation: myfirstt 1s;
    z-index: 4;
}
.ic-top span {
    font-size: .3rem;
    display: block;
    text-align: center;
}
</style>
