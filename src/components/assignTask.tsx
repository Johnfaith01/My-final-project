import staffs from "@/mocks/staff.json"
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
import { DatePickerInput } from "./popover"
import { Textarea } from "./ui/textarea"

export function AssignTask() {
    return (
        <Dialog>
            <form className="">
                <DialogTrigger className="flex items-center gap-2 bg-slider px-3 py-2 rounded-md cursor-pointer text-sm w-35 text-black hover:text-white hover:bg-slider/60 transition-all duration-300">
                    <Plus className="w-4 h-4" />
                    <p>ASSIGN TASK</p>
                </DialogTrigger>
                <DialogContent className="bg-[#12100D]">
                    <DialogHeader>
                        <DialogTitle className="text-white">Assign New Task</DialogTitle>
                    </DialogHeader>
                    <FieldGroup>
                        <Field className="text-white">
                            <Label htmlFor="">TASK TITLE</Label>
                            <Input type="text" id="" placeholder="e.g. Clean Larita suite" />
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="">ASSIGN TO</Label>
                            <NativeSelect>
                                {
                                    staffs.map((staff) => (
                                        <NativeSelectOption key={staff.name} value={staff.name}>{staff.name} - {staff.dept}</NativeSelectOption>
                                    ))
                                }

                            </NativeSelect>
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="">PRIORITY</Label>
                            <NativeSelect>
                                <NativeSelectOption>LOW</NativeSelectOption>
                                <NativeSelectOption>MEDIUM</NativeSelectOption>
                                <NativeSelectOption>HIGH</NativeSelectOption>
                            </NativeSelect>
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="">DUE DATE</Label>
                            <DatePickerInput/>
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="">NOTES</Label>
                            <Textarea placeholder="Additional details..."/>
                        </Field>
                    </FieldGroup>
                    <DialogFooter className="bg-[#12100D]">
                        <DialogClose asChild>
                            <Button variant="outline" className="cursor-pointer bg-black text-white border border-primary hover:text-black hover:bg-black/20">Cancel</Button>
                        </DialogClose>
                        <Button type="submit" className="bg-slider cursor-pointer text-black py-4 px-3 hover:bg-slider/90 font-medium hover:text-white flex items-center">Assign Task</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
