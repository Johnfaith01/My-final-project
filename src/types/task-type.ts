export type TaskPriority = "low" | "medium" | "high"

export type TaskReservation = {
    _id: string
    checkIn: string
    checkOut: string
    status: string
}

export type TaskStaff = {
    _id: string
    name: string
    dept: string
    email: string
}

export type TaskRoom = {
    _id: string
    roomName: string
    category: string
    status: string
}

export type Task = {
    _id: string
    staffs: TaskStaff
    rooms?: TaskRoom
    reservations?: string
    title: string
    type: string
    notes?: string
    priority: TaskPriority
    due: string
    done: boolean
    createdAt: string
    updatedAt: string
}

export type CreateTaskPayload = {
    staffs: string
    rooms?: string
    reservations?: string
    title: string
    type: string
    notes?: string
    priority: TaskPriority
    due: string
    done?: boolean
}