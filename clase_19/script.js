let productos = [
    {
        id: 1,
        titulo: 'Silla oficina',
        precio: 320000,
        stock: 10
    },
    {
        id: 2,
        titulo: 'Escritorio madera',
        precio: 120000,
        stock: 3
    },
    {
        id: 3,
        titulo: 'Alfombra roja',
        precio: 60000,
        stock: 7
    }
]
/* 
Dada una lista de productos que actuara como estado 
    -   Crear una funcion renderProducts que tomara la lista y la mostrara en pantalla
        Cada producto seguira la sig estructura:
                <div>
                    <h2>Titulo</h2>
                    <div><b>Precio:</b> $precio</div>
                    <div><b>Stock:</b> $stock</div>
                    <button>Eliminar</button>
                    <button>Editar</button>
                </div>
        Si no hay productos decir en un <p>Lista de productos vacia</p>.
        Esta funcion deberia ser invocada una vez asi renderizamos la lista de productos.

    - Crear la funcion setProductos (valor) y al llamarla cambiara el valor del estado y volvera a renderizar la lista de productos
        Para probar este setter podrian llamar a setProductos([]) y en pantalla deberian ver el parrafo indicando que la lista esta vacia
*/

const contenedorLista = document.getElementById("list")



function renderlist(){
    let lista_productos_str = ""
    if(productos.length > 0){
        for(let producto of productos){
            lista_productos_str = lista_productos_str + `
                <h2>${producto.titulo}</h2>
                <div><b>Precio:</b> ${producto.precio}</div>
                <div><b>Stock:</b> ${producto.stock}</div>
                <button>Eliminar</button>
                <button>Editar</button>
            `
        }
    }
    else{
        lista_productos_str = lista_productos_str + `
            <P>Lista de productos vacia</p>
        `
    }
    contenedorLista.innerHTML = lista_productos_str
}




function setProductos(valor){
    productos = valor
    renderlist()
}




// FUNCION PARA CREAR PRODUCTO
function crearProducto (titulo, precio, stock){
    const nuevo_producto = {
        id: productos_estado.length + 1,
        titulo: titulo,
        precio: precio,
        stock: stock
    }

    const productos_estado_clonado = [...productos]
    productos_estado_clonado.push(nuevo_producto)

    setProductos(productos_estado_clonado)
}

// FUNCION PARA ELIMINAR PRODUCTO POR ID

function eliminarProductoPorId (producto_id){
    const productos_estado_clonado = [...productos]
    let producto_indice = null
    for(const producto of productos_estado_clonado){
        if(producto.id === producto_id){
            producto_indice = productos_estado_clonado.indexOf(producto)
            productos_estado_clonado.splice(producto_indice, 1)
            setProductos(productos_estado_clonado)
            return true
        }
    }
    return null
}