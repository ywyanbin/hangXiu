<template>
    <div class="tiexuxiu">
        <div class="txx">      
            <div class="bgc">
                <div class="word">
                    <div class="h2">
                        <p>贴续绣</p>
                        <div class="btns">
                            <div class="bofang">
                                <div class="bofang-btn"></div>
                            </div>
                            <div class="xiangce">
                                <router-link to="/hangxiuzhenfa/tiexuxiu/txxpro"><div class="xiangce-btn"></div></router-link>
                            </div>
                        </div>
                        
                    </div>
                    <p class="p1">贴续绣贴布绣中的一类。</p>
                    <p class="p2">贴续绣绣法简单，图案以块面为主，风格别致大方。</p>
                </div>
                <div class="back">
                    <router-link to="/hangxiuzhenfa"><div class="back-btn"></div></router-link>
                </div> 
                <video class="video" controls>
                    <source src="../../../../static/video/tiexuxiu.mp4">
                </video>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "tiexuxiu",
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
.tiexuxiu{
    background-color: #1D1516;
}
.txx{
    height: 100vh;
    background-image: url("../../../assets/tiexuxiu.jpg");
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
    left: 60%;
    top: 42%;
}
.h2,.p1,.p2{
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
p.p1 {
    padding-top: 3vh;
}
.p2{
    height: 45%;
    padding-top: 3vh;
}
.btns {
    writing-mode: initial;
    position: absolute;
    left: 42%;
    top: 39%;
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
    margin-top: 25vh;
    margin-left: 15%;
    outline: none;
    display: none;
}
</style>

