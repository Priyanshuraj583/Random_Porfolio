document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const rightNav = document.getElementById("right-nav");

    hamburger.addEventListener("click", () => {
        const isVisible = rightNav.getAttribute("data-visible") === "true";
        rightNav.setAttribute("data-visible", !isVisible);
    });
});
