const navBtn = document.querySelector("#nav-btn");
const mobileMenu = document.querySelector("#mobile-menu");
const navBtnTop = document.querySelector("top");
const navBtnBottom = document.querySelector("bottom");
const navBtnMiddle = document.querySelector("middle");

// const navBtnStylesTop = "transform: translateY(15px) rotateZ(45deg);";
// const navBtnStylesBottom = "transform: translateY(-15px) rotateZ(-45deg);";
// const navBtnStylesMiddle = "width: 0;";

//show mobile nav
navBtn.addEventListener("click", function () {
  mobileMenu.classList.toggle("show-mobile-menu");
  navBtn.classList.toggle("menu-btn-x");
});

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 250;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".navbar a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".navbar a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

date.innerHTML = new Date().getFullYear();
