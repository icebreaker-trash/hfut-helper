<script lang='ts' setup>
import { computed, ref } from 'vue'
import { format } from 'date-fns'
import { activeWeekIdx, buildWeek, currentDayIdx } from '@/shared/constant'
import { useStorage } from '@/hooks/use-storage'
import IconButton from '@/components/base/IconButton.vue'

const visibleDayIdx = ref(currentDayIdx)
const visibleWeekIdx = ref(activeWeekIdx)
const visibleWeek = computed(() => buildWeek(visibleWeekIdx.value))

const weekdays = computed(() => visibleWeek.value.map((day, idx) => ({
  weekday: `${format(day, 'E')}.`,
  day: format(day, 'd'),
  date: day,
  active: visibleDayIdx.value === idx,
  idx,
}),
))

const courseList = useStorage('courseList', [])

function onPrev() {
  if (visibleWeekIdx.value === 0) {
    visibleWeekIdx.value = 19
  } else {
    visibleWeekIdx.value -= 1
  }
}

function onNext() {
  if (visibleWeekIdx.value === 19) {
    visibleWeekIdx.value = 0
  } else {
    visibleWeekIdx.value += 1
  }
}

function handleActiveChange(idx: number) {
  visibleDayIdx.value = idx
}
</script>

<template>
  <view class="header">
    <view class="select">
      <IconButton @click="onPrev">
        <van-icon name="arrow-left" class="text-slate" />
      </IconButton>
      <view>第{{ visibleWeekIdx + 1 }}周</view>
      <IconButton @click="onNext">
        <van-icon name="arrow" class="text-slate" />
      </IconButton>
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
