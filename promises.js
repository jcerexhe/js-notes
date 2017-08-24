// JavaScript is single threaded, meaning that two bits of script cannot run at the same time; they have to run one after another. In browsers, JavaScript shares a thread with a load of other stuff that differs from browser to browser. But typically JavaScript is in the same queue as painting, updating styles, and handling user actions (such as highlighting text and interacting with form controls). Activity in one of these things delays the others.

// As a human being, you're multithreaded. You can type with multiple fingers, you can drive and hold a conversation at the same time. The only blocking function we have to deal with is sneezing, where all current activity must be suspended for the duration of the sneeze. That's pretty annoying, especially when you're driving and trying to hold a conversation. You don't want to write code that's sneezy.

// https://developers.google.com/web/fundamentals/getting-started/primers/promises

let myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing async succeeded, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code. 
  // In reality, you will probably be using something like XHR or an HTML5 API.
  setTimeout(function(){
    resolve("Success!"); // Yay! Everything went well!
  }, 250);
});

let myFirstPromise = new Promise(function(resolve, reject) {
  setTimeout(function(){
    resolve("Success!");
  }, 250);
});


myFirstPromise.then((successMessage) => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log("Yay! " + successMessage);
});

// ----

let myPromise = new Promise(function(resolve, reject) {
  resolve(1);
});

myPromise.then(function(val) {
  console.log(val); // 1
  return val + 2;
}).then(function(val) {
  console.log(val); // 3
})
