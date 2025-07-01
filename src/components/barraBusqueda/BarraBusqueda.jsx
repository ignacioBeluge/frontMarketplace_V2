const BarraBusqueda = ({ query, setQuery}) => {
    return (
        <input
        type = "text"
        placeholder="Escribi el producto a buscar..."
        value = {query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
        />
    )
}

export default BarraBusqueda;