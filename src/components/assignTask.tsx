import { useState, type FormEvent, type ChangeEvent } from "react"
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
import { DatePickerInput } from "./popover"
import { Textarea } from "./ui/textarea"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import type { CreateTaskPayload, TaskPriority } from "@/types/task-type"
import { tasksService } from "@/services/tasks-service"
import { StaffService } from "@/services/staff-service"
import { toast } from "sonner"
import { HotelroomServices } from "@/services/hotelRoom-service"

function toApiDate(date: Date | undefined) {
    return date ? date.toISOString().split("T")[0] : ""
}

export function AssignTask() {
    const queryClient = useQueryClient()

    const [title, setTitle] = useState("")
    const [type, setType] = useState("")
    const [staffId, setStaffId] = useState("")
    const [roomId, setRoomId] = useState("")
    const [priority, setPriority] = useState<TaskPriority>("low")
    const [due, setDue] = useState<Date | undefined>()
    const [notes, setNotes] = useState("")
    const [open, setOpen] = useState(false)

    const { data: staffs } = useQuery({
        queryKey: ["staffs"],
        queryFn: () => StaffService.getAllStaff()
    })

    const { data: rooms } = useQuery({
        queryKey: ["rooms"],
        queryFn: () => HotelroomServices.getAllRooms()
    })

    const { mutate: assignTask, isPending } = useMutation({
        mutationFn: (payload: CreateTaskPayload) => tasksService.createTask(payload),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tasks"] })
            queryClient.invalidateQueries({ queryKey: ["housekeeping"] })
            toast.success("Task assigned successfully")
            setTitle("")
            setType("")
            setStaffId("")
            setRoomId("")
            setPriority("low")
            setDue(undefined)
            setNotes("")
            setTimeout(() => setOpen(false), 1500)
        },
        onError: (err: any) => {
            toast.error(err?.response?.data?.message ?? "Unable to assign task. Please try again.")
        }
    })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        if (!title.trim()) {
            toast.error("Please enter a task title.")
            return
        }
        if (!type) {
            toast.error("Please enter a task type")
            return
        }
        if (!staffId) {
            toast.error("Please select a staff member.")
            return
        }
        if (!due) {
            toast.error("Please select a due date.")
            return
        }

        const payload: CreateTaskPayload = {
            staffs: staffId,
            rooms: roomId || undefined,
            title,
            type,
            priority,
            due: toApiDate(due),
            done: false,
        }

        assignTask(payload)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger
                type="button"
                className="flex items-center gap-2 bg-slider px-3 py-2 rounded-md cursor-pointer text-sm w-35 text-black hover:text-white hover:bg-slider/60 transition-all duration-300"
            >
                <Plus className="w-4 h-4" />
                <p>ASSIGN TASK</p>
            </DialogTrigger>
            <DialogContent className="bg-[#12100D] max-h-[95vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-white">Assign New Task</DialogTitle>
                </DialogHeader>

                <form id="assign-task-form" onSubmit={handleSubmit}>
                    <FieldGroup>
                        <Field className="text-white">
                            <Label htmlFor="title">TASK TITLE</Label>
                            <Input
                                type="text"
                                id="title"
                                placeholder="e.g. Clean Larita suite"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Field>

                        <Field className="text-white">
                            <Label htmlFor="type">TYPE</Label>
                            <Input
                                type="text"
                                id="type"
                                placeholder="e.g. Deep clean"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            />
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="staff">ASSIGN TO</Label>
                            <NativeSelect
                                value={staffId}
                                onChange={(e: ChangeEvent<HTMLSelectElement>) => setStaffId(e.target.value)}
                            >
                                <NativeSelectOption value="">Select staff</NativeSelectOption>
                                {
                                    staffs?.map((staff) => (
                                        <NativeSelectOption key={staff._id} value={staff._id}>
                                            {staff.name} - {staff.department}
                                        </NativeSelectOption>
                                    ))
                                }
                            </NativeSelect>
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="room">ROOM</Label>
                            <NativeSelect
                                value={roomId}
                                onChange={(e: ChangeEvent<HTMLSelectElement>) => setRoomId(e.target.value)}
                            >
                                <NativeSelectOption value="">No room (optional)</NativeSelectOption>
                                {
                                    rooms?.map((room) => (
                                        <NativeSelectOption key={room._id} value={room._id}>
                                            {room.roomName} - {room.status}
                                        </NativeSelectOption>
                                    ))
                                }
                            </NativeSelect>
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="priority">PRIORITY</Label>
                            <NativeSelect
                                value={priority}
                                onChange={(e: ChangeEvent<HTMLSelectElement>) => setPriority(e.target.value as TaskPriority)}
                            >
                                <NativeSelectOption value="low">LOW</NativeSelectOption>
                                <NativeSelectOption value="medium">MEDIUM</NativeSelectOption>
                                <NativeSelectOption value="high">HIGH</NativeSelectOption>
                            </NativeSelect>
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="due">DUE DATE</Label>
                            <DatePickerInput onSelect={setDue} />
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="notes">NOTES</Label>
                            <Textarea
                                placeholder="Additional details..."
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                            />
                        </Field>
                    </FieldGroup>
                </form>

                <DialogFooter className="bg-[#12100D]">
                    <DialogClose asChild>
                        <Button type="button" variant="outline" className="cursor-pointer bg-black text-white border border-primary hover:text-black hover:bg-black/20">Cancel</Button>
                    </DialogClose>
                    <Button
                        type="submit"
                        form="assign-task-form"
                        disabled={isPending}
                        className="bg-slider cursor-pointer text-black py-4 px-3 hover:bg-slider/90 font-medium hover:text-white flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isPending ? "Assigning..." : "Assign Task"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}