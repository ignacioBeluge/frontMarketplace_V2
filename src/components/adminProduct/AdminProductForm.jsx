import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { createProducts } from "../../redux/productSlice";

import AdminProductFormView from "./AdminProductFormView";
import { fetchCategories } from "../../redux/categoriesSlice";

const AdminProductForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  const dispatch = useDispatch();

  const {items: categories , loading, error} = useSelector((state)=> state.categories)

  useEffect(()=>{
        dispatch(fetchCategories())
    },[dispatch])


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !description || !price || !imageFile || !selectedCategoryId || !stock) {
      alert("Completá todos los campos");
      return;
    }

    if (isNaN(price) || isNaN(stock)) {
      alert("El precio y el stock deben ser números");
      return;
    }

    if (parseFloat(price) <= 0 || parseInt(stock) < 0) {
      alert("El precio debe ser mayor a 0 y el stock no puede ser negativo");
      return;
    }

    // Crear el objeto del nuevo producto

    const newProduct = {
    name,
    description,
    price,
    stock,
    imageFile,
    selectedCategoryId,
    }
    

    try {
      const resultAction = await dispatch(createProducts(newProduct));

      if (createProducts.fulfilled.match(resultAction)) {
        alert("Producto creado correctamente");
        // Acá podés resetear el form si querés
      } else {
        alert("Error al crear el producto");
      }
    } catch (err) {
      console.error("Error en handleSubmit:", err);
      alert("Ocurrió un error inesperado");
    }

    // Resetear el formulario
    setName(""); 
    setDescription("");
    setPrice("");
    setStock("");
    setImageFile(null);
    setSelectedCategoryId("");
  };


  if (loading) return <p>Cargando categorías...</p>;
  if (error) return <p>Error al cargar categorías: {error}</p>;

  return (
    <>
      <AdminProductFormView
        name={name}
        description={description}
        price={price}
        stock={stock}
        imageFile={imageFile}
        categories={categories}
        selectedCategoryId={selectedCategoryId}
        onNameChange={(e) => setName(e.target.value)}
        onDescriptionChange={(e) => setDescription(e.target.value)}
        onPriceChange={(e) => setPrice(e.target.value)}
        onImageChange={(e) => setImageFile(e.target.files[0])}
        onCategoryChange={(e) => setSelectedCategoryId(e.target.value)}
        onStockChange={(e) => setStock(e.target.value)}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default AdminProductForm;