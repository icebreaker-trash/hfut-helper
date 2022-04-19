import { defineStore } from 'pinia'

export const useCourseListStore = defineStore<string, { course: ICourseList }, any>('course-list', {
  state: () => ({
    course: {
      lessonList: [],
      scheduleList: [],
      scheduleGroupList: [],
    },
  }),
  actions: {
    setCourse(course: ICourseList) {
      this.course = this.formatCourse(course)
    },
    formatCourse(course: ICourseList) {
      const { lessonList, scheduleGroupList, scheduleList } = course
      this.course = course as ICourseList
      const res = Object.create(null)
      scheduleList.forEach((list) => {
        if (!res[list.date]) {
          res[list.date] = []
        }
        res[list.date].push({
          startTime: list.startTime,
          teacherName: list.personName,
          lessonDetail: this.getCourseDetail(list),
        })
      })
      Object.keys(res).forEach((key) => {
        res[key].sort((a: any, b: any) => {
          return a.startTime - b.startTime
        })
      })
      return res
    },
    getCourseDetail(list: ScheduleList) {
      const { lessonList } = this.course
      return lessonList.find(item => item.id === list.lessonId)
    },
  },
})

export interface ICourseList {
  lessonList: LessonList[]
  scheduleList: ScheduleList[]
  scheduleGroupList: ScheduleGroupList[]
}

interface Adminclasses {
  id: number
  nameZh: string
  nameEn: string
  code: string
  grade: string
  stdCount: number
  planCount: number
  enabled: boolean
  abbrZh: string
  abbrEn: string
}

interface Building {
  id: number
  nameZh: string
  nameEn: string
  code: string
  campus: Campus
}

interface Campus {
  id: number
  nameZh: string
  nameEn: string
  code: string
}

interface LessonList {
  id: number
  code: string
  name: string
  courseName: string
  courseTypeName: string
  teacherAssignmentList: TeacherAssignmentList[]
  requiredPeriodInfo: RequiredPeriodInfo
  actualPeriods: number
  scheduleState: string
  limitCount: number
  stdCount: number
  suggestScheduleWeeks: any[]
  suggestScheduleWeekInfo: string
  campusId: number
  roomTypeId: number
  adminclassIds: number[]
  remark: string
  scheduleRemark: string
  adminclasses: Adminclasses[]
  scheduleJsonParams: any[]
}

interface RequiredPeriodInfo {
  total: number
  weeks: number
  theory: string
  theoryUnit: string
  requireTheory: string
  practice: string
  practiceUnit: string
  requirePractice: string
  test: string
  testUnit: string
  requireTest: string
  experiment: string
  experimentUnit: string
  requireExperiment: string
  machine: string
  machineUnit: string
  requireMachine: string
  design: string
  designUnit: string
  requireDesign: string
  periodsPerWeek: number
}

interface Room {
  id: number
  nameZh: string
  nameEn: string
  code: string
  building: Building
  roomType: Campus
  floor: number
  virtual: boolean
  seatsForLesson: number
  remark: string
  seats: number
}

interface ScheduleGroupList {
  id: number
  lessonId: number
  no: number
  limitCount: number
  stdCount: number
  actualPeriods: number
  default: boolean
}

interface ScheduleList {
  lessonId: number
  scheduleGroupId: number
  periods: number
  date: string
  room: Room
  weekday: number
  startTime: number
  endTime: number
  teacherId: number
  personId: number
  personName: string
  experiment: string
  customPlace: string
  lessonType: string
  weekIndex: number
}

interface TeacherAssignmentList {
  role: string
  code: string
  teacherId: number
  personId: number
  name: string
  age: string
  titleName: string
}
