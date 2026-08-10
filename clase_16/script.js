

/* let nombres = ['pepe', 'juan', 'maria', 'carlos', 'jose', 'julieta', 'ana'] */

/* function estaPedro(){
    if(nombres.includes("pedro")){
        console.log("Pedro!")
    }
    else{
        console.log("Pedro no esta!")
    }
}
estaPedro() */


/* let indice_maria = nombres.indexOf("maria")
nombres.splice(indice_maria, 1)

console.log(nombres) */

/* let indice_jose = nombres.indexOf("jose")
nombres.splice(indice_jose, 1, "josesito")

console.log(nombres) */

/* const notas = [90, 40, 100]

function calcularPromedio(numeros) {
  let suma = 0;
  for (let nota of numeros) {
    suma = suma + nota;
  }
  return suma / 3;
}

console.log(calcularPromedio(notas)) */

/* let nombres = ['tv noblex', 'tv samsung', 'tv noblex']

function contarNombres(nombres, nombreBuscado) {
  let cantidad = 0;

  for (let nombre of nombres) {
    if (nombre === nombreBuscado) {
      cantidad = cantidad + 1;
    }
  }

  return cantidad;
}

console.log(contarNombres(nombres, "tv noblex"))
console.log(contarNombres(nombres, "tv samsung"))
console.log(contarNombres(nombres, "pepe")) */

const productos = [
    {
        nombre: 'tv samsung',
        id: 1,
        precio: 1200000,
        categorias: ['Tecnologia', 'Hogar']
    },
    {
        nombre: 'tv noblex',
        id: 2,
        precio: 1000000,
        categorias: ['Tecnologia', 'Hogar']
    },
    {
        nombre: "calculadora",
        id: 3,
        precio: 19000,
        categorias: ["tecnologia", "matematicas"]
    }
]



/* function subirPrecio (productos, idProducto, precioASubir){
    for(const producto of productos){
        if(producto.id === productos){
            producto.precio = producto.precio + precioASubir
            break;
        }
    }
} */



//TAREA: Funciones, arrays y objetos

//buscarProductoPorId(productos, idBuscado) Buscar un producto por id y retornarlo (Hecho)
//buscarProductoPorNombre(productos, nombreBuscado) Buscar un producto por nombre y retornarlo (Hecho)
//filtrarPorPrecioMin(productos, precioMin) Filtrar todos los productos que su precio se mayor a cierto numero y devolver la lista (duda)
//agregarCategoriaAProducto(productos, id, categoria) Agregar categoria (en caso de que no exista) (Hecho)
//eliminarProductoPorId(productos, id) Eliminar producto por id (duda)


/* function buscarProductoPorId(productos, idBuscado){
    for(let producto of productos){
        if(producto.id === idBuscado){
            return producto
            break;
        }
    }
}

console.log(buscarProductoPorId(productos, 2)) */


/* function buscarProductoPorNombre(productos, nombreBuscado){
    for(let producto of productos){
        if(producto.nombre === nombreBuscado){
            return producto
            break;
        }
    }
}

console.log(buscarProductoPorNombre(productos, "calculadora")) */


/* function filtrarPorPrecioMin(productos, precioMin){
    for(let producto of productos){
        if(producto.precio > precioMin){
            return producto
        }
    }
}

console.log(filtrarPorPrecioMin(productos, 1000000)) //tendria que aparecer tv samsung.
console.log(filtrarPorPrecioMin(productos, 100000))  //tendria que aparecer tv sansung y tv noblex. */



/* function agregarCategoriaAProducto(productos, id, categoria){
    for(let producto of productos){
        if(producto.id === id){
            producto.categorias.push(categoria)
            break;
        }
    }
}

console.log(productos)

console.log(agregarCategoriaAProducto(productos, 3, "escuela")) // tendria que agregar la categoria "escuela" al producto calculadora. */


/* function eliminarProductoPorId(productos, id){
    for(let producto of productos){
        if(producto === id){
            let producto_index = producto.indexOf(producto)
            producto.splice(producto_index, 1)
        }
    }
}

eliminarProductoPorId(productos, 2)

console.log(productos) */
