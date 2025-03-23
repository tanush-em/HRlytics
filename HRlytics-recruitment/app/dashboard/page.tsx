import { Card } from "@/components/ui/card";
import jobs from "@/data/jobs.json";
import candidates from "@/data/candidates.json";
import { Briefcase, Users, FileText, Mail } from "lucide-react";

export default function DashboardPage() {
  const totalJobs = jobs.jobs.length;
  const totalCandidates = candidates.candidates.length;
  const activeInterviews = candidates.candidates.filter(
    (candidate) => candidate.status === "Interview Scheduled"
  ).length;
  const averageResumeScore =
    candidates.candidates.reduce((acc, candidate) => acc + candidate.resumeScore, 0) /
    candidates.candidates.length;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Recruitment Overview</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Briefcase className="h-8 w-8 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Active Jobs</p>
              <h3 className="text-2xl font-bold">{totalJobs}</h3>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Users className="h-8 w-8 text-green-500" />
            <div>
              <p className="text-sm text-gray-500">Total Candidates</p>
              <h3 className="text-2xl font-bold">{totalCandidates}</h3>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <FileText className="h-8 w-8 text-purple-500" />
            <div>
              <p className="text-sm text-gray-500">Avg Resume Score</p>
              <h3 className="text-2xl font-bold">
                {averageResumeScore.toFixed(1)}%
              </h3>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Mail className="h-8 w-8 text-orange-500" />
            <div>
              <p className="text-sm text-gray-500">Active Interviews</p>
              <h3 className="text-2xl font-bold">{activeInterviews}</h3>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}