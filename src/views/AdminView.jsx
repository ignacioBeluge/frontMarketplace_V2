import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AdminCategoryForm from "../components/adminCategory/AdminCategoryForm";
import AdminProductForm from "../components/adminProduct/AdminProductForm";

const AdminView = () => {
  const navigate = useNavigate();
  const { role } = useSelector((state) => state.auth);

  if (role !== "ADMIN") {
    return (
      <h2 className="text-red-500 text-center text-xl mt-10">
        No estás autorizado para ver esta página
      </h2>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-white bg-gray-900 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-indigo-400 text-center mb-10">
        Panel de Administrador
      </h1>

      <div className="space-y-10">
        <section className="bg-gray-800 p-6 rounded-lg shadow">
          <AdminCategoryForm />
        </section>

        <section className="bg-gray-800 p-6 rounded-lg shadow">
          <AdminProductForm />
        </section>

        <div className="flex justify-center gap-6">
          <button
            onClick={() => navigate("/admin/products/manage")}
            className="bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold px-6 py-3 rounded-lg"
          >
            Modificar / Eliminar Producto
          </button>

          <button
            onClick={() => navigate("/admin/orders/manage")}
            className="bg-red-600 hover:bg-red-700 transition text-white font-semibold px-6 py-3 rounded-lg"
          >
            Eliminar Orden
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminView;