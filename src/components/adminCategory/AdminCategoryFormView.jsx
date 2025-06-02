
const AdminCategoryView = ({description, setDescription, onSubmit}) => {
    return (
        <form onSubmit={onSubmit}>
            <h2> Crear nueva categoria </h2>
            <input
            type="text"
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            /><br />
            <button type="Submit"> Crear </button>
        </form>
    )
}

export default AdminCategoryView;