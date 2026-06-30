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
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { DatePickerInput } from "./popover"
import { Textarea } from "./ui/textarea"





const floors = ["Any", "High", "Low", "Mid"]

const statuses = ["Checked In", "Checked Out", "Pending"]

export default function AddGuest() {
    return (
        <Dialog>
            <form className="">
                <DialogTrigger className="flex items-center gap-2 bg-slider px-3 py-2 rounded-md cursor-pointer text-sm w-fit text-black hover:text-white hover:bg-slider/60 transition-all duration-300">
                    <Plus className="w-4 h-4" />
                    <p>ADD GUEST</p>
                </DialogTrigger>
                <DialogContent className="bg-[#12100D] max-h-[95vh] overflow-y-auto">
                    <DialogHeader className="text-white">
                        <DialogTitle>Add New Guest</DialogTitle>
                    </DialogHeader>
                    <FieldGroup>
                        <Field className="text-white">
                            <Label htmlFor="">GUEST NAME</Label>
                            <Input type="text" id="" placeholder="Guest name" />
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="">EMAIL</Label>
                            <Input type="email" placeholder="name@email.com"/>
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="">PHONE NUMBER</Label>
                            <Input type="tel" placeholder="+234 807 777 7282"/>
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="">NATIONALITY</Label>
                            <Input type="text" placeholder="e.g Nigerian"/>
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="">DATE OF BIRTH</Label>
                            <DatePickerInput/>
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="">GENDER</Label>
                            <NativeSelect>
                                    <NativeSelectOption>Male</NativeSelectOption>
                                    <NativeSelectOption>Female</NativeSelectOption>
                            </NativeSelect>
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="">ADDRESS</Label>
                            <Input type="text" placeholder="e.g 23 Adeola ofolu Street"/>
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="">TOTAL STAYS(DAYS)</Label>
                            <Input type="number" placeholder="10"/>
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
                        <Field className="text-white">
                            <Label htmlFor="">CHECK IN DATE</Label>
                            <DatePickerInput/>
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="">CHECK OUT DATE</Label>
                            <DatePickerInput/>
                        </Field>
                            <Label htmlFor="" className="flex justify-center text-white">PREFERENCES</Label>
                        <Field className="text-white">
                            <Label>FLOOR</Label>
                            <NativeSelect>
                                {
                                    floors.map((floor)=>(
                                        <NativeSelectOption key={floor}>{floor}</NativeSelectOption>
                                    ))
                                }
                            </NativeSelect>
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="">PILLOW TYPE</Label>
                            <NativeSelect>
                            {["Any", "Soft", "Firm"].map((pillow)=>(
                                <NativeSelectOption key={pillow}>{pillow}</NativeSelectOption>
                            ))}
                            </NativeSelect>
                        </Field>
                        <Field className="text-white">
                            <Label>Special Requirements</Label>
                            <Textarea />
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
