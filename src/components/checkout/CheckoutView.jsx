const CheckoutView = ({
    selectedPayment,
    onPaymentChange,
    onCardFieldChange,
    cardData,
    onSubmitOrder,
    }) => {
    return (
        <div>
        <h2>Seleccionar medio de pago</h2>

        <label>
            <input
            type="radio"
            name="payment"
            value="cash"
            checked={selectedPayment === "cash"}
            onChange={onPaymentChange}
            />
            Efectivo
        </label>

        <label>
            <input
            type="radio"
            name="payment"
            value="card"
            checked={selectedPayment === "card"}
            onChange={onPaymentChange}
            />
            Crédito / Débito
        </label>

        {selectedPayment === "card" && (
            <div>
            <input
                type="text"
                name="cardNumber"
                placeholder="Número de tarjeta"
                value={cardData.cardNumber}
                onChange={onCardFieldChange}
            />
            <input
                type="text"
                name="name"
                placeholder="Nombre en la tarjeta"
                value={cardData.name}
                onChange={onCardFieldChange}
            />
            <input
                type="text"
                name="expiry"
                placeholder="Vencimiento (MM/AA)"
                value={cardData.expiry}
                onChange={onCardFieldChange}
            />
            <input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={cardData.cvv}
                onChange={onCardFieldChange}
            />
            </div>
        )}

        <button onClick={onSubmitOrder}>Comprar</button>
        </div>
    );
};

export default CheckoutView;