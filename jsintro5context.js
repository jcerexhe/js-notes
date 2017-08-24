// Javascript intro 4

// Context

// get more this examples for the bottom
// ref this http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/

// Very hard to get the first time around, worth checking lot's of different resources on this

// context === this
// context is the value of what 'this' is

// For root scope

console.log(this);
// => window object

console.log(this === window);
// => true

var a = 1;
console.log(this.a);
console.log(window.a);
console.log(a);
// => 1

function foo() {
	console.log(this);
}

foo();
// => window obj

// Because by default a function runs within the scope its in

window.foo(); // is the same as foo() was defined in the root scope

// Let's see within an object

var obj = {
	foo: function() {
		console.log(this);
	}
};

obj.foo();

// ----

var obj = {
	foo: function() {
		console.log(this);
		// can test to see if this is same as obj
		console.log(this === obj);
		// does not equal window
		console.log(this === window);
	}
};

obj.foo();

// There are 3 methods which change context:
// call, apply, bind

// reset
var obj = {
	foo: function() {
		console.log(this);
	}
};

// call
obj.foo.call(window, 1, 2, 3); // places 1 2 3 in as arguments

// apply
obj.foo.apply(window, [1, 2, 3]); // same but only takes 2 args, second is array

// bind
var newFunc = obj.foo.bind(window);
newFunc();
obj.foo();
// triggers the same foo function but binds the window context
// need to save it to var

// Can set up a click listener to test what the context is on a page
var obj = {
	foo: function() {
		console.log(this);
	}
};

// won't work
// document.body.addEventListener("click", function() {
// 	obj.foo();
// });

$('body').on('click', obj.foo);
// => <body></body>

// document.getElementsByClassName("ptag").addEventListener("click", function() {
// 	console.log(this);
// });

var person = {
    firstName: "Penelope",
    lastName: "Barrymore",
    // here we set function as value to the fullName key
    fullName: function () {
        ​// Notice we use "this" just as we used "he" in the example sentence earlier?:
        console.log(this.firstName + " " + this.lastName);
		    ​// We could have also written this:​
        console.log(person.firstName + " " + person.lastName);
    }
}

// execute one at a time
person.firstName;
person.lastName;
person.fullName();

// es5 vs es6
// https://www.amazeelabs.com/sites/default/files/inline-images/es6-code.jpg

