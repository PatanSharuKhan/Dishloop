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
        delete: async (id: string) => {
            return apiClient(`${API_PATHS.RESTAURANTS.DELETE(id)}`, {
                method: 'DELETE'
            })
        }
    }
}
