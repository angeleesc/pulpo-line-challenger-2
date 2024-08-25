"use client";
import React, { useState } from "react";
import "./payment-radio-option.scss"

export default function PaymentRadionOption() {
  const [currenTpayment, setCurrenTpayment] = useState<string>("bizun");

  console.log("current state", currenTpayment);

  return (
    <div className="flex flex-col gap-8 payment-methos-container">
      <label className={`payment-option-item ${currenTpayment === "credit-card" && "payment-option-item-active" } `} >
        <input
          type="radio"
          name="payment-option"
          checked={currenTpayment === "credit-card"}
          value={"credit-card"}
          onChange={(e) => setCurrenTpayment(e.target.value)}
        />
        <span>Tarjeta Bancaria</span>
      </label>

      <label className={`payment-option-item ${currenTpayment === "bizun" && "payment-option-item-active" }`} >
        <input
          type="radio"
          name="payment-option"
          checked={currenTpayment === "bizun"}
          value={"bizun"}
          onChange={(e) => setCurrenTpayment(e.target.value)}
        />
        <span>Bizun</span>
      </label>
      <label className={`payment-option-item ${currenTpayment === "transfer" && "payment-option-item-active" }`}>
        <input
          type="radio"
          name="payment-option"
          checked={currenTpayment === "transfer"}
          value={"transfer"}
          onChange={(e) => setCurrenTpayment(e.target.value)}
        />
        <span>Tranferencia</span>
      </label>
    </div>
  );
}
