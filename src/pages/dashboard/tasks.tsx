import DashboardLayout from "@/components/dashboardlayout"
import TaskCard from "@/components/task-card"
import { AssignTask } from "@/components/assignTask"
import { useQuery } from "@tanstack/react-query"
import { tasksService } from "@/services/tasks-service"

function Tasks() {

    const { data: tasks, error, isLoading } = useQuery({
        queryKey: ["tasks"],
        queryFn: () => tasksService.getAllTasks()
    })

    if (isLoading) {
        return (
            <DashboardLayout>
                <p className="text-gray-400 text-sm">Loading tasks...</p>
            </DashboardLayout>
        )
    }

    if (error) {
        return (
            <DashboardLayout>
                <p className="text-red-500 text-sm">Unable to load tasks.</p>
            </DashboardLayout>
        )
    }

    return (
        <DashboardLayout>
            <div className="flex items-center justify-between">
                <div className="text-white mb-7">
                    <h1 className='text-white text-2xl'>Task Manager</h1>
                    <p className='text-gray-400 text-sm'>All assigned tasks</p>
                </div>

                <div>
                    <AssignTask/>
                </div>
            </div>

            <div className="flex flex-col gap-3">
                {
                    tasks && tasks.length > 0 ? (
                        tasks.map((task) => (
                            <TaskCard
                                key={task._id} task={task}
                            />
                        ))
                    ) : (
                        <p className="text-gray-400 text-sm text-center py-6">No tasks found.</p>
                    )
                }
            </div>
        </DashboardLayout>
    )
}

export default Tasks