var counter = 0;

$(document).ready(function() {
	
	$('.generate').on('click', function() {
		counter++;
		$('.container').append('<div class="wrapper"></div>');
		var $el = $('.container').children().last();
		$el.append('<p>' + counter + '</p>');
		$el.append('<button class="delete">Delete</button>');
		$el.append('<button class="change">Change</button>');
	});

	$('.container').on('click', '.delete', function() {
		$(this).parent().remove();
	});

	$('.container').on('click', '.change', function() {
		$(this).parent().toggleClass('highlight');
	});

});