let navBarElement = document.querySelector(".navbar");
let navBarSpan = document.querySelectorAll(".nav-link-span");

/**
 * To animate the div section on appearing on the vieport
 */
// eslint-disable-next-line no-unused-vars
const animateOnViewPort = () => {
    let mainSection = document.querySelectorAll(".main__section");
    mainSection.forEach((item) => {
        /**
         * scroll reveal function imported from the script requested in the head tag
         */
        // eslint-disable-next-line no-undef
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


let testimonialId;
let triggerSliderButton = document.querySelectorAll(".slider-trigger-button");
const automaticSLider = (counter) => {
    // console.log(counter)
    let testimonialElements = document.querySelectorAll(".slider__testimonial");

    testimonialElements.forEach(item => {
        item.style.display = "none";
    });
    triggerSliderButton.forEach(item => {
        item.style.backgroundColor = "rgb(42, 14, 2)";
    });
    testimonialElements[counter].style.display = "flex";
    triggerSliderButton[counter].style.backgroundColor = "#ffffff";
    counter = (counter <= 1) ? counter + 1 : 0;
    testimonialId = setTimeout(() => {
        automaticSLider(counter);
    }, 3500);

}

/**
 * screen button clicked effect
 */
const screenButtonEffects = () => {
    let screensButton = document.querySelectorAll(".rounded__anchor-screens");
    let sliderScreenImageCollection = document.querySelectorAll(".slider__screen-image");
    for (let screenButtonItem = 0; screenButtonItem < screensButton.length; screenButtonItem++) {
        for (let sliderScreenImageElement = 0; sliderScreenImageElement < sliderScreenImageCollection.length; sliderScreenImageElement++) {
            if (screenButtonItem == sliderScreenImageElement) {
                screensButton[screenButtonItem].addEventListener("click", () => {
                    screensButton.forEach(item => {
                        item.classList.remove("active-anchor");
                    })
                    sliderScreenImageCollection.forEach((item) => {
                        item.style.display = "none";
                    })
                    screensButton[screenButtonItem].classList.add("active-anchor");
                    sliderScreenImageCollection[sliderScreenImageElement].style.display = "flex";
                });
            }
        }
    }
}

// eslint-disable-next-line no-unused-vars
function slide(index) {
    console.log("testimonial id : ", testimonialId);
    clearInterval(testimonialId);
    automaticSLider(index);
}

/**
 * Screen slider
 */
let firstSlideScreenButtonLeft = document.querySelector("#screenButtonLeft");
let firstSlideScreenButtonRight = document.querySelector("#screenButtonRight");
let secondSlideScreenButtonLeft = document.querySelector("#secondScreenButtonLeft");
let secondSlideScreenButtonRight = document.querySelector("#secondScreenButtonRight");
let counter = 0;
let secondCounter = 0;
const screenSlider = (determineCounter, index, elementCollection) => {
    for (let elementCounter = 0; elementCounter < elementCollection.length; elementCounter++) {
        elementCollection[elementCounter].style.display = "none";
    }
    console.log("index : ", index);
    if (index >= 0 && index < 2) {
        elementCollection[index].style.display = "flex";
        if (determineCounter == "counter") {
            counter++;
        } else {
            secondCounter++
        }
    } else {
        index = (index % 2 == 0) ? 0 : 1;
        console.log("Index else block : ", index);
        elementCollection[index].style.display = "flex";
        if (determineCounter == "counter") {
            counter = (counter % 2 == 0) ? 0 : 1;
            counter++;
        } else {
            secondCounter = (secondCounter % 2 == 0) ? 0 : 1;
            secondCounter++
        }
    }
}





firstSlideScreenButtonLeft.addEventListener("click", () => {
    let elementCollection = document.querySelectorAll(".slider__slider-item--screens--first-section");
    screenSlider("counter", counter - 1, elementCollection);
});

firstSlideScreenButtonRight.addEventListener("click", () => {
    let elementCollection = document.querySelectorAll(".slider__slider-item--screens--first-section");
    screenSlider("counter", counter + 1, elementCollection);
});
secondSlideScreenButtonLeft.addEventListener("click", () => {
    let elementCollection = document.querySelectorAll(".slider__slider-item--screens--second-section");
    screenSlider("secondCounter", secondCounter - 1, elementCollection);
});
secondSlideScreenButtonRight.addEventListener("click", () => {
    let elementCollection = document.querySelectorAll(".slider__slider-item--screens--second-section");
    screenSlider("secondCounter", secondCounter + 1, elementCollection);
})


window.addEventListener("scroll", () => {
    if (window.pageYOffset > navBarElement.offsetTop) {
        navBarElement.classList.add("navbar--sticky");
        navBarSpan.forEach((item) => {
            item.classList.add("nav-link-span--backgroundColor");
        });
        document.querySelector(".header").style.paddingTop = "0px";
    } else {
        navBarElement.classList.remove("navbar--sticky");
        navBarSpan.forEach((item) => {
            item.classList.remove("nav-link-span--backgroundColor");
        });
        document.querySelector(".header").style.paddingTop = "40px";
        // console.log("no hello")
    }
});
window.addEventListener("load", () => {

    
    animateOnViewPort();
    automaticSLider(0);
    screenButtonEffects();


    let navLinkDropDownTrigger = document.getElementById("nav_link_trigger");
    const navLinkContainer = document.querySelector(".nav-links");
    const navLinkELement = document.querySelectorAll(".nav-links .nav-links__div");
    let dropDownStatus = false;


    navLinkDropDownTrigger.addEventListener("click", () => {
        if (dropDownStatus == false) {
            navLinkContainer.classList.add("link-animate");
            navLinkContainer.style.display = "flex";
            console.log("should effect");
        } else {
            navLinkContainer.classList.remove("link-animate");
            navLinkContainer.classList.add("link-animate-close");

            setTimeout(() => {
                navLinkContainer.classList.remove("link-animate-close");
                navLinkContainer.style.display = "none";

            }, 900);

        }
        dropDownStatus = !dropDownStatus;
        /**
         * to close the nav container whenever on of the links is clicked for mobile view
         */
        navLinkELement.forEach((item)=>{
            item.addEventListener("click",(event)=>{
                dropDownStatus = false;
                navLinkContainer.style.display = "none";
            })
        })
    });
    /**
     * this stores the slidder button for the testimonials
     */
    let testimonialTriggers = document.querySelectorAll(".slider-trigger-button");
    /**
     * to add event listener to each button
     */
    for (let triggerCounter = 0; triggerCounter < testimonialTriggers.length; triggerCounter++) {

        testimonialTriggers[triggerCounter].addEventListener("click", () => {
            slide(triggerCounter);

        })
    }
});