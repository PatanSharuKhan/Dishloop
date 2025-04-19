import React, { useEffect, useState } from "react"

type Restaurant = {
    id: string,
    name: string,
    rating: number,
    address: string
}

const RestaurantItems = () => {
  const [restaurants, setRestaurants] = useState([])
  const [status, setStatus] = useState("loading")

  useEffect(() => {
    fetch("/restaurants")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to Fetch")
        return res.json()
      })
      .then((data) => {
        setRestaurants(data)
        setStatus("success")
      })
      .catch((err) => setStatus("error"))
  }, [])

  if (status === "loading") return <p>Loading ...</p>
  if (status === "error") return <p>Failed to load Restaurants</p>

  return (
    <div>
      <h1 className="mb-3">Discover Restaurants</h1>
      <div className="">
        {restaurants.map((restaurant: Restaurant) => (
          <div className="mb-2" key={restaurant.id}>
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
