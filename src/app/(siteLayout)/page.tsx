import { Input } from "@material-tailwind/react";
import Image from "next/image";
import MaterialInput from "../component/inputs/material-inputs/MaterialInput";

export default function Home() {
  return (
    <main className="p-8">
     <div className="ml-16">
     <h3 className="font-bold text-[25px]  mt-8">Gestion De Saldo</h3>

     {/* <Input variant="static" label="Static" placeholder="Static" /> */}
     <MaterialInput/>

     </div>
    </main>
  );
}
