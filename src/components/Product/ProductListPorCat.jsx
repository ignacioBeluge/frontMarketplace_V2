import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard"
import { useEffect, useState } from "react";

const ProductListPorCat = ({token}) => {
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

    console.log("TOKEN EN ProductListPorCat:", token);

    const volver = () => {
        navigate("/");
    }

    const agregarCarrito = (productId) => {
        if (!token) {
            navigate("/login");
            return;
        }
        
        const body = {
        productId: productId,
        quantity: 1
    };

    console.log("Body enviado al backend:", body);

        fetch("http://localhost:8080/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(body)
        })
        .then((response) => {
            if (!response.ok){
                throw new Error("Error al agregar carrito");
            }
            return response.json();
        })
        .then((data) => {
            alert("Producto agregado al carrito")
        })
        .catch((err) => {
            console.error(err);
        })
    }

    return(
        <>
        <h1> Productos </h1>
        <button onClick={volver}> Volver al inicio </button>
        <div className="product-grid">
            {products.map((product) => (
                <ProductCard
                key = {product.id}
                id = {product.id}
                name = {product.name}
                description = {product.description}
                price = {product.price}
                image = {product.imageBase64}
                onAddToCart={agregarCarrito}
                />
            ))}
        </div>
        </>
    )
}

export default ProductListPorCat