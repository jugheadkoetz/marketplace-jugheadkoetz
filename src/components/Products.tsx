'use client'

import { ProductType } from "@/types/products"
import axios from "axios"
import { Loader } from "lucide-react"
import { useEffect, useState } from "react"
import ProductContainer from "./ProductContainer"
import { useCart } from "@/context/CartContext"

export default function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState<boolean>(true)
  

  // use context
  const {cart, setCart} = useCart()
  // use cart context

  const handleAddToCart = (product: ProductType) => {
    // add product to cart
    const {name, description, price, photo, id, brand} = product
    // @ts-ignore
    if(cart.find((item) => item.id === id)) return alert("Produto já adicionado ao carrinho")
    setCart([...cart, {name, description, price, photo, id, brand}])
  }

  useEffect(() => {
    const fetchProducts = async () => {
      await axios.get("/api/products").then((response) => {
        setProducts(response.data.products)
        setLoading(false)
      })
    }
    fetchProducts()
  }, [])
  
  return (
    <div>
      {loading ? (
        <div className="
        h-full
        w-full
        flex justify-center items-center

        ">
          <Loader className="animate-spin" />
        </div>
      ) : (
        <div className="
        grid-cols-4 grid gap-6
        ">
          {products && products.map((product: ProductType) => (
          <ProductContainer 
          photo={product.photo}
          onClick={() => handleAddToCart(product)}
          name={product.name} price={product.price} description={product.description} brand={product.brand} id={product.id} />
          ))}
        </div>
      )}
    </div>
  )
}