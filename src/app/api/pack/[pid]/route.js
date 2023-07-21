import { NextResponse } from "next/server";
import { prisma } from "@/prisma";

export async function GET(req, { params }) {

  // search pack with objectid
  try {
    const pack = await prisma.pack.findUnique({
      where: {
        id: params.pid
      }
    })
    const data = {message: "Pack found!", pack};
    return NextResponse.json(data, {status: 200});
  }
  catch (e) {
    const data = {message: "Prisma error"};
    return NextResponse.json(data, {status: 400});
  }
}