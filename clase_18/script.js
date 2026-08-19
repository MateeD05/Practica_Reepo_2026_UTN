const btn_click = document.getElementById("btn")

function saludar(){
    alert("Hola que tal!")
}

btn_click.addEventListener(
    "click",
    saludar
)

let valorTotal = 0

const btn_menos_click = document.getElementById("btn-restar")
const btn_mas_click = document.getElementById("btn-sumar")
const total = document.getElementById("contador")


btn_mas_click.addEventListener(
    "click",
    function (){
        valorTotal += 1;
        total.textContent = valorTotal;
    }
)


btn_menos_click.addEventListener(
    "click",
    function (){
        valorTotal -= 1;
        total.textContent = valorTotal;
    }
)

const option1 = document.getElementById("btn_1")
const option2 = document.getElementById("btn_2")
const option3 = document.getElementById("btn_3")
const optionSelected = document.getElementById("opcionSeleccionada")

let option = null


function seleccionarOpcion(evento){
    option += evento.target.getAttribute("data-option-number")
    optionSelected.innerText = "opcion seleccionada: " + option
}

option1.addEventListener("click", seleccionarOpcion)