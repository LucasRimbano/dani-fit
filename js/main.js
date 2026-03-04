new fullpage('#fullpage', {
  autoScrolling: true,
  navigation: true,
  licenseKey: 'gplv3-license',

  fixedElements: '.topbar, footer',
  paddingTop: '70px',
  paddingBottom: '120px', // ajustalo al alto del footer en móvil

 

  anchors: ['home', 'contacto', 'planes', 'nosotros'], 
  menu: '#menuTop' ,
  
  afterLoad: function(origin, destination, direction) {

    const cards = destination.item.querySelectorAll('.anim-card');

    cards.forEach((card, index) => {
      card.classList.remove('scale-up-center');
      void card.offsetWidth; // reinicia animación
      setTimeout(() => {
        card.classList.add('scale-up-center');
      }, index * 150);
    });
    
    
  }
});



const form = document.getElementById("formContacto");


form.addEventListener("submit", function(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const objetivo = document.getElementById("objetivo").value;
  const mensaje = document.getElementById("mensaje").value;
  const terminos = document.getElementById("terminos");

    if (!terminos.checked) {
      alert("Debés aceptar los términos.");
      return;
}

  const texto = `Hola Dani! 💪
  Nombre: ${nombre}
  Email: ${email}
  Objetivo: ${objetivo}
  Mensaje: ${mensaje}`;

  const numero = "5491100000000"; 

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");
});
document.addEventListener("DOMContentLoaded", () => {
const btnTop = document.getElementById("Arribatop");

if (btnTop) {
  btnTop.addEventListener("click", irarriba);
}

function irarriba() {
  if (typeof fullpage_api !== "undefined") {
    fullpage_api.moveTo(1);
  } else {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}

//saco el boton top en menu hamb//

 const offcanvas = document.getElementById("menuMobile");


  if(offcanvas && btnTop){

    offcanvas.addEventListener("show.bs.offcanvas", () => {
      btnTop.style.display = "none";
    });

    offcanvas.addEventListener("hidden.bs.offcanvas", () => {
      btnTop.style.display = "block";
    });

  }
});