import type { Component } from 'solid-js';
import { IntervalState } from './types';

type UpdateTimeHandler = (item: number, index: number) => void;

interface IntervalProps {
  state: IntervalState;
  handler: UpdateTimeHandler;
  index: number;
}

const Interval : Component<IntervalProps> = (props) => {


  const timeHandler = (e: Event) => {
    const target = e.currentTarget as HTMLInputElement;
    const parsedValue = parseInt(target.value, 10);
    props.handler( parsedValue, props.index);
    console.log(`${props.state.title}: ${props.state.remainingTime}`);
  }
  
  return (
    <div>
      <p>{props.state.title}</p>
      <input value={props.state.remainingTime} onChange={timeHandler}/>
      </div>
  )
};

export default Interval;
