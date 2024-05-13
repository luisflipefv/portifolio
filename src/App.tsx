import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Sidebar from './containers/sidebar'
import EstiloGlobal, { Container } from './styles'
import Sobre from './containers/sobre'
import Projetos from './containers/projetos'
import temaLight from './themes/Light'
import temaDark from './themes/Dark'



function App() {
  const [estaUsandoTemaDark, setTemaDark] = useState(false)
  function trocaTema () {
    setTemaDark(!estaUsandoTemaDark)
  }
  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
    <EstiloGlobal> </EstiloGlobal>
    <Container>
      <Sidebar trocaTema={trocaTema}></Sidebar>
    <main>
      <Sobre></Sobre>
      <Projetos></Projetos>
    </main>
    </Container>
    
    </ThemeProvider>
  )
}
export default App  


