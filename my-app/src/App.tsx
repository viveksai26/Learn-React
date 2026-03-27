import { useState } from 'react'
import './App.css'
import {Profile, Gallery} from './profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <article>
        <h1>My First Component</h1>
          <Gallery/>
      </article>
    </>
  )
}

export default App
