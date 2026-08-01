import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Guest } from "@/types/guest-type"

type AuthContextType = {
    user: Guest | null
    token: string | null
    isAuthenticated: boolean
    login: (user: Guest, token: string) => void
    logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<Guest | null>(null)
    const [token, setToken] = useState<string | null>(null)

    // Rehydrate on page load/refresh
    useEffect(() => {
        const storedToken = localStorage.getItem("token")
        const storedUser = localStorage.getItem("user")
        if (storedToken && storedUser) {
            setToken(storedToken)
            setUser(JSON.parse(storedUser))
        }
    }, [])

    const login = (userData: Guest, authToken: string) => {
        localStorage.setItem("token", authToken)
        localStorage.setItem("user", JSON.stringify(userData))
        setToken(authToken)
        setUser(userData)
    }

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setToken(null)
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, token, isAuthenticated: !!token, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}