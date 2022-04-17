<script setup lang="ts">
import { onHide, onLaunch, onShow } from '@dcloudio/uni-app'

onLaunch(() => {

})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>

<template>
  <view>114514</view>
  <router-view />
</template>
<style>
@import "./wxComponents/vant/dist/common/index.wxss";
</style>
