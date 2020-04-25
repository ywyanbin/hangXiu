<template>
    <div class="wangshenghong">
        <div class="wsh"> 
            <div class="daohang" @mouseenter="appearNav"></div>
            <headernav v-if="appear" class="header-current"></headernav>
            <div class="header-bg"></div>
            <div class="content1">
                <div class="name_pic"><img src="../../assets/name-wsh.png" alt width="100%"></div>
                <div class="btn-bofang"></div>
                <div class="passage">
                    <p>南宋时期杭绣最顶尖的。</p>
                    <p>“金银彩绣” 技艺曾为皇家所垄断，</p>
                    <p>由于男工进出宫廷更方便，</p>
                    <p>所以当时的绣工多为男性，</p>
                    <p>杭绣也成了奇特的 “男工绣”。</p>
                    <p>上世纪20年代，</p>
                    <p>杭州的杭绣师傅已减至二百多名，</p>
                    <p>而到今天，</p>
                    <p>这门技艺的传承人已屈指可数，</p>
                    <p>王胜红就是其中一位</p>
                </div>
            </div>
            <div class="mt"></div>
            <div class="content2">
                <div class="left">
                    <p class="title-m">传承优秀经典，做个不争匠人！</p>
                    <p class="title-s">“做戏服需要十八般武艺。”</p>
                    <p class="pass">“做戏服需要十八般武艺。”王胜红说，“单就服装，选料、染色、设计、画图、放样、刺绣、裁剪、
                        合成、整烫等，就有10道工序。”“就头上那顶小王盔，做了整整3个月，一共33道工序。”要真是把一身行头纯手
                        工制作下来，没有一年半载怕是完不成。而到目前为止，王胜红已经至少为500部经典剧目做了3万多套戏服。</p>
                    <p class="pass">南宋宫廷绣，专为皇家、内苑绘绣各种服饰。因刺绣艺人，以男工为主。因此，行业中形成了只收男工不收取女工、
                        只传媳妇不传女儿的规矩，又称之为“男工绣”。王胜红取其意取其音，将这一极具中华传统文化特色的华服定制品
                        牌取名为“南宫秀”。“把南宋宫廷刺绣的辉煌通过再改造再设计的方式，让它重新流行！”王胜红说，他的初衷便
                        在于此。</p>
                </div>
                <div class="right"><img src="../../assets/xifu.png" alt width="100%"></div>
            </div>
            <div class="content3">
                <div class="l-b"></div>
                <div class="text1">
                    <p class="lwzsnz">龙纹中式女装</p>
                    <img class="lw_pic" src="../../assets/lwzsnz.png" alt width="100%">
                    <p class="word1">为设计制作龙袍壁挂，王胜红采用上等丝绸，运用杭绣工艺技术，并结合自己丰富的剧装设计制作经验，
                        经过无数次设计、修改、打样，才制作而成。</p>
                    <p class="word2">王胜红说，精美绝伦的龙袍壁挂作品承载着千秋华夏的渊源历史，使其具有了更高的艺术收藏价值。
                        龙袍壁挂已获得了国家外观设计专利。</p>
                    <img class="cuihua" src="../../assets/cuihua.png" alt width="100%">
                </div>
                <div class="text2">
                    <p class="ngxxf">“男工绣”戏服</p>
                    <img class="ng_pic" src="../../assets/ngxxf.png" alt width="100%">
                </div>
                <div class="text3">
                    <p class="word3">王胜红练就了一身过硬的戏服描图技术， 并且对每一个剧种的戏服都烂熟于心</p>
                    <p class="word4">王胜红将传统的杭绣融入戏服设计中，并根据表演者在舞台上的风格和形象来为表演者量身定制，设计出与众不同的戏服。</p>
                    <img class="lp_pic" src="../../assets/longpao.png" alt width="100%">
                </div>
            </div>
            <div class="content4"></div>
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
.wsh{
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
    left: 48%;
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

.header-bg{
    background: url("../../assets/wsh-bg.png") no-repeat;
    height: 100vh;
    background-size: 100% 100%;
}
.content1 {
    position: relative;
}
.name_pic {
    width: 5%;
    background-color: #D4C6C3;
    padding: 5vh 1%;
    position: absolute;
    left: 9%;
    top: -18vh;
}
.btn-bofang {
    background: url("../../assets/bofang.png") no-repeat;
    background-position: center;
    background-size: 45%;
    height: 8vh;
    width: 8vh;
    border-radius: 50%;
    position: absolute;
    left: 20%;
    top: 1vh;
    background-color: #8F2227;;

}
.passage{
    float: right;
    width: 50%;
    height: 50vh;
    margin-top: 3vh;
    display: flex;
    justify-content: space-between;
    margin-right: 5%;
}
.passage p {
    writing-mode: vertical-lr;
    color: #707070;
    font-size: 1em;
}
.mt{
    margin-top: 70vh;
}
.content2 {
    clear: both;
    width: 90%;
    margin: 0 auto;
    border: 1px solid #707070;
    background-color: #402121;
    display: flex;
}
.left {
    width: 50%;
}
.left p {
    width: 65%;
    margin-left: 15%;
    color: #968989;
}
p.title-m {
    font-size: 1.5em;
    font-weight: bold;
    margin-top: 10vh;
    margin-bottom: 8vh;
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
    width: 25%;
    position: relative;
    top: 10vh;
    left: 10%;
}
.content3 {
    width: 90%;
    margin: 0 auto;
}
.l-b {
    height: 30vh;
    border-left: 2px solid #BF9595;
}
.text1 {
    border-left: 2px solid #BF9595;
    border-right: 2px solid #BF9595;
}
p.lwzsnz {
    width: 50%;
    color: #AAA3A3;
    font-size: 1.5em;
}
img.lw_pic {
    margin-top: 3vh;
    width: 50%;
}
p.word1 {
    width: 11%;
    color: #ADA3A3;
    font-size: 0.9em;
    margin-left: 50%;
    line-height: 1.5em;
}
p.word2 {
    width: 25%;
    float: left;
    margin-left: 25%;
    color: #ADA3A3;
    font-size: 0.9em;
    line-height: 1.5em;
}
img.cuihua {
    width: 25%;
}
.text2 {
    border-right: 2px solid #BF9595;
    padding-top: 10vh;
}
p.ngxxf {
    width: 30%;
    color: #AAA3A3;
    font-size: 1em;
    margin-left: 20%;
}
img.ng_pic {
    width: 30%;
    margin-top: 3vh;
    margin-left: 20%;
}
.text3 {
    padding-bottom: 20vh;
}
p.word3 {
    width: 13%;
    color: #ADA3A3;
    font-size: 0.9em;
    line-height: 1.5em;
    margin-left: 50%;
    margin-top: 2vh;
    margin-bottom: 2vh;
}
p.word4 {
    width: 17%;
    color: #ADA3A3;
    font-size: 0.9em;
    line-height: 1.5em;
    margin-left: 32%;
    float: left;
}
img.lp_pic {
    width: 21%;
    margin-left: 1%;
}
.content4{
    background-color: #774238;
    height: 10vh;
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