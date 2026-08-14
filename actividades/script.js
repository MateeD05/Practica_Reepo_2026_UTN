// EJERCICIOS DE PRACTICA: https://docs.google.com/document/d/1wPi6o8t8cGyhAoGfW9RHIGNQrefuia__g2f9CH4QY5Q/edit?tab=t.0



// EJERCICIO #1

/* for(
    let i = 1;
    i <= 10;
    i = i + 1
){
    console.log(i)
} */


// EJERCICIO #2

/* for(
    let i = 2;
    i <= 20;
    i = i + 2
){
    console.log(i)
} */


// EJERCICIO #3

/* for(
    let i = 1;
    i <= 19;
    i = i + 2
){
    console.log(i)
} */


// EJERCICIO #4

/* for(
    let i = 10;
    i >= 1;
    i = i - 1
){
    console.log(i)
} */


// EJERCICIO #5

/* for(
    let i = 1;
    i <= 10;
    i = i + 1
){
    console.log(i)
    if(i === 5){
        break
    }
} */


// EJERCICIO #6

/* for(
    let i = 1;
    i <= 10;
    i = i + 1
){
    if(i === 5){
        continue
    }
    console.log(i)
} */


// EJERCICIO #7

/* function decirNombre(nombre){
    alert("Hola " + nombre)    
}

decirNombre("Juan") */


// EJERCICIO #8

/* function saludar(nombre){
    return("hola " + nombre)
}

alert(saludar("Mateo")) */


// EJERCICIO #9

/* function sumar(a, b){
    return("El resultado de la suma es: " + (a + b))
}

console.log(sumar(10, 20)) */


// EJERCICIO #10

/* function restar(a, b){
    return("El resultado de la resta es: " + (a - b))
}

console.log(restar(50, 20)) */


// EJERCICIO #11

/* function calcular(operacion, a, b){
    let resultado = 0
    if(operacion === "+"){
        resultado = (a + b)
    }
    else if(operacion === "-"){
        resultado = (a - b)
    }
    else{
        return (null)
    }
    return(resultado)
}

console.log(calcular("-", 5, 10)) */


// EJERCICIO #12

/* function contarHasta(numero){
    let i = 1;
    while(
        i <= numero 
    ){
        console.log(i);
        i = i + 1;
    }
}

contarHasta(50) */


// EJERCICIO #13

/* function calculadora(a, b, operacion){
    if(operacion === "+"){
        return (a + b)
    }
    else if(operacion === "-"){
        return (a - b)
    }
    else if(operacion === "*"){
        return (a * b)
    }
    else if(operacion === "/"){
        return (a / b)
    }
    else{
        return ("Operacion no valida")
    }
}

let deseaCalculadora = prompt("Deseas usar la calculadora?");

while (deseaCalculadora !== null && deseaCalculadora.toLocaleUpperCase() === "SI"){
    let n1 = Number(prompt("Ingrese el primer numero"));
    let n2 = Number(prompt("Ingrese el segundo numero"));
    let op = prompt("Ingrese la operacion ( +, -, *, / )");
    let resultado = calculadora(n1, n2, op);
    alert("El resultado es: " + resultado);
    deseaCalculadora = prompt("Desea volver a usar la calculadora?");
}
alert("El programa dejo de funcionar."); */


// EJERCICIO #14 (NO ENTIENDO LA CONSIGNA)




// EJERCICIO #15 (ES LA CONSIGNA 16 PERO COMO LA 15 NO ESTA ESCRITA LE PONGO LA 15 A LA 16 ASI QUEDA MAS ORDENADO.)


/* function calcularPromedioAlturas() {
  let sumaAlturas = 0;

  for (let i = 1; i <= TOTAL_PERSONAS; i++) {
    let entrada = prompt("Ingrese la altura de la persona (ejemplo: 1.82):");
    let altura = parseFloat(entrada);


    while (isNaN(altura) || altura <= 0) {
      entrada = prompt("Entrada inválida. Ingrese nuevamente la altura:");
      altura = parseFloat(entrada);
    }

    sumaAlturas += altura;
  }

  const promedio = sumaAlturas / 5;
  
  console.log("La altura promedio es: metros");
  alert("La altura promedio de las 5 personas es: metros");
}

calcularPromedioAlturas(); */



// EJERCICIO #16


/* function askAgeMorning(){
    let morningAgeAverage = 0;
    for(let i = 0; i <= 5; i++){
        let ageMorning = Number(prompt("insert your age"))

        if(!isNaN(ageMorning)){
            morningAgeAverage += ageMorning;
        }
    }
    return morningAgeAverage / 5
}


function askAgeEvening(){
    let eveningAgeAverage = 0
    for(let i = 0; i <= 6; i++){
        let ageEvening = Number(prompt("insert your age"))

        if(!isNaN(ageEvening)){
            eveningAgeAverage += ageEvening
        }
    }
    return eveningAgeAverage / 6
}


function askAgeNight(){
    let nightAgeAverage = 0
    for(let i = 0; i <= 11; i++){
        let ageNight = Number(prompt("insert your age"))

        if(!isNaN(ageNight)){
            nightAgeAverage += ageNight
        }
    }
    return nightAgeAverage / 11
}

function promedioTodasLasEdades(){
    console.log("average age of the morning shift: " + askAgeMorning())
    console.log("average age of the afternoon shift " + askAgeEvening())
    console.log("average age of the night shift " + askAgeNight())
} */



// EJERCICIO #18

/* function mostrarInfoNumeros(){
    let numerosNegativos = 0;
    let numerosPositivos = 0;
    let numerosMultiplos15 = 0;
    let numerosPares = 0;

    for(let i = 0; i <= 10; i++){
        let numero = Number(prompt("ingrese un numero"))
        if(numero < 0){
            numerosNegativos += numero
        }
        else if(numero >= 0){
            numerosPositivos += numero
        }
        else if(numero % 15 === 0){
            numerosMultiplos15 += numero
        }
        else if(numero % 2 === 0){
            numerosPares += numero
        }
    }
    return {numerosNegativos, numerosPositivos, numerosMultiplos15, numerosPares};
}

const infoNumerosGeneral = mostrarInfoNumeros()

console.log(infoNumerosGeneral) */