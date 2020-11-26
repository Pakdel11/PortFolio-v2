/** scroll to top */
const backToTop = document.querySelector("#topBtn");
const btnWork = document.querySelector(".btnWorks");
const trsBtn = document.querySelector(".transferBtn");
const trsBtnCont = document.querySelector(".btn-open-contact");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 100) {
    if (!btnWork.classList.contains("transferBtn")) {
      btnWork.classList.add("transferBtn");
      btnWork.innerHTML = '<img class="onChangeIcon" src="../../sourcefile/animatePage.svg" />';
    }
  }else if(window.pageYOffset <= 100){
    if (btnWork.classList.contains("transferBtn")) {
      btnWork.classList.remove("transferBtn");
      btnWork.innerHTML = 'WORKS <img class="fas fa-long-arrow-alt-right btn-vct"></img>';
    }
  }
  if (window.pageYOffset > 300) {
    if (!backToTop.classList.contains("btnEntrance")) {
      backToTop.classList.add("btnEntrance");
      backToTop.classList.remove("btnExit");
      setTimeout(function () {
        backToTop.style.display = "block";
      }, 250);

    }
  } else {
    if (backToTop.classList.contains("btnEntrance")) {
      backToTop.classList.add("btnExit");
      backToTop.classList.remove("btnEntrance");
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

