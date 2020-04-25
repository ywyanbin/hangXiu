<template>
    <div class="Message">
        <div class="m-search">
            <span class="word">本地搜索</span>
            <input class="search" type="search">
        </div>
        <div class="message">
            <span>消息</span>
            <span class="tianjia"><img src="../../../assets/tianjia.png" width="100%"></span>
        </div>
        <div class="table">
            <div class="kind">
                <div class="media" v-for="(picture,index) in PageLists" :key="index">
                    <div class="imgs">
                        <img class="youjian" src="../../../assets/youjian.png" alt width="8%">
                        <img class="pic" :src="picture.address" alt height="100%">
                        <img class="geren" src="../../../assets/geren.png" alt width="8%">
                    </div>
                    <p class="yonghu">{{picture.rank}}</p>
                    <p class="answer">{{picture.comment}}</p>
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
    name: 'message',
    data(){
        return{
            pictures:[
                {address: "static/img/message-1.png",rank:"成员",comment:"她回复评论了你的评论"},
                {address: "static/img/message-2.png",rank:"成员",comment:"她回复评论了你的评论"},
                {address: "static/img/message-3.png",rank:"成员",comment:"you are a fancy boy"},
                {address: "static/img/message-4.png",rank:"成员",comment:"她回复评论了你的评论"},
                {address: "static/img/message-5.png",rank:"成员",comment:"呵呵"},
                {address: "static/img/message-6.png",rank:"成员",comment:"hello my dear"},
                {address: "static/img/message-7.png",rank:"成员",comment:"她回复评论了你的评论"}
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
.Message{
    width: 80%;
    margin: 0 auto;
}
.m-search {
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
.message {
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
    height: 18vh;
    background-color: #FFF2F2;
    box-shadow: 0 0 10px #aaaaaa;
    background: url("../../../assets/zhuangshi.png") no-repeat;
    margin-bottom: 3vh;
}
.imgs {
    height: 45%;
    /* background: yellow; */
    text-align: center;
    margin-top: 5%;
}
.youjian,.geren{
    cursor: pointer;
}
p.yonghu {
    text-align: center;
    height: 10%;
    font-size: 0.6em;
    background-color: #EEDEDB;
    width: 20%;
    margin: 0 auto;
    border-radius: 10px;
    margin-top: 5%;
}
p.answer {
    text-align: center;
    font-size: 0.7em;
    height: 20%;
    width: 80%;
    margin: 0 auto;
    margin-top: 5%;
}
.page {
    text-align: center;
    margin-top: 3vh;
}

</style>