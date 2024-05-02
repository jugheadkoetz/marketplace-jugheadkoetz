'use client'

import { useCart } from "@/context/CartContext"
import { ProductType } from "@/types/products"
import Image from "next/image"
import { useState } from "react"

interface CardItemProps extends ProductType {}

export default function CardItem({ name, price, photo, id} : CardItemProps) {
  const {cart, setCart} = useCart()
  const [quantity, setQuantity] = useState(1)

  const handleRemoveFromCart = (id: Number) => {
    const newCart = cart.filter((item) => item.id !== id)
    setCart(newCart)
  }

  return (
    <div className="
    px-6
    relative
    flex items-center justify-between
    bg-white w-full min-h-[101px] rounded-lg">
      <div className="flex items-center justify-center">
        <Image width={1080} height={1920} src={photo} alt={name} className="w-14 h-16 object-cover"/>
      </div>

      <div className="w-28 h-8 flex items-center justify-center gap-2">
        <p className="text-[13px]">{name}</p>

        <div className="flex flex-col items-center w-[100px] mx-8 ">
          <p className="text-[5px]">Qtd:</p>
          <div className="
          items-center justify-center
          text-[9px]
          h-4 w-12 rounded-md border border-[#BFBFBF] flex space-x-1">
            <p 
            onClick={() => {
              if(quantity > 0) {
                setQuantity(quantity - 1)
              }
              if(quantity === 0) {
                handleRemoveFromCart(id)
              }
            }}
            className="text-[11px] cursor-pointer select-none">-</p>
            {/* divisor */}
            <div className="border-r border-[#BFBFBF] h-[12px] w-[0.5px]" />
            <p>{quantity}</p>
            {/* divisor */}
            <div className="border-r border-[#BFBFBF] h-[12px] w-[0.5px]" />
            <p 
            onClick={() => setQuantity(quantity + 1)}
            className="cursor-pointer select-none">+</p>
          </div>
        </div>

      </div>

      <div>
        <h1 className="font-bold text-base">R${(Number(price) * Number(quantity)).toString()}</h1>
      </div>

      <div 
      onClick={() => {
        handleRemoveFromCart(id)  
      }}
      className="
      -top-3 -right-3
      h-6 w-6
      cursor-pointer
      transition-colors
      hover:bg-red-500
      flex items-center justify-center
      bg-black text-white rounded-full absolute">
        <p>X</p>
      </div>
    </div>
  )
}