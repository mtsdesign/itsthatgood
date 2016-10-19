$('document').ready(){

	var $msgArea = $('msgArea').text,
		$inputBox = $('inputBox').val

	$msgArea.on('keyup', function () {
		$msgArea = $inputBox;
	})

}//doc ready