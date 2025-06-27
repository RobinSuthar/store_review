import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import { URL } from "url";
export async function GET(
  req: NextRequest,
  { params }: { params: { storeId: string } }
) {
  const storeId = parseInt(params.storeId, 10);
  console.log("requested store:", storeId);

  const response = await db.review.findMany({
    where: {
      StoreId: storeId,
    },
  });

  return NextResponse.json({
    reviews: response,
  });
}
