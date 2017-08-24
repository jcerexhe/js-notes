// Javascript intro 2

// Event-driven development

// Ruby script
// /posts/1

// Gets all posts, puts together a view and sends it to the browser
// Is finished after that

// Event here is waiting for the document to be ready, when it is we pass in a function to be available

// This time showing with jquery

$(document).ready();

// Listens for a click event on the button

$(document).ready(function() {
	$('button').on('click', function() {
		alert('yay!');
	});
});

// We use document.ready to ensure that all elements of the doc have been loaded. If our js fires before it is loaded it may not work

// Without jquery we can just do
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("btn").addEventListener("click", function() {
		alert('yay! vanilla');
	});
});

// If we just use this it probably won't work because the js is loadded in the HEAD before the tag
// Remember this function is a callback to the click event
document.getElementById("btn").addEventListener("click", function() {
	alert('yay! vanilla');
});

// Here are some other listeners we can set up
// element.addEventListener("mouseover", myFunction);
// element.addEventListener("click", mySecondFunction);
// element.addEventListener("mouseout", myThirdFunction);

// CHALLENGE:
// Continue with js30
// OR
// Create a link that when hovered over shows a list of options below
// When an option is clicked, change the appearance of the page e.g. change background color, text size and/or others. Only use vanilla js
