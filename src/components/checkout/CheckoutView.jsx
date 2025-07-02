const CheckoutView = ({
  selectedPayment,
  onPaymentChange,
  onCardFieldChange,
  cardData,
  onSubmitOrder,
}) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-md max-w-md mx-auto text-white">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-400">
        Seleccionar medio de pago
      </h2>

      <div className="space-y-2 mb-4">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="payment"
            value="cash"
            checked={selectedPayment === "cash"}
            onChange={onPaymentChange}
            className="accent-indigo-500"
          />
          Efectivo
        </label>

        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="payment"
            value="card"
            checked={selectedPayment === "card"}
            onChange={onPaymentChange}
            className="accent-indigo-500"
          />
          Crédito / Débito
        </label>
      </div>

      {selectedPayment === "card" && (
        <div className="space-y-3 mb-4">
          <input
            type="text"
            name="cardNumber"
            placeholder="Número de tarjeta"
            value={cardData.cardNumber}
            onChange={onCardFieldChange}
            className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            name="name"
            placeholder="Nombre en la tarjeta"
            value={cardData.name}
            onChange={onCardFieldChange}
            className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <div className="flex gap-4">
            <input
              type="text"
              name="expiry"
              placeholder="Vencimiento (MM/AA)"
              value={cardData.expiry}
              onChange={onCardFieldChange}
              className="w-1/2 px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={cardData.cvv}
              onChange={onCardFieldChange}
              className="w-1/2 px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      )}

      <button
        onClick={onSubmitOrder}
        className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold py-2 px-4 rounded-lg"
      >
        Comprar
      </button>
    </div>
  );
};

export default CheckoutView;