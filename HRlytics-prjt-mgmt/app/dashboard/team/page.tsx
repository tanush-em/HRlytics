import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import projects from "@/data/projects.json";

export default function TeamPage() {
  // Get unique team members across all projects
  const teamMembers = Array.from(new Set(
    projects.projects.flatMap(project => 
      project.team.map(member => JSON.stringify(member))
    )
  )).map(member => JSON.parse(member));

  return (
    <div className="h-full p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Team</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <Card key={member.id} className="p-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="text-lg font-semibold">{member.name}</h4>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </div>
            
            <div className="mt-4">
              <h5 className="text-sm font-medium mb-2">Assigned Projects</h5>
              <div className="space-y-1">
                {projects.projects
                  .filter(project => 
                    project.team.some(teamMember => teamMember.id === member.id)
                  )
                  .map(project => (
                    <div key={project.id} className="text-sm text-gray-600">
                      {project.name}
                    </div>
                  ))
                }
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}