<template>
    <div class="dxPro">
        <div class="daohang" @mouseenter="appearNav" ></div>
        <headernav v-if="appear" class="header-current"></headernav>
        <div class="index-pro">
            <div class="pro-word">
                <h3 class="pro-title">叠绣</h3>
                <p class="pro-passage">“堂纺叠绣”源于晚清时期，是神农架民间刺绣的典范。它的工艺不同于苏绣的清雅灵动，没有湘绣的豪
                    放立体，不比蜀绣的精巧细腻，又有别于粤绣的华丽繁冗。这种刺绣集合了林区广大妇女长期以来在田间地头、茶余饭后随性而
                    发，即刻而为的创作成果，针法灵活，图案活泼，有以多层叠加刺绣来充实作品，从而使作品达到立体饱满效果的特色。图案
                    多以龙凤呈祥、麒麟送子、花好月圆、鸳鸯戏水为主。在文革期间，遭大量焚烧，所剩绣品寥寥无几，致使这一文化遗产几乎失传。</p>
                <p class="pro-line">
                    <span class="pro-part"><span class="pro-name font">中文名</span><span class="pro-value">叠绣</span></span>
                    <span class="pro-part"><span class="pro-time font">类别</span><span class="pro-value">中国绣种之一</span></span>
                </p>
                <p class="pro-line">
                    <span class="pro-part"><span class="pro-author font">发源地</span><span class="pro-value">神农架</span></span>
                    <span class="pro-part"><span class="pro-base font">性质</span><span class="pro-value">民间传统工艺品种</span></span>
                </p>
                <div class="pro-list">
                    <h3 class="pro-list-title">目录</h3>
                    <div class="catalog-list column-3">
                        <ol>
                            <li class="level1">
                                <span class="index">1</span>
                                <span class="text"><a href="#1">背景</a></span>
                            </li>
                            <li class="level1">
                                <span class="index">2</span>
                                <span class="text"><a href="#2">特点</a></span>
                            </li>
                        </ol>
                        <ol>
                            <li class="level1">
                                <span class="index">3</span>
                                <span class="text"><a href="#3">艺术价值</a></span>
                            </li>
                            <li class="level1">
                                <span class="index">4</span>
                                <span class="text"><a href="#4">绣法</a></span>
                            </li>
                        </ol>
                        <!-- <ol>
                            <li class="level2">
                                <span class="index">▪</span>
                                <span class="text"><a href="#4_1">酝酿</a></span>
                            </li>
                            <li class="level2">
                                <span class="index">▪</span>
                                <span class="text"><a href="#4_2">操作</a></span>
                            </li>
                        </ol> -->
                    </div>
                </div>
            </div>
            <div class="pro-pic">
                <div class="pro-pic1" @click="GotoPic">
                    <img width="100%" src="../../../../../static/img/touxiang4.png" alt>
                    <div class="production-img">平绣图集</div>
                </div>
            </div>
        </div>
        <div  class="background-pro background">
            <div class="people-pro">
                <h1 id="1" class="people-pro-title titleNav">背景</h1>
                <p class="people-pro-word">在刺绣40年前，在那个物质缺乏的年代，民间也少有人再去制作如此精美繁琐的绣品，致使这门
                    手工技艺几乎失传。随着时间的推移，社会各界开始对民间传统手工技艺重视。杨氏家族第三代后人杨钿（杨幺妹）女士对这
                    项传统刺绣工艺进行传承续脉。自小跟母亲学习刺绣，耳濡目染，练就了一双巧手，并在坊间寻回许多老绣品做参考。经过几
                    年不断钻研与实践，叠绣技艺得以恢复，绣品也开始时在神农架再次出现。</p>
            </div>
        </div>
        <div class="trait-pro background">
            <div class="people-pro">
                <h1 id="2" class="trait-pro-title titleNav">特点</h1>
                <p class="trait-pro-word">叠绣一般要在一个图案上将丝线最低叠绣三层，多者叠绣六七层，使图案赋予立体感，让其栩栩如
                    生。主要特点体现在绣品上用丝线层层叠加、色彩过渡、渐变等，从而达到立体、饱满 效果。具有图案秀丽、构思巧妙、绣工
                    细致、针法细腻、色彩饱和等显著特点。</p>
            </div>
        </div>
        <div  class="value-pro background">
            <div class="people-pro">
                <h1 id="3" class="value-pro-title titleNav">艺术价值</h1>
                <p class="value-pro-word">叠绣的色彩以传统的红黄蓝黑白“五色”为主，根据不同地区的色彩风格分为“黑系”“红系”“蓝系”。
                    新制作的叠绣色彩鲜艳、对比鲜明，具有质朴、热烈的情怀。作为装饰物的叠绣在造型上体现为刺绣与浮雕的结合。叠绣独特
                    的制作工艺使图案本身高出绣地，三角形一层层叠使图案形成具有浅浮雕式的装饰。叠绣将几何元素发挥到了极致，这样绣出
                    来的层层叠叠的图案不由自主的透出一种厚重与华贵</p>
            </div>
        </div>
        <div  class="stitch-pro">
            <div class="new-pro">
                <h1 id=4 class="stitch-pro-title titleNav">绣法</h1>
                <!-- <p class="stitch-pro-word">乱针绣比一般绣法创作周期的漫长。</p> -->
                <!-- <h3 id="4_1" class="stitch-pro-title2">酝酿</h3> -->
                <!-- <p class="passage-2">制作前，要先画好素描稿与色彩稿。要反复思考酝酿表现方法，操作步骤与绣成后的效果， -->
                    <!-- 一旦心中有数，便进行操作。</p> -->
                <!-- <h3 id="4_2" class="stitch-pro-title2">操作</h3> -->
                <div class="passage-2">
                    <p>制作时将加工过的绸布剪成小块，然后叠成一个个的三角形，再一针针的绣到底布上。叠绣的魅力在于叠三角，必须大小
                        均匀，然后用三针奖三角形的丝片固定在衣服上。
                    <p>其难点在于将这些三角形整整齐齐地缝在一起并组成精美的图案，这不但需要精巧的技法，还需要超乎常人的空间想象力。</p> 
                    <p>这种“三针钉一片”的缝法，让一块块小小的丝片排列组合成精致的图形，形成了特殊的视觉效果，也使服装面料变得更加坚固、耐磨</p>
                </div>   
            </div>
            <div class="pic-background">
                <img width="100%" src="../../../../assets/stitch-bg.png" alt>
            </div>
            <div class="reference-pro">
                <h3 class="reference-pro-title">参考资料</h3>
                <p><a class="linkTo" href="">1.百度百科</a>&nbsp;<span class="stress">[引用日期2015-11-04]</span></p>
            </div>
            <div class="thesis-pro">
                <h3 class="thesis-pro-title">学术论文</h3>
                <ul>
                    <li><a class="linkTo" href="">手机结合叠绣工艺品</a><span class="stress"></span></li>
                    <!-- <li><a class="linkTo" href="">平绣艺术的风格与演变</a> <span class="stress"></span></li>
                    <li><a class="linkTo" href="">平绣在针织服装设计中的应用研究</a> <span class="stress"></span></li>
                    <li><a class="linkTo" href="">平绣在针织服装设计中的应用研究（北京服装学院）</a> <span class="stress"></span></li> -->
                    <!-- <li><a class="linkTo" href="">曾红，王淑华，李蔚，单银娣.  常州乱针绣工艺品消费市场拓展研究．</a> <span class="stress">《艺术科技 》，2013</span></li> -->
                </ul>
                <button class="btn"><a href="">查看全部</a><img class="btn-img" src="../../../../assets/sanjiaoxing.png" alt></button>
            </div>
            <div class="belong-pro">
                <p>词条归属: 绣法</p>
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
import HeaderNav from '../../../HeaderNav'
import "../../../../../static/css/nav.css"
export default {
    name: 'lzxPro',
    inject:['reload'],
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
        },
        GotoPic(){
            this.$router.push({path:'/hangxiuzhenfa/diexiu/dxpic'})
        }
    },
    mounted(){
        $(function(){
            function DirectoryNav($h,config){
                this.opts = $.extend(true,{
                    scrollThreshold:0.5,    //滚动检测阀值 0.5在浏览器窗口中间部位
                    scrollSpeed:700,        //滚动到指定位置的动画时间
                    scrollTopBorder:1250,    //滚动条距离顶部多少的时候显示导航，如果为0，则一直显示
                    easing: 'swing',        //不解释
                    delayDetection:200,     //延时检测，避免滚动的时候检测过于频繁
                    scrollChange:function(){}
                },config);
                this.$win = $(window);
                this.$h = $h;
                this.$pageNavList = "";
                this.$pageNavListLis ="";
                this.$curTag = "";
                this.$pageNavListLiH = "";
                this.offArr = [];
                this.curIndex = 0;
                this.scrollIng = false;
                this.init();
            }

            DirectoryNav.prototype = {
                init:function(){
                    this.make();
                    this.setArr();
                    this.bindEvent();
                },
                make:function(){
                    //生成导航目录结构,这是根据需求自己生成的。如果你直接在页面中输出一个结构那也挺好不用 搞js
                    $(".dxPro").append('<div style="display:none" class="directory-nav" id="directoryNav"><ul></ul><span class="cur-tag"></span><span class="c-top"></span><span class="c-bottom"></span><span class="line"></span></div>');
                    var $hs = this.$h,
                        $directoryNav = $("#directoryNav"),
                        temp = [],
                        index1 = 0,
                        index2 = 0;
                        // console.log($hs);
                    $hs.each(function(index){
                        var $this = $(this),
                        text = $this.text();
                        // console.log($this);
                        // console.log(this);
                        if(this.tagName.toLowerCase()=='h1'){
                            index1++;
                            if(index1%2==0) index2 = 0;
                            temp.push('<li class="l1"><span class="c-dot"></span>'+index1+'. <a class="l1-text">'+text+'</a></li>');
                        }else{
                            index2++;
                            temp.push('<li class="l2">'+index1+'.'+index2+' <a class="l2-text">'+text+'</a></li>');

                        }
                    });
                    $directoryNav.find("ul").html(temp.join(""));

                    //设置变量
                    this.$pageNavList = $directoryNav;
                    this.$pageNavListLis = this.$pageNavList.find("li");
                    this.$curTag = this.$pageNavList.find(".cur-tag");
                    this.$pageNavListLiH = this.$pageNavListLis.eq(0).height();

                    if(!this.opts.scrollTopBorder){
                        this.$pageNavList.show();
                    }
                },
                setArr:function(){
                    var This = this;
                    this.$h.each(function(){
                        var $this = $(this),
                            offT = Math.round($this.offset().top);
                        This.offArr.push(offT);
                    });
                },
                posTag:function(top){
                    this.$curTag.css({top:top+'px'});
                },
                ifPos:function(st){
                    var offArr = this.offArr;
                    // console.log(offArr);
                    // console.log(st)
                    var windowHeight = Math.round(this.$win.height() * this.opts.scrollThreshold);
                    for(var i=0;i<offArr.length;i++){
                        if((offArr[i] - windowHeight) < st) {
                            var $curLi = this.$pageNavListLis.eq(i),
                                tagTop = $curLi.position().top;
                            $curLi.addClass("cur").siblings("li").removeClass("cur");
                            this.curIndex = i;
                            this.posTag(tagTop+this.$pageNavListLiH*0.5);
                            //this.curIndex = this.$pageNavListLis.filter(".cur").index();
                            this.opts.scrollChange.call(this);
                        }
                    }
                },
                bindEvent:function(){
                    var This = this,
                        show = false,
                        timer = 0;
                    this.$win.on("scroll",function(){
                        var $this = $(this);
                        clearTimeout(timer);
                        timer = setTimeout(function(){
                            This.scrollIng = true;
                            if($this.scrollTop()>This.opts.scrollTopBorder){
                                if(!This.$pageNavListLiH) This.$pageNavListLiH = This.$pageNavListLis.eq(0).height();
                                if(!show){
                                    This.$pageNavList.fadeIn();
                                    show = true;
                                }
                                This.ifPos( $(this).scrollTop() );
                            }else{
                                if(show){
                                    This.$pageNavList.fadeOut();
                                    show = false;
                                }
                            }
                        },This.opts.delayDetection);
                    });

                    this.$pageNavList.on("click","li",function(){
                        var $this = $(this),
                            index = $this.index();
                        This.scrollTo(This.offArr[index]);
                    })
                },
                scrollTo: function(offset,callback) {
                    var This = this;
                    $('html,body').animate({
                        scrollTop: offset
                    }, this.opts.scrollSpeed, this.opts.easing, function(){
                        This.scrollIng = false;
                        //修正弹两次回调 蛋疼
                        callback && this.tagName.toLowerCase()=='body' && callback();
                    });
                }
            };
           
            var directoryNav = new DirectoryNav($("h1"), {
                scrollTopBorder: 100 //滚动条距离顶部多少的时候显示导航，如果为0，则一直显示
            });
        
        })
    }
}




</script>

<style scoped>

.daohang{
    background: url("../../../../assets/daohang.png") no-repeat;
    background-position-x: center;
    background-size: 70%;
    width: 4%;
    height: 2%;
    position: absolute;
    z-index: 100;
    left: 45%;
    cursor: pointer;
}
.header-current{
    /* background-color: #503C2A; */
    /* opacity: 0.6; */
    position: absolute;
    z-index: 99;
    left: 0;
    top: 0;
    width: 100%;
}
.dxPro{
    position: relative;
}
a{
    text-decoration: none;
    color: #D5CCCC;
}
ol{
    list-style: none;
    float: left;
    width: 20%;
    height: 10vh;
    padding: 4vh 0;
}
.pro-list li {
    width: 100%;
    height: 5vh;
    border-left: 1px solid #707070;
    text-align: center;
    line-height: 5vh;
}
.index-pro{
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background: url("../../../../assets/pro-bg.png");
    background-size: cover;
    display: flex;
    align-items: center;
    color: #D5CCCC;
}
.pro-word{
    width: 60%;
    height: 80vh;
    margin-left: 6%;
}
.pro-pic{
    width: 20%;
    height: 80vh;
    margin-left: 5%;
}
.pro-title{
    font-size: 5vh;
    font-weight: 400;
    width: 25%;
    border-bottom: 1px solid #fff;
    padding-top: 2vh;
    padding-bottom: 2vh;
}
.pro-passage{
    font-size: 2.4vh;
    padding-top: 5vh;
    padding-bottom: 5vh;
    border-bottom: 1px #fff dashed;
}
.pro-line{
    height: 5vh;
    line-height: 5vh;
    padding-top: 1vh;
    padding-bottom: 1vh;
    border-bottom: 1px #fff dashed;
}
.pro-part{
    width: 50%;
    height: 5vh;
    float: left;
}
.font{
    font-size: 3vh;
    opacity: 0.59;
}
.pro-value{
    padding-left: 10%;
    font-size: 2.4vh;
}
.pro-list{
    height: 18vh;
    margin: 5vh 0;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
}
.pro-list-title{
    float: left;
    width: 15%;
    height: 18vh;
    text-align: center;
    font-size: 3.5vh;
    line-height: 18vh;
    font-weight: 400;
    border-right: 1px solid #707070;
}
.pro-pic1{
    border: 1px dashed #fff;
    margin-top: 17vh;
    cursor: pointer;
}
.production-img{
    height: 5vh;
    background: url("../../../../assets/xiangce.png") no-repeat;
    background-position: left;
    background-size: 10%;
    line-height: 5vh;
    padding-left: 15%;
    margin-left: 5%;
}
.background{
    height: 100vh; 
    font-family: "宋体";
}
.background-pro{
    background: url("../../../../assets/dx-bg.png") no-repeat;
    background-size: cover;
}
.people-pro{  
    background-color: #000;
    opacity: 0.59;
    height: 100vh;
    color: #fff;
}
.people-pro-title{
    padding-top: 25vh;
    padding-left: 10%;
    font-size: 9vh;
    font-weight: 500;
}
.people-pro-word{
    padding-left: 10%;
    margin-top: 5vh;
    width: 30%;
    font-size: 2.3vh;
    letter-spacing: 0.1em;
    font-weight: lighter;
    line-height: 2em;
}
.trait-pro{
    background: url("../../../../assets/dx-trait.png") no-repeat;
    background-size: cover;
}
.trait-pro-title{
    font-size: 9vh;
    font-weight: 500;
    padding-top: 25vh;
    margin-left: 50%;
}
.trait-pro-word{
    width: 30%;
    font-size: 2.3vh;
    letter-spacing: 0.1em;
    font-weight: lighter;
    line-height: 2em;  /* line-height: 1.3em*/
    margin-left: 57%;
    margin-top: 20vh;
}
.value-pro{
    background: url("../../../../assets/dx-value.png") no-repeat;
    background-size: cover;
}
.value-pro-title{
    font-size: 9vh;
    font-weight: 500;
    padding-top: 35vh;
    margin-left: 10%;
}
.value-pro-word{
    width: 50%;
    font-size: 2.3vh;
    letter-spacing: 0.1em;
    font-weight: lighter;
    line-height: 2em;
    margin-top: 10vh;
    margin-left: 8%;
}
.stitch-pro{
    background-color: #000;
    color: #fff;
    font-family: "宋体";
}
.new-pro{
    width: 45%;
    padding-left: 5%;
    font-size: 2.5vh;
    float: left;
}
.new-pro p{
    text-indent: 2em;
}
.new-pro p, .stitch-pro-title2{
    /* padding-bottom: 3vh; */
    padding-bottom: 5vh;
    width: 60%;
    line-height: 1.5em;
}
.stitch-pro-title{
    padding: 3vh 0;
    font-size: 6vh;
    margin-bottom: 5vh;
}
.pic-background{
    width: 45%;
    display: inline-block;
    padding-left: 5%;
}
.reference-pro{
    margin: 0 5%;
    font-size: 2.5vh;
    margin-bottom: 10vh;
}
.reference-pro-title {
    border-bottom: 2px solid #949494;
    padding-bottom: 1vh;
    margin-top: -4vh;
    clear:both;
}
.reference-pro p{
    padding: 1vh;
}
.thesis-pro {
    margin: 0 5%;
    font-size: 2.5vh;
}
.thesis-pro-title {
    border-bottom: 2px solid #949494;
    padding-bottom: 1vh;
}
.thesis-pro ul{
    margin-left: 2%;
}
.thesis-pro ul li{
    padding-top: 1vh; 
}
.btn{
    background-color: #707070;
    margin-left: 1%;
    margin-top: 2vh;
    background-position: right;
    width: 8%;
    height: 5vh;
    color: #fff;
    border: none;
    border-radius: 2vh;
    line-height: 5vh;
    font-size: 2vh;
}
.btn-img{
    vertical-align: middle;
    width: 15%;
}
.belong-pro {
    border-top: 3px solid #fff;
    margin-top: 5vh;
    height: 30vh;
}
.belong-pro p{
    padding: 2vh 5%;
    font-size: 3vh;
}
span.stress {
    font-size: 2vh;
    color: #aaa;
}
.linkTo:hover{
    border-bottom: 1px solid #aaa;
}

.bottom {
    /* background-color: #D8CCC0; */
    /* background: url("../../../../assets/current_header.png") no-repeat; */
    /* background-size: cover; */
    background-color: #1D1D1D;
    height: 30vh;
    /* color: rgb(235, 219, 209); */
    /* color: #1D1D1D; */
    color: #B7B5B5;
}
.b_top {
    width: 90%;
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
    width: 90%;
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
    background: url("../../../../assets/youjian1.png") no-repeat;
    background-position: center;
    background-size: 50%;
    background-color: #333232;
}
.pic2{
    background: url("../../../../assets/qq.png") no-repeat;
    background-position: center;
    background-size: 50%;
    background-color: #333232;
}
.pic3{
    background: url("../../../../assets/weixin.png") no-repeat;
    background-position: center;
    background-size: 50%;
    background-color: #333232;
}
.pic4{
    background: url("../../../../assets/weibo.png") no-repeat;
    background-position: center;
    background-size: 50%;
    background-color: #333232;
}
.pic5{
    background: url("../../../../assets/dianhua.png") no-repeat;
    background-position: center;
    background-size: 50%;
    background-color: #333232;
}
.pic6{
    background: url("../../../../assets/link-fill.png") no-repeat;
    background-position: center;
    background-size: 50%;
    background-color: #333232;
}

</style>
