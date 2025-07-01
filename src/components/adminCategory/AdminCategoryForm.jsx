import { useState } from "react"
import AdminCategoryView from "./AdminCategoryFormView";
import { useDispatch } from "react-redux";
import { createCategories } from "../../redux/categoriesSlice";

const AdminCategoryForm = () => {
    const [description, setDescription] = useState("");
    const dispatch= useDispatch()

    const handleSubmit= async (e) => {  //crear categoria
      e.preventDefault()
      if (!description.trim()) {
      alert("Ingresa una descripción");
      return;
    }
    try {
      await dispatch(createCategories({ description }));
      alert("Categoría creada");
      setDescription(""); // limpiar campo
    } catch (err) {
      console.error("Error al crear categoría:", err);
      alert("Error al crear categoría");
    }
  };
        

    return (
        <AdminCategoryView
        description = {description}
        setDescription = {setDescription}
        onSubmit = {handleSubmit}
        />
    )

}

export default AdminCategoryForm;