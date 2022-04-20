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
      class="card"
    >
      <view class="header">
        <view class="time">
          {{ item.startTime }} - {{ item.endTime }}
        </view>
        <view class="teacherName text-slate">
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
    box-shadow:0 3px 20px -3px rgb(0 0 0/0.1),0 4px 20px -3px rgb(0 0 0/0.1);
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
