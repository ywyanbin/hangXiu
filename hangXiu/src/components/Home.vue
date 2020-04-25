<template>
  <div class="home">
   <div class="el-Header">  
      <headernav></headernav>
      <!-- <div class="player"> -->
        <!-- <video-player class="video-player vjs-custom-skin"
          ref="videoPlayer"
          :playsinline="true"
          style="object-fit:fill"
          :options="playerOptions"
          :x5-video-player-fullscreen="true"
          @pause="onPlayerPause($event)"
          @play="onPlayerPlay($event)"
          @fullscreenchange="onFullscreenChange($event)"
          @click="fullScreen"></video-player> -->
      <!-- </div> -->
      <video id="video" class="play-v" poster="../assets/poster.png" muted>
        <source src="../../static/video/index1.mp4">
      </video> 
      <div id="index_bg" class="index_bg"></div>
    </div>
    <div class="decorate">
      <div class="huawen">
        <img src="../assets/245704313_2.png" alt>
      </div>
      <div class="fangkuang">
        <div class="fu">
          <img src="../assets/fu-1.png" width="100%" alt>
        </div>
      </div>
      <div class="huawen">
        <img src="../assets/245704313_2.png" alt>
      </div>
    </div>
    <div class="history wow slideInRight" data-wow-duration="4s" id="history">
      <p><router-link to="history">杭绣的历史</router-link></p>
    </div>
    <div class="style wow bounceInLeft" data-wow-duration="3s" id="style">
       <p><router-link to="/manner">杭绣的风格</router-link></p>
    </div>
    <div class="stitch wow slideInLeft" data-wow-duration="3s" id="stitch">
      <p><router-link to="/hangxiuzhenfa">杭绣的针法</router-link></p>
    </div>
    <div class="bottom wow fadeInDown" id="bottom">
      <div class="b_top">
        <div class="LinkToUs">
          <p class="bottom_title">联系我们</p>
          <div class="Link">
            <div class="border pic1"></div>
            <div class="border pic2"></div>
            <div class="border pic3"></div>
            <div class="border pic4"></div>
            <div class="border pic5"></div>
          </div>
        </div>
        <div class="share">
          <p class="bottom_title">分享此页</p>
          <div class="border pic6"></div>
        </div>
        <div class="master">
          <p class="bottom_title">主要艺术作品来源</p>
          <p class="m_person">赵亦军大师  陈水琴大师</p>
          <p class="m_person">王胜红大师  金家虹大师</p>
        </div>
      </div>
      <div class="b_bottom">
        <p class="feedback">
          <span class="question">如有问题</span>
          <span class="report">举报</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from './HeaderNav'
import {WOW} from 'wowjs'
// import '../../static/css/site.css'

export default {
  name: 'Home',
  data () {
    return {

    }
  },
  components:{
    "headernav":HeaderNav
    // videoPlayer
  },
  mounted () {
    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0)
    })

    var video = document.getElementById("video"); 
      // var bg = document.getElementById("index_bg");
      video.autoplay = true;
      video.loop = false;
      setInterval(function(){
        video.mounted = false;
        video.paused;
        console.log(1111)
      },7000);

    
    var wow = new WOW({
          boxClass: 'wow',
          animateClass: 'animated',
          offset: 0,
          mobile: true
    })
    wow.init();
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a{
    text-decoration: none;
  }
  .home{
    width: 100%;
    background-color: #000;
    /* height:100vh; */
  }
  .el-Header{
    width: 100%;
    position: relative;
    background: url("../assets/index_bg.jpg") no-repeat;
    background-size: cover;
    /* height: 120vh; */
    /* height: 118vh; */
  }
  .index_bg{
    background: url("../assets/index_bg1.jpg") no-repeat;
    background-size: 100% 100%; 
    height: 110vh;
    display: none;
  }
  .player{
     width: 100%;
    object-fit:fill; 
  }
  .play-v{
    width: 100%;
    outline: none;
    /* height: 110vh; */
  }
  .decorate{
    height: 30vh;
    display: flex;
    /* margin-top: -1px; */
    background-color: #131217;
  }
  .huawen{
    width: 40%;
  }
  .huawen img{
    width: 100%;
    height: 30vh;
  }
  .fangkuang{
    width: 20%;
    margin-top: 5vh;
  }
  .fu{
    width: 20vh;
    height: 20vh;
    margin:0 auto;
    border: 2px solid #DCA125;
    transform: rotate(45deg);
    vertical-align: middle;
    overflow: hidden;
    text-align: center;
    display: flex;
  }
  .fu img{
    transform: rotate(-45deg);
    max-height: 100%;
    max-width: 100%;
  } 
  .history{
    background-image: url("../assets/57429442242417875@2x.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .style{
    background-image: url("../assets/style.jpg");
    background-repeat: "no-repeat";
    background-size: "100% 100%";
  }
  .stitch{
    background-image: url("../assets/aaa.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .history, .stitch,.style{
    height: 100vh;
    position: relative;
  }
  .history p, .stitch p, .style p{
    height: 100vh;
    line-height: 100vh;
    color:#CECBCB;
    font-size: 34px;
    text-align: center;
    background-color: #000;
    opacity: 0.79;
    letter-spacing: 1px;
  }
  .history p a, .stitch p a, .style p a{
    color: #707070;
   }
  .bottom {
    background-color: #2D2727;
    height: 30vh;
    color: #B7B5B5;
  }
  .b_top {
      width: 80%;
      margin: 0 auto;
      display: flex;
      border-bottom: 1px solid #645452;
      justify-content: space-between;
      padding-top: 5vh;
      padding-bottom: 5vh;
      font-size: 0.9em;
  }
  p.bottom_title {
    margin-bottom: 3vh;
  }
  .LinkToUs{
      width: 25%;
  }
  .master{
    width: 25%;
  }
  .share{
    width: 25%;
  }
  .border {
    height: 5vh;
    width: 5vh;
    border-radius: 50%;
    margin-right: 5%;
    opacity: 0.6;
  }
  p.m_person {
    font-size: 0.8em;
  }
  p.feedback {
    margin: 0 auto;
    width: 80%;
    font-size: 0.9em;
    padding-top: 3vh;
  }
  span.report {
      float: right;
  }
  .Link{
    display: flex;
  }
  .pic1{
    background: url("../assets/youjian1.png") no-repeat;
    background-position: center;
    background-size: 50%;
    background-color: #3F3434;
  }
  .pic2{
    background: url("../assets/qq.png") no-repeat;
    background-position: center;
    background-size: 50%;
    background-color: #3F3434;
  }
  .pic3{
    background: url("../assets/weixin.png") no-repeat;
    background-position: center;
    background-size: 50%;
    background-color: #3F3434;
  }
  .pic4{
    background: url("../assets/weibo.png") no-repeat;
    background-position: center;
    background-size: 50%;
    background-color: #3F3434;
  }
  .pic5{
    background: url("../assets/dianhua.png") no-repeat;
    background-position: center;
    background-size: 50%;
    background-color: #3F3434;
  }
  .pic6{
    background: url("../assets/link-fill.png") no-repeat;
    background-position: center;
    background-size: 50%;
    background-color: #3F3434;
  }
</style>

