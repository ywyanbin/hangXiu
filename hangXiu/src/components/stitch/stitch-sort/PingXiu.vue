<template>
    <div class="pingxiu">
        <div class="px">      
            <div class="bgc">
                <div class="h2">
                    <p>平绣</p>
                    <div class="btns">
                        <div class="bofang">
                            <div class="bofang-btn"></div>
                        </div>
                        <div class="xiangce">
                            <router-link to="/hangxiuzhenfa/pingxiu/pxpro"><div class="xiangce-btn"></div></router-link>
                        </div>
                    </div>
                    <div class="back">
                        <router-link to="/hangxiuzhenfa"><div class="back-btn"></div></router-link>
                    </div> 
                </div>
                <p class="p1">平绣又称细绣，中国绣种之一</p>
                <p class="p2">平绣是用直线组成的绣法，多用于刺绣装饰欣赏品和较高级的日用品。平绣线的方位、针脚的起落、施线的粗细、角色的繁简，都因物象的不同而有所区别。</p>
                <video class="video" controls>
                    <source src="../../../../static/video/pingxiu.mp4">
                </video> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "pingxiu",
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
.pingxiu{
    background-color: #1D1516;
}
.px{
    height: 100vh;
    background-image: url("../../../assets/pingxiu.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}
.bgc{
    writing-mode: vertical-lr;
    color: #AAA3A3;
    letter-spacing: 0.5em;
    font-size: 0.8em;
    font-family: "微软雅黑";
    line-height: 5em;
    width: 100%;
    height: 95vh;
}
.h2,.p1,.p2{
    /* padding-top: 5vh; */
    margin-top: 10vh;
}
.h2{
    padding-left: 5%;
    font-size: 2.5em;
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
    left: 50%;
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
    left: 50%;
    top: -8vh;
}
video.video {
    width: 50%;
    margin-top: 25vh;
    margin-left: 15%;
    outline: none;  
    display: none;
}

</style>

