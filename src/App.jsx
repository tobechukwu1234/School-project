
import Home from './Home.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import Dashboard from './Dashboard.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path = "/login" element = {<Login/>}></Route>
        <Route path = "/register" element = {<Register/>}></Route>
        <Route path = "/dashboard" element = {<Dashboard/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
