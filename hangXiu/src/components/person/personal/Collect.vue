<template>
    <div class="Collect">
        <div class="c-search">
            <span class="word">本地搜索</span>
            <input class="search" type="search">
        </div>
        <div class="collect">
            <span>收藏</span>
            <span class="tianjia"><img src="../../../assets/tianjia.png" width="100%"></span>
        </div>
        <div class="table">
            <div class="kind">
                <div class="media" v-for="(picture,index) in PageLists" :key="index">
                    <img :src="picture.address" alt width="100%">
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
export default {
    name: 'collect',
    data(){
        return{
            pictures:[
                {address: "static/img/collect-1.jpg"},
                {address: "static/img/collect-2.jpg"},
                {address: "static/img/collect-3.jpg"},
                {address: "static/img/collect-4.jpg"},
                {address: "static/img/collect-5.jpg"},
                {address: "static/img/collect-6.jpg"},
                {address: "static/img/collect-7.jpg"},
                {address: "static/img/collect-8.jpg"}
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
            this.PageLists = this.pictures.slice((this.currentPage-1)*6,this.currentPage*6)
            console.log(`当前页: ${val}`);
        },
        initPageLists(){
            this.PageLists = this.pictures.slice(0,6)
        }
    },
    created(){
        this.totalCount = this.pictures.length
        this.initPageLists()   
    }
}
</script>

<style scoped>
.Collect{
    width: 80%;
    margin: 0 auto;
}
.c-search {
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
.collect {
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
.page {
    text-align: center;
    margin-top: 3vh;
}
</style>