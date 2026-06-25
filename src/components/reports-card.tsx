
import { FaArrowRightLong } from "react-icons/fa6";


interface ReportProps {
    Icon: string
    header: string
    details: string
}

function ReportsCard({ Icon, header, details }: ReportProps) {
    return (
        <div className="bg-[#12100D] border border-primary p-5 flex flex-col gap-2">
            <div className="text-2xl">
                {Icon}
            </div>
            <div className="text-white text-xl">
                {header}
            </div>
            <div className="text-gray-500 text-xs mb-2">
                {details}
            </div>
            <hr className=" border border-primary"/>
            <button className="flex gap-2 items-end w-fit px-3 py-2 bg-slider text-sm font-medium mt-2 cursor-pointer hover:text-white hover:bg-slider/70">GENERATE<span className="w-4 h-4"><FaArrowRightLong /></span></button>
        </div>
    )
}

export default ReportsCard