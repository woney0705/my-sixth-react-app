import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Order from './pages/Order.jsx'
import { AuthProvider } from './store/authStore.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx';

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen bg-base-100">
        <Router>
          <Header /> 
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/order' element={
              <ProtectedRoute>
                <Order />
              </ProtectedRoute>
              } />
          </Routes>
          <Footer />
        </Router>  
      </div>
    </AuthProvider>
  );
}

export default App
