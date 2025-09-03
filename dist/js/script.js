const ScrollUp = document.querySelector
(".scroll-up");

window.onscroll = () => {
    if (window.scrollY > 500) {
        ScrollUp.classList.add("scroll-active");
    }
    else {
       ScrollUp.classList.remove
       ("scroll-active");
    }
};