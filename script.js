$('document').ready(function () {

	var $msgArea = $('msgArea').text,
		$inputBox = $('inputBox').val

	$msgArea.keyup(function () {
		$msgArea = $inputBox;
	})

})//doc ready