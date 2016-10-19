$( document ).ready(function() {

	console.log('hello world');
	var $msgArea = $('#msgArea'),
		$inputBox = $('#inputBox')

	$inputBox.keyup(function () {
		$msgArea.html($inputBox.val())
		console.log($inputBox.val())
	})

});