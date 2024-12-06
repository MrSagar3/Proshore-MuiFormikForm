import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'
import Registrationpage from './pages/Registrationpage'
import Loginpage from './pages/Loginpage';
import Dashboard from './pages/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
 
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Registrationpage/>}/>
        <Route path='/login' element={<Loginpage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>
    <ToastContainer />
    </>
  )
}

export default App