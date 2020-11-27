$(document).ready(function() {
    $('.main-slider').slick({
        accessibility: true,
        dots: false,
        nav: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $("#mbl-nav").click(function() {
        $(".menu-content").addClass("show-mobile");

    });

    $(".close-btn").click(function() {
        $(".menu-content").removeClass("show-mobile");
    });

    let box = document.querySelector('.half-width');
    let sliderwidthleft = box.offsetWidth - 0;
    let sliderwidthright = box.offsetWidth + 80;
    let sliderheight = box.offsetHeight - 80;

    if ($(window).width() < 768) {
        // $("button.slick-prev").addClass("test");
        $("button.slick-prev").css("top", sliderheight);
        // $("button.slick-next").addClass("test");
        $("button.slick-next").css("top", sliderheight);
    } else {
        // $("button.slick-prev").addClass("test");
        $("button.slick-prev").css("left", sliderwidthleft);
        // $("button.slick-next").addClass("test");
        $("button.slick-next").css("left", sliderwidthright);
    }
});