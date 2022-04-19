import { addWeeks, eachDayOfInterval, eachWeekOfInterval } from 'date-fns'

export const currentTime = new Date()
export const currentSemesterStartDate = new Date('2022-02-28')
export const currentSemesterEndDate = addWeeks(new Date('2022-07-17'), 1)

export const currentSemesterWeeks = eachWeekOfInterval({
  start: currentSemesterStartDate,
  end: currentSemesterEndDate,
}, {
  weekStartsOn: 1,
})

export const activeWeekIdx = currentSemesterWeeks.findIndex(week => currentTime < week) - 1

export const buildWeek = (idx: number) => {
  return eachDayOfInterval({
    start: currentSemesterWeeks[idx],
    end: currentSemesterWeeks[idx + 1],
  }).slice(0, 7)
}

export const currentWeek = buildWeek(activeWeekIdx)

export const currentDayIdx = currentWeek.findIndex(day => currentTime < day) - 1
