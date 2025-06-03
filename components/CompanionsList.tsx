import React from "react";
import { Companion } from "@/types/companion";
import { cn } from "@/lib/utils";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface CompanionListProps {
  title: string;
  companions?: Companion[];
  className?: string;
}

const CompanionsList = ({
  title,
  companions,
  className,
}: CompanionListProps) => {
  return (
    <article className={cn("companion-list", className)}>
      <h2 className="font-bold text-3xl">Recent Sessions</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg w-2/3">Lessons</TableHead>
            <TableHead className="text-lg">Subject</TableHead>

            <TableHead className="text-lg text-right">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companions?.map((companion) => (
            <TableRow>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableCaption>A list of recent companion sessions.</TableCaption>
      </Table>
    </article>
  );
};
export default CompanionsList;
