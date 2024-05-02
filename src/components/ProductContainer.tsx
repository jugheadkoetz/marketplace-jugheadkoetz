'use client'


import { ProductType } from "@/types/products";
import Image from "next/image";
interface ProductContainerProps extends ProductType {
  onClick: () => void
}

export default function ProductContainer({ name, description, price, photo, onClick}: ProductContainerProps) {  
  return (
    <div className="
    overflow-hidden
    max-w-56 w-full
    min-h-72 h-full 
    rounded-lg
    flex flex-col 
    bg-white shadow-product-card">
      <section className="
      flex
      flex-col
      h-full
      ">
      <div className="
      w-[120px]
      h-[140px]
      mx-auto
      mt-4
      ">
        <Image 
        width={1080}
        height={1920}
        className="
        w-full
        h-full
        object-cover
        "
        src={photo} alt={name} />
      </div>
        <section className="flex flex-col p-4 gap-2 flex-1">
          <div className="flex justify-center items-center gap-1">
            <div className="
            max-w-[124px] w-full
            max-h-[40px] h-[40px]
            flex items-center justify-center
            ">
              <h1 className="text-base 
              leading-tight
              font-normal">{name}</h1>
            </div>
            <div className="bg-[#373737] flex items-center justify-center p-2 max-h-7 rounded-md">
              <h1 className="font-bold text-white">R${price.toString()}</h1>
            </div>
          </div>

          <div className="
          max-w-[192px] w-full
          max-h-[25px] h-[25px]
          my-4
          ">
            <p className="text-[10px] font-light leading-tight text-gray-500">{description}</p>
          </div>
        </section>
        <div 
        onClick={onClick}
        className="
        w-full bg-[#0F52BA]
        min-h-8 
        h-8
        flex items-center justify-center
        gap-3
        py-1
        mt-2
        cursor-pointer
        ">
          <Image src={'/Box.svg'} width={13} height={13} alt="box"/>
          <h1 className="font-[600] text-sm text-white">COMPRAR</h1>
        </div>
      </section>
    </div>
  )
}