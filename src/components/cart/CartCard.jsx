const CartCard = ({ item, onUpdateCantidad, onDeleteItem }) => {
    const { product, quantity } = item;

    const handleSumar = () => {
        onUpdateCantidad(product.id, quantity + 1);
    }

    const handleRestar = () => {
        onUpdateCantidad(product.id, quantity - 1);
    }

    const handleEliminar = () => {
        onDeleteItem(product.id);
    }


    return (
        <li style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
            <p><strong>{product.name}</strong></p>
            <p>Precio unitario: ${product.price}</p>
            <p>Cantidad: {quantity}</p>
            <p>Subtotal: ${quantity * product.price}</p>
            <button onClick={handleSumar}> + </button>
            <button onClick={handleRestar} disabled = {quantity <= 1}> - </button>
            <button onClick={handleEliminar}>Eliminar</button>
        </li>
    );
};

export default CartCard;