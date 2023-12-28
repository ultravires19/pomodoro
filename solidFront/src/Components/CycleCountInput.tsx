import { Component, Accessor, Setter } from "solid-js";

interface CycleCountProps {
  cycles: Accessor<number>
  setCycles: Setter<number>
}

const CycleCountInput: Component<CycleCountProps> = (props) => {
  const { cycles, setCycles } = props

  const setCyclesHandler = (e: Event) => {
    const target = e.currentTarget as HTMLInputElement
    setCycles(target.valueAsNumber)
    console.log(cycles())
  }

  return(
  <>
    <label for="cycleCount">Number of Cycles:</label>
    <input type="number" id="cycleCount" name="cycleCount" value={cycles()} min="1" max="9" onChange={setCyclesHandler}/>
  </>
  )
}

export default CycleCountInput
