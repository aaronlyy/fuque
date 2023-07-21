import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation"

export default async function Home() {

  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/api/auth/signin');
  }

  return (
    <h1>This is a protected page</h1>
  )
}