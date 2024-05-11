import React from 'react'
import Sidebar from './containers/sidebar'
import EstiloGlobal, { Container } from './styles'
import Sobre from './containers/sobre'
import Projetos from './containers/projetos'



function App() {
  return (
    <>
    <EstiloGlobal> </EstiloGlobal>
    <Container>
      <Sidebar></Sidebar>
    <main>
      <Sobre></Sobre>
      <Projetos></Projetos>
    </main>
    </Container>
    
    </>
  )
}
export default App  


