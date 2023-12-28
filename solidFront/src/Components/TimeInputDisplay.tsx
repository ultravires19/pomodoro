import { Component, Accessor, Setter } from "solid-js"
import { TimeInput } from "../types"

interface TimeInputDisplayProps {
  intervalTime: Accessor<TimeInput>
  setIntervalTime: Setter<TimeInput>
}
const TimeInputDisplay: Component<TimeInputDisplayProps> = (props) => {
  let hourInput!: HTMLInputElement
  let minuteInput!: HTMLInputElement
  let secondInput!: HTMLInputElement
  const { intervalTime, setIntervalTime } = props

  const setTimeInputHandler = () => {
    let hours = parseInt(hourInput.value)
    let minutes = parseInt(minuteInput.value)
    let seconds = parseInt(secondInput.value)

    setIntervalTime({hours, minutes, seconds})
  }
  // const setMinuteInputHandler = (e: Event) => {
  //   let target = e.currentTarget as HTMLInputElement
  //   let minutes = parseInt(target.value, 10)

  //   setIntervalTime(prev => ({...prev, minutes}))
  // }

  
  return(
    <div>
      <input ref={hourInput} value={intervalTime().hours} type="number" placeholder="HH" onChange={setTimeInputHandler}/>
      <input ref={minuteInput} value={intervalTime().minutes} type="number" placeholder="mm" onChange={setTimeInputHandler}/>
      <input ref={secondInput} value={intervalTime().seconds} type="number" placeholder="ss" onChange={setTimeInputHandler}/>
    </div>
  )
}

export default TimeInputDisplay
