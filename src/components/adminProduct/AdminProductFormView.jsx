const AdminProductFormView = ({
    name,
    description,
    price,
    stock,
    imageFile,
    categories,
    selectedCategoryId,
    onNameChange,
    onDescriptionChange,
    onPriceChange,
    onStockChange,
    onImageChange,
    onCategoryChange,
    onSubmit
    }) => {

    return (
    <div>
        <form onSubmit={onSubmit}>
        <h2> Crear nuevo producto </h2>
        <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={onNameChange}
        /><br />

        <input
        type="text"
        placeholder="Descripción"
        value={description}
        onChange={onDescriptionChange}
        /><br />

        <input
        type="number"
        placeholder="Precio"
        value={price}
        onChange={onPriceChange}
        /><br />

        <input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={onStockChange}
        /><br />

        <input
        type="file"
        accept="image/*"
        onChange={onImageChange}
        /><br />

        <select
        value={selectedCategoryId}
        onChange={onCategoryChange}
        >
        <option value="">Seleccioná una categoría</option>
        {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
                {cat.description}
            </option>
        ))}
        </select><br />

        <button type="submit">Crear producto</button>

    </form>
    </div>
    );
};

export default AdminProductFormView;