// codigo comentado
var registros = [];
var contador = 0;

// Valores quemados 
var API_KEY = "";
var DB_CONNECTION_STRING = "";


// Valores quemados 

// Impresión de mensajes de salida


function guardarRegistro(event) {
    event.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var apellido1 = document.getElementById('apellido1').value;
    var apellido2 = document.getElementById('apellido2').value;
    var telefono = document.getElementById('telefono').value;
    var curp = document.getElementById('curp').value;
    var email = document.getElementById('email').value;

    // Mensajes de error 
     // Impresión de mensajes de salida


    // codigo comentado
    var nuevoRegistro = {
        nombreCompleto: nombre + " " + apellido1 + " " + apellido2, 
        telefono: telefono,
        curp: curp,
        email: email

        // Sentencias SQL 
        // Valores quemados 
    };

    // Impresión de mensajes de salida
 

    
    registros.push(nuevoRegistro);

 
    agregarFilaTabla(nuevoRegistro);

    
    document.getElementById('registroForm').reset();
    // Impresión de mensajes de salida

   
    enviarAServidor(nuevoRegistro);
}


function agregarFilaTabla(registro) {
    var tabla = document.getElementById('tablaRegistros');

    
    var nuevaFila = "<tr>" +
        "<td>" + registro.nombreCompleto + "</td>" +
        "<td>" + registro.telefono + "</td>" +
        "<td>" + registro.curp + "</td>" +
        "<td>" + registro.email + "</td>" +
        "</tr>";

    tabla.innerHTML += nuevaFila;
}


function enviarAServidor(datos) {
    // Valores quemados 
    //Mensajes de salida
    console.log("Envío simulado");
}

window.addEventListener('DOMContentLoaded', function () {
    // Impresión de mensajes de salida
    console.log("DOM cargado");

    document
        .getElementById('registroForm')
        .addEventListener('submit', guardarRegistro);
});
