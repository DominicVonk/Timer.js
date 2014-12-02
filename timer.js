/**
 * Author: Dominic Vonk
 * Class: Timer
 * Github: https://github.com/DominicVonk/jsTimer/
 */
(function($) {
  $.Timer = function (milliseconds) {
  var timer = null;
  if (typeof milliseconds == "undefined") {
    milliseconds = 0;
  }
  var elapsed = null;
  var running = false;
  var once = false;
  return {
    start: function() {
      if (running) {
        window.clearInterval(timer);
      }
      if (once) {
        timer = window.setInterval(function() {
          elapsed({signalTime: new Date()});
          window.clearInterval(timer);
          running = false;
        }, milliseconds);
      } else {
        timer = window.setInterval(function() {
          elapsed({signalTime: new Date()});
        }, milliseconds);
      }
      running = true;
    },
    runOnce: function(_once) {
      once = _once; 
      if (running) {
        if (once) {
          timer = window.setInterval(function() {
            elapsed({signalTime: new Date()});
            window.clearInterval(timer);
            running = false;
          }, milliseconds);
        } else {
          timer = window.setInterval(function() {
            elapsed({signalTime: new Date()});
          }, milliseconds);
        }
      }
    },
    elapsed: function(func) {
      elapsed = func;
      if (running) {
        window.clearInterval(timer);
        timer = window.setInterval(function() {
          elapsed({signalTime: new Date()});
        }, milliseconds);
      }
    },
    interval: function(_milliseconds) {
      milliseconds = _milliseconds;
      if (running) {
        window.clearInterval(timer);
        timer = window.setInterval(function() {
          elapsed({signalTime: new Date()});
        }, milliseconds);
      }
    },
    stop: function() {
      if (running) {
        window.clearInterval(timer);
      }
      running = false;
    }
  };
 };
})(window);
