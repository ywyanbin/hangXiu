<template>
    <div class="bjxpic">
        <div class="back">
            <router-link to="/showroom"><div class="back-btn"></div></router-link>
        </div> 
        <div id="screen">
    	<div id="cube" class="cube">
    			<!-- cube images -->
    			<img @dblclick="getInfo"  id="1" src="../../../../../static/img/bg-xiangce.jpg" class="face" data-transform="translateZ(-400px)" style="outline: rgb(0, 0, 0) solid;" >  <!--style="outline:none !important" -->
    			<img @dblclick="getInfo" id="2" src="../../../../../static/img/lzx-1.jpg" class="face" data-transform="rotateY(90deg) translateZ(-400px)" style="outline: rgb(0, 0, 0) solid;">
    			<img @dblclick="getInfo" id="3" src="../../../../../static/img/lzx-2.jpg"  class="face" data-transform="rotateY(-90deg) translateZ(-400px)" style="outline: rgb(0, 0, 0) solid;">
    			<img @dblclick="getInfo" id="4" src="../../../../../static/img/lzx-3.jpg" class="face" data-transform="rotateY(180deg) translateZ(-400px)" style="outline: rgb(0, 0, 0) solid;">
    			<img @dblclick="getInfo" id="5" src="../../../../../static/img/lzx-4.jpg" class="face" data-transform="rotateX(90deg) translateZ(-300px)" style="outline: rgb(0, 0, 0) solid;">
    			<img @dblclick="getInfo" id="6" src="../../../../../static/img/lzx-5.jpg"  class="face" data-transform="rotateX(-90deg) translateZ(-300px)" style="outline: rgb(0, 0, 0) solid;">
    			<!-- bonus image -->
    			<img @dblclick="getInfo" id="7" src="../../../../../static/img/lzx-6.jpg"  class="face" data-transform="rotateY(180deg) translateZ(305px)" style="visibility:hidden">
    			<!-- buttons -->
    			<img @dblclick="getInfo" src="../../../../../static/img/lzx-6.jpg" class="face button" alt="7" data-transform="translateY(-80px) translateZ(-340px) scale(0.5)" style="outline: rgb(0, 0, 0) solid;">
    			<img @dblclick="getInfo" src="../../../../../static/img/lzx-1.jpg" class="face button" alt="2" data-transform="translateX(-200px) translateY(-80px) translateZ(-340px) scale(0.5)" style="outline: rgb(0, 0, 0) solid;">
    			<img @dblclick="getInfo" src="../../../../../static/img/lzx-2.jpg"  class="face button" alt="3" data-transform="translateX(200px) translateY(-80px) translateZ(-340px) scale(0.5)" style="outline: rgb(0, 0, 0) solid;">
    			<img @dblclick="getInfo" src="../../../../../static/img/lzx-3.jpg" class="face button" alt="4" data-transform="translateY(80px) translateZ(-340px) scale(0.5)" style="outline: rgb(0, 0, 0) solid;">
    			<img @dblclick="getInfo" src="../../../../../static/img/lzx-4.jpg" class="face button" alt="5" data-transform="translateX(-200px) translateY(80px) translateZ(-340px) scale(0.5)" style="outline: rgb(0, 0, 0) solid;">
    			<img @dblclick="getInfo" src="../../../../../static/img/lzx-5.jpg"  class="face button" alt="6" data-transform="translateX(200px) translateY(80px) translateZ(-340px) scale(0.5)" style="outline: rgb(0, 0, 0) solid;">
    		</div>
    	</div>
    </div>
</template>
 
<script>
import {Animate} from '../../../../../static/js/main-1'
// import "../../../../../static/css/normalize.css"
export default {
    data(){
        return{

        }
    },
    inject: ['reload'],
    mounted(){
        Animate();
    },
    methods:{
        getInfo(){
            this.$router.push({path:'/hangxiuzhenfa/luanzhenxiu/lzxpro'})

        }
    }
}
</script>

<style scoped>
#screen {
    position: absolute;
    left:0;
    top:0;
    width: 100%;
    height: 100%;
    background:#000;
    perspective:500px;
    -webkit-perspective:500px;
}

.cube {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    margin: 0;
    user-select: none;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
}

.face {
    position: absolute;
    margin-left:-300px;
    margin-top:-200px;
    width:600px;
    height:400px;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    transform-origin:50% 50%;
    -webkit-transform-origin:50% 50%;
    transition: outline 0.5s ease-in-out 0s;
    cursor: pointer;
}

.button {
    position: absolute;
    margin-left:-150px;
    margin-top:-100px;
    width:300px;
    height:200px;
}
/* .face:hover {
    outline: rgba(255,255,255,1) solid 10px !important;
     outline: rgba(255,255,255,1) solid 10px !important;
} */
.back {
    position: absolute;
    left: 10px;
    top: 10px;
    z-index: 20;
}
.back-btn{
    background: url("../../../../assets/fanhui.png") no-repeat;
    background-position: center;
    background-size: 50%;
    width: 5vh;
    height: 5vh;
    background-color: #886b6b;
    border-radius: 25px;
}
@import "../../../../../static/css/normalize.css"
</style>