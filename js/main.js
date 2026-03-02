new fullpage('#fullpage', {
  autoScrolling: true,
  navigation: true,
  licenseKey: 'gplv3-license',

  fixedElements: '.topbar, footer',
  paddingTop: '70px',
  paddingBottom: '120px' // ajustalo al alto del footer en móvil
 
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