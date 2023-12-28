import { Component, createSignal, Show } from "solid-js"
import { createStore } from "solid-js/store"
import SwitchTypeSelector from "./SwitchTypeSelector"
import { SwitchType, IntervalType } from "../types"
import TimerTitleInput from "./TimerTitleInput"
import CycleCountInput from "./CycleCountInput"
import IntervalList from "./IntervalList"
import IntervalInput from "./IntervalInput"
import { defaultIntervals } from "../defaultIntervalData"

let worker: Worker | null = null
if (!worker && window.Worker) {
  worker = new Worker(new URL('../Worker/worker.ts', import.meta.url), { type: 'module'})
  console.log('worker created')
  }

const NewTimerForm: Component = () => {
  const [ switchType, setSwitchType ] = createSignal<SwitchType>('Manual')
  const [ cycles, setCycles ] = createSignal<number>(1)
  const [ intervals, setIntervals ] = createStore<IntervalType[]>(defaultIntervals)
  const [ timerTitle, setTimerTitle ] = createSignal<string>('Pomodoro D\'Oro')

  const createTimerHandler = (e: Event) => {
    e.preventDefault()
    // console.log(switchType(), cycles(), intervals, timerTitle())
    if (!worker && window.Worker) {
      worker = new Worker(new URL('../Worker/worker.ts', import.meta.url), { type: 'module'})
      console.log('worker created')
    } else {
      worker!.postMessage('buddy')
      // console.log(intervals)
      let interval_array: IntervalType[] = defaultIntervals
      let timer_title: string = timerTitle()
      let switch_type: SwitchType = switchType()
      let cyclesNo: number = cycles()
      console.log(`intervals: ${interval_array},title: ${timer_title}; switch: ${switch_type}; cycles: ${cyclesNo}`)
      // worker!.postMessage({cmd: 'create', timer: { intervals: interval_array, title: timer_title, switchType: switch_type, cycles: cyclesNo}
    // })
  }}

  return(
    <form>
      <TimerTitleInput timerTitle={timerTitle} setTimerTitle={setTimerTitle} />
      <SwitchTypeSelector switchType={switchType} setSwitchType={setSwitchType}/>
      <Show when={switchType() === 'Auto'}>
        <CycleCountInput cycles={cycles} setCycles={setCycles} />
      </Show>
      <Show when={intervals.length > 0} fallback={<p>interval list is empty</p>}><IntervalList intervals={intervals} />
      </Show>
      <IntervalInput intervals={intervals} setIntervals={setIntervals} />
      <div>
        <button onClick={createTimerHandler}>create timer</button>
      </div>
    </form>
  )
}

export default NewTimerForm
