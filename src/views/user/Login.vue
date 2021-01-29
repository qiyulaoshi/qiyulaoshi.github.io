<template>
  <div class="main">
    <a-form
      id="formLogin"
      class="user-layout-login"
      ref="formLogin"
      :form="form"
      @submit="handleSubmit"
    >
      <a-form-item>
        <a-input
          size="large"
          type="text"
          placeholder="用户名"
          v-decorator="[
                'username',
                {rules: [{ required: true, message: '请输入用户名' },], validateTrigger: 'change'}
              ]"
        >
          <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }" />
        </a-input>
      </a-form-item>

      <a-form-item>
        <a-input-password
          size="large"
          placeholder="密码"
          v-decorator="[
                'password',
                {rules: [{ required: true, message: '请输入密码' }], validateTrigger: 'blur'}
              ]"
        >
          <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }" />
        </a-input-password>
      </a-form-item>

      <a-form-item style="margin-top:24px">
        <a-button
          size="large"
          type="primary"
          htmlType="submit"
          class="login-button"
          :loading="state.loginBtn"
          :disabled="state.loginBtn"
        >确定</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import md5 from 'md5'
import TwoStepCaptcha from '@/components/tools/TwoStepCaptcha'
import { mapActions } from 'vuex'
import { timeFix, setCookie } from '@/utils/util'
import { getSmsCaptcha, get2step } from '@/api/login'

export default {
  components: {
    TwoStepCaptcha
  },
  data() {
    return {
      customActiveKey: 'tab1',
      loginBtn: false,
      // login type: 0 email, 1 username, 2 telephone
      loginType: 0,
      isLoginError: false,
      requiredTwoStepCaptcha: false,
      stepCaptchaVisible: false,
      form: this.$form.createForm(this),
      state: {
        time: 60,
        loginBtn: false,
        // login type: 0 email, 1 username, 2 telephone
        loginType: 0,
        smsSendBtn: false
      }
    }
  },
  created() {},
  methods: {
    ...mapActions(['Login', 'Logout']),
    // handler
    handleTabClick(key) {
      this.customActiveKey = key
      // this.form.resetFields()
    },
    handleSubmit(e) {
      e.preventDefault()
      const {
        form: { validateFields },
        state,
        customActiveKey,
        Login
      } = this

      state.loginBtn = true

      const validateFieldsKey = ['username', 'password']

      validateFields(validateFieldsKey, { force: true }, (err, values) => {
        if (!err) {
          // console.log('login form', values)
          const loginParams = { ...values }
          // loginParams['username'] = values.username
          loginParams.password = md5(values.password)
          console.log(loginParams.password)
          if (loginParams['username'] == 'ljh' && loginParams.password == '67f87c9b32834504b4ddf432055d88bd') {
            setCookie('wc', loginParams.password)
            Login(loginParams)
            this.loginSuccess()
          } else if (loginParams['username'] == 'zzy' && loginParams.password == 'c53001d04a23cf3376f85d56ef4d4b6f') {
            setCookie('wc', loginParams.password)
            Login(loginParams)
            this.loginSuccess()
          } else {
            this.requestFailed(err || '')
            state.loginBtn = false
          }
        } else {
          setTimeout(() => {
            state.loginBtn = false
          }, 600)
        }
      })
    },
    loginSuccess(res) {
      this.$router.push({ path: '/' })
      // 延迟 1 秒显示欢迎信息
      setTimeout(() => {
        this.$notification.success({
          message: '欢迎',
          description: `${timeFix()}，欢迎回来`
        })
      }, 1000)
      this.isLoginError = false
    },
    requestFailed(err) {
      this.isLoginError = false
      this.$notification['error']({
        message: '错误',
        description: ((err.response || {}).data || {}).message || '账号或密码错误，请重新输入',
        duration: 4
      })
    }
  }
}
</script>

<style lang="less" scoped>
.user-layout-login {
  position: absolute;
  right: 10%;
  bottom: 50%;
  label {
    font-size: 14px;
  }

  .getCaptcha {
    display: block;
    width: 100%;
    height: 40px;
  }

  .forge-password {
    font-size: 14px;
  }

  button.login-button {
    padding: 0 15px;
    font-size: 16px;
    height: 40px;
    width: 100%;
  }

  .user-login-other {
    text-align: left;
    margin-top: 24px;
    line-height: 22px;

    .item-icon {
      font-size: 24px;
      color: rgba(0, 0, 0, 0.2);
      margin-left: 16px;
      vertical-align: middle;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #1890ff;
      }
    }

    .register {
      float: right;
    }
  }
}
</style>
