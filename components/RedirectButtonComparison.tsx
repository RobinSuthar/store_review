"use client";

import Link from "next/link";

export default function RedirectButtonComparison() {
  return (
    <div>
      <Link href="/admin/comparison">
        <button className="px-4 py-2 rounded"> Comprasion</button>
      </Link>
    </div>
  );
}
