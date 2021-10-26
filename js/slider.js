const sponsor = new Swiper('.sponsor' , {
    loop:true,
    slidesPerView: 8,
    spaceBetween: 20,
    speed:1000,
    autoplay:{
        delay:400,
    },
    breakpoints: {
        280:{
            slidesPerView: 3,
        },
        769:{
             slidesPerView: 5,
        },
        1025:{
         slidesPerView: 8,
        },
    },
});