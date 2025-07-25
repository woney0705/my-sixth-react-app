import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Order from './pages/Order.jsx'

function App() {
  return (
      <div className="flex flex-col min-h-screen bg-base-100">
        <Router>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Order />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/order' element={<Order />} />
          </Routes>
          <Footer ></Footer>
        </Router>  
      </div>
  );
}

export default App
