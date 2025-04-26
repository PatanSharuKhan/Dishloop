import { API_PATHS } from "./apis";
import { apiClient } from "./apis";

interface RestaurantPayload {
    name: string
    address: string
}

export const RestaurantService = () => {
    return {
        getAll: async () => {
            return apiClient(API_PATHS.RESTAURANTS.ALL)
        },
        getById: async (id: string) => {
            return apiClient(`${API_PATHS.RESTAURANTS.BY_ID(id)}`)
        },
        create: async (payload: RestaurantPayload) => {
            return apiClient(`${API_PATHS.RESTAURANTS.CREATE}`, {
                method: 'POST',
                body: payload
            })
        },
        delete: async (id: string) => {
            return apiClient(`${API_PATHS.RESTAURANTS.DELETE(id)}`, {
                method: 'DELETE'
            })
        },
        myRestaurants: async () => {
            return apiClient(`${API_PATHS.RESTAURANTS.MY_RESTAURANTS}`)
        }
    }
}
