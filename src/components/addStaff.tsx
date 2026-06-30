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
import { NativeSelect, NativeSelectOption } from "../components/ui/native-select";



const departments = ["Housekeeping", "Maintenance", "Reception", "Guest Services"]

const roles = ["Senior Housekeeper", "Maintenance Tech", "Front Desk Agent", "Bellhop", "Concierge", "Housekeeper"]

const statuses = ["On Duty", "Off Duty", "On Break"]

export default function AddStaff() {
    return (
        <Dialog>
            <form className="">
                <DialogTrigger className="flex items-center gap-2 bg-slider px-3 py-2 rounded-md cursor-pointer text-sm w-fit text-black hover:text-white hover:bg-slider/60 transition-all duration-300">
                    <Plus className="w-4 h-4" />
                    <p>ADD STAFF</p>
                </DialogTrigger>
                <DialogContent className="bg-[#12100D]">
                    <DialogHeader className="text-white">
                        <DialogTitle>Add New Staff</DialogTitle>
                    </DialogHeader>
                    <FieldGroup>
                        <Field className="text-white">
                            <Label htmlFor="">STAFF NAME</Label>
                            <Input type="text" id="" placeholder="Staff name" />
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="">DEPARTMENT</Label>
                            <NativeSelect>
                                
                                    {
                                        departments.map((department)=>(
                                            <NativeSelectOption key={department}>{department}</NativeSelectOption>
                                        ))
                                    }
                            </NativeSelect>
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="">ROLE</Label>
                            <NativeSelect>
                                {roles.map((role)=>(
                                    <NativeSelectOption key={role}>{role}</NativeSelectOption>
                                ))}
                            </NativeSelect>
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="">EMAIL</Label>
                            <Input type="email" placeholder="name@email.com"/>
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="">NUMBER</Label>
                            <Input type="tel" placeholder="+234 807 777 7282"/>
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="">STATUS</Label>
                            <NativeSelect>
                                {
                                    statuses.map((status)=>(
                                        <NativeSelectOption key={status}>{status}</NativeSelectOption>
                                    ))
                                }
                            </NativeSelect>
                        </Field>
                    </FieldGroup>
                    <DialogFooter className="bg-[#12100D]">
                        <DialogClose asChild>
                            <Button variant="outline" className="cursor-pointer bg-black text-white border border-primary hover:text-black hover:bg-black/20">Cancel</Button>
                        </DialogClose>
                        <Button type="submit" className="bg-slider cursor-pointer text-black py-4 px-3 hover:bg-slider/90 font-medium hover:text-white flex items-center">Add Staff</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
