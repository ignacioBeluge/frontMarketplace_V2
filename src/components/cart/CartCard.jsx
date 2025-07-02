const CartCard = ({ item, onUpdateCantidad, onDeleteItem }) => {
  const { id, name, price, quantity } = item;

  const handleSumar = () => {
    onUpdateCantidad(id, quantity + 1);
  };

  const handleRestar = () => {
    onUpdateCantidad(id, quantity - 1);
  };

  const handleEliminar = () => {
    onDeleteItem(id);
  };

  return (
    <li className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4 shadow-md text-white">
      <p className="text-xl font-bold text-indigo-300">{name}</p>
      <p className="text-gray-300">Precio unitario: ${price}</p>
      <p className="text-gray-300">Cantidad: {quantity}</p>
      <p className="text-gray-300 mb-4">Subtotal: ${quantity * price}</p>

      <div className="flex justify-center items-center gap-4">
        <button
          onClick={handleSumar}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-md font-medium transition"
        >
          +
        </button>

        <button
          onClick={handleRestar}
          disabled={quantity <= 1}
          className={`px-3 py-1 rounded-md font-medium transition ${
            quantity <= 1
              ? "bg-gray-500 cursor-not-allowed text-white"
              : "bg-yellow-600 hover:bg-yellow-700 text-white"
          }`}
        >
          -
        </button>

        <button
          onClick={handleEliminar}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-md font-medium transition"
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default CartCard;
