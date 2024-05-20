import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'

function App() {
  const nome = "Davi"

  return (
    <div>
      <SayMyName nome="Rebeca" />
      <SayMyName nome="Jon" />
      <SayMyName nome={nome} />
      <Pessoa nome="Rebeca" idade="28" profissao="programadorfrontendi" foto="https://via.placeholder.com/150" />
    </div>
  )
}

export default App
