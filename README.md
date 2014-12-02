jsTimer
=======

The Javascript Timer

=======
Usage

```js
var timer1 = new Timer(1000); // create timer with 1000 milliseconds interval.
// execute at every elapse.
timer1.elapsed(function(e) { 
  // e returns the an array with the signalTime.
  console.log(e.signalTime); // returns a Date object.
});

// let the timer run once and not in a loop:
timer1.runOnce(true);

// change interval
timer1.interval(1500); //in milliseconds

// run timer 
timer1.start();

// stop timer
timer1.stop();
```
