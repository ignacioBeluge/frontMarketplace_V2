import CartPadre from "../components/cart/CartPadre";

const CartView = () => {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-indigo-400 mb-6 text-center">
          🛒 Mi Carrito
        </h1>
        <CartPadre />
      </div>
    </>
  );
};

export default CartView;
