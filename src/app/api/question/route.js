// this route is only for adding new questions to the database
// when auth is implemented, it is going to be secured

import { NextResponse } from "next/server";

export async function POST(req) {
  // get request body
  const json = await req.json();
  // check if body is valid (question, language, pid, cid)
  if (!json.question | !json.language | !json.pid | !json.cid) {
    const data = {message: "Request JSON is missing some stuff"};
    return NextResponse.json(data, {status: 400});
  }
  // check if question already exists in pack
  if (false) {
    const data = {message: "Question already exists in this pack"};
    return NextResponse.json({data}, {status: 400});
  }
  // if body is valid, add needed information to json (created_at, modified_at, uid)
  const date = new Date();
  const question = {
    question: json.question,
    qid: 0,
    pid: 1,
    cid: 1,
    uid: 0,
    created_at: date,
    modified_at: date
  };

  // save question to database

  // send return
  const data = {
    message: "Question added!",
    question
  }
  return NextResponse.json(data, {status: 201});
}