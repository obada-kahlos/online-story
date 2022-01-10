$(document).ready(function() {


    // raiting star

    /* 1. Visualizing things on Hover - See next part for action on click */
    $('#stars li').on('mouseover', function() {
        var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

        // Now highlight all the stars that's not after the current hovered star
        $(this).parent().children('li.star').each(function(e) {
            if (e < onStar) {
                $(this).addClass('hover');
            } else {
                $(this).removeClass('hover');
            }
        });

    }).on('mouseout', function() {
        $(this).parent().children('li.star').each(function(e) {
            $(this).removeClass('hover');
        });
    });
    /* 2. Action to perform on click */
    $('#stars li').on('click', function() {
        var onStar = parseInt($(this).data('value'), 10); // The star currently selected
        var stars = $(this).parent().children('li.star');

        for (i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('selected');
        }

        for (i = 0; i < onStar; i++) {
            $(stars[i]).addClass('selected');
        }
    });

    // scroll to top 
    var scrollButtom = $("#scroolup");
    $(window).scroll(function() {

        if ($(this).scrollTop() >= 300) {
            scrollButtom.fadeIn(1000);
        } else if ($(this).scrollTop() <= 300) {
            scrollButtom.fadeOut(1000);
        }
    })
    scrollButtom.click(function() {
        $("html,body").animate({ scrollTop: 0 }, 1000);
    })

   
    // start looding page 
    $(".loading-overlay .loader").fadeOut(4000,function(){
        $(this).parent().fadeOut(1000,function(){

            $("body").css("overflow","auto")
            $(".loading-overlay").remove()

        })
    })
    

    //  Start NiceScroll       
    $("html").niceScroll({
        cursorcolor:"#00f",
        cursorwidth:"8px"
    });




});

$(function(){

    //featuers work shuffel
    $('.Various-products ul li').on('click' , function(){
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).data('class') === 'all'){
            $('.Various-products .images .col-sm-3').show();
        }else{
            $('.Various-products .images .col-sm-3').hide();
            $($(this).data('class')).show();
        }
    });

})

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});