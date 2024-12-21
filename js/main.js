document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("loaded", "slide-up");
          observer.unobserve(entry.target);
        }
      });
    });
  
    const slideUpElements = document.querySelectorAll(".slide-up");
    slideUpElements.forEach(element => {
      observer.observe(element);
    });
  });
  
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
    });
  }
  
  window.addEventListener('scroll', function () {
    var scrollTopButton = document.querySelector('.scroll-top');
    if (this.window.pageYOffset > 200) {
      scrollTopButton.style.display = 'block';
    } else {
      scrollTopButton.style.display = 'none';
    }
  });
  
  var swiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 10, // swipers de proyectos 
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    MouseEvent: true,
    effect: 'slide',
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });


  
// Objeto con las respuestas correctas para cada entrada
const respuestasCorrectas = {
  entrada1: "playback", // Sustituye 'respuestaCorrecta1' con la respuesta de la entrada 1
  entrada2: "playback", // Sustituye 'respuestaCorrecta2' con la respuesta de la entrada 2
  entrada3: "playback", // Sustituye 'respuestaCorrecta3' con la respuesta de la entrada 3
  entrada4: "Playback"  // Sustituye 'respuestaCorrecta4' con la respuesta de la entrada 4
};

// Función para mostrar u ocultar la pista con un efecto deslizante
function mostrarPista(entrada) {
  var pista = document.getElementById('pista' + entrada);
  
  // Verificar si la pista está visible
  if (pista.style.maxHeight && pista.style.maxHeight !== '0px') {
      // Si la pista está visible, la ocultamos con deslizamiento
      pista.style.maxHeight = '0'; // Contrae la pista
      setTimeout(function() {
          pista.style.display = 'none'; // Ocultamos el bloque después de la animación
      }, 10); // Esperamos el tiempo de la animación para ocultarlo
  } else {
      // Si la pista no está visible, la mostramos con deslizamiento
      pista.style.display = 'block'; // Aseguramos que el bloque esté visible
      setTimeout(function() {
          pista.style.maxHeight = '1200px'; // Expande la pista
      }, 10);
  }
}

// Función para comprobar la respuesta
function comprobarRespuesta(entrada) {
  var respuestaUsuario = document.getElementById('respuesta' + entrada).value.trim();
  var pista = document.getElementById('pista' + entrada);
  var respuestaCorrecta = respuestasCorrectas['entrada' + entrada];

  if (respuestaUsuario.toLowerCase() === respuestaCorrecta.toLowerCase()) {
      pista.classList.add('correcto');
      pista.classList.remove('incorrecto');
  } else {
      pista.classList.add('incorrecto');
      pista.classList.remove('correcto');
  }
}
