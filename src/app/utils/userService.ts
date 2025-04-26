import { API_PATHS } from "./apis";
import { apiClient } from "./apis";

interface UserPayload {
    email: string
    password: string
}

export const UserService = () => {
    return {
        getAll: async () => {
            return apiClient(API_PATHS.USERS.ALL)
        },
        getById: async (id: string) => {
            return apiClient(`${API_PATHS.USERS.BY_ID(id)}`)
        },
        delete: async (id: string) => {
            return apiClient(`${API_PATHS.USERS.DELETE(id)}`, {
                method: 'DELETE'
            })
        },
        signin: async (payload: UserPayload) => {
            return apiClient(API_PATHS.USERS.SIGNIN, {
                method: 'POST',
                body: payload
            })
        },
        signout: async () => {
            return apiClient(API_PATHS.USERS.SIGNOUT)
        }
    }
}
