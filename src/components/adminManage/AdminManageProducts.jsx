import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminManageProductsView from "./AdminManageProductView";
import { deleteProduct, fetchProducts, updateStock } from "../../redux/productSlice";



const AdminManageProducts = () => {
  const [selectedProductId, setSelectedProductId] = useState("");
  const [stock, setStock] = useState("");
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items || []);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
  dispatch(fetchProducts());
}, [dispatch]);

  const handleUpdateStock = async (e) => {
    e.preventDefault();
    
    if (!selectedProductId || !stock) {
      alert("Seleccioná un producto y completá el stock");
      return;
    }
    await dispatch(updateStock({
      id: selectedProductId,
      stock: parseInt(stock)
    }));
    setStock("");
  };

  const handleDeleteProduct = async (productId) => {
    const confirm = window.confirm("¿Estás seguro de eliminar este producto?");
    if (!confirm) return;
    await dispatch(deleteProduct({id: productId}))
    alert("Producto eliminado con éxito");

    if (productId === selectedProductId) {
      setSelectedProductId("");
    }
  };

  return (
    <AdminManageProductsView
      products={products}
      selectedProductId={selectedProductId}
      stock={stock}
      onSelectProduct={(e) => setSelectedProductId(e.target.value)}
      onStockChange={(e) => setStock(e.target.value)}
      onUpdateStock={handleUpdateStock}
      onDeleteProduct={handleDeleteProduct}
    />
  );
};

export default AdminManageProducts;