use wasm_bindgen::prelude::*;

mod pomodoro;
// use crate::pomodoro::Counter;

#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    format!("whatup {}?!", name)
}

// #[wasm_bindgen]
// pub fn new_counter() -> Counter {
//     Counter::new()
// }
