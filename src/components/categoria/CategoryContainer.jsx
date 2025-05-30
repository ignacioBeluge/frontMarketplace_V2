import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryList from "./CategoryList";

const CategoryContainer = () => {

    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const URL = "http://localhost:8080/categories";

    useEffect(() => {
        fetch(URL)
        .then((resultado) => resultado.json())
        .then((data) => setCategories(data))
        .catch((err) => console.error("Error al traer categorias", err))
    },[])

    const handleCategoryClick = (id) => {
        console.log("cat clickeada", id)
        navigate(`/products/${id}`)
    }

    return (
        <>
        <h2>Categorias </h2>
        <CategoryList categories={categories} onCategoryClick={handleCategoryClick}/>
        </>
    )
}

export default CategoryContainer