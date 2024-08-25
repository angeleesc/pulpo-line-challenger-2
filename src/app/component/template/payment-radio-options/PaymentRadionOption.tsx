"use client";
import React, { useState } from "react";
import "./payment-radio-option.scss";
import Help from "../../icons/UI-icons/Help";
import CheckItem from "./CheckItem";
import { Select, Option } from "@material-tailwind/react";
// import {C}

const cardsBrand = ["Visa", "mastercar", "maestro","Sabadell"];

export default function PaymentRadionOption() {
  const [currenTpayment, setCurrenTpayment] = useState<string>("bizun");
  const [creditcardState, setcreditcardState] = useState<
    "default" | "other" | string
  >("default");

  const [creditcardBrand, setcreditcardBrand] = useState <string | undefined>("Sbadell")

  const creditCardNumber = "0909";

  console.log("current state", currenTpayment);

  return (
    <div className="flex flex-col gap-4 payment-methos-container">
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

        <div className="flex flex-col ml-4  gap-[8px] card-option-zone">
          <CheckItem
            title={`Tarjeta terminada en ${creditCardNumber}`}
            isChecked={creditcardState === "default"}
            setValue={setcreditcardState}
            name="creditCardOption"
            value="default"
          />

          <CheckItem
            title={`Utilizar otra tarjeta`}
            isChecked={creditcardState != "default"}
            setValue={setcreditcardState}
            name="creditCardOption"
            value="other"
          />
        </div>

        <div className="w-full  custom-select-zone my-4">
          <Select label="Elige TPV" className="custom-select" onChange={( val) =>{ setcreditcardBrand(val)}}> 
            {cardsBrand.map((option, i) => {
              return (
                <Option key={i} value={option}>
                  {option}
                </Option>
              );
            })}
          </Select>
        </div>
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
