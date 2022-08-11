import './App.css';
import {Route, Routes} from 'react-router-dom';
import Landing from './components/Landing/Landing.jsx';
import Principal from './components/Principal/Principal.jsx';
import CreateRecipe from './components/CreateRecipe/CreateRecipe';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/home' element={<Principal/>}/>
      <Route path='/create' element={<CreateRecipe/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
