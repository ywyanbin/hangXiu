<template>
    <div class="Document">
        <div class="d-search">
            <span class="word">本地搜索</span>
            <input class="search" type="search">
        </div>
        <div class="document">
            <span>消息</span>
            <span class="tianjia"><img src="../../../assets/tianjia.png" width="100%"></span>
        </div>
        <div class="table" v-infinite-scroll="load" style="overflow:auto">
            <el-timeline>
                <el-timeline-item class="timeLine" hide-timestamp v-for="(item,index) in items" :key="index"
                  color="#D49399"  
                  placement="top">
                    <div class="row">
                        <div class="img-bg"><img :src="item.src" height="100%" alt></div>
                        <div class="content">
                            <p class="title">{{item.title}}</p>
                            <p class="time">创建日期:{{item.time}}</p>
                            <p class="author">创建人:{{item.author}}</p>
                        </div>
                        <div class="del"></div>
                    </div>
                </el-timeline-item>
            </el-timeline>
        </div>
    </div>
</template>

<script>
export default {
    name: 'document',
    data(){
        return{
            items:[
                {src:"static/img/gongtingxiu.png",title:"宫廷绣最后一位传人资料收集",time:"2019.8.01",author:"岁月静好"},
                {src:"static/img/cixiu.png",title:"杭州刺绣文化赏析",time:"2019.8.01",author:"岁月静好"},
                {src:"static/img/gongtingxiu.png",title:"宫廷绣最后一位传人资料收集",time:"2019.8.01",author:"岁月静好"},
                {src:"static/img/cixiu.png",title:"杭州刺绣文化赏析",time:"2019.8.01",author:"岁月静好"},
                {src:"static/img/gongtingxiu.png",title:"宫廷绣最后一位传人资料收集",time:"2019.8.01",author:"岁月静好"},
                // {src:"../../../../static/img/cixiu.png",title:"杭州刺绣文化赏析",time:"2019.8.01",author:"岁月静好"},
            ],
            count: 0
        }
    },
    methods:{
        load(){
            this.count += 2
        }
    }
}
</script>

<style scoped>
.Document{
    width: 80%;
    margin: 0 auto;
}
.d-search {
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
.document {
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
    height: 53vh;
    /* background: yellow; */
    margin-top: 3vh;
    width: 100%;
    /* overflow: hidden; */
}
.timeLine {
    height: 10vh;
    
    /* background: green; */
}
.row:hover{
    border: 1px solid #ccc;
    box-shadow: 0 0 5px #aaa;
}
.row {
    display: flex;
    height: 80%;
    cursor: pointer;
    /* background: pink; */
}
.img-bg {
    height: 100%;
    margin-right: 5%;
}
.content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: #897373;
}
p.title {
    font-size: 1em;
}
p.time, p.author{
    font-size: 0.7em;
}
.del{
    background: url("../../../assets/delete.png") no-repeat;
    height: 10vh;
    width: 5%;
    background-position: center;
    background-size: 50%;
    position: absolute;
    right: 0;
    cursor: pointer;
}
</style>