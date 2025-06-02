import AdminCategoryForm  from '../components/adminCategory/AdminCategoryForm'
import AdminProductForm from '../components/adminProduct/AdminProductForm'
const AdminView = ({token, role}) => {

    if (role !== "ADMIN") {
        return <h2>No estás autorizado para ver esta página</h2>;
    }

    return (
        <div>
            <h1> Panel de administrador </h1>
            <AdminCategoryForm token={token}/>
            <AdminProductForm token={token} />
        </div>
    )

}

export default AdminView;