$('document').ready(function () {
	console.log('hello world');
	var $msgArea = $('#msgArea').html,
		$inputBox = $('#inputBox')

	$inputBox.keyup(function () {
		$msgArea = $inputBox.val;
		console.log($inputBox.val)
	})

})//doc ready