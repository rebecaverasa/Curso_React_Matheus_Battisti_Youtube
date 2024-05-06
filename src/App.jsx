import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'

function App() {
  const nome = "Davi"

  return (
    <div>
      <HelloWorld />
      <SayMyName nome="Rebeca" />
      <SayMyName nome="Jon" />
      <SayMyName nome={nome}/>
    </div>
  )
}

export default App
