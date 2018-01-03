$(function(){
	var $video, $index, $but, n=1, time, zIndex;

	$but = $('.right-part-1');
	$but.click(function(){
		videoPlay(n);
	})
	
	setTimeout(function(){
		$but.trigger('click');
	},500);

	var $triHeader = $('.right-part-2');
	
	$triHeader.click(function(){
		if($('.nav-header').hasClass('hide')) {
			$('.nav-header').removeClass('hide');
		}else {
			$('.nav-header').addClass('hide');
		}
		
	})
	
	function videoPlay(n){
		if(n <= 6) {
			$but.unbind('click');
			
			$index = $('.section .art' + n);
			zIndex = $index.css('zIndex');
			console.log(zIndex);
			$index.css('zIndex','10');
			$video = $('.video' + n);
			time = 1000*$video.get(0).duration;
			$('#main-nav .li'+n).animate({
				
			},time);
			$video.trigger('play');
			setTimeout(function(){
				$index.css('zIndex',zIndex);
				videoPlay(n+1);
				$video.get(0).currentTime = 0;
			},time);
		}
		if(n == 7){
			n=1;
			$but.click(function(){
				videoPlay(n);				
			})
			console.log('end');
		}
	}
})