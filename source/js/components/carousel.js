import 'owl.carousel'

$('.treatments .carousel').owlCarousel({
    navigation : false,
    responsive:{
        320:{
            items:1,
        },
        1150:{
            items:2
        }
    }
})

$('.prev').click(function () {
    $('.carousel').trigger('prev.owl.carousel', [300])
})

$('.next').click(function () {
    $('.carousel').trigger('next.owl.carousel')
})

$('.about .carousel').owlCarousel({
    items: 1
})

$('.banner .carousel, .banner .carousel-mobile').owlCarousel({
    items: 1,
    autoplay: true
})

$('.testmonials .carousel').owlCarousel({
    items: 1
})