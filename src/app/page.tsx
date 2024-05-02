'use client'

import Products from "@/components/Products";
import Card from "@/components/card/Card";
import { useCart } from "@/context/CartContext";

export default function Home() {
  const {open, setOpen} = useCart()
  return (
    <main className='
    h-full
    flex flex-col justify-center items-center
    relative
    '>
      <section className='
      max-w-[938px]
      w-full
      h-[500px]	
      '>
        <Products />
      </section>
       {open && <Card />}
    </main>
  )
}
