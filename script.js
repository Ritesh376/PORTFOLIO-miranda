const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    lerp: 0.1, 
});



var tl = gsap.timeline();
tl.to("#page1", {
    y:'100vh',
    scale:0.5,
    duration: 0,
});
tl.to("#page1", {
    y: "0vh",
    duration: 2,
    delay: 1,
});
tl.to("#page1", {
    rotate: -360,
    scale: 1,
    duration: 1,
    delay: 1,
    
});