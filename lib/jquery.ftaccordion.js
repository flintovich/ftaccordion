/*
 * jQuery ftaccordion 1.0
 * 
 * Copyright (c) 2013 Ruslan Suhorukov
 *
 * http://flintovich.ru/ftaccordion
 *
 */
(function($){
	$.fn.ftaccordion = function(options){
		var options = $.extend({
			activeClass: 'open',
			move: 'click',
			speed: 400,
			activeInset: 0,
			
			// Use without children
			maxHeight: false,
			stowage: true
		},options);
		
		return this.each(function(){
			
			// show content inset
			$('.ac-container').hide();
			
			$('.ac-click').bind(options.move,function(){
			
				$('.ac-container-false').removeClass('ac-container-false');
				if(options.stowage == false){				
					$('.open > .ac-click').next().addClass('ac-container-false');
				}
				
				// deleted class open 
				$('.'+options.activeClass).not($(this).parents('.ftaccordion .'+options.activeClass)).removeClass(options.activeClass);
				
				// deleted class open on siblings
				$(this).parent().siblings().removeClass(options.activeClass).find('.ac-container').animate({height: 'hide'},options.speed);	
				
				$(this).next().filter(function(){
					return $(this).not('.ac-container-false').css('display')=='block'
				}).animate({height: 'hide'}, options.speed).parent().removeClass(options.activeClass);
				
				$(this).next().filter(function(){
					return $(this).not('.ac-container-false').css('display')=='none'
				}).animate({height: 'show'},options.speed).parent().addClass(options.activeClass);
				
			});			
			
			// parametr active inset
			$('.ac-wrapper:nth-child('+options.activeInset+')').addClass(options.activeClass).children('.ac-container').css('display','block');
			
			// parametr maxHeight
			if( options.maxHeight == true){
				var maxHeight = Math.max.apply(null, $('.ac-container').map(function(){
					return $(this).height();
				}).get());
				$('.ac-container').css('height',maxHeight);
			}
		});
	};
})(jQuery);
