"use client";
import React, { useEffect, useState } from "react";
import TextInput from "../../inputs/text-input/TextInput";
import { OptionsTabsType } from "@/types/tabOptions";
import ButtonGroupButton from "../../inputs/button-group-input/ButtonGroupButton";
import PaymentRadionOption from "../payment-radio-options/PaymentRadionOption";

const moneyValuesOptions: OptionsTabsType[] = [
  {
    title: "5",
    value: "5",
    icon: <span>€</span>,
  },
  {
    title: "10",
    value: "10",
    icon: <span>€</span>,
  },
  {
    title: "20",
    value: "20",
    icon: <span>€</span>,
  },
  {
    title: "50",
    value: "50",
    icon: <span>€</span>,
  },
  {
    title: "100",
    value: "100",
    icon: <span>€</span>,
  },
];

export interface PaymentData {
  paymentMehod: string;
  amount?: string;
  creditCard?: string;
}

export default function RechargeBalanceForm() {
  const [balanceState, setBalanceState] = useState<string>("");
  const [isAllDataok, setIsAllDataok] = useState<boolean>(false);

  const [paymentDataState, setPaymentDataState] = useState<PaymentData>({
    amount: "",
    paymentMehod: "",
    creditCard: "",
  });

  const checkIsAllDataOk = () => {
    const hasError: {
      amount?: boolean;
      paymentMehod?: boolean;
      creditCard?: boolean;
    } = {};

    if (!paymentDataState.amount) hasError.amount = true;
    if (!paymentDataState.paymentMehod) hasError.paymentMehod = true;
    if (!paymentDataState.creditCard) hasError.creditCard = true;

    console.log(Object.keys(hasError).length);
  };

  const updatedPaymentData = (name: string, value: string) => {
    if (name === "amount")
      setPaymentDataState({ ...paymentDataState, amount: value });
    if (name === "paymentMehod")
      setPaymentDataState({ ...paymentDataState, paymentMehod: value });
    if (name === "creditCard")
      setPaymentDataState({ ...paymentDataState, creditCard: value });
  };

  const rechargePbalecne = () => {
    console.log(paymentDataState);
    console.log("Staos envialod");
  };

  useEffect(() => {
    checkIsAllDataOk();
  }, [paymentDataState]);

  console.log("balance a anadir", balanceState);

  return (
    <form
      action=""
      className="w-full mt-8"
      onSubmit={(e) => {
        e.preventDefault();

        rechargePbalecne();

        console.log("enviado");
      }}
    >
      <div className="m-auto text-center">
        <h2 className="font-bold text-4xl leading-[50px]">{"10,00 €"}</h2>
        <p className="text-[15px] leading-5 font-medium">Tu saldo</p>
      </div>
      <TextInput
        texttLabel={"Seleciona el importe a añadir"}
        placeholder="importe €"
        info={"importe minimo 1€"}
        value={paymentDataState.amount}
        onChange={(e) => {
          updatedPaymentData("amount", e.target.value);
        }}
        type="number"
      />
      <div className="mt-4">
        <ButtonGroupButton
          currentOption={balanceState}
          options={moneyValuesOptions}
          setOption={(data )=>{
            console.log(data)
            setBalanceState(data)
            updatedPaymentData("amount", data)
          }}
        />
      </div>

      <h6 className="text-base font-bold mt-5 mb-5">Metodo de pago </h6>
      <PaymentRadionOption />
      <div className="flex mt-4">
        <div className="flex items-center">
          <p>
            Todos los pagos en Lotopía son 100% seguros. Web certificada por
            Confianza Online.
          </p>
        </div>
        <div className="w-full max-w-[220px]">
          <button className="w-full text-center font-semibold font-montserrat text-white bg-primary-default rounded p-3 disabled:opacity-50 disabled:text-body-90" disabled={true}>Recargar Saldo</button>
        </div>
      </div>
    </form>
  );
}
