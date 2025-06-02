import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminProductFormView from "./AdminProductFormView";

const AdminProductForm = ({ token }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:8080/categories");
        if (!response.ok) throw new Error("Error al obtener categorías");
        const data = await response.json();
        console.log("Categorias obtenidas", data);
        setCategories(data);
      } catch (err) {
        console.error("Error al obtener categorías:", err);
      }
    };
    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !description || !price || !imageFile || !selectedCategoryId || !stock) {
      alert("Completá todos los campos");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", parseFloat(price));
    formData.append("stock", parseInt(stock));
    formData.append("image", imageFile);
    formData.append("categoryId", selectedCategoryId);

    try {
      const response = await fetch("http://localhost:8080/products", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      if (!response.ok) throw new Error("Error al crear producto");

      alert("Producto creado exitosamente");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("No se pudo crear el producto");
    }
  };

  return (
    <>
      <h1>Crear nuevo producto</h1>
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