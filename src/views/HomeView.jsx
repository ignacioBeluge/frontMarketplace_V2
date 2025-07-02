import { useEffect } from "react";
import CategoryContainer from "../components/categoria/CategoryContainer";
import "./HomeView.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../redux/productSlice";
import ProductDestacado from "../components/Product/ProductDestacado";

const HomeView = () => {
  const dispatch = useDispatch();
  const {
    items: productos,
    loading,
    error,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const productosAleatorios = [...productos]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <main className="w-full text-white px-4 md:px-10 py-10">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        Bienvenido a <span className="text-indigo-400">G3STORE</span>
      </h1>
      <p className="text-lg mb-8 text-center text-gray-300">
        Tu lugar para encontrar los mejores productos
      </p>

      <section className="mb-12">
        <CategoryContainer />
      </section>

      <section className="categories-section">
        <h2 className="text-7xl font-semibold mb-4" >Productos destacados</h2>
        {loading && <p className="text-yellow-400">Cargando productos...</p>}
        {error && (
          <p className="text-red-400">Error al cargar productos: {error}</p>
        )}
        {!loading && !error && (
          <ProductDestacado productos={productosAleatorios} />
        )}
      </section>
    </main>
  );
};

export default HomeView;