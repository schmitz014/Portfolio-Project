// responsive navbar
class MobileNavbar{
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this);
    this.navList.classList.toggle(this.activeClass);
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if(this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar (
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);

mobileNavbar.init();


// carousel js config 
const imgs = document.getElementById("img-carousel");
const img = document.querySelectorAll("#img-carousel img");

let idx = 0;
let widthImg = 350;
let intervalTimer = 7000;

function carousel() {
  idx++;

  if (idx > img.length - 1) {
    idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * widthImg}px)`;
}

function resizeResp() {
  if (window.innerWidth <= 950) {
    widthImg = 350;
  } else {
    widthImg = 880;
  }
}

resizeResp();
window.addEventListener('resize', resizeResp);

let intervalCarousel = setInterval(carousel, intervalTimer);