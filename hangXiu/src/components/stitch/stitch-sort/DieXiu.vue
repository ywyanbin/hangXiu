<template>
    <div class="diexiu">
        <div class="px">
            <div class="bgc">
                <div class="h2">叠绣
                    <div class="btns">
                        <div class="bofang">
                            <div class="bofang-btn"></div>
                        </div>
                        <div class="xiangce">
                            <router-link to="/hangxiuzhenfa/diexiu/dxpro"><div class="xiangce-btn"></div></router-link>
                        </div>
                    </div>
                </div>
                <p class="p1">主要特点题现在绣品上用丝线层层叠加、</p>
                <p class="p2">色彩过渡、渐变等，</p>
                <p class="p3">从而达到立体、饱满效果。</p>
                <p class="p4">具有图案秀丽、构思巧妙、绣工细致、针法细腻、</p>
                <p class="p5">色彩饱和等显著等特点。</p>
                <div class="back">
                    <router-link to="/hangxiuzhenfa"><div class="back-btn"></div></router-link>
                </div> 
                <video class="video" controls>
                    <source src="../../../../static/video/diexiu.mp4">
                </video>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "diexiu",
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
.diexiu{
    background-color: #1D1516;
}
.px{
    height: 100vh;
    background-image: url("../../../assets/diexiu.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    /* background-position: right; */
}
.bgc{
    writing-mode: vertical-lr;
    color: #AAA3A3;
    letter-spacing: 0.5em;
    font-size: 1vw;
    font-family: "微软雅黑";
    line-height: 5em;
    width: 100%;
}
.h2{
    padding-left: 15%;
    font-size: 2.5vw;
    font-weight: bold;
    font-family: monospace;
    padding-top: 15vh;
    position: relative;
}
.p1,.p2,.p3,.p4,.p5{
    padding-top: 23vh;
}

.btns{
    writing-mode: vertical-lr;
    position: absolute;
    left:111%;
    top: 19%;
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
    margin-top: 25vh;
    margin-left: 15%;
    outline: none;
    display: none;
}
</style>

