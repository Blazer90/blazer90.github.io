function onClick1() {
	$('.js-styles').css({
		backgroundColor: "#d0d0d0",
		color: "#5c5c5c"
	});
}

function onClick2() {
	$('.js-styles').css({
		backgroundColor: "#393939",
		color: "#d0d0d0"
	});
}

function onClick3() {
	$('#js-blocks').append('<div class="js-blocks_add">'+'</div>');
}

function delValue1() {
	$('.js-blocks_add').remove();
}

function onClick4() {
	var first = $('.js-math_first').val();
	var second = $('.js-math_two').val();
	var result = first*second;
	$('.js-math_res').val(result);
}
