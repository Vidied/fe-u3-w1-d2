
import './App.css'

import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'

function App() {


  return (<div>
<header>
  <MyNav></MyNav>
</header>
<main><Welcome></Welcome></main>
<footer><MyFooter>
  </MyFooter></footer></div>
  )
}

export default App
