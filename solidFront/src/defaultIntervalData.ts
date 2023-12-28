import { IntervalType } from "./types";

const mainDefault: IntervalType = {
  title: 'main',
  remainingTime: 3600,
  totalTime: 3600,
  isActive: false
  }

const breakDefault: IntervalType = {
  title: 'break',
  remainingTime: 600,
  totalTime: 600,
  isActive: false
}

export const defaultIntervals: IntervalType[] = [breakDefault, mainDefault]
