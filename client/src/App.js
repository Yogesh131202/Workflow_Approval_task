
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EDashboard from './pages/EDashboard';
import MDashboard from './pages/MDashboard';
import './index.css';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/edashboard" element={<EDashboard />} />
        <Route path="/mdashboard" element={<MDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
