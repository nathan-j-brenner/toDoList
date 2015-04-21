$(document).ready(function(){
	//add new item on todo list
	$('#the_button').click(function(){
		var input = $('input[name="todo"]').val()
		$newItem = $('<li><input type="checkbox" class="completeItem">' + input + '</li>').addClass("highlight")
		//does not allow items placed in list unless they have at least 1 character
		if(input.length > 0) {
			$('#theList').prepend($newItem);
			// $newItem.removeClass("highlight", "500");
			$('#todo').val('');
			$newItem.removeClass("highlight", 1000); // highlight class never appears
		}
	});
	//change class of items checked
	$('.completeItem').click(function(){
    	$(this).parent().toggleClass('complete');
	});
	//hides form within hamburger and shows when hamburger is clicked
	$('form').hide();
	$('.menu').click(function(){
		$('form').show(1000);
	});
	$('li').hover(function(){
		$(this)css.('background-color', 'red');
	});
});
