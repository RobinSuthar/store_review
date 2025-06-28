"use client";

import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  id: string;
};

export default function RedirectButton({ id }: Props) {
  return (
    <div>
      <Link href={`/admin/analytics/${id}`}>
        <button className="px-4 py-2 rounded">Go to Analytics</button>
      </Link>
    </div>
  );
}
