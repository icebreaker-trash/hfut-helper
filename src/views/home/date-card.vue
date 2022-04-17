<script lang='ts' setup>
import { reactive } from 'vue'

const cards = reactive([
  {
    day: 17,
    weekday: 'Sun.',
  },
  {
    day: 18,
    weekday: 'Mon.',
  },
  {
    day: 19,
    weekday: 'Tue.',
  },
  {
    day: 20,
    weekday: 'Wed.',
    active: true,
  },
  {
    day: 21,
    weekday: 'Thu.',
  },
  {
    day: 22,
    weekday: 'Fri.',
  },
  {
    day: 23,
    weekday: 'Sat.',
  },
])
</script>

<template>
  <view class="card-container">
    <view
      v-for="card in cards"
      :key="card.weekday"
      :class="`card flex flex-col text-slate ${card.active?'card-active' : ''}`"
    >
      <view style="font-size: 12px;text-align: center">
        {{ card.weekday }}
      </view>
      <view class="mt-1" style="font-size: 13px;text-align: center">
        {{ card.day }}
      </view>
    </view>
  </view>
</template>

<style lang='scss' scoped>
.card-container {
  position: relative;
  display: flex;
  margin-top: 10px;
  .card {
    flex: 1;
    border-radius: 5px;
    padding: 15px 0;
  }
}

.card-active {
  background-color: #4268EA;
  color: #fff;
  box-shadow: rgb(32 101 209 / 30%) 0px 8px 16px 0px;
}
</style>
