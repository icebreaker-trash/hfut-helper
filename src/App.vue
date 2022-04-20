<script setup lang="ts">
import { onHide, onLaunch, onShow } from '@dcloudio/uni-app'
import { courseList } from '@/_mock_/auth'
import { useCourseListStore } from '@/store/courseList.store'

const store = useCourseListStore()
onLaunch(() => {

})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
store.setCourse(courseList.result as any)
</script>

<template>
  <router-view />
</template>
<style>
@import "./wxComponents/vant/dist/common/index.wxss";
</style>
