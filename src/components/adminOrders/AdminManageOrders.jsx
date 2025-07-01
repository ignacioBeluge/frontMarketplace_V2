import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, fetchAllOrders } from "../../redux/orderSlice";
import AdminManageOrderView from "./adminManageOrderView";

const AdminManageOrders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.items);

  useEffect(() => {
    dispatch(fetchAllOrders());
  }, [dispatch]);

  const handleDeletedOrder = async (orderId) => {
    const confirm = window.confirm("¿Estás seguro de eliminar esta orden?");
    if (!confirm) return;
    try {
      const resultado = await dispatch(deleteOrder({orderId}));
      if (deleteOrder.fulfilled.match(resultado)) {
        alert("Orden borrada con exito ");
      } else {
        const backError = resultado.payload.message;
        alert("Error:\n" + backError);
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <AdminManageOrderView orders={orders} onDeleteOrder={handleDeletedOrder} />
  );
};

export default AdminManageOrders;
