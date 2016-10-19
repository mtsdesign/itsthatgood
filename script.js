$('document').ready(function () {

	var $msgArea = $('#msgArea').html,
		$inputBox = $('#inputBox')

	$inputBox.keyup(function () {
		$msgArea = $inputBox.val;
	})

})//doc ready