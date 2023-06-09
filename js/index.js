//VARIABLES
const h1 = document.querySelector("h1");
const dato1= document.querySelector("#dato1");
const dato2 = document.getElementById("dato2");
const botonCalculo = document.querySelector("#btnCalcular");
const pResultado = document.getElementById("resultado");
const formulario = document.getElementById("formulario1");

function sumarInputs () {
    
    //console.log({event});
    //permite que no se recargue cuando se realiza un submit
    //event.preventDefault();
    const sumaInputs = dato1.value + dato2.value;
    pResultado.innerHTML ="El resultado es: " + sumaInputs;

    //console.log(parseInt(dato1.value) + parseInt(dato2.value)) 
    
}

formulario.addEventListener("click", sumarInputs);









/*
//cambia el valor de un atributo de HTML
h1.setAttribute("class", "rojo");


h1.classList.add("azul");
h1.classList.remove("azul");
//h1.classList.toggle("verde");
//h1.classlIst.contains("verde");

inpt1.value = "Alvaro"

const imagen1 = document.createElement("img");
imagen1.setAttribute("src","D:/Cursos/curso_practico_javasrcipt/assets/cara_yuta.png");
console.log(imagen1);

id1.innerHTML = "";
id1.appendChild(imagen1);
*/