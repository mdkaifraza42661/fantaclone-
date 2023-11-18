var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        scroll: "body",
        scrub: true,
        // markers: true,
        start: "0 90%",
        end: "50% 70%"
    }
})
tl.to("#fnta", {
    top: "130%",
    left: "15%",
    // rotate: 360,
}, "orange"),
    tl.to("#orange2", {
        top: "160%",
        left: "70%",
        width: "15%",
        zIndex: 2

    }, "orange")
tl.to("#orange1", {
    top: "118%",
    left: "20%"

}, "orange")


var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".three",
        scroll: "body",
        scrub: true,
        // markers: true,/
        start: '-40% center',
        end: '50% center',
        // start: 'top center',
        // end: 'bottom center',
    }
})

tl2.from("#cocacola", {
    rotate: "-90degree",
    top: "20%",

}, "bottle")

tl2.from(".cardorange", {
    top: "50%",
    left: "11px",



}, "bottle")

tl2.from("#pepsi", {
    rotate: "90degree",
    top: "20%",

}, "bottle")
tl2.from(".cardyellow", {
    top: "50%",
    right: "15px",
}, "bottle")

tl2.to("#fnta", {
    top: "212%",
    left: "43%",
    width: "14%"
    // rotate: 360,
}, "bottle")
tl2.to("#orange1", {
    top: "200%",
    left: "41.3%",
    width: "18%"

}, "bottle")