<template>
    <div class="localplace">
        <div class="header">
            <div class="bg"></div>
            <div class="kuang">
                <img class="xiu1" src="../assets/xiu2.png" alt width="100%">
            </div>
            <div class="bg"></div>
        </div>
        <div class="content">
            <div class="daohang" @mouseenter="appearNav"></div>
            <headernav v-if="appear" class="header-current"></headernav>
            <el-carousel height="85vh" :interval="2000" arrow="always">
                <el-carousel-item @click.native="Wentto(item)" v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="content1">
            <div class="actives">
                <p class="title">时下活动</p>
                <div id="demo" class="parts">
                    <div id="indemo">
                        <div id="demo1">
                            <div  class="activity">
                                <div class="active active1"></div>
                                <p>陈水琴作品展</p>
                            </div>
                            <div class="activity">
                                <div class="active active2"></div>
                                <p>西溪街道求智社区工会开展手工刺绣活动</p>
                            </div>
                            <div class="activity">
                                <div class="active active3"></div>
                                <p>龙湖滨江天街将举办一个超有意义的集市</p>
                            </div>
                            <div class="activity">
                                <div class="active active4"></div>
                                <p>阳光老人家“绣花”手工活动</p>
                            </div>
                        </div>
                        <div id="demo2"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content2">
            <p class="gzs_title">名家工作室</p>
            <p class="prompt">点击下方图标观看</p>
            <div class="eye" @click="Goto"></div>
            <div class="gzs1 gzs"> 
                <div class="person_gzs"><img src="../assets/jjh-gzs.png" alt width="100%"></div>
                <div class="gzs_name"><router-link to="/localplace/jinjiahong">金家虹杭绣工作室</router-link></div>
                <p class="gzs_pro">“我没有觉得你绣的是人家的东西，你绣的是你心里的东西。”金家虹从事刺绣多年。她对我们说，
                    给牛仔裤、衬衫绣朵花并不难。她也欢迎更多对刺绣有兴趣的有缘人来工作室喝杯茶，玩玩刺绣，
                    说不定就喜欢上了。有意愿的朋友可以前往工作室，说明是”在杭州”上推荐的，就可进行一次免
                    费刺绣体验。</p>
                <div class="xian"></div>
                <div class="jieshao">
                    <div class="dingwei"><img src="../assets/dingwei.png" alt width="100%"></div>
                    <div class="detail">
                        <p class="address">地址: 下城区体育馆路176号1幢3单元101室</p>
                        <p class="phone">联系方式: 13906521686</p>
                    </div>
                </div>
            </div>
             <div class="gzs2 gzs">
                <div class="person_gzs"><img src="../assets/csq-gzs.png" alt width="100%"></div>
                <div class="gzs_name"><router-link to="/localplace/chenshuiqin">陈水琴杭绣工作室</router-link></div>
                <p class="gzs_pro">杭州陈水琴大师工作室创建于1999年，陈水琴在浙杭地区首创了双面绣、双面异色绣、双面三异绣，
                    随后又创作了双面乱针绣人物肖像，风格自成一派。她传承、发展了杭绣艺术，培养了新一代杭绣
                    技艺人材和大师，成为杭州刺绣艺术的领军人物。日前，陈水琴大师工作室已经搬到杭州工艺美术
                    馆，大家有空时可以前往欣赏参观。</p>
                <div class="xian"></div>
                <div class="jieshao">
                    <div class="dingwei"><img src="../assets/dingwei.png" alt width="100%"></div>
                    <div class="detail">
                        <p class="address">地址: 拱墅区杭州工艺美术馆二楼</p>
                        <p class="phone">联系方式: 0579-88197511（美术馆电话可咨询）</p>
                    </div>
                </div>
            </div>
            <div class="gzs3 gzs">
                <div class="person_gzs"><img src="../assets/wsh-gzs.png" alt width="100%"></div>
                <div class="gzs_name"><router-link to="/localplace/wangshenghong">王胜红杭绣工作室</router-link></div>
                <p class="gzs_pro">“真正的名角，是不会随随便便穿上一身戏服的。”王胜红摩挲着手中的布料若有所思：“同样，戏服
                    设计制作不能仅凭剧团要求，也需要我们和演员一样去揣摩人物性格、了解其一生。如此方能在戏
                    服上‘附着’人物的灵魂。”</p>
                <div class="xian"></div>
                <div class="jieshao">
                    <div class="dingwei"><img src="../assets/dingwei.png" alt width="100%"></div>
                    <div class="detail">
                        <p class="address">地址: 杭州市江干区九华路1号4幢2楼201室</p>
                        <p class="phone">联系方式: 13157116577</p>
                    </div>
                </div>
            </div>
            <div class="gzs4 gzs">
                <div class="person_gzs"><img src="../assets/zyj-gzs.png" alt width="100%"></div>
                <div class="gzs_name"><router-link to="/localplace/zhaoyijun">赵义军杭绣工作室</router-link></div>
                <p class="gzs_pro">“我这一生，不愿和别人比什么，只想安安静静地绣好自己的作品。”赵亦军是宫廷杭绣的唯一传人，
                    从1999年因病提前退休至今，他每天坚持在工作室刺绣至少8小时,谢绝了不必要的人情往来，甚
                    至婉拒了工美展的邀请。目前，赵义军先生年事已高,很少参加社会交际。</p>
                <div class="xian"></div>
                <div class="jieshao">
                    <div class="dingwei"><img src="../assets/dingwei.png" alt width="100%"></div>
                    <div class="detail">
                        <p class="address">地址: 下城区武林街道</p>
                        <p class="phone">联系方式: 无</p>
                    </div>
                </div>
            </div>
            <div class="other_gzs">
                <div class="other">
                    <p class="other_name">丝绸刺绣体验中心</p>
                    <div class="xian1"></div>
                    <div class="jieshao">
                        <div class="dingwei1"><img src="../assets/dingwei.png" alt width="100%"></div>
                        <div class="detail">
                            <p class="address">地址: 拱墅区武林门码头京杭大运河内</p>
                            <p class="phone">联系方式: 无</p>
                        </div>
                    </div>
                </div>
                <div class="other">
                    <p class="other_name">杭州陆顺刺绣</p>
                    <div class="xian1"></div>
                    <div class="jieshao">
                        <div class="dingwei1"><img src="../assets/dingwei.png" alt width="100%"></div>
                        <div class="detail">
                            <p class="address">地址: 新街镇建设四路4328号</p>
                            <p class="phone">联系方式: 0579-57177713</p>
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
    name: 'LocalPlace',
    data(){
        return{
            appear: false
        }
    },
    components: {
        "headernav": HeaderNav
    },
    methods:{
        appearNav(){
            this.appear = !this.appear
        },
        Goto(){
            this.$router.push({path:'/quanjintu'})
        },
        Wentto(index){
            //console.log(1)
            if(index == 1){
                this.$router.push({path:'/localplace/jinjiahong'})
            }
            if(index == 2){
                this.$router.push({path:'/localplace/chenshuiqin'})
            }
            if(index == 3){
                this.$router.push({path:'/localplace/wangshenghong'})
            }
            if(index == 4){
                this.$router.push({path:'/localplace/zhaoyijun'})
            }
        }
    },
    mounted: function(){
        var speed=30; //数字越大速度越慢       
        var tab=document.getElementById("demo");        
        var tab1=document.getElementById("demo1");       
        var tab2=document.getElementById("demo2");      
        tab2.innerHTML=tab1.innerHTML;   
        function Marquee(){      
            if(tab2.offsetWidth-tab.scrollLeft<=0)
                tab.scrollLeft-=tab1.offsetWidth
            else{
                tab.scrollLeft++;
            }
        }
        var MyMar=setInterval(Marquee,speed);
        tab.onmouseover=function() {clearInterval(MyMar)};
        tab.onmouseout=function() {MyMar=setInterval(Marquee,speed)};
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: #E8A673;
}
.localplace{
    background-color: #8F3122;
}
.header{
    height: 15vh;
    display: flex;
    justify-content: space-between;
}
.bg{
    width: 45%;
    height: 10vh;
    background: url("../assets/bg1.png") no-repeat;
    align-self: center;
    background-size: cover;
}
.kuang{
    width: 10vh;
    height: 10vh;
    border: 1px solid #DCA125;
    transform: rotate(45deg);
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.xiu1{
    transform: rotate(-45deg);
}

.daohang{
    background: url("../assets/daohang.png") no-repeat;
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
    /* margin-top: -1vh; */
}


.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}
/* .el-carousel__item:nth-child(2n) {
    background-color:pink;
    z-index: 99;
}
.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
} */
.el-carousel__item:nth-child(3){
    background: url("../assets/jjh.jpg") no-repeat;
    background-size: cover;
} 
.el-carousel__item:nth-child(4){
    background: url("../assets/csq.jpg") no-repeat;
    background-size: cover;
} 
.el-carousel__item:nth-child(5){
    background: url("../assets/wsh.jpg") no-repeat;
    background-size: cover;
} 
.el-carousel__item:nth-child(6){
    background: url("../assets/zyj.jpg") no-repeat;
    background-size: cover;
} 

p.title {
    background-color: #5D2E28;
    text-align: center;
    height: 10vh;
    line-height: 10vh;
    color: #D9D9D9;
    font-size: 1em;
}
.parts{
    background-color: #472424;
}
.activity {
    width: 250px;
    margin-right: 100px;
    font-size: 0.8em;
    color: #D9D9D9;
}
.active{
    height: 25vh;
    border-radius: 25px;
    border: none;
    margin-top: 5vh;
    cursor: pointer;
}
.active:hover{
    border: 1px solid #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12);
}
.activity p{
    margin-top: 1vh;
    text-align: center;
    margin-bottom: 2vh;
}
.active1{
    background: url("../assets/active1.png") no-repeat;
    background-size: cover;
}
.active2{
    background: url("../assets/active2.png") no-repeat;
    background-size: cover;
}
.active3{
    background: url("../assets/active3.png") no-repeat;
    background-size: cover;
}
.active4{
    background: url("../assets/active4.png") no-repeat;
    background-size: cover;
}
#demo{
    overflow: hidden;
    width: 100%;
    height: 35vh;
}
div#indemo {
    float: left;
    width: 800%;
}
div#demo1 {
    float: left;
    display: flex;
}
div#demo2 {
    float: left;
    display: flex;
}
.content2{
    background: url("../assets/gzs-bg1.jpg") no-repeat;
    background-size: cover;
}
p.gzs_title {
    height: 20vh;
    text-align: center;
    line-height: 20vh;
    font-size: 2em;
    color: #D9D9D9;
    padding-top: 10vh;
}

p.prompt {
    text-align: center;
    font-size: 0.9em;
    color: #BD9E9A;
    margin-top: 10vh;
}

.eye {
    width: 10%;
    height: 10vh;
    margin: 0 auto;
    background: url("../assets/eye.png") no-repeat;
    background-size: contain;
    background-position: center;
    margin-top: 2vh;
    cursor: pointer;
}
.eye:hover{
    background: url("../assets/eye-hover.png") no-repeat;
    background-size: contain;
    background-position: center;
}
.gzs{
    width: 25%;

}
.gzs1 {
    margin-left: 10%;
    margin-top: 10vh;
}
.person_gzs {
    width: 60%;
    margin-left: 2.5%;
}
.gzs_name{
    background: url("../assets/border-gold.png") no-repeat;
    background-size: contain;
    background-position: center;
    width: 65%;
    height: 10vh;
    line-height: 10vh;
    text-align: center;
    font-size: 0.9em;
    color: #E8A673;
    margin-top: 3vh;
}
p.gzs_pro {
    color: #E3C4A8;
    font-size: 0.7em;
    margin-top: 3vh;
}
.xian {
    margin-top: 5vh;
    width: 50%;
    border: 2px solid #B19581;
}
.jieshao {
    margin-top: 5vh;
    display: flex;
}
.dingwei {
    width: 10%;
}
.detail {
    align-self: center;
    color: #FFE8D3;
    font-size: 0.7em;
    font-weight: bold;
}
.gzs2 {
    float: right;
    margin-top: -40vh;
    margin-right: 10%;
}
.gzs3 {
    margin-left: 10%;
    margin-top: 40vh;
}
.gzs4 {
    float: right;
    margin-top: -35vh;
    margin-right: 10%;
}
.other_gzs {
    margin-top: 80vh;
    display: flex;
    justify-content: space-around;
    padding-bottom: 45vh;
}
.other {
    width: 20%;
}
p.other_name {
    color: #E3C4A8;
    font-size: 1.5em;
}
.xian1 {
    width: 45%;
    border: 1px solid #B19581;
    margin-top: 1vh;
}
.dingwei1 {
    width: 15%;
}

.bottom {
    background-color: #7A362B;  
    /* background: url("../assets/current_header.png") no-repeat; */
    /* background-size: cover; */
    height: 30vh;
    color: #BD9E9A;
}
.b_top {
    width: 85%;
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
    width: 85%;
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
