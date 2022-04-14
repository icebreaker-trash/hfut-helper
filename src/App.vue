<script setup lang="ts">
import { onHide, onLaunch, onShow } from '@dcloudio/uni-app'
import Toast from '@vant/weapp/dist/toast/toast'

onLaunch(() => {

})
onShow(() => {

})
onHide(() => {
  console.log('App Hide')
})
</script>

<template>
  <van-toast id="van-toast" />
</template>
<style>
@import "./wxComponents/vant/dist/common/index.wxss";
</style>
