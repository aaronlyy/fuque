import '../globals.css'
import './layout.css'
import Link from 'next/link'

export default function RootLayoutHome({ children }) {
  return (
    <html lang="en">
      <body>

        <div className="inner">

        <header>
          <h1>FUQUE v0.0.1</h1>
          <ul>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/setup'>Game setup</Link></li>
            <li><Link href='#'>New pack</Link></li>
            <li><Link href='#'>Account</Link></li>
          </ul>
        </header>

        <main>
          {children}
        </main>

        <footer>
          <p>Made with 🖤 by <Link href='https://github.com/aaronlyy'>aaronlyy</Link></p>
        </footer>

        </div>

      </body>
    </html>
  )
}