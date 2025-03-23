"use client";

import { Card } from "@/components/ui/card";
import candidates from "@/data/candidates.json";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

export default function StatusPage() {
  const statusCount = candidates.candidates.reduce((acc, candidate) => {
    acc[candidate.status] = (acc[candidate.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const statusData = Object.entries(statusCount).map(([name, value]) => ({
    name,
    value,
  }));

  const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))"];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Applicant Status Overview</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="mb-4 text-xl font-semibold">Status Distribution</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {statusData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card className="p-6">
          <h2 className="mb-4 text-xl font-semibold">Status Summary</h2>
          <div className="space-y-4">
            {Object.entries(statusCount).map(([status, count], index) => (
              <div
                key={status}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-medium">{status}</p>
                  <p className="text-sm text-gray-500">
                    {((count / candidates.candidates.length) * 100).toFixed(1)}% of
                    total
                  </p>
                </div>
                <p className="text-2xl font-bold">{count}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}