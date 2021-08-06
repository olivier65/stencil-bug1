# stencil-bug1

## Instructions

Build using `npm run build`.

Serve at `http://localhost:9000/www/index.html` using `npm run serve`.

## Problem description

Without the `@State()` annotatation in `alarms.tsx` the store doesn't work: the UI is not updated
when you click on the "Add" button. The store state is exposed as the global variable `state`. 
Inspecting that variable in the console is interesting: typing `state` after clicking on "Add" 
twice returns `Proxy {alarms: Array(0)}`, suggesting no alarms, whereas typing `state.alarms` 
returns `(2) [{…}, {…}]`, suggesting two alarms as expected. It seems that some `Proxy` bugginess
is at the root of the store malfunction.

What is really surprising, though, is that uncommenting the line with `@State()` makes the store
work as expected, even though in theory internal state variables and the store are orthogonal and 
unrelated ways of setting up reactive state. The state variable in this case isn't even assigned!
