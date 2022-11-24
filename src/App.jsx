import Header from "./componentes/Header"
import Me from "./componentes/Me"
import Cards from "./componentes/Cards"
import Footer from "./componentes/Footer"
import './App.css'

function App() {
  

  return (
    <div className="App" >
      <Header tituloPrincipal ='Meus conteúdos favoritos'/>
      <Me />
      <Cards />
      <Footer footer ="Feito com ♡ por Ana Sulli. Para a aula de react da prof. Simara."/>
    </div>
  )
}

export default App
