import { DiaryEntry, DiaryEntryLight, NewDiaryEntry } from '../types'
import diaryData from './diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): DiaryEntryLight | undefined => {
  const entry = diaries.find(d => d.id === id)
  if (entry !== null) {
    const { ...restOfDiary } = entry
    return restOfDiary
  }
  return undefined
}
export const getLightEntries = (): DiaryEntryLight[] => {
  return diaries.map(({ id, date, mood }) => {
    return { id, date, mood }
  })
}

export const addEntry = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: diaries.length + 1,
    ...newDiaryEntry
  }
  diaries.push(newDiary)
  return newDiary
}
