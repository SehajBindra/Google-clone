import { useRouter } from "next/router";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import React from "react";

function PagginationsButtons() {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 0;
  return (
    <div className="flex justify-between max-w-lg">
      {startIndex >= 10 && (
        <Link
          href={`/search?term=${router.query.term}&start=${startIndex - 10}`}
        >
          <div className="flex flex-col items-center cursor-pointer hover:underline">
            <ChevronLeftIcon className="h-5  text-blue-800 cursor-pointer" />
            <p>Previous</p>
          </div>
        </Link>
      )}

      <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div className="flex flex-col items-center cursor-pointer hover:underline">
          <ChevronRightIcon className="h-5  cursor-pointer" />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
}

export default PagginationsButtons;
