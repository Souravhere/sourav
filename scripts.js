// Create GSAP timelines
const tl = gsap.timeline();
const tl2 = gsap.timeline();

// Define animations
tl.from('.nav-left, .nav-right li', {
    y: -100,
    duration: 0.5,
    stagger: 0.3
});

tl2.from('.hero-top-left, .span-dots', {
    x: -100,
    opacity: 0,
    duration: 0.5
})
.from('.hero-top-right', {
    opacity: 0
})
.from('.hero-bottom img', {
    y: 100,
    opacity: 0
})
.from('.arrow-round', {
    y: -100,
    opacity: 0
});

// Animation for service section
gsap.from('.service-card:nth-child(2), .service-card:nth-child(4)', {
    x: 100,
    opacity: 0,
    duration: 0.1,
    scrollTrigger: {
        trigger: ".our-service-section",
        scroller: "body",
        start: "top 90%",
        end: "top 10%",
        scrub: 1
    }
});

gsap.from('.service-card:nth-child(3), .service-card:nth-child(5)', {
    x: -200,
    opacity: 0,
    duration: 0.1,
    scrollTrigger: {
        trigger: ".our-service-section",
        scroller: "body",
        start: "top 90%",
        end: "top 10%",
        scrub: 1
    }
});

// Animation for mid comment section
gsap.from('.mid-comment-section h1', {
    y: 100,
    opacity: 0,
    stagger: 1,
    scrollTrigger: {
        trigger: ".mid-comment-section",
        scroller: "body",
        start: "top 90%",
        end: "top 10%",
        scrub: 1
    }
});

// Animation for project section
gsap.from('.p-s-left', {
    x: -100,
    opacity: 0,
    duration: 0.3,
    scrollTrigger: {
        trigger: ".project-section",
        scroller: "body",
        start: "top 90%",
        end: "top 10%",
        scrub: 1
    }
});

gsap.from('.p-s-right', {
    x: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: ".project-section",
        scroller: "body",
        start: "top 90%",
        end: "top 10%",
        scrub: 1
    }
});

gsap.from('.project-section button', {
    x: -100,
    opacity: 0,
    scrollTrigger: {
        trigger: ".project-section",
        scroller: "body",
        start: "top 90%",
        end: "top 10%",
        scrub: 1
    }
});

gsap.from('.project-card', {
    y: 100,
    stagger: 0.4,
    opacity: 0,
    scrollTrigger: {
        trigger: ".project-main",
        scroller: "body",
        start: "top 90%",
        end: "top 20%",
        scrub: 1
    }
});

// Animation for footer
gsap.to('footer h2', {
    backgroundColor: 'transparent', // Set desired background color here
    opacity: 0,
    fontSize:200,
    scrollTrigger: {
        trigger: "footer",
        scroller: "body",
        start: "top 90%",
        end: "top 20%",
        scrub: 1,
        // markers: true
    }
});
