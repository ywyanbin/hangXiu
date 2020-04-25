<template>
    <div class="History">
        <div class="history">
            <div class="daohang" @mouseenter="appearNav"></div>
            <headernav v-if="appear" class="header-current"></headernav>
            <div class="header-bgc"></div>   
            <div class="juanzhou"></div>
            <div class="parts">
                <div class="left">
                    <div class="juanzhou-background" > 
                        <!-- <div class="music" @click="audioPlay(0)" ></div> -->
                        <img v-if="index1[0]" @click="Change1(1)" width="100%"  class="born" src="../../assets/first1.png" alt>
                        <img v-if="index1[1]" @click="Change1(2)" width="100%"  class="born" src="../../assets/first2.gif" alt>
                    </div>
                    <p class="time_2">公元1104年<img class="yuan3" src="../../assets/none.png" alt width="13%"></p>
                    <p class="dynasty_2">北宋<img class="yuan3" src="../../assets/none.png" alt width="13%"></p>
                    <p class="dynasty_2-1">文绣院<img class="yuan3" src="../../assets/none.png" alt width="13%"></p>
                    <div class="wenxiuyuan"><img src="../../assets/wenxiuyuan.png" alt width="100%"></div>
                    <p class="pass_2">文绣院的设立成为全国刺绣精英的交流平台，北宋刺绣在民间刺绣日常用途的基础上，逐渐发展出闺阁绣和宫廷绣，由实用的
                        民间刺绣进而为艺术新商品。</p>
                    <p class="time_2-1">公元1127年<img class="yuan3" src="../../assets/none.png" alt width="13%"></p>
                    <p class="dynasty_2">南宋<img  @click="audioPlay(1)" class="yuan4" src="../../assets/music.png" alt width="26%"></p>
                    <p class="time_2-1">公元1279年<img class="yuan3" src="../../assets/none.png" alt width="13%"></p>
                    <p class="pass_2">宋高宗南渡，迁都杭州后，画师绣工云集，繁华甲于一时。朝廷设立织造机构，监制宫廷服饰，当时杭州就集中了300余名技艺出
                        众的绣工和画师，专为皇家、内苑绘绣各种服饰。据明代万历年间张应文著《清秘藏》记载“宋人之绣，针线细密，用线止一二
                        丝，用针如发，细者为之，设色精妙，光彩夺目。”其中杭绣最精华的“金银彩绣” 曾为皇家垄断，因此也称 “宫廷绣”。绣工均
                        为男性，所出绣品沉静雅丽、雍容 华贵、柔中带刚，也因此直接引领了男工绣的流行。<img class="yuan5" src="../../assets/none.png" alt width="13%"></p>
                    <div class="juanzhou-background clear_2">
                        <!-- <div class="music"  ></div> -->
                        <img v-if="index3[0]" width="100%" @click="Change3(1)" class="born"  src="../../assets/third1.png" alt>
                        <img v-if="index3[1]" width="100%" @click="Change3(2)" class="born"  src="../../assets/third2.gif" alt>
                        <img v-if="index3[2]" width="100%" @click="Change3(3)" class="born" src="../../assets/third3.jpg" alt>
                        <img v-if="index3[3]" width="100%" @click="Change3(4)" class="born" src="../../assets/third4.jpg" alt>
                    </div>
                </div>
                <div class="right">
                    <p class="time_1">公元201年<img class="yuan" src="../../assets/none.png" width="3%" alt></p>
                    <p class="dynasty_1">汉代<img @click="audioPlay(0)" class="yuan1" src="../../assets/music.png" alt width="4%"></p>
                    <p class="time_1">公元220年<img class="yuan" src="../../assets/none.png" width="3%" alt></p>
                    <p class="pass_1">据《中国刺绣技法研究》一书所说“宋高宗年间，刘安妃，杭州人，工书画，绣有东方朔像。”这幅绣像，现藏英国伦敦博物馆。中
                        国刺绣史上第一把弯头绣花剪刀就出自杭州，杭州历来有 “丝绸之府”之称，还是全国刺绣用丝线的主要产地，这些行业的兴盛，
                        也相应促进了杭绣工艺的发展<img class="yuan2" src="../../assets/none.png" alt width="10%"></p>
                    <p class="pass_1-1">文绣院的设立成为全国刺绣精英的交流平台据《宋会要·职官·文绣院》中记载，北宋徽宗崇宁三年（1104年）“试殿中少监张康
                        白言：令锻炼织、纫缝之事，皆各有院，院各有工，而于绣独无，欲乞置绣院一所，招刺绣300人，仍下诸路选择善绣人，以为
                        工师，候教习有成，优与酬奖，诏依，仍以文绣院为名”。同时徽宗年间又、设置绘绣专科，名家绣工辈出。</p>
                    <p class="dynasty_1">闺阁绣<br>宫廷绣<img class="yuan1" src="../../assets/none.png" alt width="4%"></p>
                    <div class="guigexiu"><img src="../../assets/guigexiu.png" alt width="100%"></div>
                    <div class="juanzhou-background1">
                        <!-- <div class="music"  @click="audioPlay(1)" ></div> -->
                        <img v-if="index2[0]" width="100%" @click="Change2(1)" class="born"  src="../../assets/second1.png" alt>
                        <img v-if="index2[1]" width="100%" @click="Change2(2)" class="born" src="../../assets/second2.gif" alt>
                        <img v-if="index2[2]" width="100%" @click="Change2(3)" class="born" src="../../assets/second3.jpg" alt>
                    </div>
                    <p class="time_1-1">19世纪中叶<img class="yuan" src="../../assets/none.png" width="3%" alt></p>
                    <p class="dynasty_1">清末明初<img @click="audioPlay(2)"  class="yuan1" src="../../assets/music.png" alt width="4%"></p>
                    <p class="time_1">20世纪30年代<img class="yuan" src="../../assets/none.png" width="3%" alt></p>
                    <p class="pass_1">明清时期，民间出现了众多的商品性的专业生产作坊，明代韩希孟、清代沈善宝皆为杭州籍名媛，更是对丝绣理论及闺阁绣
                        做出了巨大贡献。受到元代匠户入籍世袭制度的影响，家庭作坊的传承方式中，一些特殊工序使得男性绣工职业化。自清
                        代以来，杭绣根据工序不同分作男、女绣工，绣线盘金各司其职。清末以前无从考证，民国后杭绣的代表性人物有汪瑞华、邵
                        咬金、张金法、赵云英、陈水琴、赵亦军、金家虹、余知音、王晨云等。<img class="yuan2" src="../../assets/none.png" alt width="10%"></p>
                </div>
            </div>
        </div>
        <audio class="audio" id="DS" src="static/video/QY.mp3"></audio>
        <audio class="audio" id="QY" src="static/video/DS.mp3"></audio>
        <audio class="audio" id="SL" src="static/video/SL.mp3"></audio>

        <div class="bottom">
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
import HeaderNav from '../HeaderNav'
export default {
    name: "history",
    data(){
        return{
            index1: [true,false],
            index2: [true,false,false],
            index3: [true,false,false,false],
            appear: false
        }
    },
    components:{
        "headernav":HeaderNav
    },
    methods:{
        Change1(index){
            if(index==1){
                this.$set(this.index1,0, false)
                this.$set(this.index1,1, true) 
                // var h = $(window).scrollTop();
                // $("html,body").animate({scrollTop:h+500},3000);
            }
            if(index==2){
                this.$set(this.index1,0, true)
                this.$set(this.index1,1, false)
                // var h = $(window).scrollTop();
                // $("html,body").animate({scrollTop:h-500},3000);
            }
            // this.$nextTick(() => {
            //     document.documentElement.scrollTop = 540
            // })
           
            // this.index1 = !this.index1
        },
        Change2(index){
            if(index==1){
                this.$set(this.index2,0, false)
                this.$set(this.index2,1, true)
                this.$set(this.index2,2, false)
                // var h = $(window).scrollTop();
                // $("html,body").animate({scrollTop:h+500},3000);
            }
            if(index==2){
                this.$set(this.index2,0, false)
                this.$set(this.index2,1, false)
                this.$set(this.index2,2, true)
            }
            if(index==3){
                this.$set(this.index2,0, true)
                this.$set(this.index2,1, false)
                this.$set(this.index2,2, false)
                var h = $(window).scrollTop();
                // $("html,body").animate({scrollTop:h-500},3000);
            }
        },
        Change3(index){
            if(index==1){
                this.$set(this.index3,0, false)
                this.$set(this.index3,1, true)
                this.$set(this.index3,2, false)
                this.$set(this.index3,3, false)
                var h = $(window).scrollTop();
                // $("html,body").animate({scrollTop:h+500},3000);
            }
            if(index==2){
                this.$set(this.index3,0, false)
                this.$set(this.index3,1, false)
                this.$set(this.index3,2, true)
                this.$set(this.index3,3, false)
            }
            if(index==3){
                this.$set(this.index3,0, false)
                this.$set(this.index3,1, false)
                this.$set(this.index3,2, false)
                this.$set(this.index3,3, true)
            }
            if(index==4){
                this.$set(this.index3,0, true)
                this.$set(this.index3,1, false)
                this.$set(this.index3,2, false)
                this.$set(this.index3,3, false)
                var h = $(window).scrollTop();
                // $("html,body").animate({scrollTop:h-500},3000);
            }
        },
        appearNav(){
            this.appear = ! this.appear
        },
        audioPlay (i) {
            var audios = document.getElementsByClassName("audio");
            var audioImg = document.getElementsByClassName("music");
            if(audios[i].paused){
                audios[i].play();
            } else {
                audios[i].pause();
            }
        }
    },
    // mounted(){
    //     $(".born").click(function(){
    //         var h = $(window).scrollTop();
    //         $("html,body").animate({scrollTop:h+500},3000);
    //     })
    // }  
}
</script>

<style scoped>
.history{
    width: 100%;
    /* height: 200vh; */
    background-color: #964335;
    position: relative;
}
.daohang{
    background: url("../../assets/daohang.png") no-repeat;
    background-position-x: center;
    background-size: 70%;
    width: 4%;
    height: 2%;
    position: absolute;
    z-index: 100;
    left: 50%;
    cursor: pointer;
}
.header-current{
    /* background-color: #503C2A; */
    /* opacity: 0.6; */
    background: url("../../assets/header3.png") no-repeat;
    background-size: cover;
    position: absolute;
    z-index: 99;
    left: 0;
    top: 0;
    width: 100%;
}
.header-bgc{
    background-image: url("../../assets/history-bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    /* height: 90vh; */
    height: 70vh;
}
.juanzhou{
    width: 75%;
    height: 40vh;
    margin: 0 auto;
    background-image: url("../../assets/jz.png");
    background-repeat: no-repeat;
    background-size: contain;
    margin-top: -32vh;
}
/* .juanzhou-active{
    width: 75%;
    height: 40vh;
    margin: 0 auto;
    background-image: url("../../assets/jz2.gif");
    background-repeat: no-repeat;
    background-size: contain;
    margin-top: -32vh;
} */
.parts{
    display: flex;
    justify-content:space-around;
    /* margin-top: -4vh; */
    color: #F2C122;
}
.left {
    width: 50%;
    border-right: 1px solid #EC930B;
}
.right {
    width: 50%;
    padding-bottom: 10vh;
}
p.time_1 {
    margin-top: 15vh;
    font-size: 1.2em;
    padding-left: 10%;
    position: relative;
    /* background: url("../../assets/none.png") no-repeat;
    background-position: left */
}
p.dynasty_1 {
    font-size: 2em;
    font-family: 幼圆;
    padding-left: 10%;
    margin-top: 15vh;
    position: relative;
}
p.pass_1 {
    padding-left: 10%;
    margin-top: 15vh;
    width: 30%;
    line-height: 4vh;
    position: relative;
}
.juanzhou-background {
    width: 40%;
    float: right;
    padding-right: 10%;
    margin-top: 31vh;
}
p.time_2 {
    clear: both;
    float: right;
    padding-right: 10%;
    margin-top: 100vh;
    font-size: 1.2em;
    position: relative;
}
p.dynasty_2 {
    font-size: 2em;
    font-family: 幼圆;
    clear: both;
    float: right;
    padding-right: 10%;
    margin-top: 15vh;
    position: relative;
}
p.dynasty_2-1 {
    font-size: 1.5em;
    font-family: 幼圆;
    clear: both;
    float: right;
    padding-right: 10%;
    margin-top: 5vh;
    position: relative;
}
.wenxiuyuan {
    clear: both;
    width: 35%;
    float: right;
    padding-right: 10%;
    margin-top: 5vh;
}
p.pass_2 {
    clear: both;
    width: 30%;
    line-height: 4vh;
    float: right;
    padding-right: 10%;
    margin-top: 15vh;
    position: relative;
}
p.time_2-1 {
    clear: both;
    float: right;
    padding-right: 10%;
    margin-top: 15vh;
    font-size: 1.2em;
    position: relative;
}
.clear_2{
    clear: both;
}
p.pass_1-1 {
    padding-left: 10%;
    margin-top: 50vh;
    width: 30%;
    line-height: 4vh;
}
.guigexiu {
    width: 20%;
    padding-left: 10%;
    margin-top: 5vh;
}
.juanzhou-background1 {
    width: 40%;
    margin-top: 31vh;
    padding-left: 10%;
}
p.time_1-1 {
    margin-top: 120vh;
    font-size: 1.2em;
    padding-left: 10%;
    position: relative;
}
img.yuan {
    position: absolute;
    left: -1.5%;
    top: 30%;
} 
img.yuan1 {
    position: absolute;
    left: -2%;
    top: 30%;
}
img.yuan2{
    position: absolute;
    left: -5%;
    top: 0;
}
img.yuan3 {
    position: absolute;
    right: -7.5%;
    top: 5%;
}
img.yuan4{
    position: absolute;
    right: -15%;
    top: 5%;
}
img.yuan5 {
    position: absolute;
    right: -7.5%;
    top: 0%;
}

/* .juanzhou-background{
    width: 20%;
    margin-top: 10vh;
    position: relative;
} */
.bottom {
    background-color: #9F5748;
    height: 30vh;
    color: #B7B5B5;
  }
  .b_top {
      width: 80%;
      margin: 0 auto;
      display: flex;
      border-bottom: 1px solid #AB7267;
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
    background: url("../../assets/youjian1.png") no-repeat;
    background-position: center;
    background-size: 50%;
    background-color: #C79C93;
  }
  .pic2{
    background: url("../../assets/qq.png") no-repeat;
    background-position: center;
    background-size: 50%;
    background-color:  #C79C93;
  }
  .pic3{
    background: url("../../assets/weixin.png") no-repeat;
    background-position: center;
    background-size: 50%;
    background-color:  #C79C93;
  }
  .pic4{
    background: url("../../assets/weibo.png") no-repeat;
    background-position: center;
    background-size: 50%;
    background-color:  #C79C93;
  }
  .pic5{
    background: url("../../assets/dianhua.png") no-repeat;
    background-position: center;
    background-size: 50%;
    background-color:  #C79C93;
  }
  .pic6{
    background: url("../../assets/link-fill.png") no-repeat;
    background-position: center;
    background-size: 50%;
    background-color:  #C79C93;
  }
    
   .music{
       background: url("../../assets/yinpin.png") no-repeat;
        height: 4vh;
        width: 4vh;
        background-position: center;
        background-color: #E9C565;
        border-radius: 50%;
        background-size: 50%;
        position: absolute;
        left: -12%;
        /* top: 25%; */
        margin-top: 7%;
        cursor: pointer;
   }
</style>