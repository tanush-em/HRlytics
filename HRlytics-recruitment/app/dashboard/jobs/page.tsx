import { Card } from "@/components/ui/card";
import jobs from "@/data/jobs.json";
import { Badge } from "@/components/ui/badge";

export default function JobsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Job Board</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {jobs.jobs.map((job) => (
          <Card key={job.id} className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold">{job.title}</h2>
                <p className="text-gray-500">{job.department}</p>
              </div>
              <Badge variant="secondary">{job.type}</Badge>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">{job.location}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Experience</p>
                <p className="font-medium">{job.experience}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Salary Range</p>
                <p className="font-medium">${job.salary}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Description</p>
                <p className="text-gray-700">{job.description}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Requirements</p>
                <ul className="list-disc list-inside space-y-1">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="text-gray-700">{req}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between items-center pt-4 border-t">
                <div className="text-sm text-gray-500">
                  Posted: {job.postedDate}
                </div>
                <div className="text-sm font-medium">
                  {job.applications} Applications
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}