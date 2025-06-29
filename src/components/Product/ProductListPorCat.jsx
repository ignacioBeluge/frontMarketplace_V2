import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from "../../redux/productSlice";
import { addProduct } from "../../redux/cartSlice";

const ProductListPorCat = () => {
    const { categoryId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {items: products,loading,error} = useSelector((state) => state.products)
    const token = useSelector((state) => state.auth.token);

    useEffect(() => {
        dispatch(fetchProducts(categoryId))
    },[categoryId,dispatch])

    if (loading) return <p> Cargando productos.. </p>
    if (error) return <p> Error al cargar: {error} </p>

    
    const agregarCarrito = (productId) => {
        if (!token) {
            navigate("/login");
            return;
        }
        dispatch(addProduct({ productId }))
        .then(() => alert ("Producto agregado"))
    }

    return(
        <>
        <h1> Productos </h1>
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