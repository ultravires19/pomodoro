import { Accessor, Setter, Component } from "solid-js";

interface TitleStateProps {
  timerTitle: Accessor<string>
  setTimerTitle: Setter<string>
}

const TimerTitleInput: Component<TitleStateProps> = (props) => {
  const { timerTitle, setTimerTitle } = props

  const titleHandler = (e: Event) => {
    const target = e.currentTarget as HTMLInputElement;
    setTimerTitle(target.value!)
    console.log(timerTitle())
    } 

  return(
      <input value={timerTitle()} onChange={titleHandler}  />
  )
  
}

export default TimerTitleInput
