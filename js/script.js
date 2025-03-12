
// Create a parallax effect for banner image and text
window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    let banner = document.querySelector("header.banner");
    let bannerText = document.querySelector(".banner-text");
    let bannerTextTranslate = document.querySelector(".banner-text-translate");

    // Set direction and speed of parallax effect for banner image and text
    banner.style.backgroundPositionY = scrollPosition * -0.08 + "vw";
    bannerText.style.transform = `translateY(${scrollPosition * 0.09}vw)`;
    bannerText.style.opacity = 1 - scrollPosition / 150; // Text fade effect as user scrolls down
    bannerTextTranslate.style.transform = `translateY(${scrollPosition * 0.09}vw)`;
    bannerTextTranslate.style.opacity = 1 - scrollPosition / 150; // Text fade effect as user scrolls down
});