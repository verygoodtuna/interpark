var EVENT = new Swiper(".e_slide", {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,
    loopAdditionalSlides : 1,
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
        nextEl: ".slide_btn .next",
        prevEl: ".slide_btn .prev",
    },
});

var SHOP = new Swiper(".t_slide", {
    slidesPerView: 4,
    spaceBetween: 30,
});

// const TAB = document.querySelector(".main_shop .list>li")
// const SLIDE = document.querySelector(".tab_menu .tab")

// TAB.forEach((it, idx) => {
//     it.addEventListner('click', function(e){
//         e.preventDefault();
//         TAB[idx].classList.toggle('on');
//         //SLIDE[idx].classList.toggle('on');
//     })
// })

$(function () {
    $('.list .li').on('click', function (event) {
        var idx = $(this).index();

        $(this).addClass('on')
        .siblings().removeClass('on')

        $('.tab').eq(idx).addClass('on')
        .siblings().removeClass('on');
    })
})

