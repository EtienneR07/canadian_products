import { useEffect, useState } from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { authService } from './api/auth.service';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import Preferences from './components/preferences/Preferences';

function App() {
  const [token, setToken] = useState<string | undefined>(undefined);

  useEffect(() => {
    const accessToken = authService.getAccessToken();
    if (accessToken) {
      setToken(accessToken);
    }
  }, []);
  
  if(!token) {
    return <Login setToken={setToken} />
  }
  
  return (
    <>
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/preferences" element={<Preferences />}/>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
