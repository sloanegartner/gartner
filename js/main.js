$(window).scroll(function(){
    $scroll = $(window).scrollTop();
    
    if ($scroll > 0) {
        $('#navbar').css('background', '#393D47');
    } else {
        $('#navbar').css('background', 'Transparent');
    }
});

//Reviews
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items: 2,
    smartSpeed: 600,

})
