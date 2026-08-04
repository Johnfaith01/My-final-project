import { useState, useEffect, type FormEvent, type ChangeEvent } from "react"
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
import { DatePickerInput } from "./popover"
import { Textarea } from "./ui/textarea"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import type { CreateTaskPayload, Task, TaskPriority } from "@/types/task-type"
import { tasksService } from "@/services/tasks-service"
import { StaffService } from "@/services/staff-service"
import { toast } from "sonner"
import { HotelroomServices } from "@/services/hotelRoom-service"

function toApiDate(date: Date | undefined) {
    return date ? date.toISOString().split("T")[0] : ""
}

interface EditTaskProps {
    task: Task
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function EditTask({ task, open, onOpenChange }: EditTaskProps) {
    const queryClient = useQueryClient()

    const [title, setTitle] = useState(task.title)
    const [type, setType] = useState(task.type ?? "")
    const [staffId, setStaffId] = useState(task.staffs?._id ?? "")
    const [roomId, setRoomId] = useState(task.rooms?._id ?? "")
    const [priority, setPriority] = useState<TaskPriority>(task.priority)
    const [due, setDue] = useState<Date | undefined>(task.due ? new Date(task.due) : undefined)
    const [notes, setNotes] = useState(task.notes ?? "")

    useEffect(() => {
        setTitle(task.title)
        setType(task.type ?? "")
        setStaffId(task.staffs?._id ?? "")
        setRoomId(task.rooms?._id ?? "")
        setPriority(task.priority)
        setDue(task.due ? new Date(task.due) : undefined)
        setNotes(task.notes ?? "")
    }, [task])

    const { data: staffs } = useQuery({
        queryKey: ["staffs"],
        queryFn: () => StaffService.getAllStaff()
    })

    const { data: rooms } = useQuery({
        queryKey: ["rooms"],
        queryFn: () => HotelroomServices.getAllRooms()
    })

    const { mutate: updateTask, isPending } = useMutation({
        mutationFn: (payload: Partial<CreateTaskPayload>) => tasksService.updateTask(task._id, payload),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tasks"] })
            queryClient.invalidateQueries({ queryKey: ["housekeeping"] })
            toast.success("Task updated successfully")
            onOpenChange(false)
        },
        onError: (err: any) => {
            toast.error(err?.response?.data?.message ?? "Unable to update task. Please try again.")
        }
    })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        if (!title.trim()) {
            toast.error("Please enter a task title.")
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

        updateTask({
            staffs: staffId,
            rooms: roomId || undefined,
            title,
            type,
            priority,
            due: toApiDate(due),
            notes,
        })
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="bg-[#12100D] max-h-[95vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-white">Update Task</DialogTitle>
                </DialogHeader>

                <form id="edit-task-form" onSubmit={handleSubmit}>
                    <FieldGroup>
                        <Field className="text-white">
                            <Label htmlFor="title">TASK TITLE</Label>
                            <Input
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Field>

                        <Field className="text-white">
                            <Label htmlFor="type">TYPE</Label>
                            <Input
                                type="text"
                                id="type"
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
                                            {room.roomName} - {room.category}
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
                            <DatePickerInput onSelect={setDue} defaultValue={due} />
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="notes">NOTES</Label>
                            <Textarea
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
                        form="edit-task-form"
                        disabled={isPending}
                        className="bg-slider cursor-pointer text-black py-4 px-3 hover:bg-slider/90 font-medium hover:text-white flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isPending ? "Saving..." : "Save Changes"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}