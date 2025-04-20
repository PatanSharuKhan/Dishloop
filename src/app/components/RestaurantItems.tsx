"use client"
import React, { useEffect, useState } from "react"

type Restaurant = {
  _id: string
  name: string
  rating: number
  address: string
}

const RestaurantItems = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [status, setStatus] = useState("loading")
  const [error, setError] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/restaurants")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to Fetch")
        return res.json()
      })
      .then((data) => {
        setRestaurants(data.restaurants)
        setStatus("success")
      })
      .catch((err) => {
        setStatus("error")
        setError(err.message)
      })
  }, [])

  if (status === "loading") return <p>Loading ...</p>
  if (status === "error") return <p>Load Restaurants: {error}</p>

  return (
    <div className="p-2 md:p-0">
      <h1 className="mb-2 ps-2 text-2xl">Discover Restaurants</h1>
      <div className="grid md:grid-cols-2">
        {restaurants.map((restaurant) => (
          <div className="mb-2 hover:shadow-xl p-2 rounded-xl" key={restaurant._id}>
            <img
              src="/restaurant.jpg"
              alt="Restaurant Image"
              className="rounded-xl"
            />
            <div className="mt-1">
              <div className="flex justify-between">
                <h1 className="text-xl">{restaurant.name}</h1>
                <span className="text-sm">{restaurant.rating}</span>
              </div>
              <p className="text-sm">{restaurant.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RestaurantItems
