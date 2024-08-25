"use client"
import { useState } from "react";
import MenuTabOption from "../component/tabs/menu-tab/MenuTabOption";
import { OptionsTabsType } from "@/types/tabOptions";




const recargaMenuOptions: OptionsTabsType[] =[
  {
    value: "Recargar",
    title: "Recargar Saldo"
  },
  {
    value: "Reclamar",
    title: "Reclamar Premio"
  }
]

export default function Home() {

  const [tabOptionSelectesState, setTabOptionSelectesState] = useState<String>("Recargar")

  return (
    <main className="p-8">
      <div className="ml-16">
        <h3 className="font-bold text-[25px]  mt-8">Gestion De Saldo</h3>
        <MenuTabOption currentOption  = {tabOptionSelectesState}  setOption={setTabOptionSelectesState} options={recargaMenuOptions}  />
      </div>
    </main>
  );
}
