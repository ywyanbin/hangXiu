<template>
    <div class="lzxPro">
        <div class="daohang" @mouseenter="appearNav" ></div>
        <headernav v-if="appear" class="header-current"></headernav>
        <div class="index-pro">
            <div class="pro-word">
                <h3 class="pro-title">乱针绣</h3>
                <p class="pro-passage">乱针绣又名正则绣、锦纹绣，是一种适宜绣制欣赏品的中国刺绣工艺。创始于二十世纪三十年代，
                    创始人为江苏常州人杨守玉，字冰若。[1]现代刺绣工艺家。因其绣法自成一格，被诩为当今中国第五大名绣。乱针绣主要采
                    用长短交叉线条，分层加色手法来表现画面。针法活泼、线条流畅、色彩丰富、层次感强、风格独特。擅长绣制油画、摄
                    影和素描等稿本的作品。</p>
                <p class="pro-line">
                    <span class="pro-part"><span class="pro-name font">中文名</span><span class="pro-value">乱针绣（正则绣）</span></span>
                    <span class="pro-part"><span class="pro-time font">创作时间</span><span class="pro-value">1930年代</span></span>
                </p>
                <p class="pro-line">
                    <span class="pro-part"><span class="pro-author font">创作者</span><span class="pro-value">杨守玉</span></span>
                    <span class="pro-part"><span class="pro-base font">创作基础</span><span class="pro-value">懂得油画</span></span>
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
                        <ol>
                            <li class="level2">
                                <span class="index">▪</span>
                                <span class="text"><a href="#4_1">酝酿</a></span>
                            </li>
                            <li class="level2">
                                <span class="index">▪</span>
                                <span class="text"><a href="#4_2">操作</a></span>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            <div class="pro-pic">
                <div class="pro-pic1" @click="GotoPic">
                    <img width="100%" src="../../../../../static/img/touxiang.png" alt>
                    <div class="production-img">乱针绣图集</div>
                </div>
            </div>
        </div>
        <div  class="background-pro background">
            <div class="people-pro">
                <h1 id="1" class="people-pro-title titleNav">背景</h1>
                <p class="people-pro-word">正则绣是杨守玉独创的一种艺术形式，正则绣所用的材料是丝线、纱线，普通的缝衣针。
                    还有各种质地的用来做绣的底料。以针代笔，以色丝为丹青，使绘画与刺绣融为一体，自成品格。正则绣和平绣不一
                    样，平绣所使用的是一种工艺的语言，而正则绣绘画语言，是表达一种情感，让自己的情绪与绣画的主题融合于一个
                    整体，又因绣的手法独特。</p>
            </div>
        </div>
        <div class="trait-pro background">
            <div class="people-pro">
                <h1 id="2" class="trait-pro-title titleNav">特点</h1>
                <p class="trait-pro-word">乱针绣是把画理与绣理结合在一起创造出来的一种新的中国刺绣艺术，是利用特殊的乱针
                    技法来制作的“针画”。是用针线为工具。把不同方向、不同颜色的直线条交叉重叠堆积来表现物体的体积感、前后物
                    体的空间关系及色彩变化。“乱针绣”的显著特点是摆脱了一股刺绣“密接其针、排比其线，”的传统操作法，而是不拘
                    教条，让作者自由地表达自己的思想感情，因而乱针绣有其错综复杂的工艺要求而成为极其珍贵的艺术作品。</p>
            </div>
        </div>
        <div  class="value-pro background">
            <div class="people-pro">
                <h1 id="3" class="value-pro-title titleNav">艺术价值</h1>
                <p class="value-pro-word">让我们仔细地观赏这样一副绣品，撇开其艺术性不说，单是时间，就需要经过艺术师们花
                    费数月的时间来完成。从临摹、铺底、上色、调色，直至修改，艺术师们将根根细细的丝线'劈'成几丝、几十丝，小
                    小的绣花针在手中上下其飞，挥洒自如，而色彩斑斓的各种景物就慢慢显现出来，观之生动，栩栩如生，魅力十足。
                    从技法上说，没有二样的事物可以用同一种针法来表现，尤其体现在人物、动物的眼睛上，需要有极高的手法，才能
                    传神的点出所描绘对象，达到最恰当、最逼真的表现艺术！乱针绣的工作过程比一般刺诱要复杂得多，每一幅作品，耗
                    费的时间十分漫长，如一幅40CM×50CM的规格的人像绣品，其工期达三个多月。有的精品曾花费近一年的时间来完成。
                    所以，乱针绣作品流传在市场上的很少。</p>
            </div>
        </div>
        <div  class="stitch-pro">
            <div class="new-pro">
                <h1 id=4 class="stitch-pro-title titleNav">绣法</h1>
                <p class="stitch-pro-word">乱针绣比一般绣法创作周期的漫长。</p>
                <h3 id="4_1" class="stitch-pro-title2">酝酿</h3>
                <p class="passage-2">制作前，要先画好素描稿与色彩稿。要反复思考酝酿表现方法，操作步骤与绣成后的效果，
                    一旦心中有数，便进行操作。</p>
                <h3 id="4_2" class="stitch-pro-title2">操作</h3>
                <div class="passage-2">
                    <p>一般要刺三层：</p>
                    <p>1、第一层：铺色。</p>
                    <p>按照绣稿的轮廓线和色块满刺一层底色，刺底色的线宜粗一些，线条可以长一些。</p>
                    <p>2、第二层：做细。</p>
                    <p>需注意制作顺序，一般先刺面积大的和后面的物体，面积小和前面的物体后做，重要的引人注目的最后做，每
                        做一处，都要照顾到整体与各个物体间的关系。</p>
                    <p>3、第三层：进行精细艺术加工。</p>
                    <p>重点刺出线条的变化，光线和色彩的变化，用不同光色的深浅色线把整个绣面上的光线和色彩统一。呈现出和
                        谐的光感同色调感。在这个阶段，针力和笔力一样，是针画艺术的生命力，是作者思想感情的体现，也是衡量
                        作品艺术水平的重要标志，因此这个阶段如何运针、用色都要精心斟酌后才能果断下针，使一针一线都恰到好
                        处地反映在绣面中，使线条刺得活泼而下呆板。</p>
                    <p>在这一阶段，还要发挥劈丝技术，作者要根据题材的需要，在显示乱针绣粗中有细，粗细有机结合的特色时，需
                        把一根常规丝线劈成若干分支的细丝进行刺作，尤其在表现某种物体如人体肌肤，为求细腻效果，要思考确定用
                        线的粗细程度。最细时劈丝达四十八分之一，这个操作层次上更细微和艰辛。</p>
                </div>   
            </div>
            <div class="pic-background">
                <img width="100%" src="../../../../assets/stitch-bg.png" alt>
            </div>
            <div class="reference-pro">
                <h3 class="reference-pro-title">参考资料</h3>
                <p><a class="linkTo" href="">1.杨守玉</a>&nbsp;<span class="stress">中国新闻网[引用日期2017-07-19]</span></p>
            </div>
            <div class="thesis-pro">
                <h3 class="thesis-pro-title">学术论文</h3>
                <ul>
                    <li><a class="linkTo" href="">陈圣国，孙正兴，项建华，张岩.  计算机辅助乱针绣制作技术研究．</a><span class="stress">《计算机学报》，2011</span></li>
                    <li><a class="linkTo" href="">张适，张燕.  乱针绣源流及其艺术．</a> <span class="stress">《艺术百家》，2007</span></li>
                    <li><a class="linkTo" href="">朱雪晴.  乱针绣的针法技巧．</a> <span class="stress">《美与时代》，2009</span></li>
                    <li><a class="linkTo" href="">章建军.  中国传统刺绣与现代“乱针绣”．</a> <span class="stress">《 南京艺术学院学报:美术与设计版 》，2004</span></li>
                    <li><a class="linkTo" href="">曾红，王淑华，李蔚，单银娣.  常州乱针绣工艺品消费市场拓展研究．</a> <span class="stress">《艺术科技 》，2013</span></li>
                </ul>
                <button class="btn"><a href="">查看全部</a><img class="btn-img" src="../../../../assets/sanjiaoxing.png" alt></button>
            </div>
            <div class="belong-pro">
                <p>词条归属: 绣法</p>
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
            this.$router.push({path:'/hangxiuzhenfa/luanzhenxiu/lzxpic'})
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
                    $(".lzxPro").append('<div style="display:none" class="directory-nav" id="directoryNav"><ul></ul><span class="cur-tag"></span><span class="c-top"></span><span class="c-bottom"></span><span class="line"></span></div>');
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
.lzxPro{
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
    background: url("../../../../assets/people-bg.png") no-repeat;
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
    line-height: 1.3em;
}
.trait-pro{
    background: url("../../../../assets/trait-bg.png") no-repeat;
    background-size: cover;
}
.trait-pro-title{
    font-size: 9vh;
    font-weight: 500;
    padding-top: 25vh;
    margin-left: 35%;
}
.trait-pro-word{
    width: 30%;
    font-size: 2.3vh;
    letter-spacing: 0.1em;
    font-weight: lighter;
    line-height: 1.3em;
    margin-left: 57%;
    margin-top: 20vh;
}
.value-pro{
    background: url("../../../../assets/value-bg.png") no-repeat;
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
    line-height: 1.3em;
    margin-top: 15vh;
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
    padding-bottom: 3vh;
}
.stitch-pro-title{
    padding: 3vh 0;
    font-size: 6vh;
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
