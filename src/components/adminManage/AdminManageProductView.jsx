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
    <div>
      <h2>Modificar stock de producto</h2>

      <select value={selectedStockProductId} onChange={onselectedStockProductId}>
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
      />
      <button onClick={onUpdateStock} disabled={!selectedStockProductId || !stock}>
        Actualizar stock
      </button>

      <h2>Modificar precio de producto</h2>

      <select value={selectedPriceProductId} onChange={onselectedPriceProductId}>
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
      />
      <button onClick={onUpdatePrice} disabled={!selectedPriceProductId || !price}>
        Actualizar Precio
      </button>

      <h2>Eliminar producto</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name}{" "}
            <button onClick={() => onDeleteProduct(p.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminManageProductsView;