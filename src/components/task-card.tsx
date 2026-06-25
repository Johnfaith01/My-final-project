import { useState } from "react"


interface TaskCardProps {
    title: string
    assignee: string
    priority: string
    due: string
}

const statusStyles: Record <string,string> = {
    "high": "bg-red-500/10   text-red-500   border border-red-500/20",
    "medium": "bg-amber-500/10 text-amber-500 border border-amber-500/20",
    "low": "bg-green-500/10 text-green-500 border border-green-500/20"
}



function TaskCard({ title, assignee, priority, due }: TaskCardProps) {
    const [checked, setChecked] = useState(false)
    return (
        <div>

            <div className="flex justify-between bg-[#12100D] p-4 border border-primary gap-2 cursor-pointer hover:bg-black/50">
                <div className="text-white flex gap-2">
                    <input 
                    checked={checked}
                    onClick={()=>setChecked(!checked)}
                    type="checkbox" 
                    className="h-6 w-6 checked:bg-[#12100D] checked:border-white/40 transition-colors" />
                    <div className={`text-sm ${checked ? "line-through text-[#6A6358]" : "text-white"}`}>
                        {title}
                    </div>
                </div>

                <div className="text-white flex items-center gap-2 text-xs">
                    <div className="text-gray-300">{assignee}</div>
                    <div className={`uppercase py-1 px-2 rounded-md ${statusStyles[priority] ?? "bg-gray-500/10 text-gray-500"}`}>
                        {priority}
                    </div>
                    <div className="text-gray-300">{due}</div>
                </div>
            </div>
        </div>
    )
}

export default TaskCard