document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline();

    tl.from("#header", {
        y: 30,
        x: -30,
        opacity: 0,
        duration: 0.5,
    })

    tl.from(".pfp", {
        y:30,
        opacity: 0,
        duration: 0.8,
        onComplete: () => {
            document.documentElement.style.overflow = 'auto';
            document.body.style.overflow = 'auto';
        }
    })

    gsap.from(".aboutmeheader", {
        scrollTrigger: {
            trigger: ".aboutmeheader",
            start: "top 80%",
            toggleActions: "play none none none",
        },
        y: 30,
        opacity: 0,
        duration: 1.5,
    });

    const panels = gsap.utils.toArray(".panel");
    const pages = gsap.utils.toArray(".pages")

    panels.forEach((panel) => {
        gsap.from(panel, {
            scrollTrigger: {
                trigger: panel,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
            y:100,
            opacity:0,
            duration:1,
        })
    });

    pages.forEach((page) => {
        gsap.from(page, {
            scrollTrigger: {
                trigger: page,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
            y:100,
            opacity:0,
            duration:1,
        })
    });

    const serveranims = gsap.utils.toArray(".server")

    serveranims.forEach((servercard) => {
        gsap.from(servercard, {
            scrollTrigger: {
                trigger: servercard,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
            y:100,
            opacity:0,
            duration:1,
        })
    })
})