console.log("hola mundo")

/* let userAge = prompt("Age")

if(userAge < 16){
    console.log("Es menor de edad")
}
else if(userAge > 16 && usingserAge < 18){
    console.log("Casi deja de ser menor de edad")
}
else if(userAge >= 18){
    console.log("Es mayor de edad")
} */

/* let numeroA = Number(prompt('Ingrese un numero'))
let numeroB = Number(prompt('Ingrese otro numero'))
let operacion = prompt('Ingrese una operacion')
if(operacion === '+' || operacion === 'sumar'){
    console.log(numeroA + numeroB)
}
else if(operacion === '-' || operacion === 'restar'){
    console.log(numeroA - numeroB)
}
else{
    console.log('Operacion invalida, vuelva a intentar')
} */



/* let numerA = Number(prompt('Ingrese un numero'))
let numerB = Number(prompt('Ingrese otro numero'))
let operation = prompt('Ingrese una operacion')

switch (operation){
    case "+":
    case "sumar":
        console.log(numerA + numerB)
        break
    case "-":
    case "restar":
        console.log(numerA - numerB)
        break
    default:
        console.log("Operacion invalida, vuelva a intentar")
} */



let operacion = prompt("Ingrese una operación");
while (
     operacion !== "+" &&
     operacion !== "-" &&
     operacion !== "sumar" &&
     operacion !== "restar"
) {
     alert("Error, operación no válida");
    operacion = prompt("Ingrese una operación");
}
alert("Operación válida");