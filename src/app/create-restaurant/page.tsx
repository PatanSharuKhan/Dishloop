"use client"
import React, { ChangeEvent, useEffect, useMemo, useState } from "react"
import Navbar from "../components/Navbar"

const CreateRestaurant = () => {
  const [name, setName] = useState("a")
  const [address, setAddress] = useState("a")

  useEffect(() => {
    const payload = { name, address }
    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }
    fetch("http://localhost:3000/restaurants", options)
      .then((res) => {
        return res.json()
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
  }, [])

  const handleNameChange = (e: ChangeEvent) => {
    e.preventDefault()
    setName((e.target as HTMLInputElement).value)
  }

  const handleAddressChange = (e: ChangeEvent) => {
    e.preventDefault()
    setAddress((e.target as HTMLInputElement).value)
  }

  const inputClasses = useMemo(() => "border w-full p-1 rounded mb-3", [])

  return (
    <>
      <Navbar />
      <h1 className="p-2 text-center rounded mb-4">CREATE RESTAURANT</h1>
      <form className="mt-3 max-w-[90%] md:max-w-[50%] m-auto">
        <input
          className={`${inputClasses}`}
          type="text"
          placeholder="Enter Restaurant Name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          className={`${inputClasses}`}
          type="text"
          placeholder="Enter Address"
          value={address}
          onChange={handleAddressChange}
        />
        <div className="flex justify-center mt-5">
          <button className="p-1 rounded bg-red-800 cursor-pointer mr-3">
            Cancel
          </button>
          <button className="p-1 rounded bg-yellow-800 cursor-pointer mr-3">
            Reset
          </button>
          <button className="p-1 rounded bg-green-700 cursor-pointer">
            Submit
          </button>
        </div>
      </form>
    </>
  )
}

export default CreateRestaurant
