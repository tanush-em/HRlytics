import { Card } from "@/components/ui/card";
import projects from "@/data/projects.json";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProjectsPage() {
  return (
    <div className="h-full p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
      </div>

      <div className="grid gap-6">
        {projects.projects.map((project) => (
          <Card key={project.id} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold">{project.name}</h4>
              <span className="px-2 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                {project.status}
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>
                
                <div>
                  <h5 className="text-sm font-medium mb-2">Timeline</h5>
                  <p className="text-sm text-gray-600">
                    {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h5 className="text-sm font-medium mb-2">Team Members</h5>
                  <div className="flex -space-x-2">
                    {project.team.map((member) => (
                      <Avatar key={member.id} className="border-2 border-white">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-sm font-medium mb-2">Tasks</h5>
                  <div className="space-y-2">
                    {project.tasks.map((task) => (
                      <div key={task.id} className="flex justify-between items-center text-sm">
                        <span>{task.title}</span>
                        <span className="text-gray-600">{task.status}</span>
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