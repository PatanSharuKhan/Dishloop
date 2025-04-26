"use client"
import React, { ChangeEvent, useEffect, useState } from "react"
import Spinner from "./Spinner"
import Search from "./Search"
import { RestaurantService } from "../utils/restaurantService"
const restaurantService = RestaurantService()

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
  const [searchName, setSearchName] = useState("")

  const loadRestaurants = async () => {
    try {
      const response = await restaurantService.getAll()
      if (response.restaurants) setRestaurants(response.restaurants)
      setStatus('success')
    } catch (err: any) {
      setError(err.message)
    }
  }

  useEffect(() => {
    loadRestaurants()
  }, [])

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.includes(searchName)
  )

  const handleChange = (e: ChangeEvent) => {
    e.preventDefault()
    setSearchName((e.target as HTMLInputElement).value)
  }

  const handleDeleteItem = async (id: string) => {
    try {
      await restaurantService.delete(id)
      setRestaurants((prev) => prev.filter((r) => r._id !== id))
    } catch (err: any) {
      setError(err.message)
    }
  }

  if (status === "loading") return <Spinner />
  if (status === "error") return <p>Load Restaurants: {error}</p>

  return (
    <div className="p-2 md:p-0">
      <div className="flex justify-between items-center mb-2">
        <h1 className="mb-2 ps-2 text-2xl">Discover Restaurants</h1>
        <a
          href="/create-restaurant"
          className="border p-1 rounded-xl cursor-pointer"
        >
          Add
        </a>
      </div>
      <Search
        placeholder="Search Restaurant Name"
        onChange={(e) => handleChange(e)}
        value={searchName}
      />
      <div className="grid md:grid-cols-2">
        {filteredRestaurants.map((restaurant) => (
          <div
            className="mb-2 hover:shadow-xl p-2 rounded-xl"
            key={restaurant._id}
          >
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
              <button
                className="mt-1 p-1 rounded bg-red-800 cursor-pointer"
                onClick={() => handleDeleteItem(restaurant._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RestaurantItems
