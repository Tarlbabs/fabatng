let navBarElement = document.querySelector(".navbar");
let navBarSpan = document.querySelectorAll(".nav-link-span");

/**
 * To animate the div section on appearing on the vieport
 */
const animateOnViewPort = () => {
    let mainSection = document.querySelectorAll(".main__section");
    mainSection.forEach((item) => {
        /**
         * scroll reveal function imported from the script requested in the head tag
         */
        ScrollReveal({
            duration: 1000
        }).reveal(item, {
            delay: 300
        });
    });
}
/**
 * Slider effect for the testimonial
 */
const slideRight = () => {

}
const slideLeft = () => {

}
window.addEventListener("scroll", () => {
    let navBarElementOffset = navBarElement.offsetTop;
    if (window.pageYOffset > navBarElement.offsetTop) {
        navBarElement.classList.add("navbar--sticky");
        navBarSpan.forEach((item) => {
            item.classList.add("nav-link-span--backgroundColor");
        })
        document.querySelector(".header").style.paddingTop = "0px";
        // console.log("Hello")
    } else {
        navBarElement.classList.remove("navbar--sticky");
        navBarSpan.forEach((item) => {
            item.classList.remove("nav-link-span--backgroundColor");
        })
        document.querySelector(".header").style.paddingTop = "40px";
        // console.log("no hello")
    }
    // animateOnViewPort();
    // animateMainSection();
});
window.addEventListener("load", () => {
    // animateMainSection();
    animateOnViewPort();
    let navLinkDropDownTrigger = document.getElementById("nav_link_trigger");
    let dropDownStatus = false;
    navLinkDropDownTrigger.addEventListener("click", () => {
        if (dropDownStatus == false) {
            document.querySelector(".nav-links").classList.add("link-animate");
            document.querySelector(".nav-links").style.display = "flex";
            console.log("should effect");
        } else {
            document.querySelector(".nav-links").classList.remove("link-animate");
            document.querySelector(".nav-links").classList.add("link-animate-close");

            setTimeout(() => {
                document.querySelector(".nav-links").classList.remove("link-animate-close");
                document.querySelector(".nav-links").style.display = "none";

            }, 900);

        }
        dropDownStatus = !dropDownStatus;
    });
});