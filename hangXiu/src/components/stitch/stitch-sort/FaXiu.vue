<template>
    <div class="faxiu">
        <div class="fx">      
            <div class="bgc">
               <div class="word">
                    <div class="h2">
                        <p>发绣</p>
                        <div class="btns">
                            <div class="bofang">
                                <div class="bofang-btn"></div>
                            </div>
                            <div class="xiangce">
                                <router-link to="/hangxiuzhenfa/faxiu/fxpro"><div class="xiangce-btn"></div></router-link>
                            </div>
                        </div>
                    </div>
                    <p class="p1">发绣是江苏东台特有的民间传统工艺品种之一，</p>
                    <p class="p2">最早起源于唐朝上元年间，</p>
                    <p class="p3">是以头发丝为原料，</p>
                    <p class="p4">结合绘画与刺绣制作的艺术品，</p>
                    <p class="p5">刚开始是为了表达对佛祖的虔诚，</p>
                    <p class="p6">后到元明时期题材逐渐广泛。</p>
               </div>
                <div class="back">
                    <router-link to="/hangxiuzhenfa"><div class="back-btn"></div></router-link>
                </div> 
                <video class="video" controls>
                    <source src="../../../../static/video/faxiu.mp4">
                </video>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "faxiu",
    mounted(){
        var i = false
        $(".bofang").click(function(){     
            if(i== false){
                $(".video").fadeIn('slow')
                $(".video").trigger("play")
                console.log(1)
                i=true
            }else{
                $(".video").fadeOut('slow')
                $("video").trigger("pause")
                console.log(2)
                i=false
            }
        })
    }
}
</script>

<style scoped>
.faxiu{
    background-color: #1D1516;
}
.fx{
    height: 100vh;
    background-image: url("../../../assets/faxiu.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}
.bgc{
    writing-mode: vertical-lr;
    color: #AAA3A3;
    letter-spacing: 0.5em;
    font-size: 1vw;
    font-family: "微软雅黑";
    line-height: 5em;
    width: 100%;
    /* height: 95vh; */
}
.word {
    position: absolute;
    left: 6%;
    top: 16%;
}
.h2,.p1,.p2,.p3,.p4,.p5,.p6{
    /* padding-top: 5vh; */
    margin-top: 10vh;
}
.h2{
    padding-left: 5%;
    font-size: 2.5vw;
    font-family: monospace;
    position: relative;
    font-weight: bold;
}
.p2{
    height: 60%;
}
.btns {
    writing-mode: initial;
    position: absolute;
    left: 45%;
    top: 21%
}
.bofang, .xiangce,.back{
    background-color: #6A1D21;
    width: 5vh;
    height: 5vh;
    border-radius: 50%;
    cursor: pointer;
}
.bofang-btn{
    background: url("../../../assets/bofang.png") no-repeat;
    background-position: center;
    background-size: 40%;
    width: 5vh;
    height: 5vh;
}
.xiangce-btn{
    background: url("../../../assets/xiangce.png") no-repeat;
    background-position: center;
    background-size: 50%;
    width: 5vh;
    height: 5vh;
    margin-top: 2vh;
}
.back-btn{
    background: url("../../../assets/fanhui.png") no-repeat;
    background-position: center;
    background-size: 50%;
    width: 5vh;
    height: 5vh;
}
.back {
    position: absolute;
    left: 3%;
    top: 5%;
}
video.video {
    width: 50%;
    outline: none;
    display: none;
    position: absolute;
    left: 45%;
    top: 20%;
}
</style>

