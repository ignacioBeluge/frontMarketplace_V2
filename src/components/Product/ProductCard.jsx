//Componente maquetar
// estructura de la tarjeta 
// componente dumb

import './ProductCard.css'

const ProductCard = ({ id, name, description, price, stock, image, onAddToCart }) => {
    return (
    <div className="product-card">
    <h2>{name}</h2>
    <p>{description}</p>
    <p>Precio: ${price}</p>
    <p>Stock : {stock}</p>
    {image && (
    <img src={`data:image/jpeg;base64,${image}`} alt={name} />
    )}
    {onAddToCart && (
    <button onClick={() => onAddToCart(id)}>Agregar al carrito</button>
    )}
    </div>
    );
};

export default ProductCard;