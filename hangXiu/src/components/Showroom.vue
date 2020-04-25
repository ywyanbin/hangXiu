<template>
    <div class="showroom">
        <div class="daohang" @mouseenter="appearNav"></div>
        <headernav v-if="appear" class="header-current"></headernav>
        <div class="bg">
            <div class="kuang">
                <img class="xiu1" src="../assets/xiu2.png" alt width="100%">
            </div>
            <div class="nav_room">
                <div class="r_px">
                    <router-link to="/hangxiuzhenfa/pingxiu/pxpic">
                        <img class="img" src="../assets/r_px.png" alt width="25%">
                    </router-link>
                </div>
                <div class="r_lzx">
                    <router-link to="/hangxiuzhenfa/luanzhenxiu/lzxpic">
                        <img class="img" src="../assets/r_lzx.png" alt width="25%">
                    </router-link>
                </div>
                <div class="r_dx">
                    <router-link to="/hangxiuzhenfa/diexiu/dxpic">
                        <img class="img" src="../assets/r_dx.png" alt width="25%">
                    </router-link>
                </div>
                <div class="r_txx">
                    <router-link to="/hangxiuzhenfa/tiexuxiu/txxpic">
                        <img class="img" src="../assets/r_txx.png" alt width="25%">
                    </router-link>
                </div>
                <div class="r_fx">
                    <router-link to="/hangxiuzhenfa/faxiu/fxpic">
                        <img class="img" src="../assets/r_fx.png" alt width="25%">
                    </router-link>
                </div>
                <div class="r_ajx">
                    <router-link to="/hangxiuzhenfa/angjinxiu/ajxpic">
                        <img class="img" src="../assets/r_ajx.png" alt width="25%">
                    </router-link>
                </div>
                <div class="r_bjx">
                    <router-link to="/hangxiuzhenfa/baojinxiu/bjxpic">
                        <img class="img" src="../assets/r_bjx.png" alt width="25%">
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderNav from './HeaderNav'
export default {
    data(){
        return{
            appear: false
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
.showroom{
    background-color: #000;
}
.daohang{
        background: url("../assets/daohang.png") no-repeat;
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
        background: url("../assets/header2.png") no-repeat;
        background-size: cover;

        /* opacity: 0.6; */
        position: absolute;
        z-index: 99;
        left: 0;
        top: 0;
        width: 100%;
    }

.bg{
    background: url("../assets/hangxiuzhenfa.png");
    height: 100vh;
    width: 100%;
}
.kuang{
    width: 25vh;
    height: 25vh;
    border: 1px solid #DCA125;
    transform: rotate(45deg);
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: absolute;
    left: 43%;
    top: 10vh;
}
.xiu1{
    transform: rotate(-45deg);
}
.nav_room{
    display: flex;
    width: 90%;
    justify-content: space-around;
    position: absolute;
    left: 5%;
    top: 50vh;
    border-top: 1px solid #DCA125;
    padding-top: 5vh;
}
.r_px,.r_lzx,.r_dx,.r_txx,.r_fx,.r_ajx,.r_bjx{
    background: url("../assets/showroom.png") no-repeat;
    width: 15%;
    height: 30vh;
    background-size: contain;
    position: relative;
}
.img{
    position: absolute;
    left: 15%;
    top: 15%;
    /* cursor: pointer; */
}
</style>