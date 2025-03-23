import { Card } from "@/components/ui/card";
import projects from "@/data/projects.json";

export default function TimelinePage() {
  const sortedProjects = [...projects.projects].sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  );

  return (
    <div className="h-full p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Timeline</h2>
      </div>

      <div className="space-y-8">
        {sortedProjects.map((project, index) => (
          <Card key={project.id} className="p-6">
            <div className="flex items-start">
              <div className="flex flex-col items-center mr-4">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  {index + 1}
                </div>
                {index < sortedProjects.length - 1 && (
                  <div className="w-0.5 h-full bg-gray-200 mt-2" />
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold">{project.name}</h4>
                  <span className="px-2 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                    {project.status}
                  </span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="text-sm font-medium mb-2">Timeline</h5>
                    <p className="text-sm text-gray-600">
                      {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    {project.tasks.map((task) => (
                      <div key={task.id} className="flex justify-between items-center text-sm">
                        <span>{task.title}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-600">Due: {new Date(task.dueDate).toLocaleDateString()}</span>
                          <span className={`px-2 py-0.5 rounded-full text-xs ${
                            task.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {task.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}