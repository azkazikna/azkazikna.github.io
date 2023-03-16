// dark mode toggle
const html = document.querySelector('html');
const logo = document.querySelector('.logo');
const toggleMode = document.getElementById('toggleMode');

toggleMode.addEventListener('change', ()=>{
  html.classList.toggle('dark');
})

//animation loading
paceOptions = {
    ajax: true,
    document: true,
    eventLag: false,
    restartOnRequestAfter: false
};

Pace.on('done', function() {
    $('.p').delay(500).animate({top: '30%', opacity: '0'}, 3000,
    $.bez([0.19, 1, 0.22, 1]));

<<<<<<< HEAD
    $("#preloader").delay(1500).animate({top: '-1000'}, 2000, $.bez([0.19, 1, 0.22, 1]));
=======
   $("#preloader").delay(1500).animate({top: '-1000'}, 2000, $.bez([0.19, 1, 0.22, 1]));
>>>>>>> d05f5594f8e0884326d39c64bf37daaae2c128ad
});

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
// function contentAnimation() {
//     var tl = gsap.timeline();
//     tl.from(".animate-this", { duration: 1, y: 30, opacity: 0, stagger: 0.4, delay: 1 });
//     var tl2 = gsap.timeline();
//     tl2.from(".animate-this2",{x: -30, duration: 1, opacity: 0, stagger: 1, delay:1 });
// }

// function contentAnimationStart() {
//     var tl = gsap.timeline();
//     tl.from(".animate-this", { duration: 1, y: 30, opacity: 0, stagger: 0.4});
//     var tl2 = gsap.timeline();
//     tl2.from(".animate-this2",{x: -30, duration: 1, opacity: 0, stagger: 1});
// }

// contentAnimationStart();

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

var typed = new Typed('#typed', {
    strings: ['Hi, my name is', 'Bonjour, je m\'appelle', 'こんにちは、私の名前は', 'Hallo, mein Name ist', 'Hallo, mijn naam is', 'Olá, o meu nome é', 'Hola, me llamo', 'Salve, il mio nome è', 'Привіт, мене звати', 'Bună ziua, numele meu este'],
    typeSpeed: 20,
    showCursor: false,
    loop: true
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
          slidesPerView: 3,
          spaceBetween: 40
        },
        1520: {
            slidesPerView: 4,
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
            // document.querySelector('.ryanada').style.display = "none";
            // document.querySelector('.destiny').style.display = "none";
            document.querySelector('.ellysoft').style.display = "none";
        } 
    });

    // ryanadaButton.addEventListener('click', function() {
    //     this.setAttribute('checked', 'checked');
    //     if (this.checked) {
    //         document.querySelector('.weza').style.display = "none";
    //         document.querySelector('.ryanada').style.display = "block";
    //         document.querySelector('.destiny').style.display = "none";
    //         document.querySelector('.ellysoft').style.display = "none";
    //     } 
    // });

    // destinyButton.addEventListener('click', function() {
    //     this.setAttribute('checked', 'checked');
    //     if (this.checked) {
    //         document.querySelector('.weza').style.display = "none";
    //         document.querySelector('.ryanada').style.display = "none";
    //         document.querySelector('.destiny').style.display = "block";
    //         document.querySelector('.ellysoft').style.display = "none";
    //     } 
    // });

    ellysoftButton.addEventListener('click', function() {
        this.setAttribute('checked', 'checked');
        if (this.checked) {
            document.querySelector('.weza').style.display = "none";
            // document.querySelector('.ryanada').style.display = "none";
            // document.querySelector('.destiny').style.display = "none";
            document.querySelector('.ellysoft').style.display = "block";
        } 
    });
}

work();

gsap.registerPlugin(ScrollTrigger, Text);

gsap.from(".animate-paragraf", {
    duration: 1.5,
    yPercent: 100,
    ease: "power4",
    stagger: 0.1
  });
  
