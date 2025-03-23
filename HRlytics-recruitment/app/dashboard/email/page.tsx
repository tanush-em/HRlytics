import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import candidates from "@/data/candidates.json";

export default function EmailPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Email Follow-up</h1>
      <div className="grid gap-6">
        {candidates.candidates.map((candidate) => (
          <Card key={candidate.id} className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{candidate.name}</h3>
                <p className="text-gray-500">{candidate.email}</p>
              </div>
              <Badge
                variant="secondary"
                className={
                  candidate.status === "Interview Scheduled"
                    ? "bg-blue-100 text-blue-800"
                    : candidate.status === "Offer Extended"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }
              >
                {candidate.status}
              </Badge>
            </div>
            <div className="mt-4 space-y-4">
              <div>
                <p className="text-sm text-gray-500">Position</p>
                <p className="font-medium">{candidate.jobTitle}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Applied Date</p>
                <p className="font-medium">{candidate.appliedDate}</p>
              </div>
              {candidate.interviews.length > 0 && (
                <div>
                  <p className="text-sm text-gray-500 mb-2">Interview Schedule</p>
                  <div className="space-y-2">
                    {candidate.interviews.map((interview, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                      >
                        <div>
                          <p className="font-medium">{interview.round}</p>
                          <p className="text-sm text-gray-500">{interview.date}</p>
                        </div>
                        <Badge variant="secondary">{interview.status}</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div>
                <p className="text-sm text-gray-500">Notes</p>
                <p className="text-gray-700">{candidate.notes}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}