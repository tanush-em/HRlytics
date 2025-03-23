"use client";

import { Card } from "@/components/ui/card";
import candidates from "@/data/candidates.json";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function ScreeningPage() {
  const screeningData = candidates.candidates.map((candidate) => ({
    name: candidate.name,
    "Resume Score": candidate.resumeScore,
    "Required Skills": candidate.skills.length * 20,
  }));

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">CV Screening</h1>
      <Card className="p-6">
        <h2 className="mb-4 text-xl font-semibold">ATS Analysis</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={screeningData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Resume Score" fill="hsl(var(--chart-1))" />
              <Bar dataKey="Required Skills" fill="hsl(var(--chart-2))" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
      <div className="grid gap-6 md:grid-cols-2">
        {candidates.candidates.map((candidate) => (
          <Card key={candidate.id} className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">{candidate.name}</h3>
                <p className="text-gray-500">{candidate.jobTitle}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Skills Match</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {candidate.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500">Education</p>
                <p className="font-medium">{candidate.education}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Experience</p>
                <p className="font-medium">
                  {candidate.experience} at {candidate.currentCompany}
                </p>
              </div>
              <div className="pt-4 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Resume Score</span>
                  <span className="text-lg font-semibold">
                    {candidate.resumeScore}%
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}