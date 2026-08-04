

export type StaffShift = "morning" | "afternoon" | "night"
export type StaffRole = "admin" | "super_admin" | "staff"
export type StaffStatus = "on duty" | "off duty" | "on break"
export type StaffDepartment = "housekeeping" | "maintenance" | "reception" | "guest services"

export type Staff = {
    _id: string
    name: string
    staffRole: string
    department: StaffDepartment
    shift: StaffShift
    role: StaffRole
    status: StaffStatus
    email: string
    phone: string
}

export type CreateStaffPayload = {
    name: string
    staffRole: string
    department: StaffDepartment
    shift: StaffShift
    status: StaffStatus
    email: string
    phone: string
    password: string
    role?: StaffRole
}