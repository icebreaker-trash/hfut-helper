<script lang='ts' setup>
import { computed, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useCourseListStore } from '@/store/courseList.store'
import { getTeacherName } from '@/shared/utils'

const store = useCourseListStore()

const { visibleDayIdx, currentWeekCourse } = storeToRefs(store)

const visibleCourseList = computed(() => currentWeekCourse.value[visibleDayIdx.value])
watch(visibleCourseList, (val) => {
  console.log(currentWeekCourse.value)
})
</script>

<template>
  <view class="course-list-cards">
    <view
      v-for="item in visibleCourseList"
      :key="item.lessonDetail.id"
      class="card  bg-blue-500 text-white shadow-lg shadow-blue-500/50 p-15"
    >
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
</template>

<style lang='scss' scoped>
.course-list-cards {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .card {
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: 70px;
    border-radius: 8px;
    padding: 25px 15px;
    color: white;
    .header {
      display: flex;
      justify-content: space-between;
      .time {
        font-size: 12px;
        color: rgba(0 0 0 / 80%);
      }
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
