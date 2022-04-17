<script lang='ts' setup>
interface Props {
  content: string
  loading: boolean
}

const props = withDefaults(defineProps<Props>(), {
  content: '加载中',
  loading: true,
})

</script>

<template>
  <view v-if="props.loading">
    <van-loading vertical color="#1989fa">
      {{ props.content }}
    </van-loading>
  </view>
</template>

<style lang='scss' scoped>

</style>
