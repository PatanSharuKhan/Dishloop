"use client"
import { useEffect, useState } from "react"

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
      <h1>Amazon Clone</h1>
      <h1>Products</h1>

      <ul>
        {products.map((prod: Product) => (
          <li key={prod?.id}>
            <h1>{prod.name}</h1>
          </li>
        ))}
      </ul>
    </div>
  )
}
