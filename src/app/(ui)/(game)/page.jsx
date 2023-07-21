import './page.css'
import Link from 'next/link'

export default function PageHome() {
  return (
    <div className="Home">
      <h1>WHAT THE FUQUE?!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo dolorum, vero harum mollitia fuga quod maxime nam repudiandae dolor et dignissimos quia adipisci iure expedita? Provident nisi similique unde!</p>
      <Link href='/setup'>Ok, let's go!</Link>
    </div>
  )
}
