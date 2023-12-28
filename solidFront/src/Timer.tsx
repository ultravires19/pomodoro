import { invoke } from '@tauri-apps/api/tauri'
import type { Component } from 'solid-js'
import  { createSignal, For  } from 'solid-js'
import  { createStore, produce  } from 'solid-js/store'

import Interval from './Interval'
import { IntervalName, IntervalType, Status } from './types'

// export const updateReceived = (intName: IntervalState['title'], rt: IntervalState['remainingTime']) => {
//       setInterval(produce((draft) => {
//         const intToUpdate = draft.find(int => int.title === intName)
//           if (intToUpdate) {
//           intToUpdate.remainingTime = rt
//           console.log(intToUpdate.remainingTime)
//         }
//   }))
// }

const Timer: Component = () => {
  const [ title, setTitle ] = createSignal("pomodoro d'oro")
  const [ status, setStatus ] = createSignal<Status>('Paused')
  const [ focus, setFocus ] = createSignal<IntervalName>('Main')
  const [ interval, setInterval ] = createStore<IntervalType[]>([ 
    {  title: 'Main', totalTime: 600, remainingTime: 500, isActive: false},  
    {  title: 'Break', totalTime: 100, remainingTime: 80, isActive: false} ])

  const titleHandler = (e: Event) => {
    const target = e.currentTarget as HTMLInputElement;
    setTitle(target.value!)
    } 
    
  const timeHandler = (newTime: number, index: number) => {
      setInterval(produce(draft => {
        draft[index].remainingTime = newTime;
      }))
  }
  
  const playBtnHandler = () => {
    if (status() === 'Paused') {
      setStatus('Ticking')
      let started = invoke('start_timer')
      started.then(result => console.log(result))
    } else {
      setStatus('Paused')
      let paused = invoke('pause_timer')
      paused.then(result => console.log(result))
    }
  }

  const swapBtnHandler = () => {
    if (focus() === 'Main') {
      setFocus('Break')
    } else {
      setFocus('Main')
    }
    console.log(focus())
  }

  return (
    <>
    <input value={title()} onChange={titleHandler}/>
    <div>chart</div>
    <For each={interval}>{(intervalItem, i) => 
      <Interval state={intervalItem} handler={timeHandler} index={i()} />
    }
    </For>
    <button onClick={playBtnHandler}>play/pause</button>
    <button onClick={swapBtnHandler}>swap</button>
  </>
  )
};

export default Timer
