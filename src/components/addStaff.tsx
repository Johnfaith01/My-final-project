import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"
import { NativeSelect, NativeSelectOption } from "../components/ui/native-select"
import { StaffService } from "@/services/staff-service"
import { toast } from "sonner"

const departments = ["housekeeping", "maintenance", "reception", "guest services"]
const roles = ["senior housekeeper", "maintenance tech", "front desk agent", "bellhop", "concierge", "housekeeper"]
const statuses = ["on duty", "off duty", "on break"]
const shifts = ["morning", "afternoon", "night"]

const defaultFormData = {
    name: "",
    department: departments[0],
    staffRole: roles[0],
    email: "",
    phone: "",
    status: statuses[0],
    shift: shifts[0],
    password: "",
}

export default function AddStaff() {
    const [formData, setFormData] = useState(defaultFormData)
    const [loading, setLoading] = useState<boolean>(false)
    const [open, setOpen] = useState(false)

    const handleChange = (field: keyof typeof defaultFormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (formData.password.length < 8) {
            toast.error("Password must be at least 8 characters")
            return
        }

        setLoading(true)
        try {
            const res = await StaffService.createStaff({
                ...formData,
                role: "staff",
            } as any)

            if (res.success) {
                toast.success("Staff added successfully")
                setFormData(defaultFormData)
                setTimeout(() => setOpen(false), 1500)
            } else {
                toast.error(res.message || "Unable to add staff")
            }
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Unable to add staff")
        } finally {
            setLoading(false)
        }
    }

    return (
         <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger 
                type="button"
                className="flex items-center gap-2 bg-slider px-3 py-2 rounded-md cursor-pointer text-sm w-fit text-black hover:text-white hover:bg-slider/60 transition-all duration-300"
            >
                <Plus className="w-4 h-4" />
                <p>ADD STAFF</p>
            </DialogTrigger>
            <DialogContent className="bg-[#12100D] max-h-[95vh] overflow-y-auto">
                <DialogHeader className="text-white">
                    <DialogTitle>Add New Staff</DialogTitle>
                </DialogHeader>

                <form id="add-staff-form" onSubmit={handleSubmit}>
                    <FieldGroup>
                        <Field className="text-white">
                            <Label htmlFor="">STAFF NAME</Label>
                            <Input
                                type="text"
                                placeholder="Staff name"
                                value={formData.name}
                                onChange={(e) => handleChange("name", e.target.value)}
                            />
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="">DEPARTMENT</Label>
                            <NativeSelect
                                value={formData.department}
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange("department", e.target.value)}
                            >
                                {departments.map((department) => (
                                    <NativeSelectOption key={department}>{department}</NativeSelectOption>
                                ))}
                            </NativeSelect>
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="">ROLE</Label>
                            <NativeSelect
                                value={formData.staffRole}
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange("staffRole", e.target.value)}
                            >
                                {roles.map((role) => (
                                    <NativeSelectOption key={role}>{role}</NativeSelectOption>
                                ))}
                            </NativeSelect>
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="">EMAIL</Label>
                            <Input
                                type="email"
                                placeholder="name@email.com"
                                value={formData.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                            />
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="">NUMBER</Label>
                            <Input
                                type="tel"
                                placeholder="+234 807 777 7282"
                                value={formData.phone}
                                onChange={(e) => handleChange("phone", e.target.value)}
                            />
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="">STATUS</Label>
                            <NativeSelect
                                value={formData.status}
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange("status", e.target.value)}
                            >
                                {statuses.map((status) => (
                                    <NativeSelectOption key={status}>{status}</NativeSelectOption>
                                ))}
                            </NativeSelect>
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="">SHIFT</Label>
                            <NativeSelect
                                value={formData.shift}
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange("shift", e.target.value)}
                            >
                                {shifts.map((shift) => (
                                    <NativeSelectOption key={shift}>{shift}</NativeSelectOption>
                                ))}
                            </NativeSelect>
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="">TEMPORARY PASSWORD</Label>
                            <Input
                                type="password"
                                placeholder="Min. 8 characters"
                                value={formData.password}
                                onChange={(e) => handleChange("password", e.target.value)}
                            />
                        </Field>
                    </FieldGroup>
                </form>

                <DialogFooter className="bg-[#12100D]">
                    <DialogClose asChild>
                        <Button 
                            type="button"
                            variant="outline" 
                            className="cursor-pointer bg-black text-white border border-primary hover:text-black hover:bg-black/20"
                        >
                            Cancel
                        </Button>
                    </DialogClose>
                    <Button
                        type="submit"
                        form="add-staff-form"
                        disabled={loading}
                        className="bg-slider cursor-pointer text-black py-4 px-3 hover:bg-slider/90 font-medium hover:text-white flex items-center disabled:opacity-50"
                    >
                        {loading ? "Adding..." : "Add Staff"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}