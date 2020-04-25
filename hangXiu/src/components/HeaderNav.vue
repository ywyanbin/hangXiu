<template>
  <div class="headernav">
    <nav class="headNav">
      <img @click="GotoKinds" class="logo" src="../assets/center.png" alt>
      <span class="right">
        <router-link class="nav-title" to="/" exact>首页</router-link>
        <router-link class="nav-title" to="/current" exact>杭绣现状</router-link>
        <router-link class="nav-title" to="/localplace" exact>深入实地</router-link>
        <router-link class="nav-title" to="/showroom" exact>杭绣展厅</router-link>
        <span class="nav-title on">趣味杭绣
          <ul class="two_nav">
            <li><router-link to="draw">刺绣DIY</router-link></li>
            <!-- <li><router-link to="weav">绣布DIY</router-link></li> -->
          </ul>
        </span>
        <input type="search">
        <a class="nav-title color" @click="SignIn">登录</a>
      </span>
    </nav>
    <login class="Tag" v-if="appear" @closeTag="closeTag"></login>
  </div>
</template>

<script>
import Login from './login&register/Login'
export default {
  name: 'HeaderNav',
  data(){
    return{
      appear: false
    }
  },
  components:{
    "login": Login
  },
  methods:{
    SignIn(){
      this.appear = true
    },
    closeTag(){
      this.appear = false
    },
    GotoKinds(){
      this.$router.push({path:'/hangxiuzhenfa'})
    }
  },
  mounted(){
    $(".on").mouseenter(function () { 
      $(".two_nav").css("display","block")
    });
    $(".on").mouseleave(function () { 
      $(".two_nav").css("display","none")
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Tag{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
  }
  a{
    text-decoration: none;
  }

  .headNav{
    /* height: 60px;
    line-height: 60px; */
    height: 8vh;
    line-height: 8vh;
    position: relative;
    /* background-color: #14141A; */
  }
  .logo{
   padding: 8px 0 0 23px;
   cursor: pointer;
  }
  .nav-title{
    /* color: #CECBCB; */
    color: #fff;
    cursor: pointer;
  }
  span.nav-title {
    margin-right: 47px;
    position: relative;
  }
  ul {
      position: absolute;
      left: 0;
      top: 20px;
      line-height: normal;
      z-index: 20;
  }
  .two_nav{
    display: none;
  }
  li {
      width: 110px;
      height: 20px;
      margin: 25px 0;
      
  }
  li a{
      cursor: pointer;
      color: #9F855A;
  }
  li a:hover{
      color: #fff;
  }
  span.right{
    float: right;
  }
  span>a{
    margin-right: 47px;
    color: #CECBCB;
    padding-bottom: 5px;
  }
  input{
    margin-right: 47px;
    border-radius: 30px;
    height: 26px;
    width: 82px;
    border: none;
    padding: 10px;
    background-image: url("../assets/sousuo.png");
    background-repeat: no-repeat;
    background-position: 20% 50%;
  }
  .color{
    color: rgb(173, 116, 78);
  }
  .router-link-active{
    border-bottom: 2px solid #fff;
  }
</style>
