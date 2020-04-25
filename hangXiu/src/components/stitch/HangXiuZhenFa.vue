<template>
    <div class="Stitch">
        <div class="contain">
            <div class="daohang" @mouseenter="appearNav"></div>
            <headernav v-if="appear" class="header-current"></headernav>
            <div class="bgc">
                <div class="bgi">
                    <div class="fangkuang">
                        <div class="fu">
                            <img src="../../assets/fu-1.png" width="100%" alt>
                        </div>
                    </div>
                    <div class="lists">
                        <div class="list" v-for="(item, index) in Arr" :key="index" 
                          :class="{'list-hover':index==hoverIndex}"
                          @mouseover="hoverIndex = index"
                          @mouseout="hoverIndex = -1">
                            <div class="circle" > 
                                <img :src="item.icon">
                            </div>
                            <div class="tag">
                                <p><router-link class="word" :to="item.address">{{item.name}}</router-link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderNav from '../HeaderNav'
export default {
    name:'Stitch',
    data(){
        return{
            transitionName: '',
            appear: false,
            hoverIndex: -1,
            Arr: [
                {name:"平绣", icon: require("../../assets/circle1.png"),address:"/hangxiuzhenfa/pingxiu"},
                {name:"乱针绣", icon: require("../../assets/circle2.png"),address:"/hangxiuzhenfa/luanzhenxiu"},
                {name:"叠绣",icon: require("../../assets/circle3.png"),address:"/hangxiuzhenfa/diexiu"},
                {name:"贴续绣",icon: require("../../assets/circle4.png"),address:"/hangxiuzhenfa/tiexuxiu"},
                {name:"发绣",icon: require("../../assets/circle5.png"),address:"/hangxiuzhenfa/faxiu"},
                {name:"盎金绣",icon: require("../../assets/circle6.png"),address:"/hangxiuzhenfa/angjinxiu"},
                {name:"包金绣",icon: require("../../assets/circle7.png"),address:"/hangxiuzhenfa/baojinxiu"} 
            ] 
        }
    },
    components:{
        "headernav": HeaderNav
    },
    methods:{
        appearNav(){
            this.appear = ! this.appear
        }
    }
}
</script>

<style scoped>
    .contain{
        height: 100vh;
        background-color: #F1E5E0;
        position: relative;
    }
    .daohang{
        background: url("../../assets/daohang.png") no-repeat;
        background-position-x: center;
        background-size: 70%;
        width: 4%;
        height: 4%;
        position: absolute;
        z-index: 100;
        left: 48%;
        cursor: pointer;
    }
    .header-current{
        /* background-color: #503C2A; */
        background: url("../../assets/header2.png") no-repeat;
        background-size: cover;

        /* opacity: 0.6; */
        position: absolute;
        z-index: 99;
        left: 0;
        top: 0;
        width: 100%;
    }

    .bgc, .bgi{
        height: 60vh;
    }
    .bgc{
        background-color: #8F3122;
    }
    .bgi{
        background-image: url("../../assets/hangxiuzhenfa.png");
        background-repeat: no-repeat; 
        background-size: cover;
    }
    .fangkuang{
        width: 30%;
        padding-top: 10vh;
        margin: 0 auto;
    }
    .fu{
        width: 25vh;
        height: 25vh;
        margin:0 auto;
        border: 2px solid #fff;
        transform: rotate(45deg);
        vertical-align: middle;
        overflow: hidden;
        text-align: center;
        display: flex;
    }
    .fu img{
        transform: rotate(-45deg);
        max-height: 100%;
        max-width: 100%;
    } 

    .lists{
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    .list{
        width: 8%;
        height: 40vh;
        /* background-color: green; */
        margin-top: 18vh;
        position: relative;
         transition:all 2s ease-in-out;
        perspective: 800px;
        perspective-origin: 50% 100px;
    }
    .list-hover{
        width: 8%;
        height: 40vh;
        /* background-color: green; */
        margin-top: 18vh;
        position: relative;
        transition:all 2s ease-in-out;
        perspective: 800px;
        perspective-origin: 50% 100px;
        transform:rotateY(360deg);
    }
    .circle{
        /* border: 1px solid #fff; */
        /* text-align: center; */
        height: 25%;
        width: 50%;
        position: absolute;
        left: 24%;
        top: 5%;
    }
    .circle img{
        width: 100%;
    }
    .tag{
        /* height: 75%; */
        margin-top: 40%;
    }
    .tag p{
        background-image: url("../../assets/tag.png");
        background-repeat: no-repeat;
        background-size: contain;
        writing-mode: vertical-lr;
        /* height: 100%; */
        height: 40%;
        width: 80%;
        margin: 0 auto;
    }
    .tag p a{
        text-decoration: none;
        font-size: 1.5em;
        letter-spacing: 0.5em;
        color: #6B4242;
        display: block;
        position: absolute;
        top: 30%;
        left: 33%;
    }



    

</style>


