<template>
    <div class="login">
        <div class="login-bg">
            <button class="icon-close" @click="close"></button>
            <div class="part1">
                <img class="imgs" src="../../assets/phone-login.png" alt>
                <span class="words"><router-link to="/loginuser">用户登录</router-link></span>
            </div>
            <div class="part2">
                <img class="imgs" src="../../assets/message-login.png" alt>
                <span class="words"><router-link to="/loginphone">手机登录</router-link></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    methods:{
        close(){
            this.$emit('closeTag')
        }
    }
}
</script> 

<style scoped>
.login{
    /* position: fixed; */
    overflow: hidden;
    background: url("../../assets/beijing.png");
}
a{
    text-decoration: none;
    color: #CECBCB;
}
.login-bg{
    background: url("../../assets/bg-login.png") no-repeat;
    height: 80vh;
    width: 25%;
    background-size: contain;
    margin: 10vh auto;
    position: relative;
}
.part1 {
    width: 36%;
    color: #CECBCB;
    position: absolute;
    left: 32%;
    top: 55%;
    font-size: small;
}
.imgs {
    vertical-align: middle;
    width: 20%;
}
.part2 {
    width: 36%;
    color: #CECBCB;
    position: absolute;
    left: 32%;
    top: 65%;
    font-size: small;
}
span.words {
    padding-left: 5%;
}
.icon-close{
    background: url("../../assets/cuo.png") no-repeat;
        height: 5vh;
    width: 5vh;
    background-size: contain;
    border: none;
    position: absolute;
    right: -10%;
    cursor: pointer;
}
</style>




