const UserOrdersView = ({ orders }) => {

    return (
        <div>
        <h2>Mis Órdenes de Compra</h2>
        {orders.length === 0 ? (
            <p>No tenés órdenes registradas.</p>
        ) : (
            orders.map((order) => (
            <div key={order.orderId} style={{ border: "1px solid #ccc", padding: 10, marginBottom: 15 }}>
                <p><strong>Fecha:</strong> {order.orderDate}</p>
                <p><strong>Orden ID:</strong> {order.orderId}</p>
                <p><strong>Total:</strong> ${order.total}</p>
                <p><strong>Productos:</strong></p>
                <ul>
                {order.items.map((item, index) => (
                    <li key={index}>
                    {item.quantity} x {item.name} - ${item.price}
                    </li>
                ))}
                </ul>
            </div>
            ))
        )}
        </div>
    );
};

export default UserOrdersView;