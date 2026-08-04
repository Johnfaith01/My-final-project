import { useState, type FormEvent, type ChangeEvent } from "react"
import { useNavigate } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import DashboardLayout from "@/components/dashboardlayout"
import { Button } from "@/components/ui/button"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { Textarea } from "@/components/ui/textarea"
import { HotelroomServices, type CreateRoomPayload } from "@/services/hotelRoom-service"
import { toast } from "sonner"

function slugify(text: string) {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")
}

export default function AddRoomPage() {
    const navigate = useNavigate()

    const [roomName, setRoomName] = useState("")
    const [status, setStatus] = useState<"occupied" | "vacant" | "maintenance" | "dirty">("vacant")
    const [slug, setSlug] = useState("")
    const [slugTouched, setSlugTouched] = useState(false)
    const [category, setCategory] = useState("")
    const [shortDescription, setShortDescription] = useState("")
    const [description, setDescription] = useState("")
    const [pricePerNight, setPricePerNight] = useState("")
    const [size, setSize] = useState("")
    const [floor, setFloor] = useState("")
    const [maxGuests, setMaxGuests] = useState("2")
    const [bedType, setBedType] = useState("")
    const [beds, setBeds] = useState("1")
    const [bathrooms, setBathrooms] = useState("")
    const [amenities, setAmenities] = useState("")
    const [available, setAvailable] = useState("true")
    const [images, setImages] = useState("")

    const { mutate: createRoom, isPending } = useMutation({
        mutationFn: (payload: CreateRoomPayload) => HotelroomServices.createRoom(payload),
        onSuccess: () => {
            toast.success("Room created successfully")
            navigate("/rooms")
        },
        onError: (err: any) => {
            toast.error(err?.response?.data?.message ?? "Unable to create room. Please try again.")
        }
    })

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRoomName(e.target.value)
        if (!slugTouched) {
            setSlug(slugify(e.target.value))
        }
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        if (!roomName.trim()) {
            toast.error("Please enter a room name")
            return
        }
        if (!category.trim()) {
            toast.error("Please enter a category")
            return
        }
        if (!shortDescription.trim() || !description.trim()) {
            toast.error("Please fill in both description fields")
            return
        }
        if (!pricePerNight || !size || !floor || !bathrooms) {
            toast.error("Please fill in all numeric fields")
            return
        }

        createRoom({
            roomName,
            status,
            slug,
            category,
            shortDescription,
            description,
            pricePerNight: Number(pricePerNight),
            size: Number(size),
            floor: Number(floor),
            maxGuests: Number(maxGuests),
            bedType,
            beds: Number(beds),
            bathrooms: Number(bathrooms),
            amenities: amenities.split(",").map(a => a.trim()).filter(Boolean),
            available: available === "true",
            images: images.split(",").map(i => i.trim()).filter(Boolean),
        })
    }

    return (

        <DashboardLayout>
            <div className="text-white mb-7">
                <h1 className="text-white text-2xl">Add New Room</h1>
                <p className="text-gray-400 text-sm">Fill in the details below to list a new room</p>
            </div>

            <form onSubmit={handleSubmit} className="p-5 border border-primary bg-[#12100D]">
                <FieldGroup>
                    <div className="grid md:grid-cols-2 gap-5">
                        <Field className="text-white">
                            <Label htmlFor="roomName">ROOM NAME</Label>
                            <Input id="roomName" type="text" placeholder="Grand Deluxe King" value={roomName} onChange={handleNameChange} />
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="status">STATUS</Label>
                            <NativeSelect value={status} onChange={(e: ChangeEvent<HTMLSelectElement>) => setStatus(e.target.value as typeof status)}>
                                <NativeSelectOption value="vacant">Vacant</NativeSelectOption>
                                <NativeSelectOption value="occupied">Occupied</NativeSelectOption>
                                <NativeSelectOption value="maintenance">Maintenance</NativeSelectOption>
                                <NativeSelectOption value="dirty">Needs cleaning</NativeSelectOption>
                            </NativeSelect>
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="slug">SLUG</Label>
                            <Input
                                id="slug"
                                type="text"
                                placeholder="grand-deluxe-king"
                                value={slug}
                                onChange={(e) => { setSlug(e.target.value); setSlugTouched(true) }}
                            />
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="category">CATEGORY</Label>
                            <Input id="category" type="text" placeholder="Suite, Penthouse, etc" value={category} onChange={(e) => setCategory(e.target.value)} />
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="price">PRICE PER NIGHT (NGN)</Label>
                            <Input id="price" type="number" placeholder="50000" value={pricePerNight} onChange={(e) => setPricePerNight(e.target.value)} />
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="size">SIZE (sqm)</Label>
                            <Input id="size" type="number" placeholder="100" value={size} onChange={(e) => setSize(e.target.value)} />
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="floor">FLOOR</Label>
                            <Input id="floor" type="number" placeholder="2" value={floor} onChange={(e) => setFloor(e.target.value)} />
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="maxGuests">MAX GUESTS</Label>
                            <NativeSelect value={maxGuests} onChange={(e: ChangeEvent<HTMLSelectElement>) => setMaxGuests(e.target.value)}>
                                <NativeSelectOption value="1">1</NativeSelectOption>
                                <NativeSelectOption value="2">2</NativeSelectOption>
                                <NativeSelectOption value="3">3</NativeSelectOption>
                                <NativeSelectOption value="4">4</NativeSelectOption>
                                <NativeSelectOption value="5">5</NativeSelectOption>
                            </NativeSelect>
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="bedType">BED TYPE</Label>
                            <Input id="bedType" type="text" placeholder="King, Twin, etc" value={bedType} onChange={(e) => setBedType(e.target.value)} />
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="beds">BEDS</Label>
                            <NativeSelect value={beds} onChange={(e: ChangeEvent<HTMLSelectElement>) => setBeds(e.target.value)}>
                                <NativeSelectOption value="1">1</NativeSelectOption>
                                <NativeSelectOption value="2">2</NativeSelectOption>
                                <NativeSelectOption value="3">3</NativeSelectOption>
                            </NativeSelect>
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="bathrooms">BATHROOMS</Label>
                            <Input id="bathrooms" type="number" placeholder="1" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} />
                        </Field>
                        <Field className="text-white">
                            <Label htmlFor="available">AVAILABILITY</Label>
                            <NativeSelect value={available} onChange={(e: ChangeEvent<HTMLSelectElement>) => setAvailable(e.target.value)}>
                                <NativeSelectOption value="true">True</NativeSelectOption>
                                <NativeSelectOption value="false">False</NativeSelectOption>
                            </NativeSelect>
                        </Field>
                    </div>

                    <Field className="text-white">
                        <Label htmlFor="amenities">AMENITIES (comma separated)</Label>
                        <Input id="amenities" type="text" placeholder="spa, private garden, minibar" value={amenities} onChange={(e) => setAmenities(e.target.value)} />
                    </Field>
                    <Field className="text-white">
                        <Label htmlFor="images">IMAGE URLS (comma separated)</Label>
                        <Input id="images" type="text" placeholder="https://... , https://..." value={images} onChange={(e) => setImages(e.target.value)} />
                    </Field>
                    <Field className="text-white">
                        <Label htmlFor="shortDescription">SHORT DESCRIPTION</Label>
                        <Input id="shortDescription" type="text" placeholder="One-line summary" value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} />
                    </Field>
                    <Field className="text-white">
                        <Label htmlFor="description">FULL DESCRIPTION</Label>
                        <Textarea id="description" placeholder="Full description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </Field>
                </FieldGroup>

                <div className="flex justify-end gap-3 mt-6">
                    <Button type="button" variant="outline" onClick={() => navigate("/rooms")} className="cursor-pointer bg-black text-white border border-primary hover:text-black hover:bg-black/20">
                        Cancel
                    </Button>
                    <Button type="submit" disabled={isPending} className="bg-slider cursor-pointer text-black py-4 px-3 hover:bg-slider/90 font-medium hover:text-white disabled:opacity-50">
                        {isPending ? "Creating..." : "Add Room"}
                    </Button>
                </div>
            </form>
        </DashboardLayout>

    )
}