'use client'

import { useCart } from '@/context/CartContext'
import {motion} from 'framer-motion'
import CardItem from './CardItem'

export default function Cart() {
  const {open, setOpen, cart} = useCart()
  return (
    <motion.section
    className='
    fixed
    top-0 right-0 bottom-0
    h-full
    w-[490px]
    bg-[#0F52BA]
    flex
    flex-col

    z-50' 
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    >

      <section className='   
      px-12
      flex-1
      py-16'>
      <div className='flex items-center justify-between'>
        <h1 className='font-bold text-[27px] text-white'>Carrinho de compras</h1>
        <button 
        onClick={() => setOpen(open => !open)}
        className='text-white bg-black rounded-full h-10 w-10 hover:bg-black/70'>X</button>
      </div>

      <div className='h-full w-full mt-16 px-3 py-3 space-y-5 max-h-[300px]'>
        {cart.map((product, index) => (
          <CardItem key={index} {...product} />
        ))}
      </div>

      <div className='flex items-center justify-between mt-8'>
        <h1 className='font-bold text-[27px] text-white'>Total</h1>
        <h1 className='font-bold text-[27px] text-white'>R${cart.reduce((acc, item) => acc + Number(item.price), 0)}</h1>
      </div>
      </section>

      <div
      onClick={() => {
        setOpen(open => !open)
        
      }}
      className='w-full cursor-pointer bg-black text-white font-bold text-2xl p-7 flex items-center justify-center'>
        <h1>Finalizar Compra</h1>
      </div>      

    </motion.section>
  )
}