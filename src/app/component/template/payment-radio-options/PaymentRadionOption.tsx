"use client";
import React, { useState } from "react";
import "./payment-radio-option.scss";

const CircleCheck = ({ active }: { active: boolean }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="17"
      fill="none"
      viewBox="0 0 18 17"
    >
      <circle
        cx="9.163"
        cy="8.519"
        r="7.698"
        stroke="#1D1D1D"
        strokeWidth="1.026"
      ></circle>
     { active && <circle cx="9.163" cy="8.519" r="4.105" fill="#1D1D1D"></circle>}
    </svg>
  );
};

export default function PaymentRadionOption() {
  const [currenTpayment, setCurrenTpayment] = useState<string>("bizun");

  console.log("current state", currenTpayment);

  return (
    <div className="flex flex-col gap-8 payment-methos-container">
      <label
        className={`payment-option-item ${
          currenTpayment === "credit-card" && "payment-option-item-active"
        } `}
      >
        <input
          type="radio"
          name="payment-option"
          checked={currenTpayment === "credit-card"}
          value={"credit-card"}
          onChange={(e) => setCurrenTpayment(e.target.value)}
        />
        <div className="flex items-center">
          <CircleCheck active={currenTpayment === "credit-card"} />
          <p className="payment-name-item">Tarjeta Bancaria</p>
        </div>
      </label>

      <label
        className={`payment-option-item ${
          currenTpayment === "bizun" && "payment-option-item-active"
        }`}
      >
        <input
          type="radio"
          name="payment-option"
          checked={currenTpayment === "bizun"}
          value={"bizun"}
          onChange={(e) => setCurrenTpayment(e.target.value)}
        />
        <div className="flex items-center">
          <CircleCheck active={ currenTpayment === "bizun" } />
          <p className= "payment-name-item">Bizun</p>
        </div>
        
      </label>
      <label
        className={`payment-option-item ${
          currenTpayment === "transfer" && "payment-option-item-active"
        }`}
      >
        <input
          type="radio"
          name="payment-option"
          checked={currenTpayment === "transfer"}
          value={"transfer"}
          onChange={(e) => setCurrenTpayment(e.target.value)}
        />
        <div className="flex items-center">
          <CircleCheck active={currenTpayment === "transfer"} />
          <p className="payment-name-item">Transferencia</p>
        </div>
       
      </label>
    </div>
  );
}
