import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import { URL } from "url";
export async function GET(
  req: NextRequest,
  props: { params: Promise<{ storeId: string }> }
) {
  const params = await props.params;
  console.log("requested store:", params);

  const response = await db.review.findMany({
    where: {
      StoreId: Number(params.storeId),
    },
  });
  console.log("Response : ", response);

  return NextResponse.json({
    reviews: response,
  });
}
