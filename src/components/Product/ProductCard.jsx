//Componente maquetar
// estructura de la tarjeta 
// componente dumb 

const ProductCard = ({id, name, description, price, image, onAddToCart}) => {
    return (
        <div>

        <h2> Nombre: {name}</h2>
        <p> Descripcion: {description} </p>
        <p> Precio: {price} </p> 
        {image && (
        <img src={`data:image/jpeg;base64,${image}`}/>
        )}

        {onAddToCart && (
            <button onClick={() => onAddToCart(id)}> Agregar al carrito </button>) }
        
        </div>
    )
}

export default ProductCard;