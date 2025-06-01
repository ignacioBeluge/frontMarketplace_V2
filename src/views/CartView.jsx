import CartPadre from "../components/cart/CartPadre";

const CartView = ({token}) => {
    return (
        <>
        <div >
            <h1> Mi carrito </h1>
            <CartPadre token = {token} />
        </div>
        </>
    )
}

export default CartView;