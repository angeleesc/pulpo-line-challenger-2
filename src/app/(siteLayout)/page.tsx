"use client";
import { useState } from "react";
import MenuTabOption from "../component/tabs/menu-tab/MenuTabOption";
import { OptionsTabsType } from "@/types/tabOptions";
import RechargeBalanceForm from "../component/template/rechage-balance-form/RechargeBalanceForm";

const recargaMenuOptions: OptionsTabsType[] = [
  {
    value: "Recargar",
    title: "Recargar Saldo",
  },
  {
    value: "Reclamar",
    title: "Reclamar Premio",
  },
];

export default function Home() {
  const [tabOptionSelectesState, setTabOptionSelectesState] =
    useState<String>("Recargar");

  return (
    <main className="p-8">
      <div className="w-full " >
        <div className="">
          <h3 className="font-bold text-[25px] leading-9  mb-6">
            Gestion De Saldo
          </h3>
          <MenuTabOption
            currentOption={tabOptionSelectesState}
            setOption={setTabOptionSelectesState}
            options={recargaMenuOptions}
          />
        </div>
        <div className="w-full max-w-[680px]">
          <RechargeBalanceForm />
        </div>
      </div>
    </main>
  );
}
