<template>
    <div class="registerPhone">
        <div class="register">
            <img class="yonghu" src="../../assets/yonghu.png" alt>
            <el-form :model="ruleForm" ref="ruleForm" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" class="input_U" placeholder="手机号码" clearable></el-input>
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
        <div class="right" @click="Changeway">
            <img src="../../assets/right.png" width="100%" alt/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'loginphone',
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
            this.$router.push({path:'/registermessage'})
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
.right {
    width: 2%;
    position: absolute;
    right: 1%;
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
</style>