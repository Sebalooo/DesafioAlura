// function encriptar(){
//     let texto = document.getElementById("texto").value;
//     let tituloMensaje = document.getElementById("titulo_mensaje");
//     let parrafo = document.getElementById("parrafo");
    
//     let textoCifrado = texto
//      .replace(/e/gi, "enter")
//      .replace(/i/gi, "imes")
//      .replace(/o/gi, "ober")
//      .replace(/a/gi, "ai")
//      .replace(/u/gi, "ufat");

//     if (texto.length !=0) {
//         texto = textoCifrado;
//         tituloMensaje.textContent= "Texto cifrado con exito";
//         parrafo.textContent = "";

//     }
// }
//**
  
 //
 //
// function encriptar() {
//     // Obtén el texto ingresado por el usuario
//     let texto = document.getElementById("texto").value;

//     // Corrige el ID del elemento 'tituloMensaje' y 'parrafo'
//     let tituloMensaje = document.getElementById("titulo_mensaje");
//     let parrafo = document.getElementById("parrafo");

//     // Corrige los reemplazos y asegura que la variable 'textoCifrado' se asigna correctamente
//     let textoCifrado = texto
//         .replace(/e/gi, "enter")
//         .replace(/i/gi, "imes")
//         .replace(/o/gi, "ober")
//         .replace(/a/gi, "ai")
//         .replace(/u/gi, "ufat");

//     // Verifica que el texto no esté vacío
//     if (texto.length !== 0) {
//         // Asigna el texto cifrado al input
//         texto = textoCifrado;
        
//         // Corrige 'textoContent' a 'textContent' y 'parrafto' a 'parrafo'
//         tituloMensaje.textContent = "Texto cifrado con éxito";
//         parrafo.textContent = textoCifrado;
//     } else {
//         // Maneja el caso en el que no se haya ingresado texto
//         tituloMensaje.textContent = "Por favor, ingresa un texto para cifrar";
//         parrafo.textContent = "";
//     }

// }


//**dgdfgdfgdfgdfg      */

function encriptar() {
    // Obtén el texto ingresado por el usuario
    let texto = document.getElementById("texto").value;

    // Corrige el ID del elemento 'tituloMensaje' y 'parrafo'
    let tituloMensaje = document.getElementById("titulo_mensaje");
    let parrafo = document.getElementById("parrafo");

    // Verifica si el texto contiene al menos una vocal antes de cifrar
    if (verificarVocales(texto)) {
        // Si el texto contiene vocales, procede con el cifrado
        let textoCifrado = texto
            .replace(/e/gi, "enter")
            .replace(/i/gi, "imes")
            .replace(/o/gi, "ober")
            .replace(/a/gi, "ai")
            .replace(/u/gi, "ufat");

        // Asigna el texto cifrado al parrafo y cambia el título
        tituloMensaje.textContent = "Texto cifrado con éxito";
        parrafo.textContent = textoCifrado;
    } else {
        // Si no hay vocales, muestra el mensaje de error
        tituloMensaje.textContent = "Por favor, ingresa un texto para cifrar";
        parrafo.textContent = "";
    }
}

// Función para verificar si el texto contiene vocales
function verificarVocales(texto) {
    // Recorremos cada carácter del texto
    for (let i = 0; i < texto.length; i++) {
        // Verificamos si el carácter actual es una vocal
        if (['a', 'e', 'i', 'o', 'u'].includes(texto[i].toLowerCase())) {
            return true; // Si hay una vocal, retorna verdadero
        }
    }
    // Si no se encontró ninguna vocal, mostramos un popup y retornamos falso
    alert("Por favor, ingresar bien el texto");
    return false;
}


function desencriptar() {
    // Obtén el texto cifrado ingresado por el usuario
    let textoCifrado = document.getElementById("texto").value;

    // Corrige el ID del elemento 'tituloMensaje' y 'parrafo'
    let tituloMensaje = document.getElementById("titulo_mensaje");
    let parrafo = document.getElementById("parrafo");

    // Verifica si el texto cifrado no está vacío
    if (textoCifrado.length !== 0) {
        // Realiza el proceso de desencriptado reemplazando las secuencias encriptadas por las vocales correspondientes
        let textoDesencriptado = textoCifrado
            .replace(/enter/gi, "e")
            .replace(/imes/gi, "i")
            .replace(/ober/gi, "o")
            .replace(/ai/gi, "a")
            .replace(/ufat/gi, "u");

        // Asigna el texto desencriptado al parrafo y cambia el título
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = textoDesencriptado;
    } else {
        // Si no se ha ingresado texto, muestra un mensaje de error
        tituloMensaje.textContent = "Por favor, ingresa un texto para desencriptar";
        parrafo.textContent = "";
    }
}

function limpiar() {
    document.getElementById("texto").value = ""; // Limpia el área de texto
    document.getElementById("titulo_mensaje").textContent = "Ningún mensaje fue encontrado";
    document.getElementById("parrafo").textContent = "Ingresa el texto que deseas encriptar o desencriptar";
}

// Ejemplo de cómo se llamaría la función encriptar
// encriptar();
