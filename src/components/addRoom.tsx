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
import { Textarea } from "./ui/textarea"

export default function AddRoom() {
    
    return (
        <Dialog>
            <form className="">
                <DialogTrigger className="flex items-center gap-2 bg-slider px-3 py-2 rounded-md cursor-pointer text-sm w-fit text-black hover:text-white hover:bg-slider/60 transition-all duration-300">
                    <Plus className="w-4 h-4" />
                    <p>ADD NEW ROOM</p>
                </DialogTrigger>
                <DialogContent className="bg-[#12100D] max-h-[95vh] overflow-y-auto">
                    <DialogHeader className="text-white">
                        <DialogTitle>Add New Room</DialogTitle>
                    </DialogHeader>
                    <FieldGroup>
                        <Field className="text-white">
                            <Label htmlFor="">ROOM NAME</Label>
                            <Input type="text" id="" placeholder="Room name" />
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="">STATUS</Label>
                            <NativeSelect>
                                <NativeSelectOption>Occupied</NativeSelectOption>
                                <NativeSelectOption>Vacant</NativeSelectOption>
                                <NativeSelectOption>Maintainance</NativeSelectOption>
                                <NativeSelectOption>Needs cleaning</NativeSelectOption>
                            </NativeSelect>
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="">SLUG</Label>
                            <Input type="text" placeholder="Suite, penthouse, etc" />
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="">CATEGORY</Label>
                            <Input type="text" placeholder="Suite, penthouse, etc" />
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="">PRICE PER NIGHT</Label>
                            <Input type="number" placeholder="50000" />
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="">SIZE</Label>
                            <Input type="number" placeholder="100m" />
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="">FLOOR</Label>
                            <Input type="number" placeholder="2" />
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="">MAX GUESTS</Label>
                            <NativeSelect>
                                <NativeSelectOption>1</NativeSelectOption>
                                <NativeSelectOption>2</NativeSelectOption>
                                <NativeSelectOption>3</NativeSelectOption>
                                <NativeSelectOption>4</NativeSelectOption>
                                <NativeSelectOption>5</NativeSelectOption>
                            </NativeSelect>
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="">BEDS</Label>
                            <NativeSelect>
                                <NativeSelectOption>1</NativeSelectOption>
                                <NativeSelectOption>2</NativeSelectOption>
                                <NativeSelectOption>3</NativeSelectOption>
                            </NativeSelect>
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="">AMENITIES</Label>
                            <Input type="text" placeholder="spa, private gardens..." />
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="">AVAILABILITY</Label>
                            <NativeSelect>
                                <NativeSelectOption>True</NativeSelectOption>
                                <NativeSelectOption>False</NativeSelectOption>
                            </NativeSelect>
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="">IMAGES</Label>
                            <input
                                type="file"
                                accept="image/*"      
                            />
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="">DESCRIPTION</Label>
                            <Textarea placeholder="Full description" />
                        </Field>
                    </FieldGroup>
                    <DialogFooter className="bg-[#12100D]">
                        <DialogClose asChild>
                            <Button variant="outline" className="cursor-pointer bg-black text-white border border-primary hover:text-black hover:bg-black/20">Cancel</Button>
                        </DialogClose>
                        <Button type="submit" className="bg-slider cursor-pointer text-black py-4 px-3 hover:bg-slider/90 font-medium hover:text-white flex items-center">Add Room</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
