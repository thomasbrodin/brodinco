$(document).ready(function(){
		setTimeout(function() {
				$("#wrapper").removeClass("invisible");
				$(".preloader").removeClass("loading");
		}, 600);
		function resize(){
				var windowHeight = $(window).outerHeight(true);
				$('.section').css({ height:windowHeight});
		}
		
		
				$(window).on('resize',resize);
				resize();
		
});
