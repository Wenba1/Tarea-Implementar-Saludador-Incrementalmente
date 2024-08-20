// index.js

// Función para traducir el saludo
function traducirSaludo(saludo, idioma) {
    const traducciones = {
        "es": saludo,
        "en": saludo.replace("Hola", "Hello").replace("eres", "you are").replace("y tienes", "and you are").replace("años", "years old"),
        "fr": saludo.replace("Hola", "Bonjour").replace("eres", "tu es").replace("y tienes", "et tu as").replace("años", "ans")
    };
    return traducciones[idioma] || saludo;
}

// Función para saludar
function saludar() {
    const nombre = document.getElementById('nombre').value;
    const genero = document.querySelector('input[name="genero"]:checked').value;
    const edad = document.getElementById('edad').value;
    const idioma = document.getElementById('idioma').value;

    let saludo = `Hola ${nombre}`;
    if (genero === "Masculino") {
        saludo += `, eres un hombre`;
    } else if (genero === "Femenino") {
        saludo += `, eres una mujer`;
    }
    if (edad) {
        saludo += ` y tienes ${edad} años.`;
    }

    // Traducir el saludo según el idioma seleccionado
    saludo = traducirSaludo(saludo, idioma);

    // Mostrar saludo en un cuadro de diálogo de confirmación
    const confirmacion = window.confirm(saludo + "\n\n¿Es correcto este saludo?");

    // Opcional: puedes hacer algo según la respuesta del usuario
    if (confirmacion) {
        alert("Saludo confirmado.");
    } else {
        alert("Saludo cancelado.");
    }
}

// Event listener para el botón Saludar
document.getElementById('saludarBtn').addEventListener('click', saludar);
