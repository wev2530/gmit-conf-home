function redirectToMobile() {
    if (window.innerWidth <= 400){
      window.location.href="website/index.html";
    }
  }
  window.onload = redirectToMobile;
  window.onresize = redirectToMobile;