<template>
    <div class="weav">
        <video onclick="playPause_1()" id="video1" src="../../static/video/zb_1.mp4"></video>
        <video onclick="playPause_2()" id="video2" src="../../static/video/zb_2.mp4"></video>
        <video onclick="playPause_3()" id="video3" src="../../static/video/zb_3.mp4"></video>
        <video onclick="playPause_4()" id="video4" src="../../static/video/zb_4.mp4"></video>
        <video onclick="playPause_5()" id="video5" src="../../static/video/zb_5.mp4"></video>
        <video onclick="playPause_6()" id="video6" src="../../static/video/zb_6.mp4"></video>
    </div>
</template>

<script>
export default {
    mounted(){
        var myVideo_1=document.getElementById("video1");
        var myVideo_2=document.getElementById("video2");
        var myVideo_3=document.getElementById("video3");
        var myVideo_4=document.getElementById("video4");
        var myVideo_5=document.getElementById("video5");
        var myVideo_6=document.getElementById("video6");
        document.getElementById("video2").style.display = "none";
        document.getElementById("video3").style.display = "none";
        document.getElementById("video4").style.display = "none";
        document.getElementById("video5").style.display = "none";
        document.getElementById("video6").style.display = "none";
        function playPause_1()
        {
            if (myVideo_1.paused) {
                myVideo_1.play();
                myVideo_1.onended = function()
                {
                    document.getElementById("video1").style.display = "none";
                    document.getElementById("video2").style.display = "block";
                };
            }
        }
        function playPause_2()
        {
            if (myVideo_2.paused) {
                myVideo_2.play();
                myVideo_2.onended = function()
                {
                    document.getElementById("video2").style.display = "none";
                    document.getElementById("video3").style.display = "block";
                };
            }
        }
        function playPause_3()
        {
            if (myVideo_3.paused)
                myVideo_3.play();
            myVideo_3.onended = function()
            {
                document.getElementById("video3").style.display = "none";
                document.getElementById("video4").style.display = "block";
            };
        }
        function playPause_4()
        {
            if (myVideo_4.paused)
                myVideo_4.play();
                myVideo_4.onended = function()
                {
                document.getElementById("video4").style.display = "none";
                document.getElementById("video5").style.display = "block";
            };
        }
        function playPause_5()
        {
            if (myVideo_5.paused)
                myVideo_5.play();
                myVideo_5.onended = function()
                {
                    document.getElementById("video5").style.display = "none";
                    document.getElementById("video6").style.display = "block";
                };
        }
        function playPause_6()
        {
            if (myVideo_6.paused)
                myVideo_6.play();
                myVideo_6.onended = function()
                {
                    alert("演示结束");
                    myVideo_6.onclick = null;
                };
        }
    }
}
</script>

<style scoped>

</style>