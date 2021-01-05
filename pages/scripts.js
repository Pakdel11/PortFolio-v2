

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




