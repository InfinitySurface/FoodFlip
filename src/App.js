import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import RecipeDetails from './RecipeDetails';
import NotFound from './NotFound';
import Login from './Login'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="/create" element={<Create />} ></Route>
            <Route path='/recipes/:id' element={<RecipeDetails />}></Route>
            <Route path="/*" element={<NotFound />} ></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;