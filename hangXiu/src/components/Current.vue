<template>
    <div class="current">
        <div class="contain">
            <div class="daohang" @mouseenter="appearNav"></div>
            <headernav v-if="appear" class="header-current"></headernav>   
            <video id="video" class="play-v" poster="../assets/current-bgi.png" controls>
                <source src="../../static/video/current.mp4"> 
            </video>
            <button id="btn" class="control" @click="Toplay"></button>
            <div class="passage">
                <div class="left">
                    <div class="decline">
                        <h4 class="title-d">缺乏推广，日益衰落</h4>
                        <p class="text-d">杭绣曾有过辉煌的历史，但是由于手工精致，讲求细节，耗时长等多种客观因素的限制，无法 
                            成为工业化社会大批量生产的商品。加之后继乏人，了解杭绣的人少，学习杭绣的人更少，杭州现有的几位手工
                            刺绣大师，陈水琴与赵亦军年事已高，年轻一辈的金家虹，余知音从事刺绣也都有二十余年的经历，因此手工刺绣日渐
                            呈现衰落趋势。</p>
                    </div>
                    <div class="protect-logo">
                    <img src="../assets/protect-logo.png" alt>
                    </div>
                </div>
                <div class="way">
                    <h3 class="title-w">积极保护<br/>焕发活力</h3>
                    <div class="text-w">
                        <p>建国后，杭绣得到了政府的重视，市工艺美术学校专设了刺绣班，培养了一批后继新人。市工艺美术研究所专
                            门设立刺绣和机绣研究室，研究整理，发掘创新，创作了大量刺绣精品，形成了杭州现代刺绣的独特风格，
                            在全国工艺美术界奇葩突现，使古老的杭州刺绣绽放出新的辉煌。</p>
                        <p>2005年，杭绣被评为杭州市第一批及浙江省第三批非物质文化遗产项目。</p>   
                        <div>
                            <img src="../assets/ngx.png" alt width="100%"> 
                            <p class="pic_pro">"男工绣"艺人赵亦军是唯一的传承人</p>
                        </div>
                        <p class="Clear">2005年，杭绣被评为杭州市第一批非物质文化遗产项目</p>
                        <p>2009年，杭绣被评为浙江省第三批非 物质文化遗产项目</p> 
                        <p>近年来手工艺人和政府都在寻求传承杭绣的途径。自从杭绣被列入非物质文化遗产项目后，更加引起了人们的重视，
                            目前杭绣积极寻求现代出路， 不仅在大中小学校进行了大规模的推广宣传，而且还同一些杭州本地的品牌服饰进
                            行了深度合作，目前，杭绣正在日益焕发出新的活力。</p>
                        <div class="pic_sort">
                            <img class="img" src="../assets/cu1.png" alt>
                            <img class="img" src="../assets/cu2.png" alt>
                            <img class="img" src="../assets/cu1.png" alt>
                            <img class="img" src="../assets/cu2.png" alt>
                        </div>
                    </div>
                </div>
                
            </div>
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
</template>

<script>
import HeaderNav from './HeaderNav'
export default {
    name: "Current",
    data(){
        return{
            appear: false,
        }
    },
    components:{
        "headernav": HeaderNav
    },
    methods:{
        appearNav(){
            this.appear = ! this.appear
        },
        Toplay(){
            var video = document.getElementById("video");
            var btn = document.getElementById("btn");
            video.play();
            btn.style.display = "none"
        }
    },
    mounted(){       
        var video = document.getElementById("video");
        var btn = document.getElementById("btn");
        video.addEventListener('pause',function(){
            btn.style.display = "block"
        })
        video.addEventListener('play',function(){
            btn.style.display = "none"
        })
    }
}
</script>

<style scoped>
.daohang{
    background: url("../assets/daohang.png") no-repeat;
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
    background: url("../assets/header4.png") no-repeat;
    background-size: cover;
    position: absolute;
    z-index: 99;
    left: 0;
    top: 0;
    width: 100%;
}
.contain{
    background-image: url("../assets/currentBgi.png");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}
.control{
    background: url("../assets/bofang.png") no-repeat;
    background-size: 40%;
    background-position: center;
    width: 10vh;
    height: 10vh;
    background-color: rgba(0,0,0,1);
    opacity: 0.6;
    position: absolute;
    left: 50%;
    top: 10%;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    z-index: 99;
    outline: none;
}
.play-v{
    width: 100%;
    outline: none;
    position: relative;
}
.passage{
    color: #3B3A3A;
    width: 100%;
    display: flex
}
.left{
    width: 50%;
}
.decline{
    margin-left: 25%;
    margin-top: 10vh;
    width: 62%;
    /* background-color: yellow; */
}
.title-d{
    font-size: 2em;
    font-weight: 400;
    border-left: 2px solid #707070;
    padding: 10px;
}
p.text-d{
    font-size: 1.2em;
    width: 55%;
    padding: 13px 0 0 13px;
    letter-spacing: 0.1em;
}
.way{
    /* background-color: pink; */
    display: inline-block;
    width: 50%;
    margin-top: 35vh;
    padding-bottom: 20vh;
}
.protect-logo{
    width: 20%;
    clear: left;
    padding-top: 15vh;
    margin-left: 25%;
}
h3.title-w {
    border-left: 2px solid #707070;
    padding: 20px;
    font-size: 3em;
    font-weight: 300;
    margin-left: 35%;
    margin-top: 15vh;
}
.text-w{
    font-size: 1.2em;
    width: 70%;
    margin-top: 15vh;
    /* font-weight: 300; */
}
.text-w p{
    margin-bottom: 4vh;
}
p.pic_pro {
    font-size: 0.6em;
    float: right;
}
p.Clear {
    clear: both;
}
.pic_sort {
    display: flex;
    justify-content: space-between;
}
img.img {
    width: 20%;
}
.bottom {
    /* background-color: #D8CCC0; */
    background: url("../assets/current_header.png") no-repeat;
    background-size: cover;
    height: 30vh;
    color: rgb(112, 101, 95);
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
    background: url("../assets/youjian1.png") no-repeat;
    background-position: center;
    background-size: 50%;
    background-color: rgb(194, 181, 173);
}
.pic2{
    background: url("../assets/qq.png") no-repeat;
    background-position: center;
    background-size: 50%;
    background-color: rgb(194, 181, 173);
}
.pic3{
    background: url("../assets/weixin.png") no-repeat;
    background-position: center;
    background-size: 50%;
    background-color: rgb(194, 181, 173);
}
.pic4{
    background: url("../assets/weibo.png") no-repeat;
    background-position: center;
    background-size: 50%;
    background-color: rgb(194, 181, 173);
}
.pic5{
    background: url("../assets/dianhua.png") no-repeat;
    background-position: center;
    background-size: 50%;
    background-color: rgb(194, 181, 173);
}
.pic6{
    background: url("../assets/link-fill.png") no-repeat;
    background-position: center;
    background-size: 50%;
    background-color: rgb(194, 181, 173);
}
</style>

