//Componente maquetar
// estructura de la tarjeta
// componente dumb
import './ProductCard.css'

const ProductCard = ({
  id,
  name,
  description,
  price,
  stock,
  image,
  onAddToCart,
  minimal = false,
}) => {
  return (
    <div className="product-card">
      <h2 className={minimal ? "text-xs" : ""}>{name}</h2>

      {image && (
        <img
          src={`data:image/jpeg;base64,${image}`}
          alt={name}
        />
      )}

      <p className="price">Precio: ${price.toLocaleString("es-AR")}</p>

      {!minimal && (
        <>
          <p>{description}</p>
          <p>Stock: {stock}</p>

          {onAddToCart && (
            <button onClick={() => onAddToCart(id)}>Agregar al carrito</button>
          )}
        </>
      )}
    </div>
  );
};

export default ProductCard;