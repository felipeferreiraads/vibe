let didScroll
let lastScrollTop = 0
let delta = 5
let navbarHeight = $('header').outerHeight()

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled()
        didScroll = false
    }
}, 250);

function hasScrolled() {
    var st = $(window).scrollTop()
    
    if(st > navbarHeight + 100){
        $('header').css({
            'boxShadow': '0 0 2px rgba(0,0,0,0.3)'
        })
    } else {
        $('header').css({
            'boxShadow': 'none'
        })
    }
    
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    if (st > lastScrollTop && st > navbarHeight){
        $('header').removeClass('nav-down').addClass('nav-up')
    } else {
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down')
        }
    }
    
    lastScrollTop = st
}