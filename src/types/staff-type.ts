// types/staff-type.ts

export type StaffShift = "morning" | "afternoon" | "night"
export type StaffRole = "admin" | "user" | "super_admin" | "staff"
export type StaffStatus = "on duty" | "off duty"

export type Staff = {
    _id: string
    name: string
    staffRole: string
    dept: string
    shift: StaffShift
    role: StaffRole
    status: StaffStatus
    email: string
    phone: string
    createdAt: string
    updatedAt: string
}