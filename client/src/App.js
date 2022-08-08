import Settings from './pages/settings/Settings';
import TopBar from './components/topbar/TopBar';
import Home  from './pages/home/Home';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { useContext } from 'react';
import { Context } from './context/Context';

import { Routes, Route } from 'react-router-dom';

const App = () => {
  const { user } = useContext(Context)
  
  return <>
          <TopBar /> 
          <Routes> 
           <Route exalt path='/' element={ <Home /> } />
           <Route path='/register' element={user ? <Home /> : <Register />  } />
           <Route path='/login' element={user ? <Home /> :<Login />} />
           <Route path='/write' element={ user ? <Write /> : <Register /> } />
           <Route path='/settings' element={ user ? <Settings /> : <Register /> } />
           <Route path='/post/:postId' element={ <Single /> } />
          </Routes>
        </>
}

export default App;