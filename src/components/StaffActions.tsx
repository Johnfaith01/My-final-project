import { useState } from "react"
import { Eye } from "lucide-react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { StaffService } from "@/services/staff-service"
import type { Staff } from "@/types/staff-type"
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
import { EditStaff } from "./EditStaff"


interface StaffActionsProps {
    staff: Staff
}

export function StaffActions({ staff }: StaffActionsProps) {
    const queryClient = useQueryClient()
    const [editOpen, setEditOpen] = useState(false)
    const [deleteOpen, setDeleteOpen] = useState(false)

    const { mutate: deleteStaff, isPending: isDeleting } = useMutation({
        mutationFn: () => StaffService.deleteStaff(staff._id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["staffs"] })
            toast.success("Staff deleted")
            setDeleteOpen(false)
        },
        onError: (err: any) => {
            toast.error(err?.response?.data?.message ?? "Unable to delete staff")
        }
    })

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" className="border border-primary cursor-pointer hover:bg-primary/10">
                        <Eye className="w-4 h-4" />
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

            <EditStaff staff={staff} open={editOpen} onOpenChange={setEditOpen} />

            <AlertDialog open={deleteOpen} onOpenChange={setDeleteOpen}>
                <AlertDialogContent className="bg-[#12100D]">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-white">Delete this staff member?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="bg-[#12100D]">
                        <AlertDialogCancel className="bg-transparent text-white hover:bg-transparent cursor-pointer">Cancel</AlertDialogCancel>
                        <AlertDialogAction className="cursor-pointer" onClick={() => deleteStaff()} disabled={isDeleting}>
                            {isDeleting ? "Deleting..." : "Delete"}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}