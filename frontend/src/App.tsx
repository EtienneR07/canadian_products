import './App.css';
import { CssBaseline } from '@mui/material';
import ButtonAppBar from './components/app-bar/AppBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Recipes from './components/recipes/Recipes';

function App() {
  //   const [token, setToken] = useState<string | undefined>(undefined);
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //   const accessToken = authService.getAccessToken();
  //   if (accessToken) {
  //     setToken(accessToken);
  //   }
  //   setLoading(false);
  // }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  //   if(!token) {
  //     return <Login setToken={setToken} />
  //   }

  return (
    <BrowserRouter>
      <CssBaseline />
      <ButtonAppBar />
      <Routes>
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
