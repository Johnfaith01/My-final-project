export type StoredUser = {
    _id: string
    fullname: string
    email: string
    mobile: string
    nationality: string
    address: string
    image_url: string
    role: string
    gender: string
}

export function getStoredUser(): StoredUser | null {
    const raw = localStorage.getItem("user")
    if (!raw) return null
    try {
        return JSON.parse(raw)
    } catch {
        return null
    }
}