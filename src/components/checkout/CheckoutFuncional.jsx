import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutView from "./CheckoutView";

const CheckoutFuncional = ({ token }) => {
    const [selectedPayment, setSelectedPayment] = useState("cash");
    const [cardData, setCardData] = useState({
    cardNumber: "",
    name: "",
    expiry: "",
    cvv: "",
    });
    const navigate = useNavigate();

    const handlePaymentChange = (e) => {
        setSelectedPayment(e.target.value);
    };

    const handleCardFieldChange = (e) => {
        setCardData({ ...cardData, [e.target.name]: e.target.value });
    };

    const handleSubmitOrder = async () => {
        try {
        const response = await fetch("http://localhost:8080/orders", {
            method: "POST",
            headers: {
            Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) throw new Error("Error al crear orden");

        alert("¡Orden de compra creada exitosamente!");
        navigate("/");
        } catch (err) {
        console.error(err);
        alert("No se pudo crear la orden");
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