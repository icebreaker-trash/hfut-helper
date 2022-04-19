import { eachDayOfInterval, eachWeekOfInterval } from 'date-fns'

export const currentTime = new Date()
export const currentSemesterStartDate = new Date('2022-02-28')
export const currentSemesterEndDate = new Date('2022-07-17')

export const currentSemesterWeeks = eachWeekOfInterval({
  start: currentSemesterStartDate,
  end: currentSemesterEndDate,
}, {
  weekStartsOn: 1,
})

export const activeWeekIdx = currentSemesterWeeks.findIndex(week => currentTime < week) - 1

export const currentWeek = eachDayOfInterval({
  start: currentSemesterWeeks[activeWeekIdx],
  end: currentSemesterWeeks[activeWeekIdx + 1],
}).slice(0, 7)

export const currentDayIdx = currentWeek.findIndex(day => currentTime.getDate() === day.getDate())
