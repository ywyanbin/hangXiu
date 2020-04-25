<template>
    <div>
        <headernav></headernav>
        <div class="scrollPic">
            <el-carousel height="90vh" direction="vertical" :interval="2000">
                <el-carousel-item v-for="item in items" :key="item">
                    <h3 class="medium">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>  
</template>

<script>
import HeaderNav from './HeaderNav'
export default {
    name: 'practice',
    data(){
        return{
            items:['','杭州的历史','杭州的风格','杭州的针法']
        }
    },
    components:{
        "headernav": HeaderNav
    }
}
</script>

<style scoped>
    .el-carousel__item h3 {
        height: 90vh;
        font-size: 34px;
        opacity: 0.75;
        line-height: 90vh;
        text-align: center;
        letter-spacing: 1px;
        color:#CECBCB;
        background-color: #000;
        opacity: 0.59;
    }
  
    .el-carousel__item:nth-child(1) {
        /* background-color: red; */
        background-image: url("../assets/background.png");
        background-repeat: no-repeat;
        background-size: cover;
    }
    
    .el-carousel__item:nth-child(2) {
        background-image: url("../assets/57429442242417875@2x.png");
        background-repeat: no-repeat;
        background-size: cover;
    }
    .el-carousel__item:nth-child(3) {
        background-color: green;
    }
    .el-carousel__item:nth-child(4) {
        background-image: url("../assets/aaa.jpg");
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>




