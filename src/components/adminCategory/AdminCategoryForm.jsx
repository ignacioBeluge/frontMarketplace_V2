import { useState } from "react"

import AdminCategoryView from "./AdminCategoryFormView";

const AdminCategoryForm = ({token}) => {
    const [description, setDescription] = useState("");
    const URL = 'http://localhost:8080/categories'

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!description.trim()){
            alert("Ingresa descripcion");
            return
        }

        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization" : `Bearer ${token}`,
                },
                body: JSON.stringify({description})
            })

            if(!response.ok) {
                throw new Error("Error al crear categoria")
            }

            alert("Categoria creada");
        }catch (err) {
            console.error(err);
        }
    }

    return (
        <AdminCategoryView
        description = {description}
        setDescription = {setDescription}
        onSubmit = {handleSubmit}
        />
    )

}

export default AdminCategoryForm;