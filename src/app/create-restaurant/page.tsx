"use client"
import React, {
  ChangeEvent,
  MouseEvent as ReactMouseEvent,
  FormEvent as ReactFormEvent,
  useMemo,
  useState,
  useEffect,
} from "react"
import Navbar from "../components/Navbar"
import UserRestaurants from "../components/UserRestaurants"
import { RestaurantService } from "../utils/restaurantService"

export interface RestaurantObject {
  _id: string
  name: string
  address: string
  createdAt: string
}

const CreateRestaurant = () => {
  const [restaurants, setRestaurants] = useState<RestaurantObject[]>([])
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [error, setError] = useState("")

  const loadMyRestaurants = async () => {
    try {
      const response = await RestaurantService().myRestaurants()
      if (response.restaurants) setRestaurants(response.restaurants)
    } catch (err: any) {
      setError(err.message)
    }
  }

  useEffect(() => {
    loadMyRestaurants()
  }, [])

  const handleInputChange = (e: ChangeEvent) => {
    e.preventDefault()
    if ((e.target as HTMLInputElement).name === "name") {
      setName((e.target as HTMLInputElement).value)
    }
    if ((e.target as HTMLInputElement).name === "address") {
      setAddress((e.target as HTMLInputElement).value)
    }
  }

  const clearFields = () => {
    setName("")
    setAddress("")
    setError("")
  }

  const inputClasses = useMemo(() => "border w-full p-1 rounded mb-3", [])

  const clearFormFields = (e: ReactMouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    clearFields()
  }

  const handleFormSubmit = async (e: ReactFormEvent) => {
    e.preventDefault()
    const payload = { name, address }
    try {
      const response = await RestaurantService().create(payload)
      if (response.restaurant) {
        setRestaurants((prev) => [response.restaurant, ...prev])
      }
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <>
      <Navbar />
      <h1 className="p-2 text-center rounded mb-4">CREATE RESTAURANT</h1>
      <form
        className="mt-3 max-w-[90%] md:max-w-[50%] m-auto"
        onSubmit={handleFormSubmit}
      >
        <input
          className={`${inputClasses} border-gray-400`}
          type="text"
          placeholder="Enter Restaurant Name"
          name="name"
          value={name}
          onChange={handleInputChange}
          required
        />
        <input
          className={`${inputClasses} border-gray-400`}
          type="text"
          placeholder="Enter Address"
          name="address"
          value={address}
          onChange={handleInputChange}
          required
        />
        <div className="flex justify-center mt-5">
          <button
            className="p-1 rounded bg-yellow-800 cursor-pointer mr-3"
            onClick={clearFormFields}
          >
            Reset
          </button>
          <button
            className="p-1 rounded bg-green-700 cursor-pointer"
            type="submit"
          >
            Submit
          </button>
        </div>
        <p className="text-red-800">{error}</p>
      </form>
      <UserRestaurants restaurants={restaurants} />
    </>
  )
}

export default CreateRestaurant
