import type { IconType } from "react-icons/lib";

interface OverviewCardProps {
    title: string
    value: string
    change: string
    Icon?: IconType
    className?: string
    loading?: boolean
}

function OverviewCard({ title, value, change, Icon, className, loading }: OverviewCardProps) {
    return (
        <section>
            <div className="flex flex-col border border-primary bg-[#12100D] p-4 rounded-md shadow hover:border-slider hover:scale-105 hover:duration-500">
                <h1 className="font-semibold font-serif text-sm text-stone-400">{title}</h1>
                <h2 className="mt-2 mb-1 text-4xl text-[#F4EFE4] font-serif">
                    {loading ? "—" : value}
                </h2>
                <div className={`${className ? className : "text-green-400"} flex items-center text-[15px] gap-1`}>
                    {Icon && <Icon className="w-2 h-2" />}
                    <small>{loading ? "" : change}</small>
                </div>
            </div>
        </section>
    )
}

export default OverviewCard