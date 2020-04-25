<template>
    <div class="ajxPro">
        <div class="daohang" @mouseenter="appearNav" ></div>
        <headernav v-if="appear" class="header-current"></headernav>
        <div class="index-pro">
            <div class="pro-word">
                <h3 class="pro-title">盎金绣</h3>
                <p class="pro-passage">盎金绣，中国刺绣传统针法。条纹绣的一种。是平金绣的简化，作装饰绣品，起美化与调和色彩的作用。经常与打子针
                    一起运用，适宜绣制台毯、被罩等实用品与装饰性较强的欣赏品。针法组织。以丝绣图案为依据，将金线 回旋，加于已绣或未绣的图样边缘，
                    故称为盎金绣。</p>
                <p class="pro-line">
                    <span class="pro-part"><span class="pro-name font">中文名</span><span class="pro-value">盎金绣</span></span>
                    <span class="pro-part"><span class="pro-time font">类别</span><span class="pro-value">中国绣种之一</span></span>
                </p>
                <p class="pro-line">
                    <span class="pro-part"><span class="pro-author font">发源地</span><span class="pro-value">江苏</span></span>
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
                    <img width="100%" src="../../../../../static/img/touxiang5.png" alt>
                    <div class="production-img">盎金绣图集</div>
                </div>
            </div>
        </div>
        <div  class="background-pro background">
            <div class="people-pro">
                <h1 id="1" class="people-pro-title titleNav">背景</h1>
                <p class="people-pro-word">传统盘金绣是将金、银材质附着在丝线上形成金、银线，将金、银线按照需求在绣地上盘制成各种纹
                    样，并用色线将其钉缝固定。盘金绣作为中国传统刺绣技艺中代表绣法，历史由来已久，尤其绣线材质与制作工艺具有一定的特殊
                    性，技法繁复，积淀 深厚。唐代诗人杜甫在《丽人行》中曾写到:“绣罗衣裳照暮春，蹙金孔雀银麒麟”;温庭筠在《菩萨蛮•凤凰
                    相对 盘金缕》中也作有:“凤凰相对盘金缕，牡丹一夜经微雨”的诗句。金属线作为刺绣基材在中国古代服饰的应用中，目前最早出
                    土实物为陕西法门寺的唐代蹙金绣半臂，但据史料推测金属线在中国古代织物装饰中的应用可能早至汉代。</p>
            </div>
        </div>
        <div class="trait-pro background">
            <div class="people-pro">
                <h1 id="2" class="trait-pro-title titleNav">特点</h1>
                <p class="trait-pro-word">传统盘金绣的纹样题材包括花卉、动物、人物、几何等，集传统文化、风俗、地域特征于一身，大都表
                    现出艺术高于生活的内涵，从传统盘金绣作品中，可以看出人们将天地先贤、良辰美 景等祈福吉祥的景愿进行抽象化、理想化的处
                    理，用非语言的方式进行了独特的祷告，抒发美好的精神寄托，渗透着中华数千年的传统思想。</p>
            </div>
        </div>
        <div  class="value-pro background">
            <div class="people-pro">
                <h1 id="3" class="value-pro-title titleNav">艺术价值</h1>
                <p class="value-pro-word">盎金绣，与其相关的钉金绣类技法还包括平金绣、垫 金绣等。三者主要区别在于盘绕方式之间的差异。
                    盘金绣强调线状形式的使用，如单独用线迹的形式形成独立纹样，或勾勒纹样边缘，勾勒纹样边缘时与其他装饰手法相结合，如平
                    绣、贴补绣、打籽绣等。由于装饰部位、装饰纹样造 型特征不同，传统盘金绣根据具体装饰需求呈现样貌与工艺的差异。</p>
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
                    <p>盎金绣如为两根及两根以上金线成组使用，要一组金线同时盘制，以“双金线”为例，在拐角处，要一根线先拐弯固定一针，再
                        用同样的方法盘制另一根线。由于金属线有一定的硬度，拐角处如处理不当便容易折断。</p>
                    <p>除此之外，在绣制时，绣工对每个图案所需的金线长度要心中有数，金线要从纹样起始处盘到底，中途不得中断。</p>
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
                    <li><a class="linkTo" href="">试析盎金绣在现代服装设计中的应用</a><span class="stress"></span></li>
                    <li><a class="linkTo" href="">盎金绣</a> <span class="stress"></span></li>
                    <!-- <li><a class="linkTo" href="">平绣在针织服装设计中的应用研究</a> <span class="stress"></span></li> -->
                    <!-- <li><a class="linkTo" href="">平绣在针织服装设计中的应用研究（北京服装学院）</a> <span class="stress"></span></li> -->
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
    name: 'ajxPro',
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
            this.$router.push({path:'/hangxiuzhenfa/angjinxiu/ajxpic'})
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
                    $(".ajxPro").append('<div style="display:none" class="directory-nav" id="directoryNav"><ul></ul><span class="cur-tag"></span><span class="c-top"></span><span class="c-bottom"></span><span class="line"></span></div>');
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
.ajxPro{
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
    background: url("../../../../assets/ajx-bg.png") no-repeat;
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
    background: url("../../../../assets/ajx-trait.png") no-repeat;
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
    line-height: 2em;  /* line-height: 1.3em*/
    margin-left: 57%;
    margin-top: 20vh;
}
.value-pro{
    background: url("../../../../assets/ajx-value.png") no-repeat;
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
