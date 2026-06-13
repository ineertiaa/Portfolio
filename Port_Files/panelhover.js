const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {

    panel.addEventListener("mouseenter", () => {
        gsap.to(panel, {
            scale: 1.03,
            duration: 0.2,
            ease: "power1.out",
        })
    });

    panel.addEventListener("mouseleave", () => {
        gsap.to(panel, {
            scale: 1,
            duration: 0.2,
            ease: "power1.out",
        })
    });

    panel.addEventListener("click", () => {
        gsap.to(panel, {
            scale: 0.9,
            duration: 0.1,
            ease: "power1.out",
        })
    })
})

const serverpanels = document.querySelectorAll(".server");

serverpanels.forEach((sp) => {
    sp.addEventListener("mouseenter", () => {
        gsap.to(sp, {
            scale: 1.03,
            duration: 0.2,
            ease: "power1.out",
        })
    });

    sp.addEventListener("mouseleave", () => {
        gsap.to(sp, {
            scale: 1,
            duration: 0.2,
            ease: "power1.out",
        })
    });

    sp.addEventListener("click", () => {
        gsap.to(sp, {
            scale: 0.9,
            duration: 0.1,
            ease: "power1.out",
        })
    })
})