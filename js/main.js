
document.addEventListener("DOMContentLoaded", () => {
new fullpage('#fullpage', {
  autoScrolling: true,
  navigation: true,
  licenseKey: 'gplv3-license',

  anchors: ['home', 'contacto', 'planes', 'nosotros','faqs'], 
  lockAnchors: true,        
  recordHistory: false,       
  
  fixedElements: '.topbar, #footer',
  paddingTop: '85px',
  paddingBottom: '120px', 
  scrollingSpeed: 900,
  fitToSection: true,
  fitToSectionDelay: 1600,

  afterLoad: function(origin, destination){
  const items = destination.item.querySelectorAll(".anim-card");
  console.log("afterLoad:", destination.anchor, "anim:", items.length);

  items.forEach((el, i) => {
    el.classList.remove("scale-up-center");
    void el.offsetWidth;
    setTimeout(() => el.classList.add("scale-up-center"), i * 140);
  });

   const anims = destination.item.querySelectorAll(".animate__animated");

  anims.forEach((el)=>{
    el.style.visibility = "visible";
    el.classList.remove("animate__slideInDown");
    void el.offsetWidth;
    el.classList.add("animate__slideInDown");
  });

}

});

 
function bindMoveTo(selector){
  document.querySelectorAll(selector).forEach(link => {
    link.addEventListener('click', (e) => {
      if (typeof fullpage_api === "undefined") return;
      e.preventDefault();
      const anchor = link.getAttribute('href').replace('#','');
      fullpage_api.moveTo(anchor);
    });
  });
}

// Desktop navbar
bindMoveTo('#menuTop a[href^="#"]');

// Mobile offcanvas
bindMoveTo('#menuMobileLinks a[href^="#"]');


  window.addEventListener('load', () => {
    if (typeof fullpage_api !== "undefined") {
      fullpage_api.reBuild();
    }
  });

  
  const mobileLinks = document.querySelectorAll('#menuMobileLinks a[href^="#"]');

  mobileLinks.forEach(link => {
    link.addEventListener('click', (e) => {

      if (typeof fullpage_api === "undefined") return;

      e.preventDefault();

      const anchor = link.getAttribute('href').replace('#', '');
      fullpage_api.moveTo(anchor);

  
      const offcanvas = bootstrap.Offcanvas.getInstance(
        document.getElementById('menuMobile')
      );

      if (offcanvas) offcanvas.hide();

    });
  });


const form = document.getElementById("formContacto");
if (form) {

  form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const nombre = document.getElementById("nombreContacto").value;
  const email = document.getElementById("emailContacto").value;
  const objetivo = document.getElementById("objetivoContacto").value;
  const mensaje = document.getElementById("mensajeContacto").value;
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

  

}

const btnTop = document.getElementById("Arribatop");

  if (btnTop) {
    btnTop.addEventListener("click", () => {
      if (typeof fullpage_api !== "undefined") fullpage_api.moveTo('home');
      else window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }




 const offcanvas = document.getElementById("menuMobile");


  if(offcanvas && btnTop){

    offcanvas.addEventListener("show.bs.offcanvas", () => {
      btnTop.style.display = "none";
    });

    offcanvas.addEventListener("hidden.bs.offcanvas", () => {
      btnTop.style.display = "block";
    });

  }


  const logo = document.getElementById("logoDani");

setInterval(() => {
  logo.classList.remove("logo-pulse");
  void logo.offsetWidth; // reinicia la animación
  logo.classList.add("logo-pulse");
}, 15000); 

});


