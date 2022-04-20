export const getTeacherName = (teachers: { name: string; id: number }[]): string => teachers.map(teacher => teacher.name).join('/')
