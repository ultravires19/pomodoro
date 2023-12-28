export type Status = ( 'Paused' | 'Ticking' )

export type IntervalName = ( 'Main' | 'Break')

export type SwitchType = ( 'Auto' | 'Manual')

export interface IntervalType {
  title: string
  totalTime: number
  remainingTime: number
  isActive: boolean
}

export interface Timer {
  intervals: IntervalType[]
  title: string
  status: Status
  switchType: SwitchType
  cycles: number
  cyclesRemaining: number
}

export interface TimeInput {
  hours: number | string
  minutes: number | string
  seconds: number | string
}
