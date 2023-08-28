import './App.css';
import { Link } from 'react-router-dom';
import Login from './login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './signup';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>

      </Router>


    </div>
  );
}

export default App;
