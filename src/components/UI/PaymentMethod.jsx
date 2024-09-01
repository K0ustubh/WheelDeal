import React, { useEffect, useState } from "react";
import masterCard from "../../assets/all-images/master-card.jpg";
import { useNavigate } from "react-router-dom";
import "../../styles/payment-method.css";

const PaymentMethod = ({
  selectedPayment,
  handlePaymentChange,
  handleReserveClick,
}) => {
  return (
    <>
      <div className="payment">
        <label htmlFor="bank-transfer" className="d-flex align-items-center gap-2">
          <input
            type="radio"
            id="bank-transfer"
            value="bank-transfer"
            checked={selectedPayment === "bank-transfer"}
            onChange={handlePaymentChange}
          />
          Direct Bank Transfer
        </label>
      </div>

      <div className="payment mt-3">
        <label htmlFor="cheque" className="d-flex align-items-center gap-2">
          <input
            type="radio"
            id="cheque"
            value="cheque"
            checked={selectedPayment === "cheque"}
            onChange={handlePaymentChange}
          />
          Cheque Payment
        </label>
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="master-card" className="d-flex align-items-center gap-2">
          <input
            type="radio"
            id="master-card"
            value="master-card"
            checked={selectedPayment === "master-card"}
            onChange={handlePaymentChange}
          />
          Master Card
        </label>
        <img src={masterCard} alt="Master Card" />
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="paypal" className="d-flex align-items-center gap-2">
          <input
            type="radio"
            id="paypal"
            value="paypal"
            checked={selectedPayment === "paypal"}
            onChange={handlePaymentChange}
          />
          Paypal
        </label>
      </div>

      <div className="payment text-end mt-5">
        <button onClick={handleReserveClick} className="d-flex align-items-center gap-1">
          Reserve
        </button>
      </div>
    </>
  );
};

export default PaymentMethod;
