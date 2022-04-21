<script lang='ts' setup>
import { computed, reactive, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useCourseListStore } from '@/store/courseList.store'
import { getTeacherName } from '@/shared/utils'

const store = useCourseListStore()

const { visibleDayIdx, currentWeekCourse } = storeToRefs(store)

const cardsColor = reactive([
  'bg-indigo-500 shadow-indigo-100',
  'bg-cyan-500 shadow-blue-100',
  'green shadow-green-100',
  'bg-cyan-500 shadow-cyan-100',
  'bg-amber-500 shadow-amber-100',
])

const visibleCourseList = computed(() => currentWeekCourse.value[visibleDayIdx.value])
watch(visibleCourseList, (val) => {
  console.log(currentWeekCourse.value)
})
</script>

<template>
  <view class="course-list-cards">
    <view
      v-for="(item, idx) in visibleCourseList"
      :key="item.lessonDetail.id"
      :class="`flex gap-3 card text-white shadow-lg p-5 height-[70px] rounded-lg ${cardsColor[idx]}`"
    >
      <view class="w-1 rounded-lg bg-white" />
      <view class="flex flex-col gap-2 w-full">
        <view class="header">
          <view class="time">
            {{ item.startTime }} - {{ item.endTime }}
          </view>
          <view class="teacherName">
            {{ getTeacherName(item.teachers) }}
          </view>
        </view>
        <view class="courseName">
          {{ item.lessonDetail.courseName }}
        </view>
        <view class="roomName">
          {{ item.room.nameZh }}
        </view>
      </view>
    </view>
  </view>
</template>

<style lang='scss' scoped>
.green {
  @apply bg-[#0BBE9D];
}

.course-list-cards {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .card {
    .header {
      display: flex;
      justify-content: space-between;
      .teacherName {
        font-size: 13px;
      }
    }
    .courseName {
      font-weight: bold;
    }
    .roomName {
      font-size: 12px;
    }
  }
}
</style>
