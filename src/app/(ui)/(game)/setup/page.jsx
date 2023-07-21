import { prisma } from "@/prisma"
import Link from "next/link"

export const revalidate = 60;

async function getPacks() {
  const packs = await prisma.pack.findMany();
  return packs.map((pack) => <li key={pack.id}>{pack.name}</li>);
}

export default async function PageSetup() {

  const packs = await getPacks();

  return (
    <div className="PageSetup">
      <p>Choose packs</p>
      <ul>{packs}</ul>
      <Link href='/play'>Play</Link>
    </div>
  )
}
