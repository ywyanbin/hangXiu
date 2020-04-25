<template>
    <div class="jinjiahong">
        <div class="daohang" @mouseenter="appearNav"></div>
        <headernav v-if="appear" class="header-current"></headernav>
        <div class="contain">
            <div class="header-left">
                <div class="header-pic">
                    <p class="hl-produce">《丹.紫藤》</p>
                </div>
                <div class="header-produce">
                   <div class="hp-1">
                        <span class="btn-bongfang">
                            <!-- <img class="hp-bongfang" src="../assets/bofang@2x.png" alt> -->
                        </span>
                        <img class="hp-name" src="../../assets/name-jjh.png" alt>
                   </div>
                </div>
            </div>
            <div class="header-right">
                <div class="header-right-passage">
                    <img class="hr-pic" src="../../assets/people-jjh.png" width="100%" alt>
                    <p class="hr-title">高级工艺美术师<br/>浙江省民协会员</p>
                    <p class="hr-passage">金家虹，女，1969年出生于 浙江杭州。首届中国刺绣艺 术大师、浙江省工艺美术大
                        师、杭绣非物质文化遗产省 级传承人、浙江省抽纱刺绣 中青年十大名师，高级工艺 美术师、中国刺绣艺术
                        专业 委员会副秘书长、中国工艺 美术协会中青年专业委员会 副主任、浙江省工艺美术行 业协会常务理事、
                        浙江省非 遗协会抽纱刺绣专委会、浙 江省民协手工刺绣专委会秘 书长、杭州市工艺美术行业 协会副会长。</p>
                </div>
            </div>
            
        </div>
        <div class="contain1">
            <div class="kong"></div>
            <div class="passage1">
                <div class="passage1-1"><img src="../../assets/shuiyueguanyin.png" width="85%" alt></div>
                <div class="passage1-2">
                    <p class="passage1-2_1">《水月观音》</p>
                    <p class="passage1-2_2">将金线平服地盘钉在绣面上是杭绣传统盘金绣的特色，但一般取用较硬的缎面底料，这件作品
                        是将有硬度的金线盘钉在柔软透明的薄纱底料上，难度较大，两者之地的反差需要更好地控
                        制订线和金线的松紧。</p>
                </div>
                <div class="passage1-3">
                    <p class="passage1-3_1">作品集</p>
                </div>
            </div>
            <div class="passage2">
                <div class="passage2-1">
                    <p class="passage2-1_1">盘银绣《凤蝶》</p>
                    <p class="passage2-1_2">该作品首先在设计思维上巧妙地将两只凤凰组合成蝴蝶的形状，又以蝴蝶纹样做衬底，在运用刺绣针法的时候，
                        取杭州“盘金绣”中“盘”的手法， 在凤凰身体的各个部位分别采用自由的盘钉手法，或挺拔、或柔软，形成的
                        视觉效果和不同的粉色钉线产生的光感柔化了单调的银色，使作品有了强烈的艺术和装饰效果。</p>
                </div>
                <div class="passage2-2">
                    <img src="../../assets/fengdie.png" width="80%" alt>
                </div>
                <div class="passage2-3">
                    <img src="../../assets/xiyutu.png" width="80%" style="float: right;margin-right: 20%" alt>
                </div>
            </div>
            <div class="passage3">
                <p class="passage3-1">《戏羽图》</p>
                <p class="passage3-2">在技法上主要采用交叉套针打底，互套针、施针、接针等多种刺绣针法交替使用，丝线也由粗到细层层结合，成功地体现出了猫的毛感和动感。</p>
            </div>
            <div class="passage4">
                <div class="passage4-1 wow lightSpeedIn" data-wow-delay="1s">
                    <img src="../../assets/liunian.png" width="100%" alt>
                </div>
                <!-- <div class="kong-center"></div> -->
                <div class="passage4-2">
                    <div class="passage4-2-bg wow lightSpeedIn" data-wow-delay="1s">
                        <p class="passage4-2_1">三十四年磨一针<br>一针一线<br>绣流年</p>
                        <p class="passage4-2_2">1988年毕业于刺绣专业学校，同年拜师中国工艺美术大师陈水琴先生，2011-2013清华大学美术学院研修毕业，
                            从艺三十年来一直致力于杭州刺绣传统针法的收集、研究和精品设计创作工作，积累了丰富的理论与实践经验，
                            在延续了杭绣闺阁刺绣风格的同时能充分吸收其它艺术品种的精髓，大胆创新，设计并绣制作品时注重将传统
                            针法和现代创意相结合，风格隽永清新，并已逐渐形成了自己独特的盘线、钉绣手法。近几年来多次应邀出访
                            德国、法国、布拉格、澳门、俄罗斯等地，作为文化使者，传授和展示精美的杭州刺绣艺术。</p>
                        <p class="passage4-2_3">莲花臧界绣稿以清代丁观鹏版本为基础，绘画创作历时一年， 刺绣创作历时三年，作品在不大的空间里展现了
                            西方极乐世界的庄严胜境。</p>
                    </div>
                </div>
            </div>
            <div class="passage5">
                <div class="passage5-bg">
                    <div class="passage5-1 wow slideInLeft" data-wow-duration="2s">
                        <p class="passage5-1_1">单面刺绣《羽裳》</p>
                        <p class="passage5-1_2">金家虹从事刺绣艺术创作已有20余年，形成了自己独特的盘线、钉绣风格，整理并创作了大量地域特色鲜明的
                            盘金、盘线绣精品。《喜相逢》、《福寿双全》、《凤· 蝶》等作品屡获大奖。由她带领团队创作的垫
                            绣《日本高山祭》系列作品和大型双面绣地屏《南宋西湖龙舟图》都喜获成功。</p>
                        <p class="passage5-1_3">《羽裳》设计以蝶为创作元素，背景截取蛱蝶翅膀的肌理效果放大多倍，在放大后经脉及斑纹形成的节奏效果
                            上点缀各式色彩绚丽的蝴蝶。放大后的背景肌理形成无形的、抽象的色彩空间，和点缀的大小、形态不同的有
                            形的、具象的蝴蝶形成对比。将传统的蝴蝶与现代的审美相结合，使传统的刺绣工艺充满了时尚的气息。</p>
                    </div>
                </div>
                <div class="passage5-2 wow slideInLeft" data-wow-duration="2s">
                    <img src="../../assets/yuchang.png" style="width: 90%" alt>
                </div>
            </div>
        </div>
        <div class="contain2"></div>
        <div class="back">
            <router-link to="/localplace"><div class="back-btn"></div></router-link>
        </div> 
    </div>
</template>

<script>
import {WOW} from 'wowjs'
import HeaderNav from '../HeaderNav'
export default {
    name: 'jinjiahong',
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

<style scoped>
.jinjiahong{
    background-color: #4D312C;
    position: relative;
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

.contain{
    height: 100vh;
}
.header-left {
    width: 60%;
    height: 90vh;
    background-color: #141414;
    float: left;
}
.header-pic{
    background: url("../../assets/huaping.png") no-repeat;
    height: 90vh;
    background-size: contain;
    background-position: center;
}
p.hl-produce {
    color: #AAA3A3;
    text-align: end;
    padding-top: 76vh;
    font-size: 3vh;
}
.header-right {
    background-color: #53100B;
    width: 40%;
    height: 100vh;
    float: left;
    color: #968989;
}
.header-right-passage{
    background: url("../../assets/header-right-bg.png") no-repeat;
    height: 100vh;
}
img.hr-pic {
    width: 30%;
    margin-left: 10%;
    margin-top: 5vh;
}
p.hr-title {
    width: 30%;
    /* height: 10vh; */
    margin-left: 10%;
    margin-top: 3vh;
    font-weight: bold;
    font-size: 0.9em;
    text-align: center;
}
p.hr-passage {
    width: 35%;
    font-size: 0.9em;
    margin-top: 5vh;
    margin-left: 10%;
}
.header-produce {
    height: 10vh;
    background-color: #4D312C;
}
.hp-1 {
    height: 10vh;
    background-color: #D4C6C3;
    width: 35%;
    margin-left: 65%;
    position: relative;
}
.btn-bongfang{
    background: url("../../assets/bofang.png") no-repeat;
    background-position: center;
    background-size: 50%;
    height: 6vh;
    width: 6vh;
    border-radius: 50%;
    position: absolute;
    bottom: 2vh;
    left:5%;
    /* border: 1px solid #000; */
    background-color: #A55658;
}
.hp-name{
    height: 8vh;
    float: right;
    margin-top: 1vh;
}
.contain1{
    width: 90%;
    margin: 0 auto;
    margin-top: 1vh;
    color: #AAA3A3;
}
.kong {
    height: 25vh;
    border-left: 2px solid #BF9595;
}
.passage1 {
    display: flex;
    justify-content: center;
    border-left: 2px solid #BF9595;
    border-right: 2px solid #BF9595;
}
.passage1-1 {
    width: 30%;
    /* background: yellow; */
    height: 60vh;
}
.passage1-2 {
    width: 30%;
    /* background: red; */
    height: 60vh;
}
.passage1-3 {
    height: 60vh;
    width: 30%;
    /* background: green; */
}
p.passage1-2_1 {
    height: 10vh;
    line-height: 10vh;
    font-size: 2em;
}
p.passage1-2_2 {
    width: 50%;
    font-size: 1em;
    margin-top: 2vh;
    line-height: 3.5vh;
    margin-left: 5%;
}
p.passage1-3_1 {
    font-size: 10vh;
    text-align: end;
    margin-right: 20%;
}
.passage2 {
    display: flex;
    justify-content: center;
    border-left: 2px solid #BF9595;
    border-right: 2px solid #BF9595;
    padding-top: 5vh;
}
.passage2-1 {
    width: 30%;
    /* background: lightblue; */
    height: 40vh;
}
p.passage2-1_1 {
    width: 85%;
    text-align: end;
    /* height: 10vh;
    line-height: 10vh; */
    margin-bottom: 5vh;
    font-size: 1.5em;
}
p.passage2-1_2 {
    margin-left: 32%;
    width: 53%;
    font-size: 0.9em;
    line-height: 3vh;
}
.passage2-2 {
    width: 30%;
    height: 40vh;
    /* background: lightgreen; */
}
.passage2-3 {
    width: 30%;
    height: 40vh;
    /* background: lightsalmon; */
}
.passage3 {
    height: 25vh;
    border-right: 2px solid #BF9595;
}
p.passage3-1 {
    text-align: center;
    width: 25%;
    /* background: yellow; */
    float: right;
    margin-right: 9%;
    height: 10vh;
    line-height: 10vh;
    font-size: 1.5em;
}
p.passage3-2 {
    clear: right;
    width: 15%;
    float: right;
    /* background: lawngreen; */
    margin-right: 11%;
    font-size: 0.9em;
    line-height: 3vh;
}
.passage4 {
    display: flex;
    margin-top: 20vh;
    justify-content: center;
}
.passage4-1 {
    width: 30%;
}
.passage4-2 {
    width: 50%;
}
.passage4-2-bg{
    width: 60%;
    float: right;
}
p.passage4-2_1 {
    color: #BDAFAF;
    font-size: 1.5em;
    font-weight: bold;
}
p.passage4-2_2 {
    margin-top: 5vh;
    color: #E3C4A8;
    font-size: 1em;
    line-height: 1.5em;
}
p.passage4-2_3 {
    font-size: 1em;
    margin-top: 5vh;
    width: 50%;
    line-height: 4vh;
}
.passage5 {
    margin-top: 20vh;
    display: flex;
    justify-content: center;
}
.passage5-bg {
    width: 50%;
    padding-bottom: 20vh;
    /* background: lightcyan; */
}
.passage5-2 {
    width: 30%;
}
.passage5-1 {
    width: 65%;
    /* background: yellow; */
    /* float: right; */
    /* margin: 0 auto; */
}
p.passage5-1_1 {
    /* height: 10vh;
    line-height: 10vh; */
    margin-bottom: 5vh;
    font-size: 1.5em;
}
p.passage5-1_2 {
    color: #E3C4A8;
    font-size: 1em;
    line-height: 1.5em;
}
p.passage5-1_3 {
    font-size: 1em;
    width: 60%;
    margin-top: 5vh;
    line-height: 3.5vh;
}
.contain2{
    background-color: #774238;
    height: 5vh;
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