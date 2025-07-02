import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/productSlice";
import { addProduct } from "../../redux/cartSlice";

const ProductListPorCat = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    items: products,
    loading,
    error,
  } = useSelector((state) => state.products);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    dispatch(fetchProducts(categoryId));
  }, [categoryId, dispatch]);

  if (loading) return <p> Cargando productos.. </p>;
  if (error) return <p> Error al cargar: {error} </p>;

  const agregarCarrito = (productId) => {
    if (!token) {
      navigate("/login");
      return;
    }
    dispatch(addProduct({ productId })).then(() => alert("Producto agregado"));
  };

  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-400 mb-6 mt-4">
        Productos
      </h1>
      <p className="text-center text-gray-400 text-lg mb-8">
        Explorá todos los productos de esta categoría
      </p>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            stock={product.stock}
            image={product.imageBase64}
            onAddToCart={agregarCarrito}
          />
        ))}
      </div>
    </>
  );
};

export default ProductListPorCat;
