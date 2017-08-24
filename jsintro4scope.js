// Javascript intro 4

// Scope

// scope !== context

// scope == variable access
// when code is running which variables do I have access to

// context == when code is running what is the value of this

var a = 1;

// by default in js you are in the root scope (window object)

window.a
=> 1 (a)

a
=> 1

window.a === a
=> true

// btw window != document
// http://eligeske.com/jquery/what-is-the-difference-between-document-and-window-objects-2/

// parent scope - cookies

function foo() {
	// child scope - cookies
	var b = 2;
}

foo();
console.log(b);
// this will return undefined because b was created in the scope of foo(), not in the root scope

// ----

// parent scope - cookies

function foo() {
	// child scope - cookies
	var b = 2;
}

// Cookies analogy
// When a parent buys cookies, they get put in the pantry and the child get some
// If the child saves up to buy cookies they tend to eat them all themselves

function foo() {
	// child scope - cookies
	console.log(a)
	var b = 2;
}

// logging there will work because foo have access to the parent scope but b is still undefined

// ----

var a = 2;

function foo() {
	var a = 5;
	console.log(a);
}

foo();

// will console.log 5 
// unless you know how to get to its parent object window.a

function foo() {
	var a = 5;
	console.log(window.a);
	console.log(a);
}

// this creates a naming conflict

// You can console log a and it will go to the root scope

var a = 2;

function foo() {
	var a = 5;
}

foo();

console.log(a);

// Let's take off the var inside the func

var a = 2;

function foo() {
	// First will look here to see if a has been defined in this scope
	a = 5;
	// looks in parent scope and resets value
}

foo();

console.log(a);

// If there's no window object variable of that name it will create it
// Doing this will 'pollute the root scope', basically just creating a messy application where its hard to work out where things are defined
// Reset page so that a has not been defined

function foo() {
	a = 5;
}

foo();

console.log(a);
console.log(window.a);

// if you use "use strict"; it will return an error to prevent you from doing this

"use strict";

function foo() {
	a = 5;
}

foo();

console.log(a);
// Uncaught ReferenceError: a is not defined
// Returns error because var a; was not defined on the root scope

// CHALLENGE:
// What will the last a log as?

var a = 1;

function foo() {
	var a = 5;
	console.log(a);
}

function bar() {
	a = 5;
	console.log(a);
}

foo();
bar();
console.log(a);

