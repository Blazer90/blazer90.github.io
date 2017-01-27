var remain_bv   = 271735;
function parseTime_bv(timestamp){
    if (timestamp < 0) timestamp = 0;
 
    var day = Math.floor( (timestamp/60/60) / 24);
    var hour = Math.floor(timestamp/60/60);
    var mins = Math.floor((timestamp - hour*60*60)/60);
    var secs = Math.floor(timestamp - hour*60*60 - mins*60); 
    var hour = Math.floor( (timestamp - day*24*60*60) / 60 / 60 );
 
    if(String(day).length > 1)
        $('div.info-block_content_1-col_timer_count_day').text(day);
    else
        $('div.info-block_content_1-col_timer_count_day').text("0" + day);

    if(String(hour).length > 1)
        $('div.info-block_content_1-col_timer_count_hour').text(hour);
    else
        $('div.info-block_content_1-col_timer_count_hour').text("0" + hour);
 
    if(String(mins).length > 1)
        $('div.info-block_content_1-col_timer_count_min').text(mins);
    else
        $('div.info-block_content_1-col_timer_count_min').text("0" + mins);

    if(String(secs).length > 1)
        $('div.info-block_content_1-col_timer_count_sec').text(secs);
    else
        $('div.info-block_content_1-col_timer_count_sec').text("0" + secs);
     
}
 
$(document).ready(function(){
    setInterval(function(){
        remain_bv = remain_bv - 1;
        parseTime_bv(remain_bv);
        if(remain_bv <= 0){
            alert('Hello');
        }
    }, 1000);
});

$(document).ready(function(){
  $('.order-block_form-container_form_submit').click(function(){
    $('.regestration-error').css('display', 'block');
  })
  $('.regestration-error_block_close').click(function(){
    $('.regestration-error').css('display', 'none');
  })
});





// $(document).ready(function(){
//   $('.order-block_form-container_form_submit').click(function (){
//     if ($('.order-block_form-container_form_name').val().length < 20) 
//       $('.regestration-error').css('display', 'block');
//     else
//         ($('.order-block_form-container_form_name').val().length > 30) 
//       $('.regestration-error').css('display', 'none');
//   });
// });
