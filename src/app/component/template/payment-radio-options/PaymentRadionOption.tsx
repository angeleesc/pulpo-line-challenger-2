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
      {active && (
        <circle cx="9.163" cy="8.519" r="4.105" fill="#1D1D1D"></circle>
      )}
    </svg>
  );
};

const CheckItem = ({
  value,
  isChecked,
  name,
  setValue,
  title,
  message,
  icon
}: {
  value: string;
  isChecked: boolean;
  setValue: (value: string) => void;
  name: string;
  title: string;
  message?: string;
  icon?: React.ReactNode;
}) => {
  return (
    <label
      className={`payment-option-item ${
        isChecked && "payment-option-item-active"
      } `}
    >
      <input
        type="radio"
        name={name}
        checked={isChecked}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="flex items-center justify-between">
      <div className="flex items-center">
        <CircleCheck active={isChecked} />
        <p className="payment-name-item">{title}</p>
      </div>
      {
        message && <div>
            <p className="payment-name-item-message">
                {message}
            </p>
        </div>
      }

      </div>
    </label>
  );
};

export default function PaymentRadionOption() {
  const [currenTpayment, setCurrenTpayment] = useState<string>("bizun");

  console.log("current state", currenTpayment);

  return (
    <div className="flex flex-col gap-8 payment-methos-container">
      <CheckItem
        title="Tarjeta de credito"
        isChecked={currenTpayment === "credit-card"}
        value={"credit-card"}
        name={"payment-option"}
        setValue={setCurrenTpayment}
        message="Instántaneo"
      />

      <CheckItem
        title="Bizun"
        isChecked={currenTpayment === "bizun"}
        value={"bizun"}
        name={"payment-option"}
        setValue={setCurrenTpayment}
        message="Importe mínimo 10€"
      />
      <CheckItem
        title="Transferencia"
        isChecked={currenTpayment === "transfer"}
        value={"transfer"}
        name={"payment-option"}
        setValue={setCurrenTpayment}
        message="No instántaneo"
      />
    </div>
  );
}
