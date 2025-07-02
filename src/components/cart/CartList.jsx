import CartCard from "./CartCard";

const CartList = ({ items, total, onUpdateCantidad, onDeleteItem }) => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-900 rounded-xl shadow-lg text-white">
      {items.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-2xl text-gray-400 mb-4">🛒 Carrito vacío</p>
          <p className="text-sm text-gray-500">Agregá productos para verlos acá.</p>
        </div>
      ) : (
        <>
          <ul className="space-y-4">
            {items.map((item, index) => (
              <CartCard
                key={index}
                item={item}
                onUpdateCantidad={onUpdateCantidad}
                onDeleteItem={onDeleteItem}
              />
            ))}
          </ul>
          <div className="mt-6 text-right">
            <h3 className="text-xl font-semibold text-indigo-300">
              Total: ${total.toFixed(2)}
            </h3>
          </div>
        </>
      )}
    </div>
  );
};

export default CartList;