import DashboardLayout from "@/components/dashboardlayout"
import TaskCard from "@/components/task-card"
import { Plus } from "lucide-react"
import tasks from "@/mocks/tasks.json"
import { AssignTask } from "@/components/assignTask"




function Tasks() {

   
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


            <div className=" flex flex-col gap-3">
                {
                    tasks.map((task) => (
                        <TaskCard
                            title={task.title}
                            assignee={task.assignee}
                            priority={task.priority}
                            due={task.due}
                        />
                    ))
                }
            </div>
        </DashboardLayout>
    )
}

export default Tasks