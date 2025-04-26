import React from "react"

interface RestaurantObject {
  _id: string
  name: string
  address: string
}

interface Props {
  restaurants: RestaurantObject[]
}

const UserRestaurants = ({ restaurants }: Props) => {
  return (
    <div className="p-2 mt-5">
      <h1 className="mb-1 text-gray-300">My Restaurants</h1>
      <hr className="mb-2 text-gray-400" />
      <div className="fit-content">
        {restaurants.map((restaurant) => (
            <div
            className="border border-gray-700 rounded p-2 mb-2"
            key={restaurant._id}
            >
            <h1 className="text-green-200">{restaurant.name}</h1>
            <p className="text-sm text-gray-400">Created on March 21, 2024</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default UserRestaurants
