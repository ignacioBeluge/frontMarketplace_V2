import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/categoriesSlice";
import { fetchAllProducts } from "../../redux/productSlice";
import CategoryList from "./CategoryList";
import ProductCard from "../Product/ProductCard";
import BarraBusqueda from "../barraBusqueda/barraBusqueda";
import { addProduct } from "../../redux/cartSlice";

const CategoryContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");

  const { items: categories, loading, error } = useSelector((state) => state.categories);
  const { items: products, loading: loadingProducts, error: errorProducts } = useSelector((state) => state.products);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const filteredProducts = products.filter((product) =>
    (product.name + " " + product.description)
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  const agregarCarrito = (productId) => {
    if (!token) {
      navigate("/login");
      return;
    }
    dispatch(addProduct({ productId })).then(() => alert("Producto agregado"));
  };

  const handleCategoryClick = (id) => {
    navigate(`/products/${id}`);
  };

  if (loading || loadingProducts) return <p>Cargando...</p>;
  if (error || errorProducts) return <p>Error al cargar datos</p>;

  return (
    <>
      <BarraBusqueda query={query} setQuery={setQuery} />

      {query.trim() !== "" && (
        <>
          <h2>Resultados de búsqueda</h2>
          <div className="product-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
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
              ))
            ) : (
              <p>No se encontraron productos que coincidan con "{query}"</p>
            )}
          </div>
        </>
      )}

      {query.trim() === "" && (
        <>
          <h2>Categorías</h2>
          <CategoryList categories={categories} onCategoryClick={handleCategoryClick} />
        </>
      )}
    </>
  );
};

export default CategoryContainer;