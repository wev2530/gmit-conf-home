function redirectToMobile() {
    if (window.innerWidth >= 430){
      window.location.href="../../index.html"}
  }
  window.onload = redirectToMobile;
  window.onresize = redirectToMobile;

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
});



// Placeholder JavaScript
// Replace the countdown date with your actual event date

const countdown = () => {
    const countDate = new Date("oct 25, 2024 10:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    // Time calculations for weeks, days, hours, minutes, and seconds
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;

    const weeks = Math.floor(gap / week);
    const days = Math.floor((gap % week) / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    // Display the result in the elements with id
    document.getElementById("weeks").innerText = weeks;
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
};

// Run the countdown function every second
setInterval(countdown, 1000);



const countdown1 = () => {
    const countDate1 = new Date("oct 25, 2024 10:00:00").getTime();
    const now1 = new Date().getTime();
    const gap1 = countDate1 - now1;

    // Time calculations for weeks, days, hours, minutes, and seconds
    const second1 = 1000;
    const minute1 = second1 * 60;
    const hour1 = minute1 * 60;
    const day1 = hour1 * 24;
    const week1 = day1 * 7;

    const weeks1 = Math.floor(gap1 / week1);
    const days1 = Math.floor((gap1 % week1) / day1);
    const hours1 = Math.floor((gap1 % day1) / hour1);
    const minutes1 = Math.floor((gap1 % hour1) / minute1);
    const seconds1 = Math.floor((gap1 % minute1) / second1);

    // Display the result in the elements with id
    document.getElementById("weeks1").innerText = weeks1;
    document.getElementById("days1").innerText = days1;
    document.getElementById("hours1").innerText = hours1;
    document.getElementById("minutes1").innerText = minutes1;
    document.getElementById("seconds1").innerText = seconds1;
};

// Run the countdown function every second
setInterval(countdown1, 1000);






const bookASeat2 = document.querySelector(".navGet");

bookASeat2.addEventListener("click", function(){
    window.location.href = "https://lu.ma/49zk9vh8/"
})
