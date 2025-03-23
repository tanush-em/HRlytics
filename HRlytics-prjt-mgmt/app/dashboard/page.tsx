import { Card } from "@/components/ui/card";
import projects from "@/data/projects.json";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function DashboardPage() {
  return (
    <div className="h-full p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <h3 className="font-semibold text-lg mb-4">Active Projects</h3>
          <div className="text-3xl font-bold">{projects.projects.length}</div>
        </Card>
        
        <Card className="p-6">
          <h3 className="font-semibold text-lg mb-4">Team Members</h3>
          <div className="text-3xl font-bold">
            {projects.projects.reduce((acc, project) => acc + project.team.length, 0)}
          </div>
        </Card>
        
        <Card className="p-6">
          <h3 className="font-semibold text-lg mb-4">Total Tasks</h3>
          <div className="text-3xl font-bold">
            {projects.projects.reduce((acc, project) => acc + project.tasks.length, 0)}
          </div>
        </Card>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-4">Recent Projects</h3>
      <div className="grid gap-4">
        {projects.projects.map((project) => (
          <Card key={project.id} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold">{project.name}</h4>
              <span className="px-2 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                {project.status}
              </span>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>
              
              <div>
                <h5 className="text-sm font-medium mb-2">Team</h5>
                <div className="flex -space-x-2">
                  {project.team.map((member) => (
                    <Avatar key={member.id} className="border-2 border-white">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}