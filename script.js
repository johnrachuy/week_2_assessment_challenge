$(document).ready(function() {
	
	$('#add-button').on('click', function() {
    	$("input-container").append('<button class="delete">Delete</button>');
    	$("input-container").append('<button class="change">Change</button>');


});