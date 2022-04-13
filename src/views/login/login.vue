<script lang='ts' setup>
import { reactive } from 'vue'
import img from '@/views/login/img.png'
import BaseButton from '@/components/base/BaseButton.vue'
import Tip from '@/components/base/Tip.vue'
import { requestConfig } from '@/shared/config/request'

const form = reactive({
  username: '',
  password: '',
})

function onLogin() {
  uni.request({
    url: `${requestConfig.baseURL}login?username=${form.username}&password=${form.password}`,
    method: 'GET',
    success(res) {
      console.log(res)
    },
  })
}

</script>

<template>
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
          left-icon="user-circle-o"
          placeholder="请输入学号"
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
