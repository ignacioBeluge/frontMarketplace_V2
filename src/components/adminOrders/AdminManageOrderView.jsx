const AdminManageOrderView = ({ orders, onDeleteOrder }) => {
  return (
    <div>
      <h2>Eliminar Ordenes</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.orderId}>
            Orden #{order.orderId} 
            <button onClick={() => onDeleteOrder(order.orderId)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminManageOrderView;
