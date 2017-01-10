function onClick1() {
	$('.js-styles').css({
		backgroundColor: "#d0d0d0",
		color: "#5c5c5c"
	});
};

function onClick2() {
	$('.js-styles').css({
		backgroundColor: "#393939",
		color: "#d0d0d0"
	});
};

function onClick3() {
	$('#js-blocks').append('<div class="js-blocks_add">'+'</div>');
};

function delValue1() {
	$('.js-blocks_add').remove();
};

$(document).ready(function() {
	$('.js-math_count').click(function () {
		var first = $('.js-math_first').val() *1;
		var second = $('.js-math_two').val() *1;
		var result = first*second;
		$('.js-math_res').val(result);
	});
	$('.js-math_count_2').click(function () {
		var first = $('.js-math_first').val() *1;
		var second = $('.js-math_two').val() *1;
		var result = first/second;
		$('.js-math_res').val(result);
	});
	$('.js-math_count_3').click(function () {
		var first = $('.js-math_first').val() *1;
		var second = $('.js-math_two').val() *1;
		var result = first+second;
		$('.js-math_res').val(result);
	});
	$('.js-math_count_4').click(function () {
		var first = $('.js-math_first').val() *1;
		var second = $('.js-math_two').val() *1;
		var result = first-second;
		$('.js-math_res').val(result);
	});
});



$(document).ready(pogoda);

function pogoda(){
    $(function(){
        $(".main-content_js_pogoda").selectable({
            selected: function(event, ui) {
                var a=ui.selected;
                if ($(a).hasClass("main-content_js_pogoda_mon")){
                    $(".main-content_js_pogoda_result").text("В понедельник будет солнечно, +26");
                }
                else if ($(a).hasClass("main-content_js_pogoda_tue")){
                    $(".main-content_js_pogoda_result").text("Во вторник будет ветренно, +23");
                }
                else if ($(a).hasClass("main-content_js_pogoda_wed")){
                    $(".main-content_js_pogoda_result").text("В среду возможен дождь, +20");
                }
                else if ($(a).hasClass("main-content_js_pogoda_thu")){
                    $(".main-content_js_pogoda_result").text("В четверг будет гроза и сильный ветер, +20");
                }
                else if ($(a).hasClass("main-content_js_pogoda_fry")){
                    $(".main-content_js_pogoda_result").text("В пятницу пойдет снег, -8");
                }
                else if ($(a).hasClass("main-content_js_pogoda_sat")){
                    $(".main-content_js_pogoda_result").text("В субботу ожидается сильный град, +16");
                }
                else if ($(a).hasClass("main-content_js_pogoda_sun")){
                    $(".main-content_js_pogoda_result").text("В воскресенье будет отличная солнечная погода, +29");
                }
            }
        })
    });
};


$(document).ready(drag);

function drag(){
  $(".main-content_js_drag_block").draggable();
}
