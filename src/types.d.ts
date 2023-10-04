import { Weather } from './enums'

export interface DiaryEntry {
  id: number
  date: string
  mood: string
  dayGoal: string
  weather: Weather
}

export type DiaryEntryLight = Omit<DiaryEntry, 'dayGoal' | 'weather'>

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
