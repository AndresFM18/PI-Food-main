import './App.css';
import {Route, Routes} from 'react-router-dom';
import Landing from './components/Landing/Landing.jsx';
import Principal from './components/Principal/Principal.jsx';
import CreateRecipe from './components/CreateRecipe/CreateRecipe';
import RecipeDetail from './components/RecipeDetail/RecipeDetail';
import NavBar from './components/NavBar/NavBar'


function App() {
  return (
    <div className="App">
      <div>
          <NavBar></NavBar>
     </div>
      <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/home/:id' element={<Principal/>}/>
      <Route path='/create' element={<CreateRecipe/>}></Route>
      <Route path='/details/:id' element={<RecipeDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
