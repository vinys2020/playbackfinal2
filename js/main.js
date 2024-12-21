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
  
  document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.lazyload');
    
    images.forEach(img => {
      img.addEventListener('load', () => {
        img.classList.remove('loading');
        img.src = img.getAttribute('data-src');  // Cambia src por data-src cuando se carga
      });
  
      // Para cargar las imágenes cuando el contenido de la página esté listo
      img.src = img.getAttribute('data-src');
    });
  });
  
  


  