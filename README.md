The typical 'pomodoro' timer consists of *n* cycles of working and rest periods. The timer dictates when the user works or breaks. If the user would like an unscheduled break, they must pause the timer without any breaktime running.
The 'pomodoro d'oro' is an enhanced pomodoro timer, tracking working and break time in the aggregate. The user determines when to take a break and when to work.

This app allows for the composition of either type, however, the former is the default.  

## tech: SolidJS and WASM
This app could have been created without WASM (and probably should have) but then we would have had to write all the logic in TS and where's the fun in that?

Frontends (*Read* JS) should handle UI only. 

## design
The SolidJS frontend hands user creation of a timer and communicates with the WASM module via a web worker

How should the passage of time be reflected in the UI? 
Options:
  1. SharedArrayBuffer
  2. RequestAnimationFrame vs setInterval
  3. WASM pushes updates to frontend
