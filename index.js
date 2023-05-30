const toggle = document.querySelector(".toggle img");
const menu = document.querySelector(".header ul");

function togglemenu() {
  menu.classList.toggle("active");
  if(menu.classList.contains("active")){


      toggle.src="./images/icon-close.svg"
  }else {

      toggle.src="./images/icon-hamburger.svg"
  }
}
