<!--<template>
    <div class="loginMessage">
        <div class="loginIn">
            <img class="yonghu" src="../../assets/youxiang.png" alt>
            <el-form :model="ruleForm" ref="ruleForm" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" class="input_U" placeholder="用户名/邮箱" clearable></el-input>
  				</el-form-item>
                <el-form-item prop="pass">
                    <el-input v-model="ruleForm.password" class="input_P" type="password" placeholder="验证码" autocomplete="off" clearable></el-input>
                </el-form-item>
                <el-form-item class="btns">
  				    <el-button class="btn_L" @click="submitForm('ruleForm')">登录</el-button>
                    <el-button class="btn_R">注册</el-button>
  				</el-form-item>
            </el-form>
        </div>
        <div class="left" @click="TurnTo">
            <img src="../../assets/left.png" width="100%" alt/>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'loginmessage',
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
            axios.post('/user/login/mail',data).then((response) => {
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
        TurnTo(){
            this.$router.push({path:'/loginphone'})
        }
    }
}
</script>
<style scoped>-->
.loginMessage{
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
.left {
    width: 2%;
    position: absolute;
    left: 1%;
    top: 50%;
    cursor: pointer;
}
</style>

<template>
    <div class="loginPhone">
        <div class="loginIn">
            <el-form class="form" :model="ruleForm" ref="ruleForm" autocomplete="off">
                <el-form-item prop="username">
                    <input class="input1" v-model="ruleForm.username" name="username" type="text" placeholder="手机登录">
                </el-form-item>
                <el-form-item prop="password" class="pass_id">
                    <input class="input1" v-model="ruleForm.password" name="password" type="password" autocomplete="off" maxlength="6">
                    <div class="getId" @click="getId()">获取验证码</div>
                </el-form-item>
                
                <el-form-item class="btn">
                    <input type="button" @click="submitForm('ruleForm')" class="login_in" value="登录">
                    <input type="button" class="reginter" value="注册" @click="GotoReginter()">
                </el-form-item>
            </el-form>
        </div>
        <div class="left" @click="TurnTo">
            <img src="../../assets/left.png" width="100%" alt/>
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
        getId () {
            let data = {
                norph : this.ruleForm.username,
            }
            axios.post('/user/login/phone',data).then((response) => {
                if(response.status == 200) {
                    alert("验证码已发送");
                }
            }).catch((error) => {
                console.log(error)
            }) 
        },
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
                norph: this.ruleForm.username,
                code: this.ruleForm.password
            };
            axios.post("/user/login/phone/check",data).then((res) => {
                //console.log(res);
                if(res.status == 200) {
                    alert("登录成功")
                    this.$router.push({path:'/person'})
                }
            }).catch((err) => {
                console.log(err)
            })
        },
        TurnTo(){
            this.$router.push({path:'/loginuser'})
        },
        GotoReginter(){
            this.$router.push({path:'/registeruser'})
        }
    }
}
</script>

<style scoped>
.loginPhone{
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
    background-image: url("../../assets/yanzhengma3.png");
    background-repeat: no-repeat;  
    background-size: 12%; 
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
.left {
    width: 2%;
    position: absolute;
    left: 1%;
    top: 50%;
    cursor: pointer;
}
.pass_id {
    position: relative;
}
.getId {
    position: absolute;
    left: 51%;
    top: 20%;
    height: 4vh;
    color: #9F855A;
    border-left: 1px solid #E2B675;
    line-height: 4vh;
    width: 15%;
    font-size: 0.8em;
    border-bottom-right-radius: 25px;
    border-top-right-radius: 25px;
    cursor: pointer;
}
.getId:hover{
    background-color: #47413E;
    color: #fff;
}
</style>