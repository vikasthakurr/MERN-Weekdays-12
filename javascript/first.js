/*
	History of JavaScript:
	- Created by Brendan Eich (BrendanE) at Netscape in 1995 as "Mocha"/"LiveScript"; later named JavaScript.
	- Designed originally for adding interactivity in web pages; has grown into a language used on servers, desktop, and mobile via runtimes and tooling.

	JIT (Just-In-Time) Compilation:
	- Modern JS engines (V8, SpiderMonkey, JavaScriptCore, Chakra) use JIT compilation to convert JS bytecode into optimized native machine code at runtime.
	- JIT improves performance by optimizing hot code paths, inlining, and using type feedback gathered while the program runs.

	Multithread Nature:
	- JavaScript language itself is single-threaded (per execution context/event loop).
	- Concurrency in browsers and Node.js is achieved via Web Workers, WorkerThreads, and native thread pools (for I/O and background tasks), allowing parallelism without sharing JS memory directly.
	- SharedArrayBuffer and Atomics provide limited shared-memory primitives when available and allowed by environment policies.

	Async Nature (Event Loop & Concurrency Model):
	- JavaScript uses an event loop to handle asynchronous I/O and events; tasks are scheduled as callbacks, promises (microtasks), and timers (macrotasks).
	- Common async patterns: callbacks, Promises, async/await — `async/await` is syntactic sugar over Promises making async code appear synchronous.
	- The event loop processes the call stack, then microtask queue (e.g., resolved Promises), then macrotasks (e.g., setTimeout, I/O), enabling non-blocking behavior.

	(These comments are for learning/reference and do not affect runtime.)
*/

// Example placeholder code (optional)
// console.log("first.js loaded — theoretical comments added above.");
