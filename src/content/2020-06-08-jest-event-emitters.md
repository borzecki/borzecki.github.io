---
title: "Testing event emitters with Jest"
date: "2020-06-08"
draft: false
path: "/blog/jest-event-emitters/"
---

Writing unit tests for code that relies on third party libraries can sometimes be tricky. We're all familiar with [module mocking](https://jestjs.io/docs/en/manual-mocks), but what if code that we want to cover is triggered by external events? Today we'll be improving test coverage in these cases. To make our lives easier, let's call our module `analytics` and assume it exposes the following methods:

```js
// subscribe to event with callback function
analytics.on = (name: string, callback: (data: any) => void) => { ... }
// set context for service
analytics.setContext = (ctx: object) => { ... }
// send message to analytics service
analytics.send = (msg: string) => { ... }
```

Note: we won't be looking closely at the implementation of those methods. We'll be creating a mocked version that will only serve the purpose of ensuring the code is executed.

## Tested code

Let's examine the following code. This simple component has to display content, few links, and handle events received from our `analytics` module.

```js
import React from "react"
import analytics from "analytics"

const Component = ({ propagateResults }) => {
  analytics.on("open", data => {
    analytics.setConfig({ closed: false })
    propagateResults(data)
  })
  return (
    <>
      <h1>Hello world!</h1>
      <p>Lorem ipsum dolor sit amet</p>

      <a href="/blog/" onClick={() => analytics.send("clickedOnBlock")}>
        blog
      </a>
      <a href="/about/" onClick={() => analytics.send("clickedOnAbout")}>
        about
      </a>
    </>
  )
}

export default Component
```

### Basic test

Let's start writing the test suit by shallow rendering it using [enzyme](https://enzymejs.github.io/enzyme/).

```js
describe("Component test cases", () => {
  it("should ensure component renders without a crash", () => {
    shallow(<Component propagateResults={() => {}} />)
  })
})
```

The results are somewhat expected, we're asserted that content is displayed and nothing breaks spectacularly.

```js
 PASS  ./index.test.js
  Component test cases
    ✓ should ensure component renders without a crash

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files  |   42.86 |      100 |      25 |   42.86 |
 index.js |   42.86 |      100 |      25 |   42.86 | 6-7,14-17
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.314 s, estimated 1 s
```

### Advanced test with module mocking

In order to improve the results, we'll have to dive into mocking `analytics` module with Jest. The following code will produce a mocked "module" which allows us to emit events on command. It will also enable us to subscribe callback functions using **on** method.

We'll mock **send** and **setConfig** properties as well, just to be sure every condition is tested properly.

```js
jest.mock("./analytics", () => {
  const EventEmitter = require("events")
  const emitter = new EventEmitter()
  emitter.send = jest.fn()
  emitter.setConfig = jest.fn()
  return emitter
})
```

In order for the trick of _"simulating"_ the event emission to work, we'll tell Jest to use fake timers and trigger the event with a **setTimeout** method with an arbitrary number of milliseconds.

```js
jest.useFakeTimers()
setTimeout(() => analytics.emit("open", results), 100)
```

This works by replacing the internal clock with time crystals that are allowing us to freely manipulate time. Really great stuff! You can read more about it [here](https://jestjs.io/docs/en/timer-mocks).

Now comes the fun part of assembling all the pieces together.

```js
jest.useFakeTimers()

describe("Component test cases", () => {
  it("should handle events", () => {
    const results = { data: [42] }
    // simulate event after 100ms
    setTimeout(() => analytics.emit("open", results), 100)

    // mock arbitrary function passed to propps
    const mockPropagate = jest.fn()
    const wrapper = shallow(<Component propagateResults={mockPropagate} />)

    // simulate clicking on links
    wrapper
      .find("a")
      .at(0)
      .simulate("click")
    wrapper
      .find("a")
      .at(1)
      .simulate("click")

    // assert onClick action has been triggered succesfully
    expect(analytics.send).toHaveBeenCalledWith("clickedOnBlock")
    expect(analytics.send).toHaveBeenCalledWith("clickedOnAbout")

    // fast-forward 100ms
    jest.advanceTimersByTime(100)
    expect(analytics.setConfig).toHaveBeenCalledWith({ closed: false })
    expect(mockPropagate).toHaveBeenCalledWith(results)
  })
})
```

As you can see in the last part, by advancing the time by 100ms, we've used internal **emit** function to trigger callback hooked inside our fake `analytics` module, thus allowing us to make final assertions.

```js
 PASS  ./index.test.js
  Component test cases
    ✓ should handle events (3 ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files  |     100 |      100 |     100 |     100 |
 index.js |     100 |      100 |     100 |     100 |
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.302 s, estimated 1 s
```
