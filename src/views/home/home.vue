<script lang='ts' setup>
import { onLoad } from '@dcloudio/uni-app'
import { useAsync } from '@/hooks/use-async'
import { getCourseListRequest } from '@/service/api/eam'

onLoad(async() => {
  console.log('launch')
  const { state, error } = await useAsync(getCourseListRequest)
  if (state.value) {
    console.log(state.value)
  }
})
</script>

<template>
  <view>hello home</view>
</template>

 <style lang='scss' scoped>

</style>
