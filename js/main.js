let nav = document.querySelector('.navbar');
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add('scroll');
    }
    else{
        nav.classList.remove('scroll');
    }
}

let link = document.querySelectorAll('.nav-link');
let collapse = document.querySelector('.navbar-collapse.collapse');
link.forEach(function(e){
    e.addEventListener('click', function(){
        collapse.classList.remove('show');
    })
})




// owl carusel 
$(document).ready(function(){
    $('.number-one').owlCarousel({
        items:4,
        loop:true,
        margin:10,
        dots:false,
        // nav:true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    })
})