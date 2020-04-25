<template>
    <div class="luanzhenxiu">
        <div class="lzx">
            <div class="bgc">
                <p class="h2">乱针绣</p>
                <p class="p1">乱针绣又名正则绣、锦纹绣，</p>
                <p class="p2">是一种适宜绣制欣赏品的中国刺绣工艺。</p>
                <p class="p3">创始于二十世纪三十年代，</p>
                <p class="p4">因其绣法自成一格，被诩为当今中国第五大名绣。</p>
                <p class="p5">乱针绣主要采用长短交叉线条，</p>
                <p class="p6">分层加色手法来表现画面。</p>
                <video class="video" controls>
                    <source src="../../../../static/video/luanzhenxiu.mp4">
                </video>
            </div>
            <!-- <router-link to="/hangxiuzhenfa/luanzhenxiu/lzxpro">跳转测试</router-link> -->
            <div class="btns">
                <div class="bofang">
                    <div class="bofang-btn"></div>
                </div>
                <div class="xiangce">
                    <router-link to="/hangxiuzhenfa/luanzhenxiu/lzxpro"><div class="xiangce-btn"></div></router-link>
                </div>
            </div>
            <div class="back">
                <router-link to="/hangxiuzhenfa"><div class="back-btn"></div></router-link>
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    name: "luanzhenxiu",
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
.lzx{
    height: 100vh;
    background-image: url("../../../assets/luanzhenxiu.jpg");
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
    left: 71%;
    top: 15%;
    font-family: monospace;
}
.p1{
    position: absolute;
    left: 75%;
    top: 25%;
}
.p2{
    /* height: 60%; */
    position: absolute;
    left: 78%;
    top: 25%;
}
p.p3 {
    position: absolute;
    left: 81%;
    top: 25%;
}
p.p4 {
    position: absolute;
    left: 84%;
    top: 25%;
}
p.p5 {
    position: absolute;
    left: 87%;
    top: 25%;
}
p.p6 {
    position: absolute;
    left: 90%;
    top: 25%;
}
.btns{
    writing-mode: vertical-lr;
    position: absolute;
    left: 75%;
    top: 16%;
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
    position: absolute;
    left: 10%;
    top: 20%;
    outline: none;
    width: 50%;
    display: none;
}
</style>

