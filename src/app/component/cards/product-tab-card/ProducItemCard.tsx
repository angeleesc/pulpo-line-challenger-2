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
    py-2

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
      <p className="mt-1 block text-[13px] leading-[18px] font-montserrat font-medium" >{item.name}</p>
      <p className="text-[13px] font-montserrat font-semibold ">{item.price}</p>
    </div>
  );
}
