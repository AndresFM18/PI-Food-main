import './App.css';
import {Route, Routes} from 'react-router-dom';
import Landing from './components/Landing/Landing.jsx';
import Principal from './components/Principal/Principal.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/landing' element={<Landing/>} />
      <Route path='/home' element={<Principal/>}/>
      </Routes>
    </div>
  );
}

export default App;
