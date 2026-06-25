
import { NativeSelect, NativeSelectOption } from "../ui/native-select";
import hotels from "../../mocks/hotel-rooms.json"
import { DatePickerInput } from "../popover";


export default function Availability() {

    return (
        <section className="min-h-[20vh] flex md:">

            <div className="flex flex-col gap-5 w-[90%] mx-auto my-10 md:flex-row md:items-end">
               
               <DatePickerInput label="Check In"/>


                <DatePickerInput label="Check Out"/>


                <div className="flex flex-col gap-2">
                    <h1 className="text-sm text-gray-600 font-bold">GUESTS</h1>
                    <NativeSelect className="w-full md:w-50">
                        <NativeSelectOption value="">No of guests</NativeSelectOption>
                        <NativeSelectOption value="1">1 Guest</NativeSelectOption>
                        <NativeSelectOption value="2">2 Guests</NativeSelectOption>
                        <NativeSelectOption value="3">3 Guests</NativeSelectOption>
                        <NativeSelectOption value="4">4 Guests</NativeSelectOption>
                    </NativeSelect>
                </div>


                <div className="flex flex-col gap-2">
                    <h1 className="text-sm text-gray-600 font-bold">ROOM TYPE</h1>
                    <NativeSelect className="w-full md:w-50">
                        <NativeSelectOption value="">Type of room</NativeSelectOption>
                       {
                        hotels.map((hotel)=>(
                            <NativeSelectOption key={hotel.category} value={hotel.category}>{hotel.category}</NativeSelectOption>
                        ))
                       }
                        
                    </NativeSelect>
                </div>

                <div className="flex flex-col gap-2 items-center">
                    <button className="px-5 py-2 border-none rounded-md bg-[#B8924A] text-white cursor-pointer w-fit md:w-50">Check Availability</button>
                </div>
            </div>

            <hr />
            
        </section>
    )
}