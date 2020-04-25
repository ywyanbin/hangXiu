<template>
    <div class="chenshuiqin">
        <div class="daohang" @mouseenter="appearNav"></div>
        <headernav v-if="appear" class="header-current"></headernav>
        <div class="contain1">
            <div class="header-bg"></div>
        </div>
        <div class="contain2">
            <div class="bg-black"></div>
            <div class="contain2-text">
                <div class="passage-1">
                    <p class="title-1">一副绣品</p>
                    <p class="title-2">半世功夫</p>
                </div>
                <div class="passage-2">
                    <div class="name-img"><img src="../../assets/name-chenshuiqin.png" width="100%" alt></div>
                    <div class="btn-bofang"><div class="btn-bf"></div></div>
                    <div class="passage-2_1">
                        <p class="passage-2_title">浙江工匠</p>
                        <p class="passage-2_text1">作为杭绣的领军人物，陈水琴从14岁拿起绣针，在那之后的半个世纪里，陈水琴用它绣出了一幅又一幅
                            令人惊叹的作品——1972年，陈水琴研制出第一幅双面绣作品，从而结束了杭绣只有单面绣的历史；1981年，
                            她又创作出双面异色绣、双面三异绣等作品。就在专访之前，她刚刚做完中医推拿，“职业病了，绣久了肩
                            膀和腰都疼得不行。”陈水琴伸了伸腰。就在那张桌子上，摆着一幅巨大的屏风，是一只栩栩如生的猫，仿
                            佛吹一口气，就能走下屏风。“这是我按照一个美国朋友送我的画册，花了一年多时间才绣出的猫，刚刚
                            参加完深圳的文博会。”</p>
                        <p class="passage-2_text2">在业内，陈水琴有一个“懒猫”的外号。因为她擅长绣动物，尤其是绣猫。“当年绣过一只懒猫很逼真，大家就
                            给我取了这个外号。”陈水琴有点不好意思地说。特别是猫的眼睛，像苏绣的技法，顶多就是把猫眼给填满，
                            可是陈水琴凭借多年的摸索，自己开创了交叉套真的技法。“ 这种技法很难，但是绣出来的动物却很立体。”
                            陈水琴说，绣猫特别费功夫，因为它的毛是蓬松的，绣得太死，毛就显得很假。“绣这只猫时特别纠结，平面
                            看看皮毛已经绣得很真了，可是立起来再看又不满意。”她还绣过更厉害的作品双面三异绣，正面的猫睁着眼，
                            反面看猫却是闭着眼睡着了，真真了不得。</p>
                    </div>
                </div>
                <div class="passage-3">
                    <div class="img-contain">
                        <img class="img1" src="../../assets/people-chenshuiqin.png" alt>
                        <img class="img2" src="../../assets/three-cat.png" alt>
                        <img class="img3" src="../../assets/sleep-cat.png" alt>
                    </div>
                </div>  
                <div class="border-right"></div>
            </div>
        </div>
        <div class="contain3">
            <div class="pass3-1">
                <img class="img3-1" src="../../assets/stitching.png" alt>
                <p class="pass3-1_1">1960年，陈水琴进入杭州工艺美术学院学习刺绣，1964年毕业之后开始刺绣之旅，这一绣就是53年，而漫长的半世纪
                    的坚持只因“喜欢”二字。当年岁愈长，经验愈积累后，她作品的呈现也更饱满了。</p>
            </div>
            <div class="pass3-2">
                <p class="pass3-2_1">陈水琴在刺绣</p>
                <p class="pass3-2_2">杭绣需准备的材料有布、线 、针、绣架等，材料准备完毕，先确定图案，再读画，根据图案的内容和表现形式，设计
                    相应的针法、技法和处理手法，这个“翻译”的过程很重要。读画完毕，用素描笔把图案画在绢上。最后下针刺绣。</p>
                <img class="img3-2" src="../../assets/xiu-csq.png" alt>

            </div>
            <div class="pass3-3">
                <p class="pass3-3_1">匠人</p>
                <img class="img3-3" src="../../assets/stitching-2.png" alt>
                <p class="pass3-3_2">陈老师说大多数作品都是她从研究院退休之后绣的，当夜晚来临，夜色宁静的时候，是她能静心创作的时候。想必对于
                    刺绣而言，唯有心静，才是创作灵动作品的绝妙时刻吧！</p>
            </div>
        </div>
        <div class="contain4"></div>
        <div class="back">
            <router-link to="/localplace"><div class="back-btn"></div></router-link>
        </div> 
    </div>
</template>

<script>
import HeaderNav from '../HeaderNav'
export default {
    name: 'chenshuiqin',
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
.chenshuiqin {
    background-color: #4D312C;
    color: #ADA3A3;
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

.contain1{
    background-color: #000;
    height: 100vh;
}
.header-bg{
    background: url("../../assets/e.png") no-repeat;
    height: 100vh;
    background-size: contain;
    background-position: center;
}
.contain2{
    /* background-color: #4D312C; */
    width: 90%;
    margin: 0 auto;
    /* border-left: 2px solid #BF9595; */
}
.bg-black {
    height: 10vh;
    background-color: #000;
    border-left: 4px solid #BF9595;
}
.contain2-text {
    display: flex;
}
.passage-1 {
    width: 40%;
    border-left: 4px solid #BF9595;
    height: 155vh;
    /* background: yellow; */
}
.passage-1 p{
    font-size: 6vh;
    padding-left: 10%;
    font-weight: bold;
}
p.title-1 {
    margin-top: 5vh;
}
p.title-2 {
    text-indent: 2em;
    margin-top: 2vh;
}
.passage-2 {
    width: 20%;
    /* background: green; */
}
.name-img {
    background-color: #D4C6C3;
    width: 90%;
    margin-top: 5vh;
}
.btn-bofang {
    width: 8vh;
    height: 8vh;
    background-color: #7A2728;
    border-radius: 50%;
    margin-top: 3vh;
}
.btn-bf{
    background: url("../../assets/bofang.png") no-repeat;
    background-position: center;
    background-size: 40%;
    height: 8vh;
    width: 8vh;
}
.passage-2_1 {
    margin-top: 30vh;
}
p.passage-2_title {
    font-size: 3vh;
    padding: 5vh 0;
}
p.passage-2_text1 {
    font-size: 0.7em;
    line-height: 3vh;
    width: 90%;
}
p.passage-2_text2 {
    font-size: 0.7em;
    line-height: 3vh;
    width: 90%;
    margin-top: 5vh;
}
.passage-3 {
    width: 40%;
    position: relative;
    /* background: blue; */
}
.img-contain{
    width: 90%;
    float: right; 
    margin-top: -10vh;
}
img.img1 {
    width: 100%;
}
img.img2 {
    width: 90%;
    margin-top: 5vh;
}
img.img3 {
    width: 100%;
    margin-top: 5vh;
}
.border-right{
    background: url("../../assets/border.png") no-repeat;
    /* background-position: right; */
    position: absolute;
    left: 95%;
    /* top: 130%; */
    height: 36%;
    width: 3%;
}
.contain3 {
    width: 90%;
    margin: 0 auto;
    margin-top: 20vh;
    display: flex;
    padding-bottom: 10vh;
}
.pass3-1 {
    width: 30%;
}
img.img3-1 {
    width: 100%;
}
p.pass3-1_1 {
    font-size: 0.8em;
    line-height: 3vh;
    width: 50%;
    float: right;
    margin-top: 10vh;
}
.pass3-2 {
    width: 30%;
}
p.pass3-2_1 {
    font-size: 3vh;
    padding: 5vh 10%;
}
p.pass3-2_2 {
    font-size: 0.8em;
    line-height: 3vh;
    width: 45%;
    padding-left: 10%;
}
img.img3-2 {
    width: 90%;
    padding-left: 10%;
    margin-top: 40vh;
}
.pass3-3 {
    width: 30%;
}
p.pass3-3_1 {
    font-size: 13vh;
    text-align: center;
}
img.img3-3 {
    width: 75%;
    margin-top: 66.5vh;
    margin-left: 20%;
}
p.pass3-3_2 {
    width: 50%;
    font-size: 0.8em;
    line-height: 3vh;
    float: right;
    margin-top: 5vh;
}
.contain4{
    height: 10vh;
    background-color: #774238;
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