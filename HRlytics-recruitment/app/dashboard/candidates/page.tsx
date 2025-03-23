import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import candidates from "@/data/candidates.json";

export default function CandidatesPage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Interview Scheduled":
        return "bg-blue-100 text-blue-800";
      case "In Review":
        return "bg-yellow-100 text-yellow-800";
      case "Offer Extended":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Candidates</h1>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Experience</TableHead>
              <TableHead>Applied Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Resume Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {candidates.candidates.map((candidate) => (
              <TableRow key={candidate.id}>
                <TableCell className="font-medium">{candidate.name}</TableCell>
                <TableCell>{candidate.jobTitle}</TableCell>
                <TableCell>{candidate.experience}</TableCell>
                <TableCell>{candidate.appliedDate}</TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={getStatusColor(candidate.status)}
                  >
                    {candidate.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">{candidate.resumeScore}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}