/* Funcion para mostrar y oculatr el  menu */
const navToggle = document.querySelector(".header_nav_toggle");
const navMenu = document.querySelector(".header_nav_menu");

const header = document.querySelector(".header");/*Esto es solo por detalles de apariencias, pero no esnecesario (por el tema del backDrop blur en la cabecerea) */

//cuando le doy click al navToggle
navToggle.addEventListener("click", () => {/*funcion anonima, pude haber utilizado la de abajo*/
  navMenu.classList.toggle("header_nav_menu_visible");//esto es todo este togle lo que hace es que si el elemento no tiene esa clase pues se la agrega y si la tiene se la quita y esa clase solo va estar disponible cuando la resolucion es menor a 785 y la configuracaion ya esta hecha en el css
  header.classList.toggle("header_new");/* ni esto, son solo detalles (backdrop blur en la cabecera)*/
});


const navMenuList = navMenu.querySelectorAll("a");

function closeOpenNavMenu() {
  navMenu.classList.toggle("header_nav_menu_visible");//esto es todo este togle lo que hace es que si el elemento no tiene esa clase pues se la agrega y si la tiene se la quita y esa clase solo va estar disponible cuando la resolucion es menor a 785 y la configuracaion ya esta hecha en el css
  header.classList.toggle("header_new");/* ni esto, son solo detalles */
}

navMenuList.forEach(element => {/* recorro mi lista para aplicarle el addEvent */
  element.addEventListener("click", closeOpenNavMenu);
});



document.getElementById("botonIdiomas").onclick = function(event) {
  event.stopPropagation(); 

  let listaIdiomas = document.getElementById("listaIdiomas");

  if (listaIdiomas.style.display === "block") {
      listaIdiomas.style.display = "none"; 
  } else {
      listaIdiomas.style.display = "block"; 
  }
};


document.onclick = function() {
  document.getElementById("listaIdiomas").style.display = "none";
};


function loadContent(language) {
  let file = '';
  switch (language) {
      case 'es':
          file = 'contenido/descripcion/descripcion_es.txt';
          break;
      case 'en':
          file = 'contenido/descripcion/descripcion_en.txt';
          break;
      case 'fr':
          file = 'contenido/descripcion/descripcion_fr.txt';
          break;
  }

  fetch(file)
      .then(response => response.text())
      .then(data => {
          document.getElementById('descripcion').innerText = data;
      })
      .catch(error => {
          console.error('Hubo un problema con la operación fetch:', error);
      });
}



let isScrolling = false;

window.addEventListener('wheel', (event) => {
  if (!isScrolling) {
      isScrolling = true;
      const sections = document.querySelectorAll('section');
      let currentSectionIndex = -1;

      sections.forEach((section, index) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (pageYOffset >= sectionTop - 60 && pageYOffset < sectionTop + sectionHeight - 60) {
              currentSectionIndex = index;
          }
      });

      if (currentSectionIndex >= 0) {
          const nextSection = sections[currentSectionIndex + 1];
          const prevSection = sections[currentSectionIndex - 1];

          setTimeout(() => {
              if (event.deltaY > 0 && nextSection) {
                  nextSection.scrollIntoView({ behavior: 'smooth' });
              } else if (event.deltaY < 0 && prevSection) {
                  prevSection.scrollIntoView({ behavior: 'smooth' });
              }
              isScrolling = false;
          }, 300);
      } else {
          isScrolling = false;
      }
  }
});


function changeLanguage(lang) {
  switch(lang) {
      case 'es':
          document.getElementById('selected-flag').src = 'images/banderas/España-flag.png';
          window.location.href = 'index_es.html';
          break;
      case 'en':
          document.getElementById('selected-flag').src = 'images/banderas//USA-flag.png';
          window.location.href = 'index_en.html';
          break;
      case 'fr':
          document.getElementById('selected-flag').src = 'images/banderas/Francia-flag.png';
          window.location.href = 'index_fr.html';
          break;
      default:
          document.getElementById('selected-flag').src = 'images/banderas/Traduccion1.png';
          window.location.href = 'index_es.html';
          break;
  }
}

// Mostrar/ocultar el botón de subir
window.onscroll = function() {
  let btnSubir = document.getElementById("btnSubir");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btnSubir.style.display = "block";
  } else {
      btnSubir.style.display = "none";
  }
};

// Función para desplazar hacia arriba
function subirInicio() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
