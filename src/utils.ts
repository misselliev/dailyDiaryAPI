import { NewDiaryEntry } from './types'
import { Weather } from './enums'

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}

const parseDayGoal = (dayGoalFromReq: any): string => {
  if (!isString(dayGoalFromReq)) {
    throw new Error('Incorrect or missing comment')
  }
  return dayGoalFromReq
}

const parseDate = (dateFromReq: any): string => {
  if (!isString(dateFromReq) || !isDate(dateFromReq)) {
    throw new Error('Incorrect or missing date')
  }

  return dateFromReq
}

const parseWeather = (weatherFromReq: any): Weather => {
  if (!isString(weatherFromReq) || isWeather(weatherFromReq)) {
    throw new Error('Incorrect or missing weather')
  }
  return weatherFromReq
}

const parseMood = (moodFromReq: any): string => {
  if (!isString(moodFromReq)) {
    throw new Error('Incorrect or missing comment')
  }
  return moodFromReq
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    dayGoal: parseDayGoal(object.dayGoal),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    mood: parseMood(object.mood)
  }
  return newEntry
}

export default toNewDiaryEntry
