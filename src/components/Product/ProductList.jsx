import { useEffect, useState } from "react";

import ProductCard from "./ProductCard";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const URL = "http://localhost:8080/products"

    useEffect(() => {
        fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            setProducts(data)
        })
        .catch((error) => {
            console.error("Error", error)
        })
    },[])

    return (
        <>
        <h1> Productos </h1>
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

export default ProductList;