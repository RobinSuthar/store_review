import database from "@/database/db";
import { NextRequest } from "next/server";

type RequestType = {
  username: string;
  password: string;
};
async function handler(req: NextRequest) {
  const Request: RequestType = await req.json();
  const user = await database.user.findUnique({
    where: {
      Username: Request.username,
      Password: Request.password,
    },
  });

  if (!user?.Username) {
    return null;
  }
  return user;
}

export { handler as POST };
