/* Chance Subtitle */
  const texts = ["Developer FrontEnd", "RPA Developer"];
  let index = 0;
  let isDeleting = false;
  let textIndex = 0;
  let speed = 100;
  
  const typeWrite = () => {
    const typewrite = document.querySelector("#typewrite");
    const currentText = texts[textIndex];

    if(isDeleting && index <= currentText.length){
      typewrite.textContent = currentText.substring(0,index);
      index++;
      speed = 100;
    } else if(isDeleting && index >= 0){
      typewrite.textContent = currentText.substring(0,index);
      index--;
      speed = 50;
    }

    if(index > currentText.length){
      isDeleting = true;
    }
    if(index === 0 && isDeleting){
      isDeleting = false;

      if(textIndex < texts.length -1){
        textIndex++;
      }else{
        textIndex = 0;
      }
    }
    setTimeout(typeWrite, speed); 
  };
  window.addEventListener("load", typeWrite )



/* Menu Hamburguer */
function menuHambuguerActive() {
    navBar = document.querySelector(".nav-bar")
    navBarAtive = document.querySelector(".nav-bar.active")
    navBar.classList.toggle("active");
}

  window.addEventListener("resize", function (){
  const video = document.querySelector(".video");
  const section= document.querySelector(".section");
  const overlay = document.querySelector(".overlay");

  section.style.height = video.offsetHeight + "px";
  overlay.height = video.offsetHeight + "px";

  console.log(video.offsetHeight);

}, true);

/* Disabled menu Hamburguer after click */
function menuHambuguerNoActive() {
  navBar = document.querySelector(".nav-bar")
  navBarAtive = document.querySelector(".nav-bar.active")
  navBar.classList.toggle("active");
}

window.addEventListener('click', function (){
navBarAtive = document.querySelector(".nav-bar.active")

if(navBarAtive)
  navBar.classList.toggle("active");
}, true);




/* Download CV */

  document.getElementById("btn-download-cv").addEventListener("click", function(ev) {
  
    const divDownloadOk = document.getElementsByClassName("divBtn");  
     alert("Download realizado com sucesso!") 

     
    // Verifica se já existe um parágrafo com a classe "paragrafoDownloadOK"
    /* if (!divDownloadOk.getElementsByClassName("paragrafoDownloadOK")) {
      
      const paragrafo = document.createElement("p");
      paragrafo.classList = "paragrafoDownloadOK";
      paragrafo.innerHTML = "Download realizado com sucesso!";
  
      divDownloadOk.appendChild(paragrafo);
    }
  */});
  
/* Select Menus */

let itemMenu = document.querySelectorAll('.itemMenu')

function selectLink(){
  itemMenu.forEach((item)=>
    item.classList.remove('active')
  )
  this.classList.add('active')
}

itemMenu.forEach((item)=>
  item.addEventListener('click', selectLink)
)


