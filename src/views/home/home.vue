<script lang='ts' setup>
import { useAsyncState } from '@vueuse/core'
import { computed } from 'vue'
import Header from './Header.vue'
import { getCourseListRequest } from '@/service/api/eam'
import Loading from '@/components/base/Loading.vue'
import DateCard from '@/views/home/date-card.vue'

const { state, isLoading } = useAsyncState(getCourseListRequest, {} as any)

const courseList = computed(() => (state.value as any).data?.result?.scheduleList)

</script>

<template>
  <view class="container">
    <Loading v-if="isLoading" />
    <template v-else>
      <Header />
      <DateCard />
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
