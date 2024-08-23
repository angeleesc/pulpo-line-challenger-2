import { ProductsTab } from "@/types/producTabTypes";
import Image from "next/image";
import React from "react";

export default function ProducItemCard({ item }: { item: ProductsTab }) {
  return (
    <div
      className={`
    flex-grow min-w-[115px]
    flex
    flex-col items-center
    mx-2
    py-4

    `}
    >
      <Image
        src={item.img}
        className="w-8"
        alt="produc-image"
        width={32}
        height={32}
        // layout={"responsive"}
      />
      <p className="text-[18px] text-red-500 font-sans" >{item.name}</p>
      <p className="">{item.price}</p>
    </div>
  );
}
