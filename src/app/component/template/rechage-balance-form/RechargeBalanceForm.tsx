"use client";
import React from "react";
import TextInput from "../../inputs/text-input/TextInput";

export default function RechargeBalanceForm() {



  return (
    <form action="" className="w-full mt-8">
      <div className="m-auto text-center">
        <h2 className="font-bold text-4xl leading-[50px]">{"10,00 €"}</h2>
        <p className="text-[15px] leading-5 font-medium">Tu saldo</p>
      </div>
      <TextInput texttLabel={"Seleciona el importe a añadir"} placeholder="importe €" info={"importe minimo 1€"} />
    
    </form>
  );
}
