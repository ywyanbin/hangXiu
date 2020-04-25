<template>
    <div class="baojinxiu">
        <div class="bjx">
            <div class="bgc">
                <p class="h2">包金绣</p>
                <p class="p1">包金绣是中华民</p>
                <p class="p2">族优秀的传统手</p>
                <p class="p3">工技艺之一。</p>
                <p class="p4">风格独特，</p>
                <p class="p5">色彩浓郁，</p>
                <p class="p6">表现力丰富，</p>
                <p class="p7">应用广泛，</p>
                <p class="p8">广受海内外人士</p>
                <p class="p9">欢迎。</p>
            </div>
            <!-- <router-link to="/hangxiuzhenfa/luanzhenxiu/lzxpro">跳转测试</router-link> -->
            <div class="btns">
                <div class="bofang">
                    <div class="bofang-btn"></div>
                </div>
                <div class="xiangce">
                    <router-link to="/hangxiuzhenfa/baojinxiu/bjxpro"><div class="xiangce-btn"></div></router-link>
                </div>
            </div>
            <div class="back">
                <router-link to="/hangxiuzhenfa"><div class="back-btn"></div></router-link>
            </div> 
            <video class="video" controls>
                <source src="../../../../static/video/baojinxiu.mp4">
            </video>
        </div>
    </div>
</template>

<script>
export default {
    name: "baojinxiu",
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
.bjx{
    height: 100vh;
    background-image: url("../../../assets/baojinxiu.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}
.bgc{
    writing-mode: vertical-lr;
    color: #AAA3A3;
    letter-spacing: 0.5em;
    font-size: 1vw;
    font-family: "微软雅黑";
    line-height: 3em;
    width: 100%;
    height: 100vh;
    position: relative;
}
/* h2,.p1,.p2{
    padding-top: 5vh;
} */
.h2{
    font-size: 2.5vw;
    font-weight: bold;
    position: absolute;
    left: 61%;
    top: 60%;
    font-family: monospace;
}
.p1{
    position: absolute;
    left: 66%;
    top: 72%;
}
.p2{
    position: absolute;
    left: 69%;
    top: 72%;
}
p.p3 {
    position: absolute;
    left: 72%;
    top: 72%;
}
p.p4 {
    position: absolute;
    left: 75%;
    top: 72%;
}
p.p5 {
    position: absolute;
    left: 78%;
    top: 72%;
}
p.p6 {
    position: absolute;
    left: 81%;
    top: 72%;
}
p.p7 {
    position: absolute;
    left: 84%;
    top: 72%;
}
p.p8 {
    position: absolute;
    left: 87%;
    top: 72%;
}
p.p9 {
    position: absolute;
    left: 90%;
    top: 72%;
}
.btns{
    writing-mode: vertical-lr;
    position: absolute;
    left: 66%;
    top: 63%;
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
    margin-left: 60%;
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
    left: 5%;
    top: 25%;
}
</style>

