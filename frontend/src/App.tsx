import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Recipes from './components/recipes/Recipes';
import AppFooterBar from './components/bottom-nav/BottomNav';
import Home from './components/home/Home';
import Parameters from './components/parameters/Parameters';
import RecipeEditor from './components/recipe-editor/RecipeEditor';

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/parameters" element={<Parameters />} />
        <Route path="/recipes/edit" element={<RecipeEditor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
