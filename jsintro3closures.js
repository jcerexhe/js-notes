// Javascript intro 3

// Closures

$(document).ready(function() {
	var a = 1;
	$('button').on('click', function() {
		// can also increment it
		a++; // a = a + 1;
		alert(a);
	});
});

// .ready fires first before the click event. Js notices that there's a reference to a different scope and keeps it alive

// Closure defined: something that retains state and scope after it executes

// As long as the listener in this case exists, the variable 'a' will be stored in memory
// Its a closure that js will remember as long as there's a ref to it

// This introduces a memory leak where we may not need the variable to be stored anymore but this button keeps it alive. Memory leaks at this scale don't cause a big issue but in larger applications it all adds up and can cause performance issues

// Once you remove the listener js will know to remove the memory reference (garbage collection)
$('button').off('click');

// For further reading
// http://javascriptissexy.com/understand-javascript-closures-with-ease/

// CHALLENGE:
// Create an list of 5 students on your table
// Create a button which calls a function which calls for a prompt for a user to input another name
// Add a callback to this function to log all the names including the new one

// Find a javascript youtuber you like and watch some videos over the break

var list = ['j', 't'];

function getStudent(callback) {
  var newStudent = prompt('Enter their name');
	list.push(newStudent);
  callback();
}

getStudent(function (){
  console.log(list);
});
