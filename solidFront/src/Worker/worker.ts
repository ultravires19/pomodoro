import init, { greet, Timer } from '../../../wasm_back/pkg'

await init()

onmessage = (e) => {
  console.log(greet(e.data))
  switch (e.data.cmd) {
    case 'create': 
      const timer = new Timer()
      console.log('heres your timer:', timer)
      break
  }
}
