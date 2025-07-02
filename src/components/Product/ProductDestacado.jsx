import ProductCard from "./ProductCard";

const ProductosDestacados = ({ productos }) => {
  return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {productos.map((prod) => (
          <ProductCard
            key={prod.id}
            id={prod.id}
            name={prod.name}
            price={prod.price}
            image={prod.imageBase64}
            minimal={true}
          />
        ))}
      </div>
  );
};

export default ProductosDestacados;
