const BarraBusqueda = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      placeholder="Escribí el producto a buscar..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-full p-3 mb-6 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
    />
  );
};

export default BarraBusqueda;
