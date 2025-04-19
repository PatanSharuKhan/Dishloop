"use client"
import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import RestaurantItems from "./components/RestaurantItems"

interface Product {
  id: number
  name: string
}

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/PatanSharuKhan/assets/refs/heads/master/json/products.json"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])
  return (
    <div>
      <Navbar/>
      <RestaurantItems/>
    </div>
  )
}
