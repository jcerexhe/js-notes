// Javascript intro 1

// First Class Functions

// Functions can be passed as arguments

function add(first, second) {
	console.log(first + second);
}

add(2, 3);
add(4, 5);

// Now add a callback argument
// Pass in a function as an argument

function add(first, second, callback) {
	console.log(first + second);
	// calls the callback after the inital coded is run
	callback();
}

add(2, 3, function (){
	console.log('done');
});

add(4, 5, function (){
	console.log('done!!');
});

// A function is basically a variable

function logDone() {
	console.log('done');
}

function add(first, second, callback) {
	console.log(first + second);
	callback();
}
// Pass it into arguments as if its a variable because to js it basically is
add(2, 3, logDone);

// To make callbacks options can just add a conditional e.g.
function add(first, second, callback) {
	console.log(first + second);
	if (callback) {
		callback();
	}
}

// Can also save functions into variables like this
// Again, ternary operations remain the same
var powerLevel = function(level) {
  return level > 9000 ? "it's over 9000!!!" : level;
};

// Conditionals
if (condition) {
	// do stuff
}

// == vs ===
// Data types
// 0 == '0'
// 0 == 0
// 0 !== '0'
// 0 === 0

// CHALLENGE:
// Write a function called fizzbuzz that accepts a single argument n. fizzbuzz should return "Fizz" if n is a multiple of 3, "Buzz" if n is a multiple of 5, “FizzBuzz” if n is a multiple of both 3 and 5. Return n if Fizz, Buzz or Fizzbuzz are not achieved.

function fizzbuzz(n) {
	if (n % 5 === 0 && n % 3 === 0) {
		return 'Fizzbuzz';
	} else if (n % 5 === 0) {
		return 'Buzz'
	} else if (n % 3 === 0) {
		return 'Fizz'
	} else {
		return n;
	}
}

