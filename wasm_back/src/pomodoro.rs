#![allow(dead_code)]
use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;

#[derive(Deserialize, Serialize)]
enum Status {
    Running,
    Paused,
}

#[derive(Deserialize, Serialize)]
enum SwitchType {
    Auto,
    Manual,
}

#[derive(Serialize, Deserialize)]
struct Interval {
    title: String,
    total_time: u64,
    remaining_time: u64,
    is_active: bool,
}

#[wasm_bindgen]
#[derive(Serialize, Deserialize)]
struct Timer {
    intervals: Vec<Interval>,
    title: String,
    status: Status,
    switch_type: SwitchType,
    cycles: u8,
    cycles_remaining: u8,
}

impl Interval {
    pub fn new(title: String, total_time: u64) -> Self {
        Interval {
            title,
            total_time,
            remaining_time: total_time,
            is_active: false,
        }
    }
}

#[wasm_bindgen]
impl Timer {
    #[wasm_bindgen(constructor)]
    pub fn new(
        intervals: Vec<Interval>,
        title: String,
        switch_type: SwitchType,
        cycles: u8,
    ) -> Self {
        Timer {
            intervals,
            title,
            status: Status::Paused,
            switch_type,
            cycles,
            cycles_remaining: cycles,
        }
    }
}

#[wasm_bindgen]
pub struct Counter {
    pub count: i32,
}

#[wasm_bindgen]
impl Counter {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        Counter { count: 0 }
    }
    #[wasm_bindgen]
    pub fn increment(&mut self) {
        self.count += 1
    }
    #[wasm_bindgen]
    pub fn how_high(&self) -> i32 {
        self.count
    }
}
