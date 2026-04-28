import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import MyNav from './components/MyNav'

function App() {
  const [count, setCount] = useState(0)

  return (
<header>
  <MyNav></MyNav>
</header>
  )
}

export default App
