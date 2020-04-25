<template>
    <div class="zhaoyijun">
        <div class="content">
            <div class="daohang" @mouseenter="appearNav"></div>
            <headernav v-if="appear" class="header-current"></headernav>
            <div class="zyj">
                <div class="name">
                    <img src="../../assets/name_zyj.png" alt width="100%">
                    <p class="btn-bofang"></p>
                </div>
                <p class="head-title">宫廷绣最后一位传人</p>
            </div>
            <div class="lb"></div>
            <div class="text1">
                <div class="part1">
                    <div class="left">
                        <p class="title-m">巍巍宫廷绣，寂寂传艺人！</p>
                        <p class="title-s">“71岁56年问心无愧”</p>
                        <p class="pass">赵亦军是宫廷杭绣的唯一传人，从1999年因病提前退休至今，他每天坚持在工作室刺绣
                            至少8小时，谢绝了不必要的人情往来，甚至婉拒了工美展的邀请。“我只想尽我所能，多绣一些作品，
                            将宫廷杭绣的技法尽可能地多保存一些。”</p>
                        <p class="pass">众多作品中，佛像是赵亦军最喜欢绣的一个主题。“宫廷杭绣笔画清晰、金碧辉煌的特点
                            与佛像的神圣庄严较为贴切。过去，我们绣龙袍、绣戏服；现在，宫廷杭绣需要一个新的载体。”赵亦军说。</p>
                        <p class="pass">赵亦军的工作室里，摆满了他的刺绣作品，每一件都耗尽他几年的心血。《唐玄奘西行图》、
                            《四十八宏愿阿弥陀佛》、《普贤菩萨》、《西方三圣》、《虚空藏》、《金刚螺》、《金轮王》、《毗沙门》、
                            《俱利迦罗龙王》等作品，以彩线和盘金相结合的表现手法，使得佛教艺术与杭绣艺术融为一体。</p>
                    </div>
                    <div class="right"><img src="../../assets/pusa.png" alt width="100%"></div>  
                </div>
            </div>
            <div class="text2"></div>
            
            <div class="text4">
                <p class="puxian">《普贤菩萨》</p>
                <img class="px_pic" src="../../assets/puxian.png" alt width="100%">
                <p class="word1">干这一行，不容易的，清苦又寂寞。” 当年30多个一起学习宫廷杭绣的同学，如今只剩他一人独自坚守。
                    几十年的岁月，都被他化在丝线里，绣作佛庄严的面容，绣成菩萨华贵的衣饰。绣品在他手下日益光彩
                    夺目，而他却沉沉老去，青丝成雪。</p>
                <p class="word2">我正在绣的这幅是《白度母》台屏，白度母相传是观音菩萨的化身。”赵亦军告诉记者，这幅作品对他而
                    言有着特别的意义：“这幅作品里，我将宫廷杭绣与藏族文化中的唐卡艺术结合，因为我觉得唐卡的风格
                    特色、艺术效果和宫廷杭绣十分相似。虽然不知道这样大胆的尝试最终效果如何，不过现在的半成品我
                    还是非常满意的。”</p>
                <img class="bdm_pic" src="../../assets/baidumu.png" alt width="100%">
            </div>
            <div class="text3"></div>
            <div class="text5">
                <p class="ngxxf">“男工绣”戏服</p>
                <img class="fotuo" src="../../assets/fotuo.png" alt width="100%">
                <p class="word3">《观经图》是赵亦军作品中最大的一幅高 1.84米、宽1.67米，正面包含了532个人物，背面则绣了7221个字
                    的《佛说观无量寿佛经》全文，整幅作品花了整整8年时间，其门幅之大、人物之多、耗时之久、针法之全是
                    杭绣史上绝无仅有的。</p>
                <p class="word4">我现在最大的遗憾，就是我年纪很大了，身体不好、眼睛也不行了。”从单位退休后，赵亦军几乎将所有的
                    个人时间都交给了宫廷杭绣。然而由于工序复杂，一幅作品往往耗时多年，就算他一日一日不间断地绣，退休至今创作的作
                    品亦是有限。</p>
                <img class="baiguanyin" src="../../assets/baiguanyin.png" alt width="100%">
            </div>
            <div class="text6"></div>
            <div class="back">
                <router-link to="/localplace"><div class="back-btn"></div></router-link>
            </div> 
        </div>
    </div>
</template>

<script>
import HeaderNav from '../HeaderNav'
export default {
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
            this.appear = !this.appear
        }
    }
}
</script>

<style scoped>
.content {
    background-color: #4D312C;
}

.daohang{
    background: url("../../assets/daohang.png") no-repeat;
    background-position-x: center;
    background-size: 70%;
    width: 4%;
    height: 3%;
    position: absolute;
    z-index: 100;
    left: 45%;
    cursor: pointer;
}
.header-current{
    background-color: #503C2A;
    /* opacity: 0.6; */
    position: absolute;
    z-index: 99;
    left: 0;
    /* top: 0; */
    width: 100%;
    margin-top: -1vh;
}

.zyj{
    background: url("../../assets/zyj-bg.png") no-repeat;
    height: 100vh;
    background-size: 100% 100%;
    position: relative;
}
.name{
    width: 3%;
    background-color: #D4C6C3;
    position: absolute;
    left: 87%;
    top: 10%;
}
.btn-bofang{
    background: url("../../assets/bofang.png") no-repeat;
    height: 5vh;
    width: 5vh;
    background-size: 40%;
    background-position: center;
    background-color: #8F2227;
    border-radius: 50%;
    margin: 0 auto;
}
p.head-title {
    color: #fff;
    writing-mode: vertical-lr;
    letter-spacing: 0.5em;
    font-size: 1.5em;
    position: absolute;
    left: 93%;
    top: 7%;
}

.lb {
    height: 9vh;
    border-left: 2px solid #BF9595;
    width: 90%;
    margin-left: 7%;
}
.text1 {
    width: 90%;
    margin-left: 7%;
    border-left: 2px solid #BF9595;
}
.part1 {
    display: flex;
    background-color: #402121;
    border: 1px solid #707070;
    width: 95%;
    margin: 0 auto;
}
.left {
    width: 40%;
    color: #968989;
}
.left p {
    margin-left: 10%;
}
p.title-m {
    font-size: 1.5em;
    font-weight: bold;
    margin-top: 10vh;
    margin-bottom: 10vh;
}
p.title-s {
    font-size: 1.2em;
    margin-bottom: 4vh;
}
p.pass {
    font-size: 0.8em;
    margin-top: 4vh;
}
.right {
    width: 30%;
    position: relative;
    left: 20%;
    top: 10vh;
}
.text2{
    width: 90%;
    margin-left: 7%;
    border-left: 2px solid #BF9595;
    height: 55vh;
}
.text4 {
    width: 90%;
    margin-left: 7%;
    border-right: 2px solid #BF9595;
    margin-top: -15vh;
}
p.puxian {
    padding-top: 5vh;
    color: #AAA3A3;
    font-size: 1.2em;
    margin-left: 5%;
}
img.px_pic {
    width: 40%;
    margin-left: 5%;
    margin-top: 1vh;
}
p.word1 {
    width: 19%;
    margin-left: 45%;
    color: #ADA3A3;
    font-size: 0.8em;
    line-height: 2em;
}
p.word2 {
    width: 30%;
    margin-left: 15%;
    color: #ADA3A3;
    font-size: 0.8em;
    line-height: 2em;
    float: left;
}
img.bdm_pic {
    width: 30%;
}
.text3{
    width: 90%;
    margin-left: 7%;
    /* border-left: 2px solid #BF9595; */
    border-right: 2px solid #BF9595;
    height: 30vh;
}
.text5 {
    width: 90%;
    margin-left: 7%;
    margin-top: -15vh;
    padding-bottom: 15vh;
}
p.ngxxf {
    color: #AAA3A3;
    font-size: 1.2em;
    margin-bottom: 3vh;
    margin-left: 10%;
}
img.fotuo {
    width: 35%;
    margin-left: 10%;
}
p.word3 {
    color: #ADA3A3;
    font-size: 0.8em;
    line-height: 2em;
    width: 19%;
    margin-left: 45%;
}
p.word4 {
    color: #ADA3A3;
    font-size: 0.8em;
    line-height: 2em;
    width: 25%;
    margin-left: 20%;
    float: left;
}
img.baiguanyin {
    width: 20%;
}
.text6{
    height: 10vh;
    background-color:#774238;
}
.back {
    position: absolute;
    left: 5%;
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