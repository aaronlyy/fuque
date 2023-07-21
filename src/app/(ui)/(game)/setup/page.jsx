import { prisma } from "@/prisma"
import Link from "next/link"

export default async function PageSetup() {

  function onClickPack(pid) {
    // check if pack is currently active
    // make active if not
    
  }

  // load all available packs with ids
  const packs = await prisma.pack.findMany();
  const packItems = packs.map((pack) => <li key={pack.id}>{pack.name}</li>);
  // display all packs
  // save clicked packs in localstorage
  // when played load all packs?



  return (
    <div className="PageSetup">
      <p>Choose packs</p>
      <ul>{packItems}</ul>
      <Link href='/play'>Play</Link>
    </div>
  )
}
