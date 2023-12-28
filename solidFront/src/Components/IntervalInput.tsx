import { Show, Component, Setter, createSignal } from "solid-js";
import { IntervalType, TimeInput } from "../types";
import TimeInputDisplay from "./TimeInputDisplay";
import { parseOrZero } from "../utils/converters";

interface IntervalInputProps {
  intervals: IntervalType[]
  setIntervals: Setter<IntervalType[]>
}
const IntervalInput: Component<IntervalInputProps> = (props) => {
  const [ intervalTime, setIntervalTime ] = createSignal<TimeInput>({hours: '', minutes: '', seconds: ''})
  let titleInput!: HTMLInputElement
  
  const { intervals, setIntervals } = props

  const addIntervalHandler = () => {
    let { hours, minutes, seconds } = intervalTime()
    hours = parseOrZero(hours)
    minutes = parseOrZero(minutes)
    seconds = parseOrZero(seconds)
    // if (minutes === undefined) {
    //   minutes = 0
    // }
    // if (seconds === undefined) {
    //   seconds = 0
    // }

    let totalSeconds = (hours * 60 * 60) + (minutes * 60) + seconds
    const newInterval: IntervalType = {
      title: titleInput.value,
      totalTime: totalSeconds,
      remainingTime: totalSeconds,
      isActive: false
      
    }
    setIntervals(intervals => [...intervals, newInterval])
    titleInput.value = ""
    setIntervalTime({hours: '', minutes: '', seconds: ''})

  }
  return(
    <div id="interval-input">
      <input ref={titleInput} placeholder="interval title" type="text"/>
      <TimeInputDisplay intervalTime={intervalTime} setIntervalTime={setIntervalTime}/>
      <Show when={intervals.length < 3 }>
        <button type="button" onclick={addIntervalHandler}>add interval</button>
      </Show>
    </div>
  )
}

export default IntervalInput
