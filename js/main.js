let cursor = $('.cursor');
let title = $('.slider__left-text');
let hover = $('.hover, .logo, .list-social');

$(window).on('mousemove', function (e) {
    console.log('mousemove');
    gsap.to(cursor, {
        x: e.clientX - (cursor.width() / 2), // lay toa do mouse x
        y: e.clientY - (cursor.height() / 2),// lay toa do mouse y - () de cho vao trong tam mouse
        duration: 0.1
    })
    // gsap.to(cursorFollow, {
    //     x: e.clientX - (cursorFollow.width() / 2), // lay toa do mouse x
    //     y: e.clientY - (cursorFollow.height() / 2),// lay toa do mouse y - () de cho vao trong tam mouse
    //     duration: 0.2
    // })
})
title.on('mouseenter', function () { // hover text
    cursor.addClass('active') // cursor to len
})
title.on('mouseleave', function () { // hover text
    cursor.removeClass('active')
});
hover.on('mouseenter', function () { // hover text
    cursor.addClass('activee') // cursor to len
})
hover.on('mouseleave', function () { // hover text
    cursor.removeClass('activee')
});


//particles
particlesJS("particles-js", { "particles": { "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true })
//locomotive
// smooth scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('#js-scroll'),
    smooth: true,
    smoothMobile: true,
    inertia: 0.75
});

//tiltjs
$(document).ready(
    function () {
        $('.block').tilt({
            scale: 1.2,
            // 2 = 200%, 1.5 = 150%, etc..
            glare: true,
            maxGlare: .5
        });
    }
)
