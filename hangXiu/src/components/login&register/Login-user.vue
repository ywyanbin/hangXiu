<!-- <template>
    <div class="loginPhone">
        <div class="loginIn">
            <img class="yonghu" src="../../assets/yonghu.png" alt>
            <el-form :model="ruleForm" ref="ruleForm" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input name="username" v-model="ruleForm.username" class="input_U" placeholder="用户名" clearable></el-input>
  				</el-form-item>
                <el-form-item prop="pass">
                    <el-input name="password" v-model="ruleForm.password" class="input_P" type="password" placeholder="密码" autocomplete="off" clearable></el-input>
                </el-form-item>
                <el-form-item class="btns">
  				    <el-button class="btn_L" @click="submitForm('ruleForm')">登录</el-button>
                    <el-button class="btn_R" @click="Register">注册</el-button>
  				</el-form-item>
            </el-form>
        </div>
        <div class="right" @click="Changeway">
            <img src="../../assets/right.png" width="100%" alt/>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'loginphone',
    data(){
        return{
            ruleForm:{
                username: '',
                password: ''
            }
        }
    },
    methods:{
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    // alert('submit!');
                    this.LoginIn();
                } else {
                    console.log('error submit!!');
                    return false;
                }
            })
        },

        LoginIn(){
            let data = {
                username: this.ruleForm.username,
                password: this.ruleForm.password
            }
            axios.post('/user/login',data).then((response) => {
                console.log(response.data)
                if(response.data == "登陆成功"){
                    // console.log(response.data)
                    alert(response.data)
                    this.$router.push({path:'/person'})
                }else{
                    alert(response.data)
                }
                
            }).catch((error) => {
                console.log(error)
            })      
        },
        Register(){
            this.$router.push({path:'/registerphone'})
        },
        Changeway(){
            this.$router.push({path:'/loginmessage'})
        }
    }
}
</script>
<style scoped>
.loginPhone{
    background: url("../../assets/loginIn-bg.png") no-repeat;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    background-size:cover;
}
.yonghu{
    width: 50%;
    margin: 0 auto;
    display: block;
    margin-bottom: 2vh;
}

.loginIn {
    width: 20%;
    margin: 20vh auto;
    height: 50vh;
}
.btns{
    text-align: center;
}
.btn_R{
    border: none;
    background: none;
    color: #CECBCB;
}
.btn_L {
    border: none;
    background: none;
    color: #CECBCB;
    margin-right: 20%;
}
.right {
    width: 2%;
    position: absolute;
    right: 1%;
    top: 50%;
}
</style>
-->


<template>
    <div class="loginUser">
        <div class="loginIn">
            <el-form class="form" :model="ruleForm" ref="ruleForm" autocomplete="off">
                <el-form-item prop="username"><input class="input1" v-model="ruleForm.username" name="username" type="text" placeholder="用户登录"></el-form-item>
                <el-form-item prop="password"><input class="input1" v-model="ruleForm.password" name="password" type="password" autocomplete="off"></el-form-item>
                <el-form-item class="btn">
                    <input type="button" class="login_in" @click="submitForm('ruleForm')" value="登录">
                    <input type="button" class="reginter" value="注册" @click="GotoReginter()">
                </el-form-item>
            </el-form>
        </div>
        <div class="right" @click="Changeway">
            <img src="../../assets/right.png" width="100%" alt/>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            ruleForm:{
                username: '',
                password: ''
            }
        }
    },
    methods:{
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    // alert('submit!');
                    this.LoginIn();
                } else {
                    console.log('error submit!!');
                    return false;
                }
            })
        },
        LoginIn(){
            let data = {
                username: this.ruleForm.username,
                password: this.ruleForm.password
            }
            axios.post('/user/login',data).then((response) => {
                console.log(response.data)
                if(response.data == "登陆成功"){
                    // console.log(response.data)
                    alert(response.data)
                    this.$router.push({path:'/person'})
                }else{
                    alert(response.data + "请重新输入账号密码")
                }
            }).catch((error) => {
                console.log(error)
            })      
        },
        Changeway(){
            this.$router.push({path:'/loginphone'})
        },
        GotoReginter(){
            this.$router.push({path:'/registeruser'})
        }
    }
}
</script>

<style scoped>
.loginUser{
    position: relative;
}
.loginIn{
    background: url("../../assets/login.png") no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
}
form.form {
    width: 50%;
    margin: 0 auto;
    text-align: center;
    padding-top: 50vh;
}
/* .form p{
    margin: 3vh 0;
} */
input.input1{
    width: 25%;
    height: 5vh;
    background-color: #47413E;
    border-radius: 25px;
    padding-left: 8%;
    letter-spacing: 0.1em;
}
input[type="text"] {  
    background-position: 5%;
    background-image: url("../../assets/ren.png");
    background-repeat: no-repeat;  
    background-size: contain; 
}
input[type="password"] {
    background-position: 5%;
    background-image: url("../../assets/yaosi.png");
    background-repeat: no-repeat;  
    background-size: contain; 
}
.btn {
    width: 50%;
    margin: 0 auto;
    /* display: flex;
    justify-content: space-between; */
}
/* button{
    width: 45%;
    padding: 5px;
    color: #9F855A;
    background-color: #47413E;
    border-radius: 20px; 
    font-size: 0.8em;
    cursor: pointer;
}
button.login_in {
    margin-left: -15%;
}
button.reginter {
    margin-right: -15%;
} */
input.login_in {
    width: 25%;
    padding: 5px;
    color: #9F855A;
    background-color: #47413E;
    border-radius: 20px;
    font-size: 0.8em;
    cursor: pointer;
    margin-right: 7%;
}
input.reginter {
    width: 25%;
    padding: 5px;
    color: #9F855A;
    background-color: #47413E;
    border-radius: 20px;
    font-size: 0.8em;
    cursor: pointer;
}
.right {
    width: 2%;
    position: absolute;
    right: 1%;
    top: 50%;
    cursor: pointer;
}
</style>