$(document).ready(function(){
    //$("#network").load("inc/network.html"); 
    //$("#clients").load("inc/clients.html"); 
    //$("#services").load("inc/services.html");
    $('body').scrollspy({ target: '#mainNav', offset:100 })
    $("#wrapper").removeClass("invisible");
    $('.nav li a').on('click', function() {
        var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 100;
        $('body,html').animate({
            scrollTop: scrollPoint
        }, 500);
        return false;
    });

	$window = $(window);
    $('.parallax[data-type="background"]').each(function(){
      var $bgobj = $(this);
       $(window).scroll(function() {
			var yPos = ($window.scrollTop() / $bgobj.data('speed'));
			var coords = + yPos + 'px';
			$bgobj.css({ top: coords });
		});
    });

    var logo = $("#hexLogo");
    var logoheight = logo.delay(8000).height();
    var title = $("#title-small");
    var container = $("header");
    var nav = $("#mainNav");
    var navitems = $("ul.nav li a");
    var scrollpos;

    $(window).scroll(function() {
       scrollpos = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset || 0;
        if (scrollpos < 0) {
            scrollpos = 0;
        }
        var resizecontainer;
        if (( 450 - scrollpos) < 0) {
            resizecontainer = 0;
        } else {
            resizecontainer = ((450 - scrollpos) + "px");
        }
        container.css({height: resizecontainer});
        logo.css({opacity: 1});
        if ((logoheight - scrollpos) < 150) {
            logo.css({opacity: 0 + (logoheight - scrollpos) / 150});
        }
        title.css({opacity: 0});
        nav.css({background: "transparent"});
        navitems.css({color: "white"});
        if (scrollpos > 410) {
            title.css({opacity: 1});
            nav.css({background: "white"});
            navitems.css({color: "black"});
        }
      });
});