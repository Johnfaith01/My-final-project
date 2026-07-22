

export type HousekeepingStatus = "in progress" | "pending" | "done"


export type HousekeepingTask = {
    _id: string
    title: string
    priority: string
    due: string
    done: boolean
}


export type HousekeepingRoom = {
    _id: string
    roomName: string
}


export type HousekeepingStaff = {
    _id: string
    name: string
}

export type Housekeeping = {
    _id: string
    tasks: HousekeepingTask
    rooms: HousekeepingRoom
    staffs: HousekeepingStaff
    floor: number
    type: string
    status: HousekeepingStatus
    notes: string
    createdAt: string
    updatedAt: string
}