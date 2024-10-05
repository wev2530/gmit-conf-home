const mNav = document.querySelector(".vector1000");

const mNav2 = document.querySelector(".vector100");

const mainNav = document.querySelector(".mainNav");

const global = document.querySelector(".global-nav-button-1");

mNav.addEventListener("click", function () {
    mainNav.classList.add("close")
    console.log("a button was clicked");
    global.classList.add("text")
})

mNav2.addEventListener("click", function () {
    mainNav.classList.remove("close")
    console.log("a button --- was clicked");
    global.classList.remove("text")
})