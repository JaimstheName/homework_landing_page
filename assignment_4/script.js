//  Prevent a page-refresh (when any of the "read more/read less" links are clicked) with the event.preventDefault() function

// Use the $.ready() handler to delay your code from executing until all DOM assets have been loaded

$(document).ready(function(){
	$(".read-less").hide()
$("#first-read-more-button").click(function(){
$("#first-read-more-text").show()
event.preventDefault()

})

// Have the text in the <p> tag with id="first-read-more-text" slide down using .slideDown() and display the "Read Less" link using .show()
// Hide the relevant "Read More" using .hide()
	$("first-read-more-text").slideDown
	$(".read-less").show()
	$(".read-more").hide()

// If a user clicks "Read Less" on the first post:
// Select the appropriate DOM elements with CSS selectors upon a user's click, using the $.click() handler

$(".read-less").click(function(){
}

// If a user clicks "Read More" on the first blog post
// Have the <p> with id="first-read-more-text" slide up using .slideUp() and hide the "Read Less" link using .hide()
// Show the relevant "Read More" link using .show()

$(".read-more").click(function(){
	$("first-read-more-text").slideUp()
	$("read-less").hide()
	$("read-more").show()
}

// If a user clicks "Read More" on the second blog post
// Have the text in the <p> with id="second-read-more-text" slide down using .slideDown() and display "Read Less" link using .show()
// Hide the relevant "Read More" link using .hide()

$(".read-more").click(function(){
	$("second-read-more-text").slideDown()
	$("read-less").show()
	$("read-more").hide()
}

// If a user clicks "Read Less" on the second post:
// Have the <p> with id="second-read-more-text" slide up using .slideUp() and hide the "Read Less" link using .hide()
// Show the relevant "Read More" link using .show()

$(".read-less").click(function(){
	$("second-read-more-text").slideUp()
	$("read-less").hide()
	$("read-more").show()
}	
})