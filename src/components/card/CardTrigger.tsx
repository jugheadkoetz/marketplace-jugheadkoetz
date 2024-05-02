'use client'

import { useCart } from "@/context/CartContext"

export default function CardTrigger() {
  const {setOpen, cart} = useCart()

  return (
    <div 
    onClick={() => setOpen(open => !open)}
    className="
    cursor-pointer
    flex items-center justify-center
    min-w-[90px]
    max-h-[45px]
    p-4 bg-white rounded-lg space-x-4">
      <img src="/Cart.svg" alt="" />
      <span className="font-bold">{cart.length}</span>
    </div>
  )
}