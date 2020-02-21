const js = import("./node_modules/@moondaddi/hello-wasm/hello_wasm.js");

js.then(js => {
	js.greet("WebAssembly");
});
