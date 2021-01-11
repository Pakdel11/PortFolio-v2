/** scroll to top */
const backToTop = document.querySelector("#topBtn");
const btnWork = document.querySelector(".btnWorks");
const trsBtn = document.querySelector(".transferBtn");
const trsBtnCont = document.querySelector(".btn-open-contact");
const header = document.querySelector(".header-dtl");
const logoTextI = document.querySelector(".logoTl");
const logoTextII = document.querySelector(".logoUtl");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 100) {
    if (!btnWork.classList.contains("transferBtn")) {
      btnWork.classList.add("transferBtn");
    }
  }else if(window.pageYOffset <= 100){
    if (btnWork.classList.contains("transferBtn")) {
      btnWork.classList.remove("transferBtn");
    }
  }
  if (window.pageYOffset > 300) {
    if (!backToTop.classList.contains("btnEntrance")) {
      backToTop.classList.add("btnEntrance");
      backToTop.classList.remove("btnExit");
      logoTextI.style.cssText = "opacity: 0; margin-left: -20%;";
      logoTextII.style.cssText = "opacity: 0;margin-left: -20%;";
      setTimeout(function () {
        backToTop.style.display = "block";
      }, 250);
      
    }
  } else {
    if (backToTop.classList.contains("btnEntrance")) {
      backToTop.classList.add("btnExit");
      backToTop.classList.remove("btnEntrance");
      logoTextI.style.cssText = "opacity: 1;margin-left: 0%;";
      logoTextII.style.cssText = "opacity: 1;margin-left: 0%;";
      setTimeout(function () {
        backToTop.style.display = "none";
      }, 250);

    }
  }


};



backToTop.addEventListener('click', backTo);

function backTo() {
  window.scrollTo(0, 0);
};


function menu(){

  var tglBtn = document.getElementById("tglBtn");
  var menu = document.querySelector(".menu-container");
  var links = document.getElementsByClassName("menu-link");
  var screen = document.querySelector(".screen");
  var counter = true
  screen.addEventListener("click", ()=>{
    menu.classList.remove("menu-open");
    screen.classList.remove("screendspd");
    counter = true
  });
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", ()=>{
      menu.classList.remove("menu-open");
      screen.classList.remove("screendspd");
      counter = true
    });
    
  }
  tglBtn.addEventListener("click", ()=>{
    if(counter == true){
      menu.classList.add("menu-open");
      screen.classList.add("screendspd");
      tglBtn.style.cssText = "z-index: 5;";
      counter = false
    }else if(counter == false){
      screen.classList.remove("screendspd");
      menu.classList.remove("menu-open");
      tglBtn.style.cssText = "z-index: 1;";      
      counter = true
    }
  })
}

menu();


// switch them

function switchThem(){
  var switchBtn = document.getElementById("username");
  var topBtn = document.getElementById("topBtn");
  var logo = document.querySelector(".logo");
  var toggleSwitch = true;
  
  switchBtn.addEventListener("click", ()=>{
    if (toggleSwitch == false) {
      document.body.style.background = "var(--whiteCC)";
      topBtn.style.cssText = "background: var(--bgCC);";
      // for (let i = 0; i < logo.length; i++) {
      //   logo[i].classList.add("nunactive-logo");
      // }
      
      toggleSwitch = true
    }
    else if(toggleSwitch == true){
      topBtn.style.cssText = "background: none;";
      document.body.style.background = "var(--bgCC)";
      toggleSwitch = false
    }
  })
}

switchThem();