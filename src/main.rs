use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn chainspec_string() -> String {
    // &'static str can't be returned to bindgen yet...
    // https://github.com/rustwasm/wasm-bindgen/issues/1187
    include_str!("../chainspecs/polkadot.json").to_string()
}

fn main() {
    println!("Hello, world!");
}
