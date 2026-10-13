import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"

const App = () => {
  return (
    <Router>
      <div>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contato" element={<Contato/>} />
            <Route path="/sobre" element={<Sobre/>} />  
          </Routes>
      </div>
    </Router>
  )
}

export default App
