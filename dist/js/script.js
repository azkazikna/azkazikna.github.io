// loading
function loading() {
    setTimeout(() => {
        const spinnerWrapper = document.querySelector('.spinner-wrapper');
        spinnerWrapper.style.top = '-100vh';
        contentAnimationStart();
    }, 2000)
};

loading();

// dark mode toggle
const html = document.querySelector('html');
const logo = document.querySelector('.logo');
const toggleMode = document.getElementById('toggleMode');

toggleMode.addEventListener('change', ()=>{
  html.classList.toggle('dark');
})


// animation transition
function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3,
    });
    tl.set(".loading-screen", { left: "-100%" });
}

// animation after transition
function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".animate-this", { duration: 1, y: 30, opacity: 0, stagger: 0.4, delay: 1 });
    var tl2 = gsap.timeline();
    tl2.from(".animate-this2",{x: -30, duration: 1, opacity: 0, stagger: 1, delay:1 });
}

function contentAnimationStart() {
    var tl = gsap.timeline();
    tl.from(".animate-this", { duration: 1, y: 30, opacity: 0, stagger: 0.4});
    var tl2 = gsap.timeline();
    tl2.from(".animate-this2",{x: -30, duration: 1, opacity: 0, stagger: 1});
}

contentAnimationStart();

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', function() {
    nav.classList.toggle('hidden');
    this.classList.toggle('hamburger-active');
});

// Klik diluar hamburger
window.addEventListener('click', function(e) {
    if(e.target != hamburger && e.target != nav) {
        hamburger.classList.remove('hamburger-active');
        nav.classList.add('hidden');
    }
});



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
});

var scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
});

// On scroll
scroll.on( 'scroll', ( instance ) => {

    // Sync positioning with GSAP ScrollTrigger
    ScrollTrigger.update();

    // Add direction to DOM
    document.documentElement.setAttribute( 'data-scrolling', instance.direction );

} );

// Tell ScrollTrigger to use these proxy methods
ScrollTrigger.scrollerProxy( '[data-scroll-container]', {
    scrollTop( value ) {
        return arguments.length ? scroll.scrollTo( value, 0, 0 ) : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector( '[data-scroll-container]' ).style.transform ? "transform" : "fixed"
} );

// Set ScrollTrigger defaults
ScrollTrigger.defaults( {
    scroller: '[data-scroll-container]'
} );

function work() {
    const wezaButton = document.getElementById('tabweza');
    const ryanadaButton = document.getElementById('tabryanada');
    const destinyButton = document.getElementById('tabdestiny');
    const ellysoftButton = document.getElementById('tabellysoft');

    if(wezaButton.checked) {
        document.querySelector('.weza').style.display = "block";
    }

    wezaButton.addEventListener('click', function() {
        this.setAttribute('checked', 'checked');
        if (this.checked) {
            document.querySelector('.weza').style.display = "block";
            document.querySelector('.ryanada').style.display = "none";
            document.querySelector('.destiny').style.display = "none";
            document.querySelector('.ellysoft').style.display = "none";
        } 
    });

    ryanadaButton.addEventListener('click', function() {
        this.setAttribute('checked', 'checked');
        if (this.checked) {
            document.querySelector('.weza').style.display = "none";
            document.querySelector('.ryanada').style.display = "block";
            document.querySelector('.destiny').style.display = "none";
            document.querySelector('.ellysoft').style.display = "none";
        } 
    });

    destinyButton.addEventListener('click', function() {
        this.setAttribute('checked', 'checked');
        if (this.checked) {
            document.querySelector('.weza').style.display = "none";
            document.querySelector('.ryanada').style.display = "none";
            document.querySelector('.destiny').style.display = "block";
            document.querySelector('.ellysoft').style.display = "none";
        } 
    });

    ellysoftButton.addEventListener('click', function() {
        this.setAttribute('checked', 'checked');
        if (this.checked) {
            document.querySelector('.weza').style.display = "none";
            document.querySelector('.ryanada').style.display = "none";
            document.querySelector('.destiny').style.display = "none";
            document.querySelector('.ellysoft').style.display = "block";
        } 
    });
}

work();

gsap.registerPlugin(ScrollTrigger);

gsap.from(".animate-paragraf", {
    scrollTrigger: {
        trigger: ".animate-paragraf",
        toggleActions: "play none none none"
    },
    opacity: 0,
    delay: 3,
    duration:3
})
