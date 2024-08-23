"use client";

import { ProductsTabType } from "@/types/producTabTypes";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Productab() {
  const [productState, setProductState] = useState<ProductsTabType>(null);

  // hacermos la simulacion de un peticion de la base de datos

  const getProduct = async () => {
    setProductState([
      {
        img: "/porductab-img-default.svg",
        name: "Euromillones",
        price: "17.000.000",
      },
    ]);

    return;
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="flex overflow-x-auto">
      <h3>Productab</h3>
    </div>
  );
}
