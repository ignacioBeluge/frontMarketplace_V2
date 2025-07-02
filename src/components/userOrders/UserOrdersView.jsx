import { useSelector } from "react-redux";

const OrdersList = ({ orders, onDeleteOrder = () => {} }) => {
  const role = useSelector((state) => state.auth.role);
  const isAdmin = role === "ADMIN";

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 text-white">
      <h2 className="text-3xl font-bold text-indigo-400 mb-6 text-center">
        {isAdmin ? "Gestionar Órdenes" : "Mis Órdenes de Compra"}
      </h2>

      {orders.length === 0 ? (
        <p className="text-gray-400 text-center">
          {isAdmin
            ? "No hay órdenes registradas."
            : "No tenés órdenes registradas."}
        </p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.orderId}
              className="bg-gray-800 rounded-lg shadow-md p-6 space-y-2 border border-gray-700"
            >
              <p>
                <span className="font-semibold text-indigo-300">Fecha:</span>{" "}
                {order.orderDate}
              </p>
              <p>
                <span className="font-semibold text-indigo-300">Orden ID:</span>{" "}
                {order.orderId}
              </p>
              <p>
                <span className="font-semibold text-indigo-300">Total:</span> ${order.total}
              </p>
              <div>
                <p className="font-semibold text-indigo-300">Productos:</p>
                <ul className="list-disc list-inside ml-2">
                  {order.items.map((item, index) => (
                    <li key={index} className="text-gray-300">
                      {item.quantity} x {item.name} - ${item.price}
                    </li>
                  ))}
                </ul>
              </div>

              {isAdmin && (
                <button
                  onClick={() => onDeleteOrder(order.orderId)}
                  className="mt-3 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md font-semibold transition"
                >
                  Eliminar Orden
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersList;