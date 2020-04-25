<!--<template>
    <div class="registerUser">
        <div class="register">
            <img class="yonghu" src="../../assets/youxiang.png" alt>
            <el-form :model="ruleForm" ref="ruleForm" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" class="input_U" placeholder="电子邮箱" clearable></el-input>
  				</el-form-item>
                <el-form-item prop="pass">
                    <el-input v-model="ruleForm.pass" class="input_P" type="password" placeholder="设置密码" autocomplete="off" clearable></el-input>
                </el-form-item>
                <el-form-item class="pc_in">
                    <div class="kuang">
                        <span class="g_hx"></span>
                        <span class="g_hx"></span>
                        <span class="g_hx"></span>
                        <span class="g_hx"></span>
                    </div>
                    <div class="input_num">
                        <input class="yanzhengma" type="text" maxlength="4">
                        <button class="btn_yzm">获取验证码</button>
                    </div>
                </el-form-item>
                <el-form-item class="btns">
  				    <el-button class="btn_L" @click="LoginIn">登录</el-button>
                    <el-button class="btn_R">注册</el-button>
  				</el-form-item>
            </el-form>
        </div>
        <div class="left" @click="Changeway">
            <img src="../../assets/left.png" width="100%" alt/>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            ruleForm:{
                username: '',
                pass: ''
            }
        }
    },
    methods:{
        LoginIn(){
            this.$router.push({path:'/person'})
        },
        Changeway(){
            this.$router.push({path:'/registerphone'})
        }
    }
}
</script>
<style scoped>
.registerPhone{
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

.register {
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
}

.kuang {
    width: 50%;
    height: 5vh;
    display: flex;
}
span.g_hx {
    height: 5vh;
    width: 25%;
    flex: 1;
    border: 1px solid #e6e8ed;
}
.input_num {
    width: 100%;
    height: 5vh;
    position: absolute;
    left: 0;
    top: -3px;
    /* margin-top: -1vh; */
    /* overflow: hidden; */
}
input.yanzhengma {
    width: 62%;
    height: 5vh;
    background: none;
    border: none;
    outline: none;
    text-indent: 8%;
    color: #fff;
    letter-spacing: 1.6rem;
    overflow: hidden;
}
button.btn_yzm {
    width: 32%;
    height: 5vh;
    border: none;
    background-color: #715D56;
    border-radius: 30px;
    color: #fff;
    font-size: smaller;
    outline: none;
}
</style>-->

<template>
    <div class="registerUser">
        <div class="register">
            <el-form class="form" :model="ruleForm" ref="ruleForm" autocomplete="off">
                <el-form-item prop="username">
                    <input class="input1" v-model="ruleForm.username" name="username" type="text" placeholder="用户注册">
                </el-form-item>
                <el-form-item prop="password">
                    <input class="input1" v-model="ruleForm.password" name="password" type="password" autocomplete="off">
                </el-form-item>
                <el-form-item class="btn">
                    <input type="button" class="reginter1" value="注册" @click="submitForm('ruleForm')">
                    <!-- <input type="button" class="login_in" @click="submitForm('ruleForm')" value="登录"> -->
                </el-form-item>
            </el-form>
        </div>
        <!-- <div class="right" @click="Changeway">
            <img src="../../assets/right.png" width="100%" alt/>
        </div> -->
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
                    this.GotoReginter();
                } else {
                    console.log('error submit!!');
                    return false;
                }
            })
        },
        Changeway(){
            this.$router.push({path:'/loginphone'})
        },
        GotoReginter(){
            let data = {
                username: this.ruleForm.username,
                password: this.ruleForm.password,
                gender: '1',
                email: '1296839106@qq.com',
                phone: '17857324380'
            }
            axios.post('/user/reg',data).then((res) => {
                console.log(res);
                if(res.data == "注册成功"){
                    alert(res.data);
                    this.$router.push({path:'/loginuser'})
                }else{
                    alert(res.data);
                }
                
            }).catch((err) => {
                console.log(err);
            })
        }
    }
}
</script>

<style scoped>
.registerUser{
    position: relative;
}
.register{
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
input.reginter1 {
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


