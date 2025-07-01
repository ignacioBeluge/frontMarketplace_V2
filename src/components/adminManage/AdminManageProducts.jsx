import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminManageProductsView from "./AdminManageProductView";
import {
  deleteProduct,
  fetchAllProducts,
  updatePrice,
  updateStock,
} from "../../redux/productSlice";

const AdminManageProducts = () => {
  
  const [selectedStockProductId, setSelectedStockProductId] = useState("");
  const [stock, setStock] = useState("");

  const [selectedPriceProductId, setSelectedPriceProductId] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items || []);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const handleUpdateStock = async (e) => {
    e.preventDefault();

    if (!selectedStockProductId || !stock) {
      alert("Seleccioná un producto y completá el stock");
      return;
    }

    if (isNaN(stock) || stock < 0) {
      alert("El stock debe ser un número positivo");
      return;
    }

    try {
      await dispatch(
        updateStock({
          id: selectedStockProductId,
          stock: parseInt(stock),
        })
      );
      setStock("");
      alert("Stock actualizado con éxito");
    } catch (error) {
      console.error("Error al actualizar el stock:", error);
      alert("Error al actualizar el stock. Por favor, intenta nuevamente.");
    }
  };

  const handleUpdatePrice = async (e) => {
    e.preventDefault();

    if (!selectedPriceProductId || !price) {
      alert("Seleccioná un producto y completa el precio");
      return;
    }

    if (isNaN(price) || price <= 0) {
      alert("El precio debe ser un número positivo");
      return;
    }

    try {
      await dispatch(
        updatePrice({
          id: selectedPriceProductId,
          price: price,
        })
      );
      alert("Precio actualizado con éxito");
      setPrice("");
    } catch (error) {
      console.error("Error al actualizar el precio:", error);
      alert("Error al actualizar el precio. Por favor, intenta nuevamente.");
    }
  };

  const handleDeleteProduct = async (productId) => {

    const confirm = window.confirm("¿Estás seguro de eliminar este producto?");
    if (!confirm) return;
    try {
    await dispatch(deleteProduct({ id: productId }));
    alert("Producto eliminado con éxito");

    } catch (error) {
      console.error("Error al eliminar el producto:", error);
      alert("Error al eliminar el producto. Por favor, intenta nuevamente.");
    }

  };

  return (
    <AdminManageProductsView
      products={products}

      selectedStockProductId={selectedStockProductId}
      selectedPriceProductId={selectedPriceProductId}

      stock={stock}
      price={price}

      onselectedStockProductId={(e) =>
        setSelectedStockProductId(e.target.value)
      }

      onselectedPriceProductId={(e) =>
        setSelectedPriceProductId(e.target.value)
      }

      onStockChange={(e) => setStock(e.target.value)}
      onPriceChange={(e) => setPrice(e.target.value)}

      onUpdateStock={handleUpdateStock}
      onUpdatePrice={handleUpdatePrice}
      onDeleteProduct={handleDeleteProduct}

    />
  );
};

export default AdminManageProducts;
