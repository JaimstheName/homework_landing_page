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
	// $("first-read-more-text").slideDown
	// $(".read-less").show()
	// $(".read-more").hide()

// If a user clicks "Read Less" on the first post:
// Select the appropriate DOM elements with CSS selectors upon a user's click, using the $.click() handler

// If a user clicks "Read More" on the first blog post
// Have the <p> with id="first-read-more-text" slide up using .slideUp() and hide the "Read Less" link using .hide()
// Show the relevant "Read More" link using .show()

$("#first-read-more-button").click(function(){
	$("#first-read-more-text").slideDown()
	$("#read-less").hide()
	$("#read-more").show()
event.preventDefault()

})

$("#first-read-less-button").click(function(){
	$("#first-read-less-text").slideUp()
	$("#read-less").hide()
	$("#read-more").show()
event.preventDefault()

})
// If a user clicks "Read More" on the second blog post
// Have the text in the <p> with id="second-read-more-text" slide down using .slideDown() and display "Read Less" link using .show()
// Hide the relevant "Read More" link using .hide()

$("#second-read-more-button").click(function(){
	$("#second-read-more-text").slideDown()
	$("#second-read-less-button").show()
	$("#second-read-more-button").hide()
event.preventDefault()
});

// If a user clicks "Read Less" on the second post:
// Have the <p> with id="second-read-more-text" slide up using .slideUp() and hide the "Read Less" link using .hide()
// Show the relevant "Read More" link using .show()

$("#second-read-less-button").click(function(){
	$("#second-read-more-text").slideUp()
	$("#second-read-less-button").hide()
	$("#second-read-more-button").show()
event.preventDefault()
}	);
})