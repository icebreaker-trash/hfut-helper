<script lang='ts' setup>
import { storeToRefs } from 'pinia'
import IconButton from '@/components/base/IconButton.vue'
import { useCourseListStore } from '@/store/courseList.store'

const store = useCourseListStore()

const { visibleWeekIdx, weekdays } = storeToRefs(store)

function onPrev() {
  if (visibleWeekIdx.value === 0) {
    store.setVisibleWeekIdx(19)
  } else {
    store.setVisibleWeekIdx(visibleWeekIdx.value - 1)
  }
}

function onNext() {
  if (visibleWeekIdx.value === 19) {
    store.setVisibleWeekIdx(0)
  } else {
    store.setVisibleWeekIdx(visibleWeekIdx.value + 1)
  }
}

function handleActiveChange(idx: number) {
  store.setVisibleDayIdx(idx)
}
</script>

<template>
  <view class="header">
    <view class="select">
      <IconButton @click="onPrev">
        <van-icon name="arrow-left" class="text-slate" />
      </IconButton>
      <view class="flex items-center">
        第{{ visibleWeekIdx + 1 }}周
      </view>
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
.course-list-cards {
  .card {
    width: 100%;
    padding: 20px;
    box-shadow:rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px;
  }
}
</style>
