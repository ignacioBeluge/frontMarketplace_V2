const CartCard = ({ item, onUpdateCantidad, onDeleteItem }) => {
    const { id, name, price, quantity } = item;

    const handleSumar = () => {
        onUpdateCantidad(id, quantity + 1);
    }

    const handleRestar = () => {
        onUpdateCantidad(id, quantity - 1);
    }

    const handleEliminar = () => {
        onDeleteItem(id);
    }


    return (
        <li style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
            <p><strong>{name}</strong></p>
            <p>Precio unitario: ${price}</p>
            <p>Cantidad: {quantity}</p>
            <p>Subtotal: ${quantity * price}</p>
            <button onClick={handleSumar}> + </button>
            <button onClick={handleRestar} disabled = {quantity <= 1}> - </button>
            <button onClick={handleEliminar}>Eliminar</button>
        </li>
    );
};

export default CartCard;