<script lang='ts' setup>
import { useAsyncState } from '@vueuse/core'

import { computed } from 'vue'
import { getCourseListRequest } from '@/service/api/eam'
import Loading from '@/components/base/Loading.vue'

const { state, isLoading } = useAsyncState(getCourseListRequest, {} as any)

const courseList = computed(() => (state.value as any).scheduleList)

console.log(courseList.value)
</script>

<template>
  <view v-for="course in courseList">
    {{ course.personName }}
  </view>
  <view class="container">
    <Loading :loading="isLoading" />
  </view>
</template>

<style scoped>

</style>
