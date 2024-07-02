
(function() {
    emailjs.init("ecommerselenceria@outlook.com");
})();

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (form.checkValidity()) {
            sendEmail();
        } else {
            event.stopPropagation();
            form.classList.add('was-validated');
        }
    });
});

function sendEmail() {
    const form = document.getElementById('contactForm');
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;

    emailjs.send("service_xpcsglf", "template_9kxxgv9", {
        from_name: name,
        from_email: email,
        phone: phone,
        message: message
    })
    .then(function(response) {
        alert('¡Correo enviado con éxito!');
        form.reset();
        form.classList.remove('was-validated');
    }, function(error) {
        alert('Error al enviar el correo: ' + JSON.stringify(error));
    });
}       

