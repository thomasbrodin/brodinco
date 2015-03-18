$(document).ready(function(){
    $("#wrapper").removeClass("invisible");
    $('#wrapper').fullpage({
        menu: '#mainNav',
        verticalCentered: false,
        responsive: 900,
        scrollBar: true,
        scrollingSpeed: 900,
        anchors: ['today', 'network', 'services', 'contact'],
        css3:false,
        scrollOverflow: true,
        afterRender: function(){
            $("#network-list").load("inc/network.html");
            $("#clients-list").load("inc/clients.html");
            $("#services-list").load("inc/services.html");
        },
        onLeave: function (index, nextIndex, direction){
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
            $('.bg-color.middle').toggleClass('active', (index == 1 && direction == 'down' ) || (index == 3 && direction == 'up'));
        }
    });
});