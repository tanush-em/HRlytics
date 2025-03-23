"use client";

import { Card } from "@/components/ui/card";
import employees from "@/data/employees.json";
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

export default function AttendancePage() {
  const attendanceData = employees.employees.map((employee) => ({
    name: employee.name,
    Present: employee.attendance.present,
    Absent: employee.attendance.absent,
    Leave: employee.attendance.leave,
  }));

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Attendance Management</h1>
      <Card className="p-6">
        <h2 className="mb-4 text-xl font-semibold">Attendance Overview</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Present" fill="hsl(var(--chart-1))" />
              <Bar dataKey="Absent" fill="hsl(var(--chart-2))" />
              <Bar dataKey="Leave" fill="hsl(var(--chart-3))" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}