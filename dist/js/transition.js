// tell Barba to use the prefetch module
barba.use(barbaPrefetch);
// Init Barba
barba.init({
    cacheIgnore: false,
    prefetchIgnore: false,
    timeout: 30000,
    transitions: [
        {
            // sync: true,
            // css classes will look like `.fade-xxx-[-xxx]`
            // name: 'fade',
            before({ current, next, trigger }) {
            },
            async leave({ current, next, trigger }) {
                const done = this.async();
                pageTransition();
                await delay(1000);
                done();
            },
            afterLeave({ current, next, trigger }) {
				scroll.destroy();
            },
            beforeEnter({ current, next, trigger }) {
            },
            enter({ current, next, trigger }) {
				scroll.init();
                work();
                const swiper = new Swiper('.swiper', {
                    // Optional parameters
                    direction: 'horizontal',
                    loop: true,
                    slidesPerView: 3,
                    spaceBetween: 30,
                    grabCursor: true,
                    autoHeight: true,
                    autoplay: {
                        delay: 3000
                    },
                    breakpoints: {
                        // when window width is >= 320px
                        320: {
                          slidesPerView: 1,
                          spaceBetween: 20
                        },
                        // when window width is >= 640px
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 40
                        },
                        1520: {
                            slidesPerView: 3,
                            spaceBetween: 40
                        }
                    },
                    // If we need pagination
                    pagination: {
                      el: '.swiper-pagination',
                    },
                  
                    // Navigation arrows
                    navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    },
                  
                    // And if we need scrollbar
                    scrollbar: {
                      el: '.swiper-scrollbar',
                    },
                });
            },
			after({ current, next, trigger }) {
				scroll.update();
                contentAnimation();
            },
        }
    ]
});