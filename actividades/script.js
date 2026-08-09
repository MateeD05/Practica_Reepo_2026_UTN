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

