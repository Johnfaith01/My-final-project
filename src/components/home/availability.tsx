
import { NativeSelect, NativeSelectOption } from "../ui/native-select";
import hotels from "../../mocks/hotel-rooms.json"
import { DatePickerInput } from "../popover";


export default function Availability() {

    return (
        <section className="min-h-[20vh] flex ">

            <div className="flex gap-5 justify-between items-center  width-[80%] mx-auto my-10">
               
               <DatePickerInput label="Check In"/>

                <div className="w-px h-16 bg-gray-300" />

                <DatePickerInput label="Check Out"/>

                <div className="w-px h-16 bg-gray-300" />

                <div className="flex flex-col gap-2">
                    <h1 className="text-sm text-gray-600 font-bold">GUESTS</h1>
                    <NativeSelect>
                        <NativeSelectOption value="">No of guests</NativeSelectOption>
                        <NativeSelectOption value="1">1 Guest</NativeSelectOption>
                        <NativeSelectOption value="2">2 Guests</NativeSelectOption>
                        <NativeSelectOption value="3">3 Guests</NativeSelectOption>
                        <NativeSelectOption value="4">4 Guests</NativeSelectOption>
                    </NativeSelect>
                </div>

                <div className="w-px h-16 bg-gray-300" />

                <div className="flex flex-col gap-2">
                    <h1 className="text-sm text-gray-600 font-bold">ROOM TYPE</h1>
                    <NativeSelect>
                        <NativeSelectOption value="">Type of room</NativeSelectOption>
                       {
                        hotels.map((hotel)=>(
                            <NativeSelectOption key={hotel.category} value={hotel.category}>{hotel.category}</NativeSelectOption>
                        ))
                       }
                        
                    </NativeSelect>
                </div>

                <div className="w-px h-16 bg-gray-300" />

                <div className="flex flex-col gap-2">
                    <button className="px-5 py-2 border-none rounded-md bg-[#B8924A] text-white cursor-pointer">Check Availability</button>
                </div>
            </div>

            <hr />
            
        </section>
    )
}