<template>
    <div class="watch">
        <div class="w-search">
            <span class="word">本地搜索</span>
            <input class="search" type="search">
        </div>
        <div class="video">
            <span>视频</span>
            <span class="tianjia"><img src="../../../assets/tianjia.png" width="100%"></span>
        </div>
        <div class="table">
            <div class="kind">
                <div class="media" v-for="(media,index) in PageLists" :key="index">
                    <video class="video1" controls :poster="media.poster" preload>
                        <source :src="media.src">
                    </video>
                </div>
            </div>
        </div>
        <div class="page">
            <el-pagination background layout="total,prev,pager,next,jumper" :total="totalCount" 
                small
                @current-change="handleCurrentChange"             
                :current-page="currentPage"
                :page-size="6">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'watch',
    data(){
        return{
            medias:[
                {poster:"static/img/background1.png",src:"static/video/index.mp4"},
                {poster:"static/img/current-bgi.png",src:"static/video/current.mp4"},
                {poster:"static/img/jinjiahong.jpg",src:"static/video/jinjiahong.mp4"},
                {poster:"static/img/wangshenghong.jpg",src:"static/video/wangshenghong.mp4"},
                {poster:"static/img/zhaoyijun.jpg",src:"static/video/zhaoyijun.mp4"},
                {poster:"static/img/chenshuiqin.jpg",src:"static/video/chenshuiqin.mp4"},
                {poster:"static/img/faxiu.jpg",src:"static/video/faxiu.mp4"},
            ],
            currentPage: 1,   //显示默认第几页
            totalCount: '',  //总条数，根据接口获取数据长度
            PageLists: '',
            total: '0'
        }
    },
    methods:{
        handleCurrentChange(val) {
            this.currentPage = val;  //改变默认的页数
            this.PageLists = this.medias.slice((this.currentPage-1)*6,this.currentPage*6)
            console.log(`当前页: ${val}`);
        },
        initPageLists(){
            this.PageLists = this.medias.slice(0,6)
        }
    },
    created(){
        this.totalCount = this.medias.length
        this.initPageLists()   
    }
}
</script>

<style scoped>
.watch{
    width: 80%;
    margin: 0 auto;
}
.w-search {
    height: 4vh;
    margin-top: 3vh;
    line-height: 4vh;
}
input.search {
    height: 4vh;
    width: 20%;
    outline: none;
    border: none;
    margin-left: 3%;
    border-radius: 50px;
    display: inline-block;
    vertical-align: bottom;
    background: url("../../../assets/sousuo1.png") no-repeat;
    background-position: left;
    background-color: #D6C4C3;
    padding-left: 3%;
}
.video {
    margin-top: 8vh;
    height: 5vh;
    line-height: 5vh;
    font-size: smaller;
    border-bottom: 1px solid #ccc;
}
.tianjia{
    width: 3vh;
    height: 3vh;
    /* display: inline-block; */
    float: right;
    margin-top: 1vh;
    cursor: pointer;
}
.table {
    height: 40vh;
    /* background: yellow; */
    margin-top: 5vh;
    width: 100%;
    /* overflow: hidden; */
}

.kind{
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
}
.media{
    width: 30%;
    height: 20vh;
}
video.video1{
    width: 100%;
}
.page {
    text-align: center;
    margin-top: 3vh;
}
</style>