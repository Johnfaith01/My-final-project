import { useState } from "react"
import type { Task } from "@/types/task-type"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { tasksService } from "@/services/tasks-service"
import { toast } from "sonner"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { EditTask } from "@/components/editTask"


interface TaskCardProps {
    task: Task
}

const priorityStyles: Record<string, string> = {
    "high": "bg-red-500/10 text-red-500 border border-red-500/20",
    "medium": "bg-amber-500/10 text-amber-500 border border-amber-500/20",
    "low": "bg-green-500/10 text-green-500 border border-green-500/20"
}

function TaskCard({ task }: TaskCardProps) {
    const queryClient = useQueryClient()
    const [checked, setChecked] = useState(task.done)
    const [editOpen, setEditOpen] = useState(false)
    const [deleteOpen, setDeleteOpen] = useState(false)

    const { mutate: deleteTask, isPending: isDeleting } = useMutation({
        mutationFn: () => tasksService.deleteTaskById(task._id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tasks"] })
            queryClient.invalidateQueries({ queryKey: ["housekeeping"] })
            toast.success("Task deleted")
            setDeleteOpen(false)
        },
        onError: (err: any) => {
            toast.error(err?.response?.data?.message ?? "Delete not available")
        }
    })

    const { mutate: toggleDone } = useMutation({
        mutationFn: (done: boolean) => tasksService.updateTask(task._id, { done }),
        onMutate: (done) => {
            setChecked(done)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tasks"] })
            queryClient.invalidateQueries({ queryKey: ["housekeeping"] })
        },
        onError: (err: any, done) => {
            setChecked(!done)
            toast.error(err?.response?.data?.message ?? "Unable to update task status")
        }
    })

    return (
        <div>
            <div className="flex justify-between bg-[#12100D] p-4 border border-primary gap-2 cursor-pointer hover:bg-black/50 flex-col sm:flex-row">
                <div className="text-white flex gap-2">
                    <input
                        checked={checked}
                        onChange={(e) => toggleDone(e.target.checked)}
                        type="checkbox"
                        className="h-6 w-6 checked:bg-[#12100D] checked:border-white/40 transition-colors"
                    />
                    <div className={`text-sm ${checked ? "line-through text-[#6A6358]" : "text-white"}`}>
                        {task.title}
                    </div>
                </div>

                <div className="text-white flex items-center gap-2 text-xs flex-wrap pl-8 sm:pl-0">
                    <div className="text-gray-300">{task.staffs?.name ?? "Unassigned"}</div>
                    <div className={`uppercase py-1 px-2 rounded-md ${priorityStyles[task.priority] ?? "bg-gray-500/10 text-gray-500"}`}>
                        {task.priority}
                    </div>
                    <div className="text-gray-300">{task.due}</div>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="outline"
                                size="sm"
                                className="border border-primary cursor-pointer hover:bg-primary/10"
                            >
                                EDIT
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-[#12100D] border border-white/10">
                            <DropdownMenuItem onClick={() => setEditOpen(true)} className="text-white cursor-pointer">
                                Update
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setDeleteOpen(true)} className="text-red-400 cursor-pointer">
                                Delete
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            <EditTask task={task} open={editOpen} onOpenChange={setEditOpen} />

            <AlertDialog open={deleteOpen} onOpenChange={setDeleteOpen}>
                <AlertDialogContent className="bg-[#12100D]">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-white">Delete this task?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This will also remove its linked housekeeping record. This action cannot be undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="bg-[#12100D]">
                        <AlertDialogCancel className="bg-transparent text-white hover:bg-transparent cursor-pointer">Cancel</AlertDialogCancel>
                        <AlertDialogAction className="cursor-pointer" onClick={() => deleteTask()} disabled={isDeleting}>
                            {isDeleting ? "Deleting..." : "Delete"}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}

export default TaskCard