<script setup lang="ts">
import { onHide, onLaunch, onShow } from '@dcloudio/uni-app'
import { courseList } from '@/_mock_/auth'

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
  <router-view />
</template>
<style>
@import "./wxComponents/vant/dist/common/index.wxss";
</style>
