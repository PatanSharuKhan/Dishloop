const PORT = 3000
const BASE_URL = `http://localhost:${PORT}`

export const API_PATHS = {
    RESTAURANTS: {
        ALL: `${BASE_URL}/restaurants`,
        CREATE: `${BASE_URL}/restaurants`,
        BY_ID: (id: string) => `${BASE_URL}/restaurants/${id}`,
        UPDATE: (id: string) => `${BASE_URL}/restaurants/${id}`,
        DELETE: (id: string) => `${BASE_URL}/restaurants/${id}`,
    },

    USERS: {
        SIGNIN: `${BASE_URL}/signin`,
        SIGNOUT: `${BASE_URL}/signout`,
        CREATE: `${BASE_URL}/users`,
        ALL: `${BASE_URL}/users`,
        BY_ID: (id: string) => `${BASE_URL}/users/${id}`,
        DELETE: (id: string) => `${BASE_URL}/users/${id}`,
    }
}

interface RequestOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
    headers?: HeadersInit
    body?: any
    credentials?: RequestCredentials
}

export const apiClient = async (path: string, options: RequestOptions = {}) => {
    const { method = 'GET', headers = {}, body, credentials = 'include' } = options
    const fetchoptions: RequestInit = {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        credentials
    }

    if (body) {
        fetchoptions.body = JSON.stringify(body)
    }

    const res = await fetch(path, fetchoptions)

    if (!res.ok) {
        const error = await res.json()
        throw new Error(error?.message || 'Something went wrong')
    }

    return res.json()
}