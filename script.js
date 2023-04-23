function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
      x.style.width = "280px";
    } else {
      x.className = "navbar";
      x.style.width = "50px";
    }
  }