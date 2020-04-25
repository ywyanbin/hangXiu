<template>
    <div class="person">
        <div class="personHeader"></div>
        <div class="back">
            <router-link to="/"><div class="back-btn"></div></router-link>
        </div> 
        <div class="leftPart">
            <p class="left-title">岁月静好</p>
            <div class="touxiang"><img class="tx" src="../../assets/shezhi.png"></div>
            <div class="left-contain">
                <router-link tag="li" to="/person/">
                    <img class="watch" src="../../assets/watch.png" alt>
                    <a>观看记录</a>
                </router-link>
                <router-link tag="li" to="/person/collect">
                    <img class="collect" src="../../assets/collect.png" alt>
                    <a>我的收藏</a>
                </router-link>
                <router-link tag="li" class="document" to="/person/document">
                    <img class="document" src="../../assets/document.png" alt>
                    <a>文档议项</a>
                </router-link>
                <router-link tag="li" to="/person/message">
                    <img class="message" src="../../assets/message.png" alt>
                    <a>我的消息</a>
                </router-link>
            </div>
        </div>
        <div class="rightPart">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'person',
    created(){
        axios.get('/user/addviewrecord')
    }
}
</script>

<style scoped>
.person{
    width: 100%;
    height: 100vh;
    background: url("../../assets/personal-bg.png") no-repeat;
    background-size: cover;
    color: #5A4F4F;
}
.personHeader{
    height: 10vh;
    background: url("../../assets/personHeader.png") no-repeat;
    background-size: 100%;
}
.leftPart {
    width: 20%;
    height: 80vh;
    background-color: #FDF3F3;
    float: left;
    margin-left: 10%;
    margin-top: 3vh;
}
p.left-title {
    font-size: larger;
    height: 10vh;
    line-height: 10vh;
    text-align: center;
    /* background: pink; */
}
.touxiang{
    width: 10vh;
    height: 10vh;
    background: url("../../assets/circle2.png") no-repeat;
    background-size: cover;
    margin: 0 auto;
    position: relative;
}
.tx{
    width: 30%;
    position: absolute;
    bottom: 0;
    right: 0;
}
.left-contain a{
    text-decoration: none;
    color: #5A4F4F;
}
.left-contain {
    list-style: none;
    margin-top: 5vh;
}
.left-contain li {
    width: 50%;
    height: 5vh;
    line-height: 5vh;
    /* background: lightblue; */
    text-align: center;
    font-size: smaller;
    margin-top: 2vh;
    margin-bottom: 2vh;
    margin-left: 20%;
}
img.watch,img.collect,img.document,img.message {
    width: 20%;
    vertical-align: middle;
    margin-right: 5%;
}
.rightPart {
    width: 60%;
    height: 80vh;
    background-color: #F7EEED;
    float: left;
    margin-top: 3vh;
}
.back {
    position: absolute;
    left: 3%;
    top: 10vh;
}
.back-btn{
    background: url("../../assets/fanhui.png") no-repeat;
    background-position: center;
    background-size: 50%;
    width: 5vh;
    height: 5vh;
    background-color: #aaa;
    border-radius: 25px;
}
</style>