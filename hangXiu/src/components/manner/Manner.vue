<template>
    <div class="manner">
        <div class="contain">
            <div class="headerBg">
                <img src="../../assets/style-header.png" width="100%" alt>
            </div>
            <div class="daohang" @mouseenter="appearNav"></div>
            <headernav v-if="appear" class="header-current"></headernav>
            <div class="containBg">
                <p class="title_m">杭绣</p>
            </div>
            <div class="manner-passage">
                <p class="pass1 animated fadeInDown">杭绣在刺绣技艺上，吸收并融合苏、湘、 蜀、粤四大名绣之长，绣法多变</p>
                <div class="manner-el">元素</div>
                <p class="pass2">杭绣的图案设计，内容大多取材于民间 喜闻乐见的龙、凤、麒麟、蝙蝠、孔雀、 牡丹、
                    寿桃、如意、八卦、西湖风景等 传统图案。</p>
                <div class="dargen"><img class="dargin-border wow slideInLeft" data-wow-duration="3s" src="../../assets/dragen.png" width="100%" alt></div>
                <div class="pass3 wow slideInRight" data-wow-duration="3s">
                    <p class="pass3_1">龙刺绣</p>
                    <p class="pass3_2">龙的图案设计，给人一种气势蓬勃的感 绝，龙图绣主要为宫廷用。</p>
                </div>
                <p class="pass4 wow slideInRight" data-wow-duration="3s">水光潋艳晴方好，山色空雨亦奇；欲把西湖比西子，淡妆浓抹总相宜”。杭州西湖的风景是古往今来许多文人雅士所青
                    睐的歌颂对象，当然，杭绣的工艺家们也不例外，传统的工艺加上杭州独有的西湖风景，让杭绣更加绚丽夺目。</p>
                <div class="beauty"><img class="beauty-border  wow slideInLeft" data-wow-duration="3s" src="../../assets/beauty.png" width="100%" alt></div>    
                <div class="manner-el play">表现形式</div>
                <p class="pass5">在装饰上运用夸张和变形，也是杭绣一大特色。</p>
                <div class="monkey"><img class="monkey-border wow rollIn" data-wow-duration="2s" src="../../assets/monkey.png" width="100%" alt></div>
            </div>
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
    </div>
</template>

<script>
import HeaderNav from '../HeaderNav'
import {WOW} from 'wowjs'
export default {
    name: 'manner',
    data(){
        return{
            appear: false
        }
    },
    components:{
        "headernav": HeaderNav
    },
    methods:{
        appearNav(){
            this.appear = ! this.appear
        }
    },
    mounted(){
        var wow = new WOW({
          boxClass: 'wow',
          animateClass: 'animated',
          offset: 0,
          mobile: true
        })
        wow.init();
    }
}
</script>

<style scope>
.daohang{
    background: url("../../assets/daohang-red.png") no-repeat;
    background-position-x: center;
    background-size: 70%;
    width: 4%;
    height: 3%;
    position: absolute;
    z-index: 100;
    left: 50%;
    cursor: pointer;
}
.header-current{
    /* background-color: #503C2A; */
    /* opacity: 0.6; */
    background: url("../../assets/header1.png") no-repeat;
    background-size: cover;
    position: absolute;
    z-index: 99;
    left: 0;
    /* top: 0; */
    width: 100%;
    margin-top: -1vh;
}
.manner{
    background-color: #EBDFD9;
    color: #6F5A5A;
}
.contain{
    background-image: url("../../assets/style-body-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    /* height: 100vh; */
}
.containBg {
    width: 45%;
    border-top: 1px solid #707070;
    border-bottom: 1px solid #707070;
    margin-top: 10vh;
    margin-left: 15%;
}
.title_m {
    font-size: 7vh;
    font-weight: normal;
    margin-left: 10%;
    padding: 10px;
    
}
.manner-passage{
    width: 80%;
    margin: 0 auto;
    margin-top: 10vh;
}
p.pass1 {
    width: 27%;
    height: 10vh;
    font-size: 1em;
    margin: 0 auto;
    text-align: center;
    line-height: 4vh;
}
.manner-el {
    width: 27%;
    height: 12vh;
    margin: 5vh auto;
    line-height: 11vh;
    text-align: center;
    font-size: 5vh;
    background: url("../../assets/yuansu.png") no-repeat;
    /* background-size: 100% 100%; */
    border-top: 1px solid #707070;
    border-bottom: 1px solid #707070;
    background-size: contain;
    background-position: center;
}
p.pass2 {
    width: 25%;
    height: 15vh;
    margin: 10vh auto;
    font-size: 1em;
    line-height: 3vh;
}
.dargen{
    width: 50%;
}
.pass3 {
    width: 27%;
    margin-left: 48%;
    font-size: 1em;
    line-height: 3.5vh;
    margin-top: -2vh;
}
p.pass4 {
    margin: 0 auto;
    width: 27%;
    height: 15vh;
    font-size: 1em;
    line-height: 4vh;
    margin-right: 52%;
}
.beauty {
    width: 40%;
    margin-left: 47%;
    margin-top: -15vh;
}

p.pass5 {
    width: 27%;
    height: 15vh;
    margin: 0 auto;
    font-size: 1em;
    line-height: 4vh;
}
.monkey {
    width: 40%;
    margin: 0 auto;
    /* margin-left: 19%; */
    /* margin-top: 10vh; */
    padding-bottom: 30vh;
}
.bottom {
    /* background-color: #D8CCC0; */
    background: url("../../assets/current_header.png") no-repeat;
    background-size: cover;
    height: 30vh;
    color: rgb(235, 219, 209);
}
.b_top {
    width: 80%;
    margin: 0 auto;
    display: flex;
    border-bottom: 1px solid #C4BAAF;
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
    background-color: #D2C3BA;
}
.pic2{
    background: url("../../assets/qq.png") no-repeat;
    background-position: center;
    background-size: 50%;
    background-color: #D2C3BA;
}
.pic3{
    background: url("../../assets/weixin.png") no-repeat;
    background-position: center;
    background-size: 50%;
    background-color: #D2C3BA;
}
.pic4{
    background: url("../../assets/weibo.png") no-repeat;
    background-position: center;
    background-size: 50%;
    background-color: #D2C3BA;
}
.pic5{
    background: url("../../assets/dianhua.png") no-repeat;
    background-position: center;
    background-size: 50%;
    background-color: #D2C3BA;
}
.pic6{
    background: url("../../assets/link-fill.png") no-repeat;
    background-position: center;
    background-size: 50%;
    background-color: #D2C3BA;
}
</style>