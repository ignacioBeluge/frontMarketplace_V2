import { useEffect, useState } from "react";
import AdminManageProductsView from "./AdminManageProductView";

const AdminManageProducts = ({ token }) => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState("");
  const [stock, setStock] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:8080/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error al cargar productos:", err);
      }
    };
    fetchProducts();
  }, []);

  const handleUpdateStock = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8080/products/${selectedProductId}/stock`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ stock: parseInt(stock) }),
        }
      );
      if (!response.ok) throw new Error("No se pudo modificar el stock");
      alert("Stock actualizado");
      setStock("");
    } catch (err) {
      console.error(err);
      alert("Error al actualizar stock");
    }
  };

  const handleDeleteProduct = async (id) => {
    const confirm = window.confirm("¿Estás seguro de eliminar este producto?");
    if (!confirm) return;

    try {
      const response = await fetch(`http://localhost:8080/products/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error("No se pudo eliminar");
      alert("Producto eliminado");
      setProducts(products.filter((p) => p.id !== id));
    } catch (err) {
      console.error(err);
      alert("Error al eliminar producto");
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