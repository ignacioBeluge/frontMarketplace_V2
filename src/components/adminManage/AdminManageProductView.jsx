const AdminManageProductsView = ({
  products,
  selectedProductId,
  stock,
  onSelectProduct,
  onStockChange,
  onUpdateStock,
  onDeleteProduct,
}) => {
  return (
    <div>
      <h2>Modificar stock de producto</h2>

      <select value={selectedProductId} onChange={onSelectProduct}>
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
      <button onClick={onUpdateStock} disabled={!selectedProductId || !stock}>
        Actualizar stock
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