import { Card } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <div className="h-full p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
      </div>

      <div className="grid gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">General Settings</h3>
          <p className="text-gray-600">Settings page content will go here.</p>
        </Card>
      </div>
    </div>
  );
}