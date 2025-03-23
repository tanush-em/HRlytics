"use client";

import { cn } from "@/lib/utils";
import {
  Briefcase,
  Users,
  FileText,
  Mail,
  LayoutDashboard,
  UserCheck
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Job Board",
    href: "/dashboard/jobs",
    icon: Briefcase,
  },
  {
    title: "Candidates",
    href: "/dashboard/candidates",
    icon: Users,
  },
  {
    title: "CV Screening",
    href: "/dashboard/screening",
    icon: FileText,
  },
  {
    title: "Email Follow-up",
    href: "/dashboard/email",
    icon: Mail,
  },
  {
    title: "Applicant Status",
    href: "/dashboard/status",
    icon: UserCheck,
  }
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-[240px] flex-col border-r bg-white">
      <div className="flex h-14 items-center border-b px-6">
        <span className="font-semibold">Recruitment Dashboard</span>
      </div>
      <div className="flex-1 overflow-auto py-4">
        <nav className="grid items-start gap-2 px-4">
          {sidebarItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900",
                  pathname === item.href
                    ? "bg-gray-100 text-gray-900"
                    : "hover:bg-gray-50"
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}