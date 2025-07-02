const AdminManageProductsView = ({
  products,
  selectedStockProductId,
  selectedPriceProductId,
  stock,
  price,
  onselectedStockProductId,
  onselectedPriceProductId,
  onStockChange,
  onPriceChange,
  onUpdateStock,
  onUpdatePrice,
  onDeleteProduct,
}) => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-900 rounded-xl shadow-lg text-white space-y-10">
      {/* Modificar Stock */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-indigo-400">
          Modificar stock de producto
        </h2>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <select
            value={selectedStockProductId}
            onChange={onselectedStockProductId}
            className="flex-1 px-3 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Seleccioná un producto</option>
            {products.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>

          <input
            type="number"
            placeholder="Nuevo stock"
            value={stock}
            onChange={onStockChange}
            className="w-full max-w-xs px-3 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            onClick={onUpdateStock}
            disabled={!selectedStockProductId || !stock}
            className={`px-4 py-2 rounded-md font-semibold transition ${
              !selectedStockProductId || !stock
                ? "bg-indigo-400/50 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            Actualizar stock
          </button>
        </div>
      </section>

      {/* Modificar Precio */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-indigo-400">
          Modificar precio de producto
        </h2>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <select
            value={selectedPriceProductId}
            onChange={onselectedPriceProductId}
            className="flex-1 px-3 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Seleccioná un producto</option>
            {products.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>

          <input
            type="number"
            placeholder="Nuevo precio"
            value={price}
            onChange={onPriceChange}
            className="w-full max-w-xs px-3 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            onClick={onUpdatePrice}
            disabled={!selectedPriceProductId || !price}
            className={`px-4 py-2 rounded-md font-semibold transition ${
              !selectedPriceProductId || !price
                ? "bg-indigo-400/50 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            Actualizar Precio
          </button>
        </div>
      </section>

      {/* Eliminar producto */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-red-500">
          Eliminar producto
        </h2>
        <ul className="space-y-3 max-h-60 overflow-y-auto">
          {products.map((p) => (
            <li
              key={p.id}
              className="flex justify-between items-center bg-gray-800 rounded-md px-4 py-2"
            >
              <span>{p.name}</span>
              <button
                onClick={() => onDeleteProduct(p.id)}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md transition"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AdminManageProductsView;
