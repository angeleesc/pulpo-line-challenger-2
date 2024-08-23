"use client";

import { ProductsTabType } from "@/types/producTabTypes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ProducItemCard from "../../cards/product-tab-card/ProducItemCard";

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
      {
        img: "/porductab-img-default.svg",
        name: "Euromillones",
        price: "17.000.000",
      },
      {
        img: "/porductab-img-default.svg",
        name: "Euromillones",
        price: "17.000.000",
      },
      {
        img: "/porductab-img-default.svg",
        name: "Euromillones",
        price: "17.000.000",
      },
      {
        img: "/porductab-img-default.svg",
        name: "Euromillones",
        price: "17.000.000",
      },
      {
        img: "/porductab-img-default.svg",
        name: "Euromillones",
        price: "17.000.000",
      },
      {
        img: "/porductab-img-default.svg",
        name: "Euromillones",
        price: "17.000.000",
      },
      {
        img: "/porductab-img-default.svg",
        name: "Euromillones",
        price: "17.000.000",
      },
      {
        img: "/porductab-img-default.svg",
        name: "Euromillones",
        price: "17.000.000",
      },
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
    <div className="flex overflow-x-auto px-[27px]">
     {
      productState?.map((item, i)=><ProducItemCard key={`product-img-${i}`} item={item}  />)
     }
    </div>
  );
}
