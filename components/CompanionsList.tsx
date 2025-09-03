import React from "react";
// import { Companion } from "@/constants/index"
// Update the import path below to the correct module where Companion is exported
import type  { Companion }  from "@/types/index";
import { cn, getSubjectColor } from "@/lib/utils";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import Image from "next/image";
import { subjects } from "@/constants";

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
            <TableHead className="text-lg text-left">Subject</TableHead>

            <TableHead className="text-lg text-center">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companions?.map((companion) => (
            <TableRow key={companion.id}>
              <TableCell>
                <Link href={`/companions/${companion.id}`}>
                  <div className="flex items-center gap-2">
                    <div
                      className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden"
                      style={{
                        backgroundColor: getSubjectColor(companion.subject),
                      }}
                    >
                      <Image
                        src={`/icons/${companion.subject}.svg`}
                        alt={companion.subject}
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-lg font-[600]">{companion.name}</p>
                      <p className="">{companion.topic}</p>
                    </div>
                  </div>
                </Link>
              </TableCell>
              <TableCell>
                <div className="subject-badge w-fit max-md:hidden">
                  {companion.subject || "Untitled Companion"}
                </div>
                <div
                  className="flex items-center justify-center w-fit rounded-lg p-2 md:hidden"
                  style={{
                    backgroundColor: getSubjectColor(companion.subject),
                  }}
                >
                  <Image
                    src={`/icons/${companion.subject}.svg`}
                    alt={companion.subject}
                    width={18}
                    height={18}
                  />
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex items-center gap-2 w-full justify-center border">
                  <p className="text-lg">{companion.duration} {' '} <span className="max-md:hidden">mins</span> </p>
                  <Image src="/icons/clock.svg" alt="minutes" width={14} height={14} className="md:hidden" />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableCaption>A list of recent companion sessions.</TableCaption>
      </Table>
    </article>
  );
};
export default CompanionsList;
