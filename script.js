window.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.getElementById("checkbox");

    checkbox.addEventListener("change", () => {
        // change theme
        document.body.classList.toggle("dark");

        const label = document.querySelector(".label");
        const ball = document.querySelector(".ball");
        const logo = document.querySelector(".logo-container h1");
        const p = document.querySelector("body p");
        const text_container1 = document.querySelector(".text-container1");
        const text_container1p = document.querySelector(".text-container1 p");
        const text_container2 = document.querySelector(".text-container2");
        const text_container2p = document.querySelector(".text-container2 p");
        const text_container3 = document.querySelector(".text-container3");
        const text_container3p = document.querySelector(".text-container3 p");
        const text_container4 = document.querySelector(".text-container4");
        const text_container4p = document.querySelector(".text-container4 p");
        const text_container5 = document.querySelector(".text-container5");
        const text_container5p = document.querySelector(".text-container5 p");

        label.classList.toggle("dark");
        ball.classList.toggle("dark");
        logo.classList.toggle("dark");
        p.classList.toggle("dark");
        text_container1.classList.toggle("dark");
        text_container1p.classList.toggle("dark");
        text_container2.classList.toggle("dark");
        text_container2p.classList.toggle("dark");
        text_container3.classList.toggle("dark");
        text_container3p.classList.toggle("dark");
        text_container4.classList.toggle("dark");
        text_container4p.classList.toggle("dark");
        text_container5.classList.toggle("dark");
        text_container5p.classList.toggle("dark");
    });
});
