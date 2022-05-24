/** Timers
 * The timer module exposes a global API for scheduling functions to be called at some future period of time. Because the timer functions are globals, there is no need to call require('timers') to use the API.
 * The timer functions within Node.js implement a similar API as the timers API provided by Web Browsers but use a different internal implementation that is built around the Node.js Event Loop.
 * 
 */

//  const { setImmediate: setImmediatePromise } = require('timers/promises');

//  const ac = new AbortController();
//  const signal = ac.signal;
 
//  setImmediatePromise('foobar', { signal })
//    .then(console.log)
//    .catch((err) => {
//      if (err.name === 'AbortError')
//        console.log('The immediate was aborted');
//    });
 
//  ac.abort();

//  const { setTimeout: setTimeoutPromise } = require('timers/promises');

// const ac = new AbortController();
// const signal = ac.signal;

// setTimeoutPromise(1000, 'foobar', { signal })
//   .then(console.log)
//   .catch((err) => {
//     if (err.name === 'AbortError')
//       console.log('The timeout was aborted');
//   });

// ac.abort();

import {
    setTimeout,
  } from 'timers/promises';
  
  const res = await setTimeout(100, 'result');
  
  console.log(res);  // Prints 'result'
  
  
  import {
    setInterval,
  } from 'timers/promises';
  
  const interval = 100;
  for await (const startTime of setInterval(interval, Date.now())) {
    const now = Date.now();
    console.log(now);
    if ((now - startTime) > 1000)
      break;
  }
  console.log(Date.now());

  import { scheduler } from 'timers/promises';

await scheduler.wait(1000); // Wait one second before continuing