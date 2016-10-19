$( document ).ready(function() {

	console.log('hello world');
	var $msgArea = $('#msgArea'),
		$inputBox = $('#inputBox'),
		$inputLength = $('#inputBox').text()

	$inputBox.keyup(function () {
		$msgArea.html($inputBox.val())
		// console.log($inputBox.val())
		console.log($(this).val().length + "the input")
		
		if ($(this).val().length > 0) {
			$msgArea.removeClass();
			$msgArea.addClass('largeText');
		}

		if ($(this).val().length > 12) {
			$msgArea.removeClass();
			$msgArea.addClass('smallText');
		}


		if ($(this).val().length > 17) {

			$msgArea.removeClass();
			$msgArea.addClass('smallerText');
		};

		

		
		})

		
	

		

		

	

	


});