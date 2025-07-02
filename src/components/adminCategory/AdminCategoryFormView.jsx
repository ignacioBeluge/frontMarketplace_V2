const AdminCategoryView = ({ description, setDescription, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="bg-gray-800 p-6 rounded-lg shadow-md max-w-3xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-indigo-400 mb-6 text-center">
          Crear nueva categoria
        </h2>
      <input
        type="text"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="px-4 py-2 rounded-md border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md transition"
      >
        Crear
      </button>
    </form>
  );
};

export default AdminCategoryView;