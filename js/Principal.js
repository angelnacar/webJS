// Define una clase JavaScript para manejar la funcionalidad del botón de saludo
class SaludoHandler {
    constructor() {
        // Selecciona el botón por su id
        this.boton = document.getElementById("saludarBoton");

        // Agrega un evento de clic al botón
        this.boton.addEventListener("click", () => {
            this.saludar();
        });
    }

    saludar() {
        // La función que se ejecuta cuando se hace clic en el botón
        alert("¡Hola, mundo!");
    }
}

// Crea una instancia de la clase SaludoHandler para inicializar la funcionalidad
const saludoHandler = new SaludoHandler();

// Función para validar un DNI español (NIF)
function validarDNI(dni) {
    // Patrón para validar un DNI
    var patronDNI = /^\d{8}[A-Z]$/;

    return patronDNI.test(dni);
}

// Función para validar una dirección de correo electrónico
function validarEmail(email) {
    // Patrón para validar un correo electrónico
    var patronEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return patronEmail.test(email);
}

// Manejador de eventos para la validación en tiempo real del DNI
document.getElementById("dni").addEventListener("input", function () {
    var dni = this.value;
    var dniError = document.getElementById("dniError");

    if (validarDNI(dni)) {
        dniError.textContent = "";
    } else {
        dniError.textContent = "El DNI no es válido";
    }
});

// Manejador de eventos para la validación en tiempo real del correo electrónico
document.getElementById("email").addEventListener("input", function () {
    var email = this.value;
    var emailError = document.getElementById("emailError");

    if (validarEmail(email)) {
        emailError.textContent = "";
    } else {
        emailError.textContent = "El correo electrónico no es válido";
    }
});



// Manejador de eventos para el envío del formulario
document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Captura los valores de los campos de entrada
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var dni = document.getElementById("dni").value;
    var domicilio = document.getElementById("domicilio").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;

    // Construye el mensaje para el pop-up
    var mensaje = "Nombre: " + nombre + "\n";
    mensaje += "Apellidos: " + apellidos + "\n";
    mensaje += "DNI: " + dni + "\n";
    mensaje += "Domicilio: " + domicilio + "\n";
    mensaje += "Correo Electrónico: " + email + "\n";
    mensaje += "Teléfono Móvil: " + telefono;

    // Muestra el mensaje en un pop-up
    alert("Datos introducidos:\n\n" + mensaje);
});
