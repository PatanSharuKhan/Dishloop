"use client"
import React from "react"
import { UserService } from "../utils/userService"

const Navbar = () => {
  const handleLogout = async () => {
    await UserService().signout()
    window.location.replace("/signin")
  }

  return (
    <>
      <div className="flex justify-between items-center p-2 relative mb-4 shadow-sm shadow-gray-700">
        <h1 className="">Dishloop</h1>
        <div className="relative group">
          <button className="cursor-pointer">
            <img src="avatar.png" className="w-[30px] h-[30px]" />
          </button>
          <div className="pointer-events-none group-hover:pointer-events-auto transition-all opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 group-hover:flex justify-end absolute right-0 bg-gray-800 rounded shadow-md group-hover:duration-300 group-hover:ease-in">
            <div className="w-[200px] min-h-[40px] border p-2 rounded border-gray-500 text-gray-300">
              <ul>
                <li className="hover:text-gray-200 hover:bg-gray-700 cursor-pointer p-1 rounded">
                  <a href="/">Home</a>
                </li>
                <li
                  className="hover:text-gray-200 hover:bg-gray-700 cursor-pointer p-1 rounded"
                  onClick={() => handleLogout()}
                >
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
