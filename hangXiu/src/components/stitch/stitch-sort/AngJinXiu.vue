<template>
    <div class="angjinxiu">
        <div class="ajx">
            <div class="bgc">
                <p class="h2">盎金绣</p>
                <p class="p1">盎金绣是杭绣的主要绣法之一，</p>
                <p class="p2">因杭绣有宫廷绣之称，</p>
                <p class="p3">因此通过盎金的手法体现出主人的尊贵，</p>
                <p class="p4">金碧辉煌，雍容华贵，</p>
                <p class="p5">盎金绣将这种气质体现的淋漓尽致。</p>
            </div>
            <div class="btns">
                <div class="bofang">
                    <div class="bofang-btn"></div>
                </div>
                <div class="xiangce">
                    <router-link to="/hangxiuzhenfa/angjinxiu/ajxpro"><div class="xiangce-btn"></div></router-link>
                </div>
            </div>
            <div class="back">
                <router-link to="/hangxiuzhenfa"><div class="back-btn"></div></router-link>
            </div> 
            <video class="video" controls>
                <source src="../../../../static/video/angjinxiu.mp4">
            </video>
        </div>
    </div>
</template>

<script>
export default {
    name: "angjinxiu",
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
.ajx{
    height: 100vh;
    background-image: url("../../../assets/angjinxiu.jpg");
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
    left: 69%;
    top: 31%;
    font-family: monospace;
}
.p1{
    position: absolute;
    left: 74%;
    top: 44%;
}
.p2{
    position: absolute;
    left: 78%;
    top: 44%;
}
p.p3 {
    position: absolute;
    left: 82%;
    top: 44%;
}
p.p4 {
    position: absolute;
    left: 86%;
    top: 44%;
}
p.p5 {
    position: absolute;
    left: 90%;
    top: 44%;
}
.btns{
    writing-mode: vertical-lr;
    position: absolute;
    left: 74%;
    top: 34%;
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
    left: 10%;
    top: 25%;
}
</style>

