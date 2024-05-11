document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    const wrapper = document.querySelector(".wrapper");
    const items = document.querySelectorAll(".item");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    let scrollPosition = 0;
    const itemWidth = items[0].offsetWidth;

    nextBtn.addEventListener("click", function () {
        scrollPosition += itemWidth;
        if (scrollPosition > wrapper.scrollWidth - container.offsetWidth) {
            scrollPosition = wrapper.scrollWidth - container.offsetWidth;
        }
        wrapper.style.transform = `translateX(-${scrollPosition}px)`;
    });

    prevBtn.addEventListener("click", function () {
        scrollPosition -= itemWidth;
        if (scrollPosition < 0) {
            scrollPosition = 0;
        }
        wrapper.style.transform = `translateX(-${scrollPosition}px)`;
    });
});
