<template>
  <div class="login">
    <p class="title">登陆</p>
    <div class="wrapper">
      <el-form ref="loginForm" status-icon v-model="login" :rules="rules">
        <el-form-item label="用户名" prop="userName">
          <el-input type="text" v-model="login.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="login.password"></el-input>
        </el-form-item>
        <el-form-item class="code-form-item">
        <el-col :span="8">
          <el-form-item label="验证码" prop="code">
            <el-input type="text" v-model="login.code"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" :offset="1">
          <img :src="src" alt="verify code" class="verify-code" @click="changeCode">
        </el-col>
        <el-col :span="8" :offset="1">
          <p>看不清请点击前面的验证码</p>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :disabled="!login.userName || !login.password || !login.code">登陆</el-button>
        </el-form-item>
      </el-form>
      <div class="link-area">
        <router-link to="/">注册</router-link>
        <router-link to="/">忘记密码</router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import {checkRequired} from '@/util/formVerify'
  export default {
    name: 'Login',
    data () {
      return {
        baseUrl: 'http://104.224.174.20:8080',
        login: {
          userName: '',
          password: '',
          code: ''
        },
        rules: {
          userName: [
            {validator: checkRequired, trigger: 'blur'}
          ],
          password: [
            {validator: checkRequired, trigger: 'blur'},
            {max: 16, min: 8, message: '请输入长度为8-16的密码', trigger: 'blur'}
          ],
          code: [
            {validator: checkRequired, trigger: 'blur'}
          ]
        }
      }
    },
    computed: {
      src () {
        return this.baseUrl + '/getVerifyCode'
      }
    },
    methods: {
      changeCode () {
        this.src = this.src + '?' + Math.random
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "../assets/stylesheet/style";

  .login {
    width: 100%;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .wrapper {
      width: 550px;
      margin: 0 auto;
    }
    .el-form {
      padding: 40px 30px;
      background-color: map_get($global-color-base, background);
      box-shadow: 1.3px 1.5px 2.9px 0.1px rgba(68, 68, 68, .3);
      border: 1px solid #dcdddd;
      .code-form-item{
        >.el-form-item__content{
          display: flex;
          align-items: center;
        }
      }
    }
    .verify-code{
      width: 100%;
    }
    .link-area {
      width: 100%;
      padding: 30px;
      display: flex;
      justify-content: space-between;
      a {
        &:hover {
          color: map_get($global-color-base, primary);
          text-decoration: underline;
        }
      }
    }
  }
</style>
