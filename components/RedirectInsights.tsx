"use client";

import Link from "next/link";

export default function RedirectButtonInsights() {
  return (
    <div>
      <Link href="/admin/insights">
        <button className="px-4 py-2 rounded"> Insights</button>
      </Link>
    </div>
  );
}
