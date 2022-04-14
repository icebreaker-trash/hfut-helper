<script lang='ts' setup>
import { reactive } from 'vue'
import * as _ from 'lodash'
import Notify from '@vant/weapp/dist/notify/notify'
import Toast from '@vant/weapp/dist/toast/toast'
import img from '@/views/login/img.png'
import BaseButton from '@/components/base/BaseButton.vue'
import Tip from '@/components/base/Tip.vue'
import { requestConfig } from '@/shared/config/request'

const form = reactive({
  username: '',
  password: '',
})

// 考虑到小程序功能没有多少表单验证，所以没必要装插件，直接手撸吧
function validate() {
  const username = form.username

  const validateUsername = () => {
    if (_.isNaN(_.toNumber(username))) {
      return
    }
    if (username.length !== 10) {
      return
    }
    if (!username.startsWith('20')) {
      return
    }

    return true
  }

  const validatePwd = () => {
    const pwd = form.password
    if (pwd.length < 13) {
      return
    }
    return true
  }

  const isValidate = {
    username: validateUsername(),
    pwd: validatePwd(),
  }
  if (!isValidate.username) {
    Notify({ type: 'danger', message: '学号格式错误' })
    return
  }

  if (!isValidate.pwd) {
    Notify({ type: 'danger', message: '密码格式错误，信息门户的密码至少是13位字符' })
    return
  }

  return true
}

function onLogin() {
  if (validate()) {
    Toast.loading({
      duration: 0,
      message: '第一次登录会花些时间，请耐心等待...\n(๑•̀ㅂ•́)و✧',
      forbidClick: true,
    })
    uni.request({
      url: `${requestConfig.baseURL}login?username=${form.username}&password=${form.password}`,
      method: 'GET',
      success(res) {
        if (res.statusCode !== 200) {
          Toast.fail({
            forbidClick: true,
            duration: 3000,
            message: `Σ(｀д′*ノ)ノ\n${(res.data as any).msg}`,
          })
        } else {
          Toast.success({
            duration: 3000,
            message: '<(￣︶￣)>\n登录成功',
          })
        }
      },
      fail(res) {
        Toast.fail({
          duration: 3000,
          message: '.....((/- -)/\n登录失败了...',
        })
      },
    })
  }
}

</script>

<template>
  <van-toast id="van-toast" />
  <van-notify id="van-notify" />
  <view class="login-page">
    <view class="login-page-header">
      <img class="logo" :src="img">
    </view>

    <div class="tip">
      <Tip :type="'info'" :content="'忘记密码的话可以去信息门户重置一下噢'" />
    </div>
    <view class="form">
      <div class="username">
        <van-field
          clearable
          type="number"
          left-icon="user-circle-o"
          placeholder="请输入学号"
          :values="form.username"
          @change="(e) => form.username = e.detail"
        />
      </div>

      <div class="password">
        <van-field
          type="password"
          left-icon="shield-o"
          placeholder="请输入信息门户密码"
          @change="(e) => form.password = e.detail"
        />
      </div>

      <view class="login-btn" @click="onLogin">
        <BaseButton />
      </view>
    </view>
  </view>
</template>

<style lang='scss' scoped>
.tip {
  margin-left: -15vw;
}
.login-page {
  width: 95vw;
  margin-left: 2.5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo {
    object-fit: cover;
  }

  .form {
    margin-top: 10px;
    width: 100%;
    .password {
      margin-top: 15px;
    }
    .login-btn {
      margin-top: 30px;
    }
  }
}

</style>
