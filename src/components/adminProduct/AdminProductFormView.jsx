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
  onSubmit,
}) => {
  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="bg-gray-800 p-6 rounded-lg shadow-md max-w-3xl mx-auto space-y-6"
      >
        <h2 className="text-2xl font-bold text-indigo-400 mb-6 text-center">
          Crear nuevo producto
        </h2>

        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={onNameChange}
          className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="text"
          placeholder="Descripción"
          value={description}
          onChange={onDescriptionChange}
          className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            placeholder="Precio"
            value={price}
            onChange={onPriceChange}
            className="p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            min="0"
            step="0.01"
          />
          <input
            type="number"
            placeholder="Stock"
            value={stock}
            onChange={onStockChange}
            className="p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            min="0"
          />
        </div>

        <input
          type="file"
          accept="image/*"
          onChange={onImageChange}
          className="text-gray-300"
        />

        <select
          value={selectedCategoryId}
          onChange={onCategoryChange}
          className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Seleccioná una categoría</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.description}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md font-bold transition"
        >
          Crear producto
        </button>
      </form>
    </div>
  );
};

export default AdminProductFormView;
