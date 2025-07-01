import { useSelector } from "react-redux";

const OrdersList = ({ orders, onDeleteOrder = () => {} }) => {
  const role = useSelector((state) => state.auth.role);
  const isAdmin = role === "ADMIN";

  return (
    <div>
      <h2>{isAdmin ? "Gestionar Órdenes" : "Mis Órdenes de Compra"}</h2>
      {orders.length === 0 ? (
        <p>
          {isAdmin
            ? "No hay órdenes registradas."
            : "No tenés órdenes registradas."}
        </p>
      ) : (
        orders.map((order) => (
          <div
            key={order.orderId}
            style={{
              border: "1px solid #ccc",
              padding: 10,
              marginBottom: 15,
            }}
          >
            <p>
              <strong>Fecha:</strong> {order.orderDate}
            </p>
            <p>
              <strong>Orden ID:</strong> {order.orderId}
            </p>
            <p>
              <strong>Total:</strong> ${order.total}
            </p>
            <p>
              <strong>Productos:</strong>
            </p>
            <ul>
              {order.items.map((item, index) => (
                <li key={index}>
                  {item.quantity} x {item.name} - ${item.price}
                </li>
              ))}
            </ul>

            {isAdmin && (
              <button
                onClick={() => onDeleteOrder(order.orderId)}
                className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Eliminar Orden
              </button>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default OrdersList;