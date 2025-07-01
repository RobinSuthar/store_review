"use client";

import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  id: string;
};

export default function RedirectButtonComments({ id }: Props) {
  return (
    <div>
      <Link href={`/admin/analytics/comments/${id}`}>
        <button className="px-4 py-2 rounded">Go to Comments</button>
      </Link>
    </div>
  );
}
