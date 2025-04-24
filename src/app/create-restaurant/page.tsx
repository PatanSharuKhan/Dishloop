"use client"
import React, {
  ChangeEvent,
  MouseEvent as ReactMouseEvent,
  FormEvent as ReactFormEvent,
  useMemo,
  useState,
} from "react"
import Navbar from "../components/Navbar"

const CreateRestaurant = () => {
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [error, setError] = useState("")

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
    setName('')
    setAddress('')
    setError('')
  }

  const inputClasses = useMemo(() => "border w-full p-1 rounded mb-3", [])

  const clearFormFields = (e: ReactMouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    clearFields()
  }

  const handleFormSubmit = (e: ReactFormEvent) => {
    e.preventDefault()
    const payload = { name, address }
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include" as RequestCredentials,
      body: JSON.stringify(payload),
    }
    fetch("http://localhost:3000/restaurants", options)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error)
        } else {
          clearFields()
          alert('Restaurant Created Successfully')
        }
      })
      .catch((err) => setError(err.message))
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
          className={`${inputClasses}`}
          type="text"
          placeholder="Enter Restaurant Name"
          name="name"
          value={name}
          onChange={handleInputChange}
          required
        />
        <input
          className={`${inputClasses}`}
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
    </>
  )
}

export default CreateRestaurant
