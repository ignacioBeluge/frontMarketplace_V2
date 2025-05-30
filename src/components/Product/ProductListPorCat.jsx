import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard"
import { useEffect, useState } from "react";

const ProductListPorCat = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const URL = `http://localhost:8080/products/${categoryId}`
    const navigate = useNavigate();

    useEffect(() => {
        fetch(URL)
        .then((resultado) => resultado.json())
        .then((data) => setProducts((data)))
        .catch((err) => console.error("Error al traer productos", err))
    }, [categoryId])

    const volver = () => {
        navigate("/");
    }

    return(
        <>
        <h1> Productos </h1>
        <button onClick={volver}> Volver al inicio </button>
        <div>
            {products.map((product) => (
                <ProductCard
                key = {product.id}
                name = {product.name}
                description = {product.description}
                price = {product.price}
                image = {product.imageBase64}
                />
            ))}
        </div>
        </>
    )
}

export default ProductListPorCat