$('document').ready(function () {

	var $msgArea = $('#msgArea').text,
		$inputBox = $('#inputBox')

	$inputBox.keyup(function () {
		$msgArea = $inputBox.val;
	})

})//doc ready