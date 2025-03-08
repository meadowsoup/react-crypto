import Main from './pages/Main'
import Price from './pages/Price'
import Currencies from './pages/Currencies'
import { Routes, Route} from 'react-router-dom'

import './App.css'
import Nav from './components/Nav'
// import Footer from './components/Footer'

function App() {  

  return (
    <div className='App'>
      <h1>Router</h1>

      <Nav />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/currencies" element={<Currencies />} />
        <Route path="/price/:symbol" element={<Price />} />
      </Routes>

      {/* <Footer /> */}
    </div>
  )
}

export default App
