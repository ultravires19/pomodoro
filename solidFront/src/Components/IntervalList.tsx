import { Component, For} from "solid-js";
import { IntervalType } from "../types";

interface IntervalListProps {
  intervals: IntervalType[]
  }

const IntervalList: Component<IntervalListProps> = (props) => {
  const { intervals } = props

 return(
    <For each={intervals}>{(interval, _i) => <li><p>{interval.title}</p><p>{interval.totalTime}</p></li>}</For>
  ) 
}

export default IntervalList

