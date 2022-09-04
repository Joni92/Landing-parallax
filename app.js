function splitScroll(){
    const constroller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: "200%",
        triggerElement: '.about-title',
        triggerHook: 0
    })
    .setPin('.about-title')
    /* Lock and unlock to see triggers on the screen  */
    /* .addIndicators() */
    .addTo(constroller);
}

splitScroll();