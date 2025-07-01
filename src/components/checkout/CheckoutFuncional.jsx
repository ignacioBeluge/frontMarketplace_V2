import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutView from "./CheckoutView";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../redux/orderSlice";

const CheckoutFuncional = () => {
    const [selectedPayment, setSelectedPayment] = useState("cash");
    const [cardData, setCardData] = useState({
    cardNumber: "",
    name: "",
    expiry: "",
    cvv: "",
    });

    const navigate = useNavigate();

    const dispatch = useDispatch();
    
    const token = useSelector((state) => state.auth.token);



    const handlePaymentChange = (e) => {
        setSelectedPayment(e.target.value);
    };

    const handleCardFieldChange = (e) => {
        setCardData({ ...cardData, [e.target.name]: e.target.value });
    };

    const handleSubmitOrder = async () => {
        try {
            const resultado = await dispatch(createOrder())
            if (createOrder.fulfilled.match(resultado)){
                alert("Orden creada con exito ")
                navigate('/orders')
            } else {
                const backError = resultado.payload.message;
                alert("Error:\n" + backError);
                navigate('/cart')
            }
        }catch(error) {
            alert("Error: " + error.message);
        }
    };

    return (
        <CheckoutView
        selectedPayment={selectedPayment}
        onPaymentChange={handlePaymentChange}
        cardData={cardData}
        onCardFieldChange={handleCardFieldChange}
        onSubmitOrder={handleSubmitOrder}
        />
    );
    };

export default CheckoutFuncional;