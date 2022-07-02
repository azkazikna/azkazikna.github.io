// navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.getElementById('toTop');

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.add('hidden');
        toTop.classList.remove('flex');
    }
}

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
