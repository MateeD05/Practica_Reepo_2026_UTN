/* 
Un componente es una funcion que retorna JSX (html)
Un componente por buenas practicas deben ser nombrados en UpperCamelCase
Para instanciar un componente usamos la sintaxis "as a component"/"como componente"
*/

function ProductCard (){

  const product = {
    title: "",
    price: 0,
    descrption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, vero. Natus, voluptatum velit, voluptate similique veritatis deserunt minus possimus, suscipit"
  }

  return(
    <div>
      <h2>{product.title}</h2>
      <p>{product.descrption}</p>
      <div>Precio: &{product.price}</div>
      <button>Comprar</button>
      <hr/>
    </div>
  )
}
export default ProductCard