

import Login from './Auth/Login';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import Register from './Auth/Register';
import ResetPassword from './Auth/ResetPassword'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/resetpassword' element={<ResetPassword/>}/>

        

      </Routes>
    </BrowserRouter>
  
    </div>
  );
}

export default App;
