import './page.css'

import Card from "../components/Card"

export default function PagePlay() {
  return (
    <div className="Play">
      <Card question='Wenn du eine Straftat begehen müsstest, diese dann aber nie wieder begangen werden kann von irgendwem, welcher wäre es?'/>
      <div className="controls">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  )
}