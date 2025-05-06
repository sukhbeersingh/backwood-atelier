import { ReactLenis } from 'lenis/react'
import LandingPage from './components/Landing'
import Menu from './components/Menu'

function App() {

  return (
    <ReactLenis root> 
      <LandingPage />
      <Menu />
    </ReactLenis>
  )
}

export default App
