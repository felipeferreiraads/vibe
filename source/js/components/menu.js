$('.open-menu').on('click', function(e){
    e.preventDefault()
    $('.menu-mobile').css('right', 0)
    $('.overlay-menu').fadeIn(300)
})

$('.overlay-menu, .close-menu').on('click', function(e){
    e.preventDefault()
    $('.menu-mobile').css('right', -300)
    $('.overlay-menu').fadeOut(300)
})