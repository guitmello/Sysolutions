/* Autor: Guilherme de Mello */

/* Slider Letter */
$(function(){
    $("#head-title").typed({
        strings: ["Segurança acima de tudo^1000", "Em Ter a preferência do cliente^1000", "O Melhor Custo x Benefício^1000"],
        typeSpeed: 50,
        loop: true,
        startDelay: 100
    });
});

/* Nav Change */
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".navbar-brand img").removeClass("img-brand");
        $(".navbar-brand img").addClass("new-brand");

        $("nav").removeClass("transparent");
        $("nav").addClass("nav-flat");

    } else {
        $(".navbar-brand img").removeClass("new-brand");
        $(".navbar-brand img").addClass("img-brand");

        $("nav").removeClass("nav-flat");
        $("nav").addClass("transparent");
    }
});

/* Carousel Parceiros */
$("#owl-parceiros").owlCarousel({
    items : 3,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [980,2],
    itemsTablet: [768,2],
    autoPlay : 2000,
    stopOnHover : true,
    pagination : false
});


/* Carousel Clientes */
$("#owl-clientes").owlCarousel({
    items : 3,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [980,2],
    itemsTablet: [768,2],
    autoPlay : 2000,
    stopOnHover : true,
    pagination : false
});

