function buttonClick() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
      x.style.width = "280px";
    } else {
      x.className = "navbar";
      x.style.width = "60px";
    }
  }
function mainClick() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
    } else {
      x.className = "navbar";
      x.style.width = "60px";
    }
  }