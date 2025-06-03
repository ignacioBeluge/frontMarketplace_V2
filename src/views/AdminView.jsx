import { useNavigate } from 'react-router-dom';
import AdminCategoryForm  from '../components/adminCategory/AdminCategoryForm'
import AdminManageProducts from '../components/adminManage/AdminManageProducts';
import AdminProductForm from '../components/adminProduct/AdminProductForm'
const AdminView = ({token, role}) => {

    const navigate = useNavigate();

    if (role !== "ADMIN") {
        return <h2>No estás autorizado para ver esta página</h2>;
    }

    return (
        <div>
            <h1> Panel de administrador </h1>
            <AdminCategoryForm token={token}/>
            <AdminProductForm token={token} />
            <button onClick={() => navigate("/admin/products/manage")}>
                Modificar / Eliminar producto
            </button>
        </div>
    )

}

export default AdminView;