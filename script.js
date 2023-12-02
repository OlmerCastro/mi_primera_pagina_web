//alert("Hola este es mi Javascript");
//let nombre = "Olmer Yesid Castro";
//nombre = "Olmer Castro";

//var nombre1 = "Olmer Yesid Castro";
//nombre1 = "Olmer Castro";

//const nombre2 = "Olmer Yesid Castro";
//nombre2 = "Olmer Castro";

//console.log (nombre);
//console.log (nombre1);
//console.log (nombre2);



/*let contenidoTitulo = "Acerca de mí";

let titulo = document.querySelector(".acerca-de > h2");
titulo.innerHTML = contenidoTitulo;

//CONDIXIONALES

let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if (textoTitulo == "Acerca de mí") {
    titulo.innerHTML = "Nosotros";    
}else{
    console.log("No se cumple");
}

//FUNCIONES

let nombre1 = "Olmer Yesid Castro";
let gusto = "programar";
let deseo = "ser el mejor programador del mundo";
let hacer = "trabajar para Amazon";

let parrafo = document.querySelector(".parrafo-2");

function cambiarTexto(nombre1, gusto, deseo, hacer) {
    let contenido =  `Me llamo ${nombre1}, nací en Trinidad Casanare y 
    vivo en Yopal Casanare. Me gusta ${gusto} y quiero ${deseo}.
     Me encantaría aprender a programar y ${hacer}.`;

    return contenido 
}
parrafo.innerText = cambiarTexto(nombre1, gusto, deseo, hacer);

let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function () {
    navBar = document.querySelector("header");
    navBar.classList.toggle("active");
};
*/



//-------------SCRIPT PARA EL FORMULARIO-------------//

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario(){
    let warnings = "";
    let valido = true;
    parrafo.innerHTML = "";

    if (nombre.value.length < 4) {
        warnings += `El nombre debe tener más de 4 carcateres`;
        valido = false;
    }

    if (!valido) {
        parrafo.innerHTML = warnings;        
    } else{
        parrafo.innerHTML = "Enviado";
    }
    return valido;
}
form.addEventListener("submit", (e) => {
    if (validarFormulario()) {
        //Si la validacion es excitosa, puedes enviar el formulario
        formulario.submit();
    } else{
        e.preventDefault(); //Evita que el formulario se envie automaticamente
    }
});



