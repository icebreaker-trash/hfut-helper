<script lang='ts' setup>
import { useAsyncState } from '@vueuse/core'
import { computed, watchEffect } from 'vue'
import Header from './Header.vue'
import { getCourseListRequest } from '@/service/api/eam'
import Loading from '@/components/base/Loading.vue'
import { useStorage } from '@/hooks/use-storage'

const { state, isLoading, isReady } = useAsyncState(getCourseListRequest, {} as any)

const courseList = computed(() => (state.value as any).data?.result)

watchEffect(() => {
  if (isReady.value) {
    const data = formatCourseList(courseList.value)
    useStorage('courseList', data)
  }
})

function formatCourseList(data: any) {
}

</script>

<template>
  <view class="container">
    <template>
      <Header />
    </template>
  </view>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 95vw;
  margin-left: 2.5vw;
}
</style>
