import CartCard from "./CartCard";

const CartList = ({ items, total, onUpdateCantidad, onDeleteItem }) => {
    return (
        <>
        {items.length === 0 ? (
            <p>Carrito vacío</p>
        ) : (
        <>
            <ul>
                {items.map((item, index) => (
                    <CartCard 
                    key={index} 
                    item={item}
                    onUpdateCantidad={onUpdateCantidad}
                    onDeleteItem={onDeleteItem}
                    />
                ))}
            </ul>
        <h3>Total: ${total}</h3>
    </>
)}
        </>
    );
};

export default CartList;