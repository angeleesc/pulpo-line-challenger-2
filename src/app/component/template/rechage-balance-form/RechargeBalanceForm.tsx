"use client";
import React, { useState } from "react";
import TextInput from "../../inputs/text-input/TextInput";
import { OptionsTabsType } from "@/types/tabOptions";
import ButtonGroupButton from "../../inputs/button-group-input/ButtonGroupButton";

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

export default function RechargeBalanceForm() {
  const [balanceState, setBalanceState] = useState<string>("");

  console.log("balance a anadir", balanceState);

  return (
    <form action="" className="w-full mt-8">
      <div className="m-auto text-center">
        <h2 className="font-bold text-4xl leading-[50px]">{"10,00 €"}</h2>
        <p className="text-[15px] leading-5 font-medium">Tu saldo</p>
      </div>
      <TextInput
        texttLabel={"Seleciona el importe a añadir"}
        placeholder="importe €"
        info={"importe minimo 1€"}
        value={balanceState}
        onChange={(e) => setBalanceState(e.target.value)}
        type="number"
      />
      <div className="mt-4">
        <ButtonGroupButton
          currentOption={balanceState}
          options={moneyValuesOptions}
          setOption={setBalanceState}
        />
      </div>
    </form>
  );
}
