var loader = document.querySelector("#preloader");

window.addEventListener("load", function() {
  setTimeout(function() {
    loader.classList.add("hide");
    loader.addEventListener("transitionend",()=>{
        document.body.removeChild("preloader");
    })
  }, 1000);
});

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);


function reveal1() {
  var reveals = document.querySelectorAll(".reveal1");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal1);

function reveal2() {
  var reveals = document.querySelectorAll(".reveal2");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal2);

function up() {
  var reveals = document.querySelectorAll(".up");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
     
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", up);



function updateLiveTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById('live-time').textContent = timeString;
}

// Update the time every second (1000 milliseconds)
setInterval(updateLiveTime, 1000);

// Initial update
updateLiveTime();


 const menubtn=document.querySelector("#menu-btn")
 const menulist=document.querySelector("#menu-list")

 menubtn.addEventListener("click",()=>{
  menulist.classList.toggle("transition-visible");
  if(menulist.style.visibility=="visible"){
    menulist.style.visibility="hidden"
  }
  else{
    menulist.style.visibility="visible"
  }
 })