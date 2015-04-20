$(document).ready(function(){
    setTimeout(function() {
        $("#wrapper").removeClass("invisible");
        $(".preloader").removeClass("loading");
    }, 600);
    var isTouch = Modernizr.touch;
    if(!isTouch){
        $('#wrapper').fullpage({
            menu: '#mainNav',
            verticalCentered: false,
            responsive: 900,
            scrollBar: true,
            scrollingSpeed: 800,
            anchors: ['today', 'network', 'services', 'contact'],
            css3:false,
            keyboardScrolling : true,
            touchSensitivity: 10,
            sectionsColor : ['','rgba(236, 235, 233, 0.8)','rgba(236, 235, 233, 0.9)','rgba(236, 235, 233, 0.9)'],
            loopBottom:true,
            loopHorizontal : false,
            afterRender: function(){
                $("#network-list").load("inc/network.html");
                $("#clients-list").load("inc/clients.html");
                $("#services-list").load("inc/services.html");
            },
            onLeave: function (index, nextIndex, direction){
                if ((index == 2 && direction == 'up') || (index == 4 && nextIndex == 1)) {
                    $("header").addClass('invisible');
                } else {
                    setTimeout(function() {
                        $("header").removeClass('invisible');
                    },800);
                }
                if (index == 2 && direction == 'down'){
                    $('.section').eq(index -1).removeClass('moveDown').addClass('moveUp');
                }
                else if(index == 2 && direction == 'up'){
                    $('.section').eq(index -1).removeClass('moveUp').addClass('moveDown');
                }
                if (index == 3 && direction == 'down'){
                    $('.section').eq(index -1).removeClass('moveDown').addClass('moveUp');
                }
                else if(index == 3 && direction == 'up'){
                    $('.section').eq(index -1).removeClass('moveUp').addClass('moveDown');
                }
                $('.bg-color.bottom').toggleClass('moveDown', nextIndex == 4);
                $('.bg-color.middle').toggleClass('move', (index == 1 && direction == 'down' ) || (index == 3 && direction == 'up'));
            },
            onSlideLeave: function( anchorLink, index, slideIndex, direction){
            if(index == 2 && slideIndex === 0 && direction == 'right'){
                $('.point').hide();
            }
            else if (index == 2 && slideIndex == 1 && direction == 'left'){
                setTimeout(function() {
                    $('.point').fadeIn();
                }, 800);
            }
            if(index == 3 && slideIndex === 0 && direction == 'right'){
                $('.arrow').hide();
            }
            else if (index == 3 && slideIndex == 1 && direction == 'left'){
                setTimeout(function() {
                    $('.arrow').fadeIn();
                }, 800);
            }
        }
        });
    }
});