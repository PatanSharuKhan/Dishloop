import React from "react"
import { RestaurantObject } from "../create-restaurant/page"

interface Props {
  restaurants: RestaurantObject[]
}

const UserRestaurants = ({ restaurants }: Props) => {
  return (
    <div className="p-2 mt-5">
      <h1 className="mb-1 text-gray-300">My Restaurants</h1>
      <hr className="mb-2 text-gray-400" />
      <div className="fit-content">
        {restaurants.map((restaurant) => {
          const createdTime = new Date(restaurant.createdAt)
          return (
            <div
              className="border border-gray-700 rounded p-2 mb-2"
              key={restaurant._id}
            >
              <h1 className="text-green-200">{restaurant.name}</h1>
              <p className="text-sm text-gray-400">
                Created on {createdTime.getDate()}/{createdTime.getMonth()}/
                {createdTime.getFullYear()} {createdTime.getHours()}:
                {createdTime.getMinutes()}:{createdTime.getSeconds()}
              </p>
            </div>
          )
        })}
      </div>
      {restaurants.length === 0 && (
        <div className="flex justify-center bg-gray-800 text-gray-500 h-[10vh] items-center">
          <h1>Restaurants Not Found!</h1>
        </div>
      )}
    </div>
  )
}

export default UserRestaurants
