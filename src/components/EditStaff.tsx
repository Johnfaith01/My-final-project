import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { NativeSelect, NativeSelectOption } from "../components/ui/native-select"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { CreateStaffPayload, Staff } from "@/types/staff-type"
import { StaffService } from "@/services/staff-service"
import { toast } from "sonner"

const departments = ["housekeeping", "maintenance", "reception", "guest services"]
const roles = ["senior housekeeper", "maintenance tech", "front desk agent", "bellhop", "concierge", "housekeeper"]
const statuses = ["on duty", "off duty", "on break"]
const shifts = ["morning", "afternoon", "night"]

interface EditStaffProps {
    staff: Staff
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function EditStaff({ staff, open, onOpenChange }: EditStaffProps) {
    const queryClient = useQueryClient()

    const [name, setName] = useState(staff.name)
    const [department, setDepartment] = useState(staff.department)
    const [staffRole, setStaffRole] = useState(staff.staffRole)
    const [email, setEmail] = useState(staff.email)
    const [phone, setPhone] = useState(staff.phone)
    const [status, setStatus] = useState(staff.status)
    const [shift, setShift] = useState(staff.shift)
    const [password, setPassword] = useState("")

    useEffect(() => {
        setName(staff.name)
        setDepartment(staff.department)
        setStaffRole(staff.staffRole)
        setEmail(staff.email)
        setPhone(staff.phone)
        setStatus(staff.status)
        setShift(staff.shift)
        setPassword("")
    }, [staff])

    const { mutate: updateStaff, isPending } = useMutation({
        mutationFn: (payload: Partial<CreateStaffPayload>) => StaffService.updateStaff(staff._id, payload),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["staffs"] })
            toast.success("Staff updated successfully")
            onOpenChange(false)
        },
        onError: (err: any) => {
            toast.error(err?.response?.data?.message ?? "Unable to update staff. Please try again.")
        }
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (password && password.length < 8) {
            toast.error("Password must be at least 8 characters")
            return
        }

        const payload: Partial<CreateStaffPayload> = {
            name,
            department,
            staffRole,
            email,
            phone,
            status,
            shift,
        }
        if (password) {
            payload.password = password
        }

        updateStaff(payload)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="bg-[#12100D] max-h-[95vh] overflow-y-auto">
                <DialogHeader className="text-white">
                    <DialogTitle>Update Staff</DialogTitle>
                </DialogHeader>

                <form id="edit-staff-form" onSubmit={handleSubmit}>
                    <FieldGroup>
                        <Field className="text-white">
                            <Label htmlFor="name">STAFF NAME</Label>
                            <Input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="department">DEPARTMENT</Label>
                            <NativeSelect value={department} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setDepartment(e.target.value as typeof department)}>
                                {departments.map((d) => (
                                    <NativeSelectOption key={d} value={d}>{d}</NativeSelectOption>
                                ))}
                            </NativeSelect>
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="staffRole">ROLE</Label>
                            <NativeSelect value={staffRole} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setStaffRole(e.target.value)}>
                                {roles.map((r) => (
                                    <NativeSelectOption key={r} value={r}>{r}</NativeSelectOption>
                                ))}
                            </NativeSelect>
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="email">EMAIL</Label>
                            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="phone">NUMBER</Label>
                            <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="status">STATUS</Label>
                            <NativeSelect value={status} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setStatus(e.target.value as typeof status)}>
                                {statuses.map((s) => (
                                    <NativeSelectOption key={s} value={s}>{s}</NativeSelectOption>
                                ))}
                            </NativeSelect>
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="shift">SHIFT</Label>
                            <NativeSelect value={shift} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setShift(e.target.value as typeof shift)}>
                                {shifts.map((s) => (
                                    <NativeSelectOption key={s} value={s}>{s}</NativeSelectOption>
                                ))}
                            </NativeSelect>
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="password">NEW PASSWORD (optional)</Label>
                            <Input id="password" type="password" placeholder="Leave blank to keep current password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Field>
                    </FieldGroup>
                </form>

                <DialogFooter className="bg-[#12100D]">
                    <DialogClose asChild>
                        <Button type="button" variant="outline" className="cursor-pointer bg-black text-white border border-primary hover:text-black hover:bg-black/20">Cancel</Button>
                    </DialogClose>
                    <Button
                        type="submit"
                        form="edit-staff-form"
                        disabled={isPending}
                        className="bg-slider cursor-pointer text-black py-4 px-3 hover:bg-slider/90 font-medium hover:text-white disabled:opacity-50"
                    >
                        {isPending ? "Saving..." : "Save Changes"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}