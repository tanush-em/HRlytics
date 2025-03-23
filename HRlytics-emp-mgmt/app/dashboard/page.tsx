import { Card } from "@/components/ui/card";
import employees from "@/data/employees.json";
import { Users, DollarSign, BarChart3, CalendarCheck } from "lucide-react";

export default function DashboardPage() {
  const totalEmployees = employees.employees.length;
  const averageSalary =
    employees.employees.reduce((acc, emp) => acc + emp.salary, 0) /
    totalEmployees;
  const averagePerformance =
    employees.employees.reduce(
      (acc, emp) =>
        acc +
        (emp.performance.q1 +
          emp.performance.q2 +
          emp.performance.q3 +
          emp.performance.q4) /
        4,
      0
    ) / totalEmployees;
  const averageAttendance =
    employees.employees.reduce(
      (acc, emp) =>
        acc + (emp.attendance.present / (emp.attendance.present + emp.attendance.absent + emp.attendance.leave)) * 100,
      0
    ) / totalEmployees;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Users className="h-8 w-8 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Total Employees</p>
              <h3 className="text-2xl font-bold">{totalEmployees}</h3>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <DollarSign className="h-8 w-8 text-green-500" />
            <div>
              <p className="text-sm text-gray-500">Average Salary</p>
              <h3 className="text-2xl font-bold">
                ${averageSalary.toLocaleString()}
              </h3>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <BarChart3 className="h-8 w-8 text-purple-500" />
            <div>
              <p className="text-sm text-gray-500">Avg Performance</p>
              <h3 className="text-2xl font-bold">
                {averagePerformance.toFixed(1)}%
              </h3>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <CalendarCheck className="h-8 w-8 text-orange-500" />
            <div>
              <p className="text-sm text-gray-500">Avg Attendance</p>
              <h3 className="text-2xl font-bold">
                {averageAttendance.toFixed(1)}%
              </h3>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}