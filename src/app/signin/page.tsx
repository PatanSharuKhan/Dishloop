"use client"
import React, { ChangeEvent, FormEvent, useState } from "react"

const Signin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleInputChange = (e: ChangeEvent) => {
    e.preventDefault()
    if ((e.target as HTMLInputElement).name === "email") {
      setEmail((e.target as HTMLInputElement).value)
    } else {
      setPassword((e.target as HTMLInputElement).value)
    }
  }

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError("")
    const paylaod = { email, password }
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include" as RequestCredentials,
      body: JSON.stringify(paylaod),
    }
    fetch("http://localhost:3000/signin", options)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        if (data.jwtToken) {
          window.location.replace("/")
        } else {
          setError(data.error)
        }
      })
      .catch((err) => setError(err.message))
  }

  return (
    <div className="bg-blue-950 h-[100vh] flex">
      <form
        className="w-[90%] md:max-w-[50%] m-auto rounded p-2"
        onSubmit={handleFormSubmit}
      >
        <h1 className="text-center text-2xl mb-8 pb-8">Signin</h1>
        <input
          type="email"
          className="border rounded w-full p-2 mb-4"
          placeholder="Enter your email"
          name="email"
          value={email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          className="border rounded w-full p-2 mb-4"
          placeholder="Enter your password"
          name="password"
          value={password}
          onChange={handleInputChange}
          required
        />
        <button
          className="rounded w-full p-2 mb-2 bg-blue-500 mt-8 cursor-pointer"
          type="submit"
        >
          Login
        </button>
        <p className="text-red-800">{error}</p>

        <a href="/signup" className="block text-center text-sm mt-8 underline">
          Signup
        </a>
      </form>
    </div>
  )
}

export default Signin
