import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminView = ({ token, role }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [categories, setCategories] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
    // Traer categorías desde el backend
    const fetchCategories = async () => {
        try {
            const response = await fetch("http://localhost:8080/categories");
            if (!response.ok) throw new Error("Error al obtener categorías");
            const data = await response.json();
            setCategories(data);
        } catch (err) {
            console.error("Error al obtener categorías:", err);
        }
    };

        fetchCategories();
    }, []);

    if (role !== "ADMIN") {
        return <h2>No estás autorizado para ver esta página</h2>;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

    if (!name || !description || !price || !imageFile || !selectedCategoryId) {
        alert("Completá todos los campos");
        return;
    }

    const formData = new FormData();
    formData.append("nombre", name);
    formData.append("descripcion", description);
    formData.append("precio", price);
    formData.append("imagen", imageFile);
    formData.append("categoriaId", selectedCategoryId);

    try {
        const response = await fetch("http://localhost:8080/productos", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
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
        <div>
        <h1>Crear nuevo producto</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
        /><br />

        <input
            type="text"
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        /><br />

        <input
            type="number"
            placeholder="Precio"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
        /><br />

        <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
        /><br />

        <select
            value={selectedCategoryId}
            onChange={(e) => setSelectedCategoryId(e.target.value)}
        >
            <option value="">Seleccioná una categoría</option>
            {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                {cat.nombre}
            </option>
            ))}
        </select><br />

        <button type="submit">Crear producto</button>
        </form>
    </div>
    );
};

export default AdminView;
