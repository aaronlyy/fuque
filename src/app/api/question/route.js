// this route is only for adding new questions to the database
// when auth is implemented, it is going to be secured

import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from '@/prisma';

export async function POST(req) {
  // check body
  const json = await req.json();
  if (!json.question | !json.pid) {
    const data = {message: "Request JSON is missing some stuff"};
    return NextResponse.json(data, {status: 400});
  }

  // save question
  try {
    await prisma.question.create({
      data: {
        question: json.question,
        pid: json.pid,
      }
    })
  }
  catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      const data = {message: "Primsa Error"};
      return NextResponse.json(data, {status: 400});
    }
    throw e;
  }

  const data = {message: "Question added!"};
  return NextResponse.json(data, {status: 201});
}