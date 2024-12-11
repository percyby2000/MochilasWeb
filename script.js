
function enviarWhatsApp(producto, precio) {
    // Número de WhatsApp (reemplaza con tu número)
    const telefono = "51921088274"; // Ejemplo: código de país + número sin espacios

    // Mensaje personalizado
    const mensaje = `Hola, estoy interesado en el producto ${producto} con precio de S/.${precio}. ¿Está disponible?`;

    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);

    // Crear enlace de WhatsApp
    const whatsappURL = `https://wa.me/${telefono}?text=${mensajeCodificado}`;

    // Abrir WhatsApp en una nueva ventana
    window.open(whatsappURL, '_blank');
}

// Agregar evento a todos los botones de compra
document.querySelectorAll('.btn-comprar').forEach(boton => {
    boton.addEventListener('click', function () {
        const producto = this.getAttribute('data-producto');
        const precio = this.getAttribute('data-precio');
        enviarWhatsApp(producto, precio);
    });
});

const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  btn.value = 'Enviando...';

  const serviceID = 'service_4uel8es';
  const templateID = 'template_ryo5hb9';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('¡Enviado!');
      
      // Limpiar los campos del formulario
      this.reset();
    }, (err) => {
      btn.value = 'Enviar Correo';
      alert(JSON.stringify(err));
    });
});
