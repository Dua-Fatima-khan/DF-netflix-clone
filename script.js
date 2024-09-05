
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 2, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,}})