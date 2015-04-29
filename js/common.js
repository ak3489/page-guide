var h = $(window).height();
$('.wrap').css('height', h);
$('.shade').css('height', h);
$('.col').hover(function(){
	$(this).find('.shade').css('display','none');
	$(this).addClass('col-bp');
	$(this).find('p').css({'background':'rgba(0,0,0,.5)','margin-right':'2em'})
},function(){
	$(this).find('.shade').css('display','block');
	$(this).removeClass('col-bp');
	$(this).find('p').css({'background':'none','margin-right':'2em'})
});


	

$(window).resize(function() {
	var h_1 = $(window).height();
	$('.wrap').css('height', h_1);
	$('.shade').css('height', h_1);
});