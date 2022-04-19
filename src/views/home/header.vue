<script lang='ts' setup>
import { computed, ref } from 'vue'
import { format } from 'date-fns'
import { activeWeekIdx, currentDayIdx, currentWeek } from '@/shared/constant'

const activeIdx = ref(currentDayIdx)

const weekdays = computed(() => currentWeek.map((day, idx) => ({
  weekday: `${format(day, 'E')}.`,
  day: format(day, 'd'),
  active: activeIdx.value === idx,
  idx,
}),
))

function handleActiveChange(idx: number) {
  activeIdx.value = idx
}
</script>

<template>
  <view class="header">
    <view class="select">
      <van-icon name="arrow-left" class="text-slate" />
      <view>第{{ activeWeekIdx + 1 }}周</view>
      <van-icon name="arrow" class="text-slate" />
    </view>
    <view class="card-container">
      <view
        v-for="card in weekdays"
        :key="card.weekday"
        :class="`card flex flex-col text-slate ${card.active?'card-active' : ''}`"
        @click="handleActiveChange(card.idx)"
      >
        <view style="font-size: 12px;text-align: center">
          {{ card.weekday }}
        </view>
        <view class="mt-1" style="font-size: 13px;text-align: center">
          {{ card.day }}
        </view>
      </view>
    </view>
  </view>
</template>

<style lang='scss' scoped>
.header {
  .select {
    display: flex;
    justify-content: space-between;
  }
}
.card-container {
  position: relative;
  display: flex;
  margin-top: 10px;
  .card {
    flex: 1;
    border-radius: 5px;
    padding: 15px 0;
    transition: all 200ms linear;
  }
}

.card-active {
  background-color: rgba(66,104,234,1);
  color: #fff;
  box-shadow: rgb(32 101 209 / 40%) 0px 8px 16px 0px;
}
</style>
