import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from "@/prisma";

export async function POST(req) {
  // check body
  const json = await req.json();
  if (!json.name | !json.description) {
    const data = {message: "JSON is missing some information"};
    return NextResponse.json(data, {status: 400});
  }

  // save pack
  try {
    await prisma.pack.create({
      data: {
        name: json.name,
        description: json.description,
        uid: json.uid
      }
    });
  }
  catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      const data = {message: "Prisma error"};
      return NextResponse.json(data, {status: 400});
    }
    throw e;
  }

  const data = {message: "Pack added!"};
  return NextResponse.json(data, {status: 201});
}