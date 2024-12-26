import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Recipes from './components/recipes/Recipes';
import AppFooterBar from './components/footer-bar/AppFooterBar';

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
      <AppFooterBar />
      <Routes>
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
