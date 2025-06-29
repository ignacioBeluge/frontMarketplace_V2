import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, updateCantidad, removeItem } from "../../redux/cartSlice";
import CartList from "./CartList";

const CartPadre = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  // Obtenemos el carrito desde Redux
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.totalPrice);

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    dispatch(fetchCart()); // traemos el carrito del backend al montar
  }, [token, dispatch]);

  console.log("Items en CartPadre:", items)

  // Lógica para actualizar cantidad
  const handleUpdateCantidad = (productId, cantidad) => {
    dispatch(updateCantidad({ token, productId, quantity: cantidad }));
  };

  // Lógica para eliminar item
  const handleDeleteItem = (productId) => {
    dispatch(removeItem({ token, productId }));
  };

  return (
    <div>
      <CartList
        items={items}
        total={total}
        onUpdateCantidad={handleUpdateCantidad}
        onDeleteItem={handleDeleteItem}
      />

      {items.length > 0 && (
        <button onClick={() => navigate("/checkout")}>
          Seleccionar medio de pago
        </button>
      )}
    </div>
  );
};

export default CartPadre;
