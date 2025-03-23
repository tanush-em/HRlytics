"use client";

import { Card } from "@/components/ui/card";
import employees from "@/data/employees.json";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function PerformancePage() {
  const performanceData = employees.employees.map((employee) => ({
    name: employee.name,
    Q1: employee.performance.q1,
    Q2: employee.performance.q2,
    Q3: employee.performance.q3,
    Q4: employee.performance.q4,
  }));

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Performance Analysis</h1>
      <Card className="p-6">
        <h2 className="mb-4 text-xl font-semibold">Quarterly Performance</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="Q1"
                stroke="hsl(var(--chart-1))"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="Q2"
                stroke="hsl(var(--chart-2))"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="Q3"
                stroke="hsl(var(--chart-3))"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="Q4"
                stroke="hsl(var(--chart-4))"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}