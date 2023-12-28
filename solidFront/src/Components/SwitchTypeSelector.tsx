import { Accessor, Setter, Component } from "solid-js";
import { SwitchType } from "../types";


interface NewTimerFormProps {
  switchType: Accessor<SwitchType>
  setSwitchType: Setter<SwitchType>
}

const SwitchTypeSelector: Component<NewTimerFormProps> = (props) => {
  const { switchType, setSwitchType } = props

  return (
    <div>
      <p>Cycling type:</p>
      <label>
        <input
          type="radio"
          value="Auto"
          checked={switchType() === "Auto"}
          onChange={() => setSwitchType("Auto")}
        />
        Auto
      </label>
      <label>
        <input
          type="radio"
          value="Manual"
          checked={switchType() === "Manual"}
          onChange={() => setSwitchType("Manual")}
        />
        Manual
      </label>
    </div>
  )
}

export default SwitchTypeSelector
