var k = document.getElementById("navContain")

function changeContain() {
    if (window.innerWidth >= 992 && window.innerWidth < 1200) {
      k.classList.remove("container");
      k.classList.add("container-fluid");
    }
    else {
      k.classList.remove("container-fluid");
      k.classList.add("container");
    }
}
