"use client";
import React, { useState } from "react";
import "./payment-radio-option.scss";
import Help from "../../icons/UI-icons/Help";
import CheckItem from "./CheckItem";
// import {C}

export default function PaymentRadionOption() {
  const [currenTpayment, setCurrenTpayment] = useState<string>("bizun");

  console.log("current state", currenTpayment);

  return (
    <div className="flex flex-col gap-8 payment-methos-container">
      <div
        className={`w-full credit-card-zone ${
          currenTpayment === "credit-card" && "credit-card-zone-active"
        }`}
      >
        <CheckItem
          title="Tarjeta de credito"
          isChecked={currenTpayment === "credit-card"}
          value={"credit-card"}
          name={"payment-option"}
          setValue={setCurrenTpayment}
          message="Instántaneo"
          icon={<Help />}
        />
      </div>

      <CheckItem
        title="Bizun"
        isChecked={currenTpayment === "bizun"}
        value={"bizun"}
        name={"payment-option"}
        setValue={setCurrenTpayment}
        message="Importe mínimo 10€"
        icon={<Help />}
      />
      <CheckItem
        title="Transferencia"
        isChecked={currenTpayment === "transfer"}
        value={"transfer"}
        name={"payment-option"}
        setValue={setCurrenTpayment}
        message="No instántaneo"
        icon={<Help />}
      />
    </div>
  );
}
